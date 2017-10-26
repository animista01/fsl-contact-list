import { SET_CONTACTS, NEW_CONTACT, SET_CONTACT } from '../actions/contacts';

const initialState = {
	selectedContactIndex: null,
	contacts: []
};

export default (state = [], action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return action.contacts;
    case NEW_CONTACT:
    	const newContact = {
				...state,
				contacts: [
					...state.contacts,
					{
						name: 'New Contact',
  					last_name: 'Lorem ipsum',
  					phone: 3013343211,
					}
				]
			};

			newContact.selectedContactIndex = newContact.contacts.length - 1;

			return newContact;
    case SET_CONTACT:
    	return {
				...state,
				selectedContactIndex: action.index
			};
    default:
      return state;
  }
};
