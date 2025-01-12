const createProject = () => {
  const todos = [];

  const addTodo = (todo) => {
    todos.push(todo);
  };

  const getProjects = () => {
    return todos;
  };

  return { addTodo, getProjects };
};

export default createProject;
