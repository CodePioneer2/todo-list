import createTodo from './modules/todos';
import createProject from './modules/projects';

const DOMhandler = (() => {
  const projectBtn = document.getElementById('projectBtn');
  const projectList = document.getElementById('projectList');
  const projectInput = document.getElementById('projectInput');

  projectInput.focus();

  projectBtn.addEventListener('click', () => {
    addProject();
  });

  projectInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addProject();
    }
  });

  const addProject = () => {
    if (projectInput.value === '') {
      alert('Project name is empty!');
      projectInput.focus();
      return;
    }
    if (document.querySelectorAll('li').length >= 9) {
      alert('You can only have 9 projects!');
      projectInput.focus();
      return;
    }

    const li = document.createElement('li');

    // Heading
    const h2 = document.createElement('h2');
    h2.textContent = projectInput.value;
    li.appendChild(h2);

    // Buttons
    const btnDiv = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = 'Add Task';
    btnDiv.appendChild(addTaskBtn);
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    btnDiv.appendChild(delBtn);
    li.appendChild(btnDiv);

    projectList.insertBefore(li, projectList.firstChild);

    projectInput.focus();
    projectInput.value = '';
  };
})();

export default DOMhandler;
