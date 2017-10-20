import React from 'react';
import PropTypes from 'prop-types';

export default class Contact extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    last_name: PropTypes.string,
    phone: PropTypes.number
  }
  render(){
    return(
      <div>{this.props.name} - {this.props.last_name}</div>
    );
  }
}
