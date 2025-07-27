const switchThemBtn = document.querySelector('.icons-container')
const currentDarkModeStatus = localStorage.getItem('darkMode')


if(currentDarkModeStatus === 'active') {
    document.body.classList.add('darkmode')
}

switchThemBtn.addEventListener('click', () => {

    const darkModeStatus = localStorage.getItem('darkMode')

    darkModeStatus !== "active" ? enableDarkMode() : disableDarkMode();

})


const enableDarkMode = () => {
    localStorage.setItem('darkMode', 'active');
    document.body.classList.add('darkmode');
}


const disableDarkMode = () => {
    localStorage.setItem('darkMode', 'null');
    document.body.classList.remove('darkmode');
}