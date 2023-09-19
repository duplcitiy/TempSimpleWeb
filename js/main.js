const contentDiv = document.getElementById("content");

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

function handleNavigation() {
    const hash = window.location.hash.slice(1);
    if (hash === "") {
        console.log(hash);
        loadContent("home");
    } else {
        loadContent(hash);
    }
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

// Add event listeners for hashchange and load
window.addEventListener("hashchange", handleNavigation);
window.addEventListener("load", handleNavigation);
