import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import '/css/style.css';
import apiActions from './api-actions/api';
import People from './components/People';
import Person from './components/Person';
import Films from './components/Films';

buildPage();

function buildPage() {
    header();
    navHome();
    footer();
    navPeople();
    navFilms();
};

function header() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
};



function footer() {
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = Footer();
};

function navHome() {
    const homeLi = document.querySelector('.nav-list__home');
    homeLi.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = Home();
    });
};

function navPeople() {
    const peopleLi = document.querySelector('.nav-list__people');
    peopleLi.addEventListener('click', () => {
        const app = document.querySelector('#app');
        apiActions.getRequest('https://swapi.co/api/people', (people) => {
            app.innerHTML = People(people);

        });
        renderPersonInfo();
    });
}

function renderPersonInfo() {
    const app = document.querySelector('#app');
    app.addEventListener('click', () => {
        if (event.target.classList.contains('person-name')) {

            let personUrl = event.target.parentElement.querySelector('input').value;

            apiActions.getRequest(personUrl, () => {
                app.innerHTML = Person(personUrl)
            })
        }
    })

}

function navFilms() {
    const filmsLi = document.querySelector('.nav-list__films');
    filmsLi.addEventListener('click', () => {
        const app = document.querySelector('#app');
        apiActions.getRequest('https://swapi.co/api/films', (films) => {
            app.innerHTML = Films(films);
        });
    });
}

