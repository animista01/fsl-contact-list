import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AllContacts from './AllContacts';
import Contact from './Contact';

export default class Lists extends React.Component {
  render(){
    return(
      <Switch>
        <Route exact path='/contacts' component={AllContacts}/>
        <Route path='/contacts/:contact_id' component={Contact}/>
      </Switch>
    )
  }
}
