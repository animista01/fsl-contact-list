import React from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class AllContacts extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }
   
  render(){
    let filteredContacts = this.props.contacts.filter(
      (contact) => {
        return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || contact.last_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 
      }
    )
    return (
      <div>
        <input type="text"
        placeholder="Search"
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}
        />
        <ul>
          {filteredContacts.map(contact =>
            <li key={contact.id}>
              <Link to={`/contacts/${contact.id}`}>
                {contact.name} - {contact.last_name}
              </Link>
      	   </li>
          )}
        </ul>
        <Link to='/contacts/new'>New</Link>
      </div>
    );
  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0, 20)})
  }
}
