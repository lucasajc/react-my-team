import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/tabs.css';
import { Route } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; 

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

              </aside>
              <aside
                className="tabNav">
              </aside>
              <header>
                <h1 className="title-like">Setup</h1>
              </header>
              <nav>
                <Tabs>
                  <TabList>
                    <Tab>MINHA EQUIPE</Tab>
                    <Tab>TAB ITEM</Tab>
                    <Tab>TAB ITEM</Tab>
                    <Tab>TAB ITEM</Tab>
                    <Tab>TAB ITEM</Tab>
                  </TabList>

                  <TabPanel>
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
