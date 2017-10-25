let Contacts = [
  {
    "id": 1,
    "name": "Bryan",
    "last_name": "Villafane",
    "phone": 3015423912
  },
  {
    "id": 2,
    "name": "Maria",
    "last_name": "Castro",
    "phone": 3015423943
  }
]

export const SET_CONTACTS = 'SET_CONTACTS';

const setContacts = contacts => {
  return {
    type: SET_CONTACTS,
    contacts,
  };
};

export function getContacts() {
  return dispatch => {
    dispatch(setContacts(Contacts));
  }
}

export function filterContacts(_filter) {
  return dispatch => {
    let filteredContacts = Object.assign([], Contacts);
    if (_filter){
      filteredContacts = filteredContacts.filter(
        (contact) =>
          contact.name.match(RegExp(_filter, 'i')) ||
          contact.last_name.match(RegExp(_filter, 'i'))
      );
    }
    dispatch(setContacts(filteredContacts));
  }
}