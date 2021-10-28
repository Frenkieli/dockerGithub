let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text,
  };
};

export const setVisibilityFilter = (filter) => {
  return function (dispatch) {
    dispatch({
      type: "SET_VISIBILITY_FILTER",
      filter,
    });
    return setTimeout(() => {
      dispatch({
        type: "SET_VISIBILITY_FILTER",
        filter: "SHOW_ALL",
      });
    }, 1000);
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id,
  };
};
