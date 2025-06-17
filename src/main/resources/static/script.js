async function fetchTasks() {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `${task.description} (${task.status})
            <div>
                <button onclick="updateTask('${task.id}')">Update</button>
                <button onclick="deleteTask('${task.id}')">Delete</button>
            </div>`;
        taskList.appendChild(li);
    });
}

async function addTask() {
    const description = document.getElementById('taskDescription').value;
    const status = document.getElementById('taskStatus').value;
    await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, status })
    });
    document.getElementById('taskDescription').value = '';
    fetchTasks();
}

async function updateTask(id) {
    const description = prompt('Enter new description:');
    const status = prompt('Enter new status (Pending/In Progress/Completed):');
    if (description && status) {
        await fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description, status })
        });
        fetchTasks();
    }
}

async function deleteTask(id) {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    fetchTasks();
}

window.onload = fetchTasks;