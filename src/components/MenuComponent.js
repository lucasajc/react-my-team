import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import "../style/App.css";
import { Link } from "react-router-dom";

/**
 * @description renders the MenuComponent component
 */
class MenuComponent extends Component {

  /**
   * @description renders the component
   * @returns jsx containing the component/routes
   */
  render() {
    const { title } = this.props;

    return (
      <div role="group">
        <aside className="menuNav">
          <Link to="/">
            <nav className="active-menu-item-container">
              <FontAwesomeIcon className="active-menu-icon" icon={faCircle} />
            </nav>
          </Link>
          <Link to="/tasks">
            <nav className="menu-item-container">
              <FontAwesomeIcon className="menu-icon" icon={faCircle} />
              <h4>TASKS</h4>
            </nav>
          </Link>
          <Link to="/contents">
            <nav className="menu-item-container">
              <FontAwesomeIcon className="menu-icon" icon={faCircle} />
              <h4>CONTENTS</h4>
            </nav>
          </Link>
          <Link to="/setup">
            <nav className="menu-item-container">
              <FontAwesomeIcon className="menu-icon" icon={faCircle} />
              <h4>SETUP</h4>
            </nav>
          </Link>
        </aside>
        <header className="page-header">
          <h1 className="title-like">{title}</h1>
          <nav className="menu-drop-down">
            <h2 className="drop-down-like">Olá, </h2>
            <FontAwesomeIcon className="drop-down-icon" icon={faSortDown} />
          </nav>
        </header>
      </div>
    );
  }
}

export default MenuComponent;
