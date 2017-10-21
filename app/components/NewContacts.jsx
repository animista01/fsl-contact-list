import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

export default class NewContacts extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      contacts: props.contacts
    }
  }

	render() {
		return(
			<div>
				<form onSubmit={this.newContact.bind(this)}>
					<input type="text" placeholder="Name" ref="name" />
					<input type="text" placeholder="Last name" ref="last_name" />
					<input type="text" placeholder="Phone" ref="phone" />
					<button type="submit">Create</button>
				</form>
				<br />
        <Link to='/contacts'>Back</Link>	
			</div>
		)
	}

	newContact(event){
		event.preventDefault();
		if (this.refs.name.value && this.refs.last_name.value){
			let id = uuid.v4();
			let name = this.refs.name.value;
			let last_name = this.refs.last_name.value;
			let phone = this.refs.phone.value;
			console.log(id, name, last_name, phone)
			let user = {id: id, name: name, last_name: last_name, phone: phone}
			this.props.onNewContact(user);
		}
	}
}



