import React from 'react';

export default class Contact extends React.Component {
  state = {
  	contact: {}
  }

  componentWillMount(_nextProps) {
    const contactId = this.props.match.params.contact_id;
    console.log("--->", contactId)
    console.log("--->", this.props)
    // const contact = window.contacts.find((contact) => contact.id === contactId);
    // this.setState({contact: contact});
  }

  render(){
  	const {contact} = this.state;
    return(
      <div>
        {contact.name} - {contact.last_name}
        <br />
        {contact.phone}
      </div>
    );
  }
}
