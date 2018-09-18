import React, { Component } from "react";
import "../style/App.css";
import PropTypes from "prop-types";

class ManageUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", email: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  static propTypes = {
    members: PropTypes.object.isRequired
  };

  componentDidMount() {
    if (
      this.props.selectedMember !== null &&
      this.props.selectedMember !== undefined
    ) {
      this.setState({
        id: this.props.selectedMember.id,
        name: this.props.selectedMember.name,
        email: this.props.selectedMember.email
      });
    }
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    if (this.props.onSubmitUser)
      this.props.onSubmitUser(
        this.state.name,
        this.state.email,
        this.props.selectedMember
      );
    event.preventDefault();
  }

  render() {
    const { selectedMember } = this.props;

    return (
      <nav className="create-user-container">
        <header className="create-user-header">
          <p className="create-user-title">
            {selectedMember !== null && selectedMember !== undefined
              ? "Editar Membro"
              : "Novo Membro"}
          </p>
        </header>
        <section className="create-user-form">
          <form onSubmit={this.handleSubmit}>
            <p>Nome</p>
            <div className="create-user-form-input-wrapper">
              <input
                type="text"
                className="create-user-form-input"
                defaultValue={
                  selectedMember !== null && selectedMember !== undefined
                    ? selectedMember.name
                    : ""
                }
                onChange={this.handleNameChange}
              />
            </div>

            <p>E-mail</p>
            <div className="create-user-form-input-wrapper">
              <input
                type="text"
                className="create-user-form-input"
                defaultValue={
                  selectedMember !== null && selectedMember !== undefined
                    ? selectedMember.email
                    : ""
                }
                onChange={this.handleEmailChange}
              />
            </div>
            <button type="submit" className="button-user-create">
              {selectedMember !== null && selectedMember !== undefined
                ? "ALTERAR MEMBRO DA EQUIPE"
                : "CRIAR MEMBRO DA EQUIPE"}
            </button>
          </form>
        </section>
      </nav>
    );
  }
}

export default ManageUserComponent;
