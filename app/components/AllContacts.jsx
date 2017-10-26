import React from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import * as actions from '../actions/contacts';
import Lists from './Lists';

export class AllContacts extends React.Component {
  handleFilterContact = (e) => {
    const _filter = e.target.value;
    this.props.actions.filterContacts(_filter);
  }

  render(){
    console.log(this.appState.contacts)
    console.log(this.props.contacts)
    return (
      <div>
        <input type="text"
        placeholder="Search"
        onChange={this.handleFilterContact}
        />
        <ul>
          {this.props.contacts.map(contact =>
            <Lists
              key={contact.id}
              contact={contact}
            />
          )}
        </ul>
        <Link to='/contacts/new'>New</Link>
      </div>
    );
  }

  // handleNewContact = (user) => {
  //   console.log("Hey new")
  //   console.log(user)
  //   this.setState({
  //     contacts: this.state.contacts.concat([user])
  //   });
  // }
}
