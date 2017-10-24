import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Lists from './Lists'
import AllContacts from './AllContacts';
import NewContacts from './NewContacts';
import uuid from 'uuid';
import Contact from './Contact';

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <main>
        <Switch>
          <Route path='/contacts/new' render={(props) => (
            <NewContacts contacts={this.state.contacts} onNewContact={this.handleNewContact} />
          )}/>
          <Route path='/contacts/:contact_id' render={(props) => (
            <Contact contacts={this.state.contacts} />
          )}/>
          <Route path='/' render={(props) => (
            <AllContacts contacts={this.state.contacts} />
          )}/>
        </Switch>
      </main>
    )
  }

  handleNewContact = (user) => {
    console.log("Hey new")
    console.log(user)
    this.setState({
      contacts: this.state.contacts.concat([user])
    });
  }
}
