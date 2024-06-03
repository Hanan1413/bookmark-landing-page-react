// Add an event listener to ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the hamburger menu element by its ID
    const hamburger = document.getElementById('hamburger');
    // Get the navbar element by its ID
    const mobileNav = document.getElementById('mobile-nav');
    console.log(mobileNav)
    // Get all elements with the class 'tab-button' and store them in a NodeList
    const tabButtons = document.querySelectorAll('.tab-button');
    // Get all elements with the class 'tab-content' and store them in a NodeList
    const tabContents = document.querySelectorAll('.tab-content');
    // Get all elements with the class 'faq-question' and store them in a NodeList
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Add a click event listener to the hamburger menu
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the navbar when the hamburger menu is clicked
        mobileNav.classList.toggle('active');
    });

    // Loop through each tab button
    tabButtons.forEach(button => {
        // Add a click event listener to each tab button
        button.addEventListener('click', () => {
            // Remove the 'active' class from all tab buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Remove the 'active' class from all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add the 'active' class to the clicked tab button
            button.classList.add('active');
            // Add the 'active' class to the corresponding tab content
            document.getElementById(button.dataset.target).classList.add('active');
        });
    });

    // Loop through each FAQ question
    faqQuestions.forEach(question => {
        // Add a click event listener to each FAQ question
        question.addEventListener('click', () => {
            // Get the next sibling element (the answer) of the clicked FAQ question
            const answer = question.nextElementSibling;
            // Toggle the display style between 'block' and 'none' for the answer
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});
