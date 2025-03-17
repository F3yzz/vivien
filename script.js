document.addEventListener('DOMContentLoaded', function() {
    // Create toggle navigation
    const pageContainer = document.querySelector('body');
    
    // Create navigation element
    const toggleNav = document.createElement('div');
    toggleNav.className = 'toggle-navigation';
    
    // Create buttons for each page
    const page1Button = document.createElement('button');
    page1Button.className = 'toggle-btn active';
    page1Button.textContent = 'Museum Info';
    page1Button.setAttribute('data-page', 'page1');
    
    const page2Button = document.createElement('button');
    page2Button.className = 'toggle-btn';
    page2Button.textContent = 'Famous Museums';
    page2Button.setAttribute('data-page', 'page2');
    
    // Add buttons to navigation
    toggleNav.appendChild(page1Button);
    toggleNav.appendChild(page2Button);
    
    // Insert navigation at the beginning of body
    pageContainer.insertBefore(toggleNav, pageContainer.firstChild);
    
    // Set up event listeners for buttons
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            const pageId = this.getAttribute('data-page');
            document.getElementById(pageId).classList.add('active');
        });
    });
    
    // Make sure page1 is active initially
    document.getElementById('page1').classList.add('active');
});