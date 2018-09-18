import React, { Component } from "react";
import "../style/App.css";
import PropTypes from "prop-types";

class MemberView extends Component {
  constructor() {
    super();
    this.handleUserEdit = this.handleUserEdit.bind(this);
  }

  static propTypes = {
    member: PropTypes.object.isRequired
  };

  handleUserEdit(event) {
    if (this.props.editUser) this.props.editUser(event.target.value);
  }

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
