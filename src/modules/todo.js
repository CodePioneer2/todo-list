const createTodo = (
  title,
  description,
  dateDue,
  priority = 'normal',
  finished = false
) => {
  return { title, description, dateDue, priority, finished };
};

export default createTodo;
