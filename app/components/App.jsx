import React from 'react';
import Lists from './Lists';
import uuid from 'uuid';


export default class App extends React.Component {
  state = {
		contacts: [
		  {
		    id: uuid.v4(),
		    name: 'Bryan',
		    last_name: 'Villafane',
		    phone: 3015423912
		  },
		  {
		    id: uuid.v4(),
		    name: 'Maria',
		    last_name: 'Castro',
		    phone: 3015423943
		  }
		]
	}
  render() {
  	const { contacts } = this.state;
    return (
    	<div>
    		<button onClick={this.addContact}>+</button>
      	<Lists contacts={contacts} />
    	</div>
    );
  }

  addContact = () => {
  	this.setState({
      contacts: this.state.contacts.concat([{
        id: uuid.v4(),
        name: 'New contact',
		    last_name: '',
		    phone: 3015423912
      }])
    });
  }
}
