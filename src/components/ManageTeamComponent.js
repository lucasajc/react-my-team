import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../style/App.css";
import MemberView from "./MemberView";
import PropTypes from "prop-types";

/**
 * @description renders the ManageTeamComponent component
 */
class ManageTeamComponent extends Component {

  static propTypes = {
    members: PropTypes.array.isRequired
  };

  /**
   * @description defines the state and binds with the methods
   */
  constructor() {
    super();
    this.state = {
      query: "",
      btnFreelasStyle: "button-user-off button-user button-user-left",
      btnUsersStyle: "button-user-on button-user button-user-right"
    };
    this.openUserForm = this.openUserForm.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  /**
   * @description send query to filter members
   */

  handleSearch = event => {
    this.props.onSearch(this.state.query);
    event.preventDefault();
  }

  /**
   * @description writes the query to filter members
   * @param {Object} event - The onchange event
   */
  handleSearchChange = event => {
    this.setState({ query: event.target.value });
  };

  /**
   * @description change the users view button
   * @param {Object} event - The onclick event
   */
  toggleUserButton = event => {
    if (
      event.target.value === "freelas" &&
      this.state.btnFreelasStyle ===
        "button-user-off button-user button-user-left"
    ) {
      this.setState({
        btnFreelasStyle: "button-user-on button-user button-user-left",
        btnUsersStyle: "button-user-off  button-user button-user-right"
      });
    } else {
      this.setState({
        btnFreelasStyle: "button-user-off button-user button-user-left",
        btnUsersStyle: "button-user-on button-user button-user-right"
      });
    }
    event.preventDefault();
  };

  /**
   * @description call method that changes perspective to the registration form
   */
  openUserForm() {
    if (this.props.showUserForm) this.props.showUserForm();
  }

  /**
   * @description renders the component
   * @returns jsx containing the component/routes
   */
  render() {
    const { members } = this.props;
    return (
      <nav className="my-team-wrapper">
        <header className="my-team-options">
          <nav className="search-names-input-wrapper">
            <form onSubmit={this.handleSearch}>
              <FontAwesomeIcon className="search-icon" icon={faSearch} />

              <input
                type="text"
                placeholder="Digite uma palavra-chave e tecle enter para buscar"
                className="search-names-input"
                onChange={this.handleSearchChange}
              />
            </form>
          </nav>

          <nav className="manage-users-wrapper">
            Visualizar:
            <button
              type="button"
              className={`${this.state.btnFreelasStyle}`}
              onClick={this.toggleUserButton}
              value="freelas"
            >
              FREELAS
            </button>
            <button
              type="button"
              className={`${this.state.btnUsersStyle}`}
              onClick={this.toggleUserButton}
              value="users"
            >
              USUÁRIOS
            </button>
            <button
              type="button"
              className="button-user-add"
              onClick={this.openUserForm}
            >
              NOVO MEMBRO
            </button>
          </nav>
        </header>
        <nav className="list-users-wrapper">
          {members !== undefined
            ? members.map(member => (
                <MemberView member={member} editUser={this.props.editUser} key={member.id}/>
              ))
            : ""}
        </nav>
      </nav>
    );
  }
}

export default ManageTeamComponent;
