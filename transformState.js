// transformState.js

function transformStateWithClones(state, actions) {
  const stateHistory = [];
  let currentState = { ...state };

  actions.forEach(action => {
    switch (action.type) {
      case 'clear':
        currentState = {};
        break;
      case 'addProperties':
        currentState = { ...currentState, ...action.extraData };
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(key => {
          delete currentState[key];
        });
        break;
      default:
        break;
    }
    stateHistory.push({ ...currentState });
  });

  return stateHistory;
}

const state = {
  foo: 'bar',
  bar: 'foo',
};

const stateHistory = transformStateWithClones(state, [
  { type: 'addProperties', extraData: { name: 'Jim', hello: 'world' } },
  { type: 'removeProperties', keysToRemove: ['bar', 'hello'] },
  { type: 'addProperties', extraData: { another: 'one' } },
]);

console.log(stateHistory);
