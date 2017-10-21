import React from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class AllContacts extends React.Component {
  render(){
    return (
      <div>
        <ul>{this.props.contacts.map(contact =>
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>
              {contact.name} - {contact.last_name}
            </Link>
      	</li>
        )}</ul>
        <button onClick={this.addContact}>+</button>
      </div>
    );
  }
}
