const button = document.querySelector('.btn-show-projects');
const inactiveProjects = document.querySelectorAll('.project:not(.active)')
button.addEventListener('click', () => {
    ShowButton();
    HiddenButton();
});

function HiddenButton() {
    button.classList.add('remover');
}

function ShowButton() {
    inactiveProjects.forEach(inactiveProject => {
        inactiveProject.classList.add('active');
    });
}
