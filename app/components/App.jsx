import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import reducer from '../reducers';
import { getContacts } from '../actions/contacts';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AllContacts from './AllContacts';
import Contact from './Contact';
import NewContacts from './NewContacts';

const store = createStore(reducer, compose(
  applyMiddleware(thunk)
));
store.dispatch(getContacts());


export default class App extends React.Component {
  render() {
    return (
    	<Provider store={store}>
	      <BrowserRouter>
	      	<div>
	      		<Switch>
		          <Route path='/contacts/new' component={NewContacts} />
		          <Route path='/contacts/:contact_id' component={Contact}/>
		          <Route path='/' component={AllContacts}/>
		        </Switch>
	      	</div>
	      </BrowserRouter>
	    </Provider>
    );
  }
}
