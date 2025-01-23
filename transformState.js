function transformStateWithClones(state, actions) {
  const stateHistory = [];
  let currentState = { ...state };

  actions.forEach(action => {
    switch (action.type) {
      case 'clear':
        currentState = {};  // Создаем пустое состояние
        break;
      case 'addProperties':
        currentState = { ...currentState, ...action.extraData };  // Добавляем новые свойства
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(key => {
          delete currentState[key];  // Удаляем свойства из состояния
        });
        break;
      default:
        break;
    }

    // Перемещаем эту строку за пределы switch, но внутри forEach
    stateHistory.push({ ...currentState });
  });

  return stateHistory;
}
