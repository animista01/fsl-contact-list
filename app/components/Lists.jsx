import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Lists extends React.Component {
	static propTypes = {
	  contact: PropTypes.object
	};
  render(){
    return(
      <li id={this.props.contact.id}>
      	<Link to={`/contacts/${this.props.contact.id}`}>
      		{this.props.contact.name} - {this.props.contact.last_name}
      	</Link>
      </li>
    )
  }
}