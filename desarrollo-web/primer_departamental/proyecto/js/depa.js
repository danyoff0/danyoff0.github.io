
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const ul = document.querySelector('ul');
    const filter = document.getElementById('filter');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const input = document.getElementById('new-task');
        if(input.value !== '') {
            const li = document.createElement('li');
            li.textContent = input.value;
            ul.appendChild(li);
            input.value = '';
        }
    });

    ul.addEventListener('click', function(event) {
        if(event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    });

    ul.addEventListener('click', function(event) {
        if(event.target.classList.contains('delete')) {
            event.target.parentElement.remove();
        }
    });

    ul.addEventListener('dblclick', function(event) {
        if(event.target.tagName === 'LI') {
            const newText = prompt('Edit task:', event.target.textContent);
            if(newText !== null) {
                event.target.textContent = newText;
            }
        }
    });

    filter.addEventListener('change', function() {
        const value = filter.value;
        const lis = document.querySelectorAll('li');
        lis.forEach(li => {
            if(value === 'all') {
                li.style.display = 'block';
            } else if(value === 'active' && !li.classList.contains('completed')) {
                li.style.display = 'block';
            } else if(value === 'completed' && li.classList.contains('completed')) {
                li.style.display = 'block';
            } else {
                li.style.display = 'none';
            }
        });
    });

    window.addEventListener('beforeunload', function() {
        const lis = document.querySelectorAll('li');
        const tasks = [];
        
        lis.forEach(li => {
            tasks.push({
                task: li.textContent,
                completed: li.classList.contains('completed')
            });
        });
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    window.addEventListener('load', function() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.task;
            if(task.completed) {
                li.classList.add('completed');
            }
            ul.appendChild(li);
        });
    });
});


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('new-task');
    if(input.value !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        li.classList.add('fade');
        setTimeout(function() {
            li.classList.remove('fade');
        }, 10);
        input.value = '';
    }
    ul.addEventListener('click', function(event) {
        if(event.target.classList.contains('delete')) {
            event.target.parentElement.remove();
        }
    });

    
});