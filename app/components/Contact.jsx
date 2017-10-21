import React from 'react';

export default class Contact extends React.Component {
  render(){
    return(
      <div>
        {this.props.contact.name} - {this.props.contact.last_name}
        <br />
        {this.props.contact.phone}
      </div>
    );
  }
}
