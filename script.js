document.addEventListener('DOMContentLoaded', () => {
    // Create the "Back to Top" button element
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '⬆️ Top';
    backToTopButton.id = 'backToTop';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.backgroundColor = '#00bcd4';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none'; // This is line 17
    backToTopButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    backToTopButton.style.fontSize = '16px';
    document.body.appendChild(backToTopButton);

    // Show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to the top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
