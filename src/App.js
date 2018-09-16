import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/tabs.css';
import { Route } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <main className="rootBox">
        <Route
          exact
          path="/"
          render={() => (
            <div role="group">
              <aside
                className="menuNav">
                <nav className="active-menu-item-container">
                  <FontAwesomeIcon
                            className="active-menu-icon"
                            icon={faCircle}
                          />
                </nav>
                <nav className="menu-item-container">
                  <FontAwesomeIcon
                            className="menu-icon"
                            icon={faCircle}
                          />
                  <h3>TASKS</h3>
                </nav>
                <nav className="menu-item-container">
                  <FontAwesomeIcon
                            className="menu-icon"
                            icon={faCircle}
                          />
                  <h3>CONTENTS</h3>
                </nav>
                <nav className="menu-item-container">
                  <FontAwesomeIcon
                            className="menu-icon"
                            icon={faCircle}
                          />
                  <h3>SETUP</h3>
                </nav>
              </aside>
              <aside
                className="tabNav">
              </aside>
              <header>
                <h1 className="title-like">Setup</h1>
                <nav className="menu-drop-down">
                  <h2 className="drop-down-like">Olá, </h2>
                  <FontAwesomeIcon
                          className="drop-down-icon"
                          icon={faSortDown}
                        />
                </nav>
                
              </header>
              <nav className="panelContainer">
              
                    <div className="tabPanelContainer"></div>
                <Tabs>
                  <TabList>

                    <Tab>MINHA EQUIPE</Tab>
                    <Tab>TAB ITEM</Tab>
                    <Tab>TAB ITEM</Tab>
                    <Tab>TAB ITEM</Tab>
                    <Tab>TAB ITEM</Tab>
                  </TabList>

                  <TabPanel>

                    <nav className="list-names-wrapper">
                      <nav className="search-names-input-wrapper">
                        <FontAwesomeIcon
                          className="search-icon"
                          icon={faSearch}
                        />
                        <input
                          type="text"
                          placeholder="Digite uma palavra-chave e tecle enter para buscar"
                          className="search-names-input"
                        />
                      </nav>

                      <nav className="manage-users-wrapper">
                        <p>Visualizar:
                          <button type="button" className="button-user-off">FREELAS</button>
                          <button type="button" className="button-user-on">USUÁRIOS</button>
                          <button type="button" className="button-user-add">NOVO MEMBRO</button>
                        </p>
                      </nav>

                    </nav>


                     
                  </TabPanel>
                  <TabPanel>
                  </TabPanel>
                  <TabPanel>
                  </TabPanel>
                  <TabPanel>
                  </TabPanel>
                  <TabPanel>
                  </TabPanel>
                </Tabs>
              </nav>
            </div>
          )}
        />
      </main>
    );
  }
}

export default App;
