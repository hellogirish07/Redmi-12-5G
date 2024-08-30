// For dark mode toggling
// const toggle = document.getElementById('darkModeToggle');
// const body = document.body;

// toggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
// });

// For reloading the website
function reload() {
    window.location.reload();
}

//  JavaScript for Sidebar Toggle
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');
const navList = document.getElementById('navList');
const sidebarLinks = sidebar.querySelectorAll('a');

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    menuIcon.classList.toggle('open');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
        sidebar.classList.remove('active');
        menuIcon.classList.remove('open');
    }
});

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        menuIcon.classList.remove('open');
    });
});
