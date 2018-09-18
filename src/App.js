import React, { Component } from "react";
import "./style/App.css";
import "./style/tabs.css";
import { Route } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { members } from "./Members.js";
import ManageTeamComponent from "./components/ManageTeamComponent";
import ManageUserComponent from "./components/ManageUserComponent";
import MenuComponent from "./components/MenuComponent";

/**
 * @description renders the main component
 */
class App extends Component {

  /**
   * @description defines the state and binds with the methods
   */
  constructor(props) {
    super(props);
    this.state = {
      members: members,
      selectedMembers: [],
      selectedMember: null,
      mainPageStyle: ""
    };

    this.hideUserForm = this.hideUserForm.bind(this);
    this.showUserForm = this.showUserForm.bind(this);
    this.onSubmitUser = this.onSubmitUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.isEmail = this.isEmail.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  /**
   * @description invoked immediately after the component is mounted
   */
  componentDidMount() {
    this.setState({
      selectedMembers: this.state.members
    });
  }

  /**
   * @description selects the clicked user and opens the screen that performs its editing
   * @param {Integer} memberId - the required member id
   */
  editUser(memberId) {
    this.setState({
      selectedMember: this.state.selectedMembers.find(item => item.id == memberId)
    });
    this.showUserForm();
  }

  /**
   * @description create a new user or edit an existing user
   * @param {String} name - the required member name
   * @param {String} email - the required member email
   * @param {Object} memberSelected - the required member selected for editing
   */
  onSubmitUser(name, email, memberSelected) {
    if (name !== "") {
      if (this.isEmail(email)) {
        if (this.state.members.includes(memberSelected)) {
          this.setState({
            members: this.state.members.map(item => {
              if (item.id === memberSelected.id) {
                item.name = name;
                item.email = email;
              }
              return item;
            })
          });
          alert("Usuário "+name+" alterado.");
        } else {
          let member = {
            id: this.state.members.length + 1,
            name: name,
            email: email,
            photo: "default-user-image.png"
          };

          this.setState({
            selectedMembers: this.state.members.concat(member),
            members: this.state.members.concat(member),
            selectedMember: null
          });

          alert("Usuário "+name+" adicionado.");
        }
        this.hideUserForm();
      } else {
        alert("E-mail inválido. Favor inserir um e-mail no formato correto.");
      }
    } else {
      alert("Favor inserir o nome do membro da equipe.");
    }
  }

  /**
   * @description hides the user editing form
   */
  hideUserForm() {
    if (this.state.mainPageStyle === "transparent") {
      this.setState({
        mainPageStyle: "",
        selectedMember: null
      });
    }
  }

  /**
   * @description shows the user editing form
   */
  showUserForm() {
    this.setState({
      mainPageStyle: "transparent"
    });
  }

  /**
   * @description performs search and filtering of user according to a text entry
   * @param {String} query - the required text entry
   */
  onSearch(query) {
    this.setState({
      selectedMembers: this.state.members.filter(
        item => item.name.includes(query) || item.email.includes(query)
      )
    });
  }

  /**
   * @description checks whether the selected email is in the default format
   * @param {String} email - the required email text
   * @returns {Boolean} the test result
   */
  isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  /**
   * @description renders the component
   * @returns jsx containing the component/routes
   */
  render() {
    return (
      <main className="rootBox">
        <Route
          path="/(|setup)"
          render={() => (
            <div role="group">
              <div
                role="group"
                id="main-box"
                className={`${this.state.mainPageStyle}`}
                onClick={this.hideUserForm}
              >
                <MenuComponent title="Setup"/>

                <nav className="panelContainer">
                  <div className="tabPanelContainer" />
                  <Tabs>
                    <TabList>
                      <Tab>MINHA EQUIPE</Tab>
                      <Tab>TAB ITEM</Tab>
                      <Tab>TAB ITEM</Tab>
                      <Tab>TAB ITEM</Tab>
                      <Tab>TAB ITEM</Tab>
                    </TabList>

                    <TabPanel>
                      <ManageTeamComponent
                        members={this.state.selectedMembers}
                        showUserForm={this.showUserForm}
                        editUser={this.editUser}
                        onSearch={this.onSearch}
                      />
                    </TabPanel>
                    <TabPanel />
                    <TabPanel />
                    <TabPanel />
                    <TabPanel />
                  </Tabs>
                </nav>
              </div>

              <div role="group" id="side-box">
                {this.state.mainPageStyle === "transparent" ? (
                  <ManageUserComponent
                    selectedMember={this.state.selectedMember}
                    onSubmitUser={this.onSubmitUser}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
        />

        <Route
          exact
          path="/tasks"
          render={() => <MenuComponent title="Tasks" />}
        />

        <Route
          exact
          path="/contents"
          render={() => <MenuComponent title="Contents" />}
        />
      </main>
    );
  }
}

export default App;
