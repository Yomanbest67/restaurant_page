import css from './style.css';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';


const content = document.querySelector('#content')

content.appendChild(home());

(function pageSwitcher () {
    const homeSwitch = document.querySelector('#Home');
    const menuSwitch = document.querySelector('#Menu');
    const aboutSwitch = document.querySelector('#About');

    function clearScreen() {
        while (content.firstChild) {
            content.firstChild.remove();
        }
    }

    homeSwitch.addEventListener('click', () => {
        clearScreen();
        content.appendChild(home());
    })

    menuSwitch.addEventListener('click', () => {
        clearScreen();
        content.appendChild(menu());
    })

    aboutSwitch.addEventListener('click', () => {
        clearScreen();
        content.appendChild(about());
    })

})();
