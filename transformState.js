function transformStateWithClones(state, actions) {
  const stateHistory = []; // Массив для хранения состояния после каждой команды
  let currentState = { ...state }; // Клонируем начальное состояние

  actions.forEach(action => {
    switch (action.type) {
      case 'clear':
        currentState = {}; // Создаём пустое состояние
        break;
      case 'addProperties':
        currentState = { ...currentState, ...action.extraData }; // Добавляем новые свойства
        break;
      case 'removeProperties':
        currentState = { ...currentState }; // Клонируем текущее состояние перед удалением
        action.keysToRemove.forEach(key => {
          delete currentState[key]; // Удаляем указанные ключи
        });
        break;
      default:
        console.warn(`Unknown action type: ${action.type}`); // Предупреждение для неизвестных команд
    }
    // Добавляем копию текущего состояния в историю
    stateHistory.push({ ...currentState });
  });

  return stateHistory; // Возвращаем историю состояний
}
