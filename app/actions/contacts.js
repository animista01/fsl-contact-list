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
export const NEW_CONTACT = 'NEW_CONTACT';
export const SET_CONTACT = 'SET_CONTACT';

const setContacts = contacts => {
  return {
    type: SET_CONTACTS,
    contacts,
  };
};

const setContact = index => {
  return {
    type: SET_CONTACT,
    index,
  };
};

const newContact = contact => {
  return {
    type: NEW_CONTACT,
    contact,
  };
};


export function getContacts() {
  return dispatch => {
    dispatch(setContacts(Contacts));
  }
}

export function getContact() {
  return dispatch => {
    dispatch(setContacts(Contact));
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