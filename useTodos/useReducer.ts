import { actionType, stateType } from "./intro-reducer";

export const todoReducer = (initialState: stateType[], action: actionType) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      if (!action.payload) return initialState;
      return [...initialState, action.payload];
    case "[TODO] Remove Todo":
      return initialState.filter((el) => el.id !== action.llave);
    case "[TODO] Update Todo":
      return initialState.map((todo) => {
        if (todo.id === action.llave) return { ...todo, done: !todo.done };
        return todo;
      });
    default:
      console.log("No se pudo");
      return initialState;
  }
};
