const contentDiv = document.getElementById("content");
let isContentLoaded = false; // Flag to track if content has been loaded

function loadContent(page) {
    fetch(`pages/${page}.html`)
        .then((response) => response.text())
        .then((data) => {
            contentDiv.innerHTML = data;
            console.log(`Loaded content for ${page}.`);
        })
        .catch((error) => {
            console.error('Error loading content: ', error);
        });
}
const bodyElement = document.body;


function updateActiveState(targetElement) {
    // Check if the targetElement exists before manipulating it
    if (targetElement) {
        document.querySelectorAll('a.nav-link').forEach(anchor => {
            if (anchor === targetElement) {
                anchor.classList.add('active'); // Add the .active and .nav-masthead classes
            } else {
                anchor.classList.remove('active',); // Remove the .active and .nav-masthead classes
            }
        
        targetElement.blur();
            
        });
    
    }
}

function handleNavigation(page) {
    updateActiveState(document.querySelector(`a.nav-link[href="#${page}"]`));
    // Remove focus from the element with the "active" class
    
    loadContent(page);
    
}

function detectScreenSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Mobile view
        // Add specific behavior or styles for mobile here
        contentDiv.style.fontSize = "16px"; // Example: Adjust font size for mobile
    } else {
        // Desktop view
        // Add specific behavior or styles for desktop here
        contentDiv.style.fontSize = "20px"; // Example: Adjust font size for desktop
    }
}

// Add an event listener to detect screen size changes
window.addEventListener("resize", detectScreenSize);

// Initial call to detect screen size on page load
detectScreenSize();

// Load the "Home" page content and set the "Home" link as active by default only once
document.addEventListener("DOMContentLoaded", function () {
    if (!isContentLoaded) {
        handleNavigation("home");
        isContentLoaded = true; // Set the flag to indicate content has been loaded
    }
});

// Add event listeners for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        handleNavigation(this.getAttribute('href').slice(1));
    });
});
