import React, {useState, useEffect, Suspense} from 'react';
import logo from '../images/logo.svg';
import axios from 'axios';

const Movielist = React.lazy(() => import('./movie/movie_list'));

const movieList = ['Jaws',
					'Cruella',
					'Toy+Story',
					'Angels+In+The+Outfield',
					'To+Kill+A+Mockingbird',
					'Twister',
					'Moana',
					'Silence+of+The+Lambs',
					'Ex+Machina',
					'Icarus',
					'Titanic',
					'Yojimbo']

const App = () => {
	const [movie, setMovie] = useState([]);
	const [filteredMovie, setfilteredMovie] = useState([]);
	const [search, setSearch] = useState('');

	function getMovies() {
		movieList.forEach(title => {
			axios({
				method: 'GET',
				url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${title}`,
			}).then(movies => {
				const movie = movies.data.results[0];
				const newmovie = [movie.title,
				movie.poster_path,
				movie.id,
				movie.release_date,
				movie.overview,
				movie.vote_average,
				movie.vote_count];
				setMovie(movieArr => [...movieArr, newmovie])
			}).catch(err => {
				console.log(err)
			})
		})
	}

	function updateValue(e) {
		setSearch(e.target.value);
	}

	function findMatches() {
		const movieList = movie.filter(movie => {
			const title = movie[0];
			const regex = new RegExp(search,'gi');
			return title.match(regex);
		})
		setfilteredMovie(movieList)
	}

	useEffect(() => {
		getMovies();
	}, [])

	useEffect(() => {
		findMatches();
	}, [search,movie])

	return (
		<div className='movie-list-container'>
			<div className='timescale-header'>
				<img src={logo} alt="Timescale" />
				<input 
					type='text'
					className='search-bar'
					placeholder='Search for a movie'
					onChange={updateValue}
					value={search}
				>	
				</input>
			</div>
			<div className='header-container'>
				<h2 className='recent-movies'>Most Recent Movies</h2>
			</div>
			<Suspense fallback={<div>loading....</div>}>
				<Movielist movie={filteredMovie}/>
			</Suspense>
		</div>
	)
}

export default App;
