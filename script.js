document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const dynamicText = document.querySelector('.dynamic-text');
    const roles = ['Software Engineer/Developer', 'SAP MM-PP-QM Consultant'];
    let index = 0;

    // Function to update and cycle through roles
    function changeText() {
        dynamicText.classList.remove('fade-in'); // Remove animation class
        setTimeout(() => {
            dynamicText.textContent = roles[index]; // Update text
            dynamicText.classList.add('fade-in'); // Add animation class
            index = (index + 1) % roles.length; // Cycle index
        }, 300); // Delay before changing text for smoother effect
    }

    // Start the text change interval
    setInterval(changeText, 2000); // Change every 2 seconds
    changeText(); // Initial call to display the first role

    // Toggle theme functionality
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '🌞';
    } else {
        body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '🌞';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
});
