const initialState = [
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

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return action.contacts;
    default:
      return state;
  }
};
