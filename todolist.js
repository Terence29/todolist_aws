const API_ENDPOINT = 'https://rthv82xewe.execute-api.eu-north-1.amazonaws.com/test/tasks';

document.getElementById('taskForm').addEventListener('submit', createTask);
window.addEventListener('load', fetchTasks); // Ajouter cet écouteur pour charger les tâches au démarrage

function fetchTasks() {
    fetch(API_ENDPOINT)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const tasksList = document.getElementById('tasksList');
            tasksList.innerHTML = ''; // Effacer la liste actuelle
            debugger;
            data.tasks.forEach(task => { // S'assurer que 'tasks' est la clé correcte retournée par la fonction Lambda
                const li = document.createElement('li');
                li.textContent = task.Description; 
                tasksList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
        });
}

function createTask(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const task = { Description: taskInput.value }; 

    fetch(API_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(() => {
        taskInput.value = ''; // Effacer l'entrée
        fetchTasks(); // Rafraîchir la liste
    })
    .catch(error => {
        console.error('Error creating task:', error);
    });
}
