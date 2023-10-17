export interface stateType {
  id: number;
  todo: string;
  done: boolean;
}

export interface actionType {
  type: string;
  payload?: stateType;
  llave?: number;
}

const initialState: stateType[] = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

const initialAction: actionType = {
  type: "nothing",
  payload: {
    id: 2,
    todo: "Hola mundo",
    done: false,
  },
};

const patitasReducer = (
  state: stateType[] = initialState,
  action: actionType = initialAction
) => {
  if (action.type === "[TODO], add todo") {
    if (action.payload) return [...state, action.payload];
  }
  return state;
};
let todos: stateType[] = patitasReducer();

const newTodo: stateType = {
  id: 3,
  todo: "Recolectar la piedra del poder",
  done: false,
};

const addTodoAction: actionType = {
  type: "[TODO], add todo",
  payload: newTodo,
};

todos = patitasReducer(todos, addTodoAction);
