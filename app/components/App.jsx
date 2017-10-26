import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux'
import reducer from '../reducers';
import { getContacts } from '../actions/contacts';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Main from './Main';

const store = createStore(reducer, compose(
  applyMiddleware(thunk)
));
store.dispatch(getContacts());

export default class App extends React.Component {
  render() {
  	const { appState, ...props } = this.props;

    return (
    	<Provider store={store}>
	      <Main />
	    </Provider>
    );
  }
}
