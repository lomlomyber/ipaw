document.addEventListener('DOMContentLoaded', function() {
    const welcomeBanner = document.getElementById('welcome-banner');
    const closeBanner = document.getElementById('close-banner');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Show the welcome banner after a short delay
    setTimeout(() => {
        welcomeBanner.classList.add('show');
    }, 1000);

    // Close the banner when the close button is clicked
    closeBanner.addEventListener('click', () => {
        welcomeBanner.classList.remove('show');
    });

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('show');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    mainNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            mainNav.classList.remove('show');
            mobileMenuToggle.classList.remove('active');
        }
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

    // Close dropdown menu when clicking outside
    document.addEventListener('click', (e) => {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target) && !e.target.matches('.dropbtn')) {
                dropdown.style.display = 'none';
            }
        });
    });

    // Responsive behavior for window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mainNav.classList.remove('
