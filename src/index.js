import './styles.css';
import createTodo from './modules/todos';
import createProject from './modules/projects';
import dom from './modules/dom';

//Make first todo and project
const todo = createTodo('Clean', 'Room', '12/1/2025');
const project = createProject();

console.log("project", project);
project.addTodo(todo);

console.log(project.getProjects());
