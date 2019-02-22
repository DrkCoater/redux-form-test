export default (state={}, action) => {
  console.log('here1: ', action);
  switch(action.type) {
    case 'change-profile':
      console.log('here: ', action.value);
      return {
        ...state,
        user: action.value
      };
    default:
      return state;
  }
}
