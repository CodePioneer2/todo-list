import './styles.css';
import createTodo from './modules/todo';
import createProject from './modules/project';

//Make first todo and project
const todo = createTodo('Clean', 'Room', '12/1/2025');
const project = createProject();

console.log(project);
project.addTodo(todo);

console.log(project.getProjects());
