// A reducer takes in two things:
// - the Action (info about what happened)
// - copy of current state



function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      // return the updated state
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one we're updating
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // after the one we're updating
      ]
    // if no case applies, just return state
    default:
      return state;
  }
}

export default posts;