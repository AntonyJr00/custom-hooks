import { useReducer, useEffect } from "react";
import { stateType, todoReducer } from "../08-useReducer";

const init = () => {
  const stored = localStorage.getItem("todo");
  if (stored !== null) return JSON.parse(stored);
  return [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const onHandleTodo = (data: stateType) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: data,
    };
    action.payload && dispatch(action);
  };

  const onDeletTodo = (id: number) =>
    dispatch({ type: "[TODO] Remove Todo", llave: id });

  const onToggleTodo = (id: number) =>
    dispatch({ type: "[TODO] Update Todo", llave: id });

  useEffect(() => localStorage.setItem("todo", JSON.stringify(todos)), [todos]);

  const todosPenddingCount = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    onHandleTodo,
    onDeletTodo,
    onToggleTodo,
    todosCount: todos.length,
    todosPenddingCount,
  };
};
