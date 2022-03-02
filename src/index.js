import './style.css';

const contentContainer = document.getElementById('content');


const createTodo = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
}



// NewTodoModal

const newTodoCloseBtn = document.getElementById('newTodoCloseBtn');
const newProjectCloseBtn = document.getElementById('newProjectCloseBtn');
const newTodoModal = document.getElementById('newTodoModal');
const newProjectModal = document.getElementById('newProjectModal');
const openNewTodoModalBtn = document.getElementById('openNewTodoModalBtn');
const openNewProjectModalBtn = document.getElementById('openNewProjectModalBtn')

openNewTodoModalBtn.addEventListener('click', openTodoModal);

//OPEN NEW TODO MODAL
function openTodoModal() {
    newTodoModal.style.display = 'block';
}


//CLOSE NEW TODO MODAL BY CLOSE BUTTON
newTodoCloseBtn.addEventListener('click', closeTodoModal);

function closeTodoModal() {
    newTodoModal.style.display = 'none';
}

//CLOSE NEW TODO MODAL BY OUTSIDE CLICK
window.addEventListener('click', outsideClick);

function outsideClick(e) {
    if (e.target === newTodoModal) {
        newTodoModal.style.display = 'none';
    } else if (e.target === newProjectModal) {
        newProjectModal.style.display = 'none';
    }
}


openNewProjectModalBtn.addEventListener('click', openProjectModal);

function openProjectModal() {
    newProjectModal.style.display = 'block'
}

newProjectCloseBtn.addEventListener('click', closeProjectModal);

function closeProjectModal() {
    newProjectModal.style.display = 'none';
}