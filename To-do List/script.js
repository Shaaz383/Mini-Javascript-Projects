// Elements Selection
const taskInput = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.querySelector('#clear-completed');
const taskCounter = document.querySelector('#task-counter');

let tasks = [];

// Add Task
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const newTask = { id: Date.now(), text: taskText, completed: false };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }
}

// Render Tasks to the List
function renderTasks(filter = 'all') {
    taskList.innerHTML = '';
    let filteredTasks = tasks;
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (filter === 'pending') {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    filteredTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
        taskItem.dataset.id = task.id;
        taskItem.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-btn">X</button>
        `;

        taskItem.addEventListener('click', toggleTaskCompletion);
        taskItem.querySelector('.delete-btn').addEventListener('click', deleteTask);
        taskList.appendChild(taskItem);
    });
    updateTaskCounter();
}

// Toggle Task Completion
function toggleTaskCompletion(e) {
    if (e.target.classList.contains('delete-btn')) return;
    const taskId = Number(e.currentTarget.dataset.id);
    const task = tasks.find(task => task.id === taskId);
    task.completed = !task.completed;
    renderTasks(document.querySelector('.filter-btn.active').id.split('-')[1]);
}

// Delete Task
function deleteTask(e) {
    e.stopPropagation();
    const taskId = Number(e.currentTarget.parentElement.dataset.id);
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks(document.querySelector('.filter-btn.active').id.split('-')[1]);
}

// Filter Tasks
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const filter = btn.id.split('-')[1];
        renderTasks(filter);
    });
});

// Clear Completed Tasks
clearCompletedBtn.addEventListener('click', () => {
    tasks = tasks.filter(task => !task.completed);
    renderTasks(document.querySelector('.filter-btn.active').id.split('-')[1]);
});

// Update Task Counter
function updateTaskCounter() {
    const pendingTasks = tasks.filter(task => !task.completed).length;
    taskCounter.textContent = `${pendingTasks} task${pendingTasks !== 1 ? 's' : ''} left`;
}
