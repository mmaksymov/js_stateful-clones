function transformStateWithClones(state, actions) {
  const stateHistory = [];  // Array to hold the state after each action
  let currentState = { ...state };  // Create a clone of the initial state

  actions.forEach(action => {
    switch (action.type) {
      case 'clear':
        currentState = {};  // Create a new empty state
        break;
      case 'addProperties':
        currentState = { ...currentState, ...action.extraData };  // Add properties to the state
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(key => {
          delete currentState[key];  // Remove specified keys
        });
        break;
      default:
        console.log(`Unknown action type: ${action.type}`);
    }

    // After each action, push the current state into stateHistory
    stateHistory.push({ ...currentState });
  });

  return stateHistory;  // Return the state history
}
