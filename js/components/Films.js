export default function Films(films) {
    console.log(films.results)
    return `
    <h1>Star Wars Films</h1>
    <ul>
    ${films.results

            .map(film => {
                return `
            <li>
            <h3>${film.title}</h3>
            <p>Release Date: ${film.release_date}</p>
            <p>Director: ${film.director}</p>
            </li>
            `

            })
            .join('')}
    </ul >
    `;
}