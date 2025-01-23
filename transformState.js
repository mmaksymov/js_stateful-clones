function transformStateWithClones(state, actions) {
  const stateHistory = [];  // Массив для хранения состояний после каждого действия
  let currentState = { ...state };  // Создаём копию начального состояния

  actions.forEach(action => {
    switch (action.type) {
      case 'clear':
        currentState = {};  // Сбрасываем состояние в пустой объект
        break;
      case 'addProperties':
        currentState = { ...currentState, ...action.extraData };  // Добавляем новые свойства
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(key => {
          delete currentState[key];  // Удаляем указанные ключи
        });
        break;
      default:
        console.log(`Неизвестный тип действия: ${action.type}`);
    }

    // Добавляем копию текущего состояния в историю
    stateHistory.push({ ...currentState });
  });

  return stateHistory;  // Возвращаем историю состояний после применения всех действий
}
