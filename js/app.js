import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import '/css/style.css';
import apiActions from './api-actions/api';
import People from './components/People';
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
        })

    })
}

function navFilms() {
    const filmsLi = document.querySelector('.nav-list__films');
    filmsLi.addEventListener('click', () => {
        const app = document.querySelector('#app');
        apiActions.getRequest('https://swapi.co/api/films', (films) => {
            app.innerHTML = Films(films);
        })

    })
}