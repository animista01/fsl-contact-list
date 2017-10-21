import React from 'react';
import PropTypes from 'prop-types';

export default class Contact extends React.Component {
  static propTypes = {
    contact: PropTypes.object
  }
  render(){
    return(
      <div>{this.props.contact.name} - {this.props.contact.last_name}</div>
    );
  }
}
