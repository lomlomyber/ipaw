document.addEventListener('DOMContentLoaded', function() {
    const welcomeBanner = document.getElementById('welcome-banner');
    const closeBanner = document.getElementById('close-banner');

    // Show the welcome banner after a short delay
    setTimeout(() => {
        welcomeBanner.classList.add('show');
    }, 1000);

    // Close the banner when the close button is clicked
    closeBanner.addEventListener('click', () => {
        welcomeBanner.classList.remove('show');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
