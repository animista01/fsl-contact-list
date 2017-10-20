import React from 'react';
import Contact from './Contact';

export default ({contacts}) => (
  <ul>{contacts.map(contact =>
    <li key={contact.id}>
    	<Contact 
			name={contact.name}
			last_name={contact.last_name}
			phone={contact.phone}
		/>
	</li>
  )}</ul>
)