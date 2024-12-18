const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }
];

const list = document.getElementById('list');
const addMovieForm = document.getElementById('addMovieForm');
const genreFilter = document.getElementById('genreFilter');
const filterButton = document.getElementById('filterButton');


const displayMovies = (collection) => {
    list.innerHTML = '';
    collection.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = `${movie.title} (${movie.releaseYear}) - ${movie.genre}, Rating: ${movie.rating}`;
        list.appendChild(li);
    });
};

addMovieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newMovie = {
        title: document.getElementById('title').value,
        genre: document.getElementById('genre').value,
        rating: parseFloat(document.getElementById('rating').value),
        releaseYear: parseInt(document.getElementById('releaseYear').value, 10)
    };
    movies.push(newMovie);
    displayMovies(movies);
    addMovieForm.reset();
});

filterButton.addEventListener('click', () => {
    const genre = genreFilter.value.trim();
    const filteredMovies = genre ? movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase()) : movies;
    displayMovies(filteredMovies);
});


const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movies) => movies.rating > highest.rating ? movies : highest);
};

const ratingbutton=document.querySelector("#high");

ratingbutton.addEventListener('click',()=>{
    const a=findHighestRatedMovie(movies);
    list.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `${a.title} (${a.releaseYear}) - ${a.genre}, Rating: ${a.rating}`;
    list.appendChild(li);
});
