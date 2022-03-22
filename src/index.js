import './style.css';

//Project Class
function createProject(title) {
    return {
        title,
        tasks: [],
        addTask(task) {
            this.tasks.push(task);
        },
        deleteTask(el) {
            el.parentElement.parentElement.remove();
        },
        deleteTaskFromList(taskTitle) {
            allProjects.forEach((project) => {
                if (activeProject.title === project.title) {
                    project.tasks.forEach((task, index) => {
                        if (task.title === taskTitle) {
                            project.tasks.splice(index, 1);
                        }
                    })
                }
            })
        }
    }
}

//Task Class
function createTask(title, description, dueDate, priority, project) {
    return {
        title,
        description,
        dueDate,
        priority,
        completed: false,
        project
    }
}

//todolist Class
function todolist() {

    return {
        tasks: [],
        addProjectToList(project) {
            const projectsList = document.getElementById('projectsList');

            const projectBtn = document.createElement('li');
            projectBtn.classList.add('project');

            const projectBtnDiv = document.createElement('div');

            const projectBtnIcon = document.createElement('span');
            projectBtnIcon.innerText = 'list';
            projectBtnIcon.classList.add('material-icons-outlined');
            projectBtnDiv.appendChild(projectBtnIcon);

            const projectTitle = document.createElement('span');
            projectTitle.innerText = project.title;
            projectBtnDiv.appendChild(projectTitle);

            const projectDeleteBtn = document.createElement('span');
            projectDeleteBtn.innerText = 'close';
            projectDeleteBtn.classList.add('material-icons-outlined');
            projectDeleteBtn.classList.add('delete');

            projectBtn.appendChild(projectBtnDiv);
            projectBtn.appendChild(projectDeleteBtn);

            projectsList.appendChild(projectBtn);


            projectBtn.addEventListener('click', openProject);
        },

        deleteProject(el) {
            el.parentElement.remove();
        },

        deleteProjectFromList(title) {

            allProjects.forEach((project, index) => {
                if (project.title === title) {
                    allProjects.splice(index, 1);
                }
            })
        }

    }
}

const myTodolist = todolist();
let activeProject;
//Store Class

let allProjects = [];
//Event: Display Project;

// document.addEventListener('DOMContentLoaded', myTodolist.displayProjects);

//Event: Add Project
document.getElementById('newProjectModal').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('newProjectTitle').value;

    const project = createProject(title);

    myTodolist.addProjectToList(project);

    allProjects.push(project);

    closeProjectModal();
})

//Event: Opening a Project

function openProject(e) {

    activeProject = allProjects.filter(checkProjectTitle)[0];

    function checkProjectTitle(project) {
        return project.title === e.currentTarget.firstElementChild.lastElementChild.innerText;
    }

    const projectTitle = document.getElementById('projectTitle');
    projectTitle.innerText = activeProject.title;
    const openNewTaskModalBtn = document.getElementById('openNewTaskModalBtn');
    openNewTaskModalBtn.style.display = 'block';

    showActiveProject(e);


    renderTasks(activeProject);

    console.log(activeProject.tasks)
}

// Show Active Project 
function showActiveProject(e) {
    let projects = Array.from(document.querySelectorAll('.project'));
    projects.forEach((project) => {
        project.classList.remove('activeProject');
    })
    e.currentTarget.classList.add('activeProject')
}


//Event: Remove Project

document.getElementById('projectsList').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        myTodolist.deleteProject(e.target);

        myTodolist.deleteProjectFromList(e.target.previousElementSibling.lastElementChild.textContent);

        const projectTitle = document.getElementById('projectTitle');
        projectTitle.innerText = '';
        clearElements(document.getElementById('tasksList'))
    }
})


//Event: Add Task
const openNewTaskModalBtn = document.getElementById('openNewTaskModalBtn');

openNewTaskModalBtn.addEventListener('click', openTaskModal);

document.getElementById('newTaskModal').addEventListener('submit', (e) => {
    e.preventDefault();

    const tasksList = document.getElementById('tasksList');
    clearElements(tasksList);

    const newTaskTitle = document.getElementById('newTaskTitle');
    const newTaskDescription = document.getElementById('newTaskDescription');
    const newTaskDate = document.getElementById('newTaskDate');
    const newTaskPriority = document.getElementById('newTaskPriority');


    const newTask = createTask(newTaskTitle.value, newTaskDescription.value, newTaskDate.value, newTaskPriority.checked, activeProject.title);

    //add new task to project
    allProjects.forEach((project) => {
        if (activeProject.title === project.title) {
            project.addTask(newTask);
            activeProject = project;
        }
    })

    renderTasks(activeProject);
})

//render Tasks
function renderTasks(project) {
    const tasksList = document.getElementById('tasksList');
    clearElements(tasksList);
    project.tasks.forEach((task) => {
        const taskEntry = document.createElement('li');
        taskEntry.classList.add('task');

        const taskLeftSide = document.createElement('div');
        taskLeftSide.classList.add('taskLeftSide');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('taskCompleteToggle');
        taskLeftSide.appendChild(checkbox);

        const taskText = document.createElement('div');
        taskText.classList.add('taskText');

        const taskTitle = document.createElement('input');
        taskTitle.type = 'text';
        taskTitle.value = task.title;
        taskTitle.setAttribute('readonly', true);
        taskText.appendChild(taskTitle);

        const taskDescription = document.createElement('input');
        taskDescription.type = 'text';
        taskDescription.value = task.description;
        taskDescription.setAttribute('readonly', true);
        taskText.appendChild(taskDescription);

        taskLeftSide.appendChild(taskText);
        taskEntry.appendChild(taskLeftSide);

        const taskRightSide = document.createElement('div');
        taskRightSide.classList.add('taskRightSide');

        const taskDueDate = document.createElement('input');
        taskDueDate.type = 'date';
        taskDueDate.value = task.dueDate;
        taskRightSide.appendChild(taskDueDate);

        const editBtn = document.createElement('span');
        editBtn.innerText = 'edit';
        editBtn.classList.add('material-icons-outlined');
        taskRightSide.appendChild(editBtn);

        let priorityToggler = document.createElement('input');
        priorityToggler.type = 'checkbox';
        priorityToggler.classList.add('material-icons-outlined', 'starCheckbox');
        if (task.priority) {
            priorityToggler.checked = true;
        } else {
            priorityToggler.checked = false;
        }

        taskRightSide.appendChild(priorityToggler);

        const deleteBtn = document.createElement('span');
        deleteBtn.innerText = 'delete';
        deleteBtn.classList.add('material-icons-outlined');
        deleteBtn.classList.add('delete');
        taskRightSide.appendChild(deleteBtn);

        taskEntry.appendChild(taskRightSide);

        if (task.completed) {
            taskEntry.classList.add('taskCompleted');
            checkbox.checked = true;
        }

        const tasksList = document.getElementById('tasksList');
        tasksList.appendChild(taskEntry);

        closeTaskModal();
    });
}

// Change Task Priority
document.getElementById('tasksList').addEventListener('change', (e) => {
    if (e.target.classList.contains('starCheckbox')) {
        let taskTitle = e.target.parentElement.previousElementSibling.lastElementChild.firstElementChild.value;
        let task = findTask(activeProject.title, taskTitle);
        task.priority = e.target.checked;
        console.log(task);
    }
    console.log(allProjects[0].tasks);
})

//Event Remove Task

document.getElementById('tasksList').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        activeProject.deleteTask(e.target);

        activeProject.deleteTaskFromList(e.target.parentElement.previousElementSibling.lastElementChild.firstElementChild.value);
        console.log(allProjects);
    }
})

//Mark Task as Completed
document.getElementById('tasksList').addEventListener('click', (e) => {
    if (e.target.classList.contains('taskCompleteToggle')) {
        e.target.parentElement.parentElement.classList.toggle('taskCompleted');

        let taskTitle = e.target.nextElementSibling.firstElementChild.value;
        let task = findTask(activeProject.title, taskTitle);
        task.completed = e.target.checked;

    }
})

function findTask(projectTitle, taskTitle) {
    let myTask;
    allProjects.forEach((project) => {

        if (project.title === projectTitle) {
            project.tasks.forEach((task) => {
                if (task.title === taskTitle) {
                    myTask = task;
                }
            })
        }
    })
    return myTask;
}


//Clean up tasks

function clearElements(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


// //Show all tasks
// document.getElementById('allTasks').addEventListener('click', showAllTasks);

// function showAllTasks() {
//     todolist.tasks = [];
//     document.getElementById('projectTitle').innerText = 'All Tasks';

//     allProjects.forEach((project) => {
//         todolist.tasks = todolist.tasks.concat(project.tasks);
//     })

//     renderTasks(todolist);

//     console.log(todolist.tasks)
// }

// //Show tasks due TODAY
// document.getElementById('tasksDueToday').addEventListener('click', showTasksDueToday);


//New Project Modal
const openNewProjectModalBtn = document.getElementById('openNewProjectModalBtn')

openNewProjectModalBtn.addEventListener('click', openProjectModal);

function openProjectModal() {
    newProjectModal.style.display = 'block'
}

window.addEventListener('click', outsideClick);

function outsideClick(e) {
    if (e.target === newTaskModal) {
        newTaskModal.style.display = 'none';
        resetTaskForm();
    } else if (e.target === newProjectModal) {
        newProjectModal.style.display = 'none';
    }
}


const newProjectCloseBtn = document.getElementById('newProjectCloseBtn');

newProjectCloseBtn.addEventListener('click', closeProjectModal);

function closeProjectModal() {
    newProjectModal.style.display = 'none';
    newProjectTitle.value = '';
}

//New Task Modal


const newTaskModal = document.getElementById('newTaskModal');

function openTaskModal() {
    newTaskModal.style.display = 'block';
}

const newTaskCloseBtn = document.getElementById('newTaskCloseBtn');

newTaskCloseBtn.addEventListener('click', closeTaskModal);

function closeTaskModal() {
    newTaskModal.style.display = 'none';
    resetTaskForm();
}

function resetTaskForm() {
    newTaskTitle.value = "";
    newTaskDescription.value = "";
    newTaskDate.value = "";
    newTaskPriority.checked = false;
}

