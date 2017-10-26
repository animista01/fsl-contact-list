import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AllContacts from './AllContacts';
import Contact from './Contact';
import NewContacts from './NewContacts';
import * as actions from '../actions/contacts';

export class Main extends React.Component {
	render() {
		const { appState, ...props } = this.props;
		
		console.log(appState)
		const contacts = appState.contacts;
		const selectedContactIndex = appState.selectedContactIndex;
		const selectedContact = contacts[selectedContactIndex];

		console.log('appState is ', appState);
		console.log('selectedContact is ', selectedContact);
		return (
			<BrowserRouter>
      	<div>
      		<Switch>
	          <Route path='/contacts/new' component={NewContacts} />
	          <Route path='/contacts/:contact_id' component={Contact}/>
	          <Route path='/' component={AllContacts}/>
	        </Switch>
      	</div>
      </BrowserRouter>
		)
	}
}

const mapStateToProps = _state => {
  return {
    appState: _state
  };
};

const mapDispatchToProps = _dispatch => {
  return {
    actions: bindActionCreators(actions, _dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);