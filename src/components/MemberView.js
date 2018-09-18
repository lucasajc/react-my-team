import React, { Component } from "react";
import "../style/App.css";
import PropTypes from "prop-types";

/**
 * @description renders the MemberView component
 */
class MemberView extends Component {

  static propTypes = {
    member: PropTypes.object.isRequired
  };

  /**
   * @description defines the state and binds with the methods
   */
  constructor() {
    super();
    this.handleUserEdit = this.handleUserEdit.bind(this);
  }

  /**
   * @description handles the user edit event
   * @param {Object} event - the onclick event
   */
  handleUserEdit = event => {
    console.log(event.target.value);
    if (this.props.editUser) this.props.editUser(event.target.value);
  }

  /**
   * @description renders the component
   * @returns jsx containing the component/routes
   */
  render() {
    const { member } = this.props;

    return (
      <button
        className="member-container"
        onClick={this.handleUserEdit}
        value={member.id}
      >
        <div className="button-content">
          <figure
            className="member-photo"
            style={{
              width: 64,
              height: 64,
              backgroundImage: `url(../images/${member.photo})`
            }}
          />
          <h3>{member.name}</h3>
          <p>{member.email}</p>
        </div>
      </button>
    );
  }
}

export default MemberView;
