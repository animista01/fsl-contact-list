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
    this.state = {
  		contacts: [
  		  {
  		    id: uuid.v4(),
  		    name: 'Bryan',
  		    last_name: 'Villafane',
  		    phone: 3015423912
  		  },
  		  {
  		    id: uuid.v4(),
  		    name: 'Maria',
  		    last_name: 'Castro',
  		    phone: 3015423943
  		  }
  		]
  	}
  }

  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Lists}/>
          <Route path='/contacts/new' render={(props) => (
            <NewContacts contacts={this.state.contacts} onNewContact={this.handleNewContact} />
          )}/>
          <Route path='/contacts' render={(props) => (
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
