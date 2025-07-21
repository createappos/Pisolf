document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');

    if (uploadForm) {
        uploadForm.addEventListener('submit', (event) => {
            // 1. Prevent the default form submission which would reload the page
            event.preventDefault();

            // 2. Get the values from the form fields
            const title = document.getElementById('project-title').value;
            const language = document.getElementById('language').value;
            const code = document.getElementById('code-content').value;

            // 3. Basic validation to ensure the most important fields are not empty
            if (!title.trim() || !code.trim()) {
                alert('Please fill in both the title and code fields.');
                return;
            }

            // 4. Get existing projects from localStorage, or create an empty array
            const projects = JSON.parse(localStorage.getItem('projects')) || [];

            // 5. Create a new project object
            const newProject = {
                id: Date.now(), // Simple unique ID using timestamp
                title: title,
                language: language,
                code: code,
                date: new Date().toLocaleDateString()
            };

            // 6. Add the new project to the array and save back to localStorage
            projects.push(newProject);
            localStorage.setItem('projects', JSON.stringify(projects));

            // 7. Redirect to the projects page to see the newly added project
            window.location.href = 'project.html';
        });
    }
});