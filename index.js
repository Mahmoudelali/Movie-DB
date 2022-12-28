const app = require('express')();
const port = process.env.PORT || 3000;
const time = new Date();

const movies = [
	{ title: 'Jaws', year: 1975, rating: 8 },
	{ title: 'Avatar', year: 2009, rating: 7.8 },
	{ title: 'Brazil', year: 1985, rating: 8 },
	{ title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 },
];

// Step 2
app.get('/', (req, res) => {
	res.send('ok');
});

// Step 3
app.get('/test', (req, res) => {
	res.send({ status: 200, message: 'ok' });
});

app.get('/time', (req, res) => {
	res.send(`${time.getHours()}:${time.getMinutes()}`);
});

// Step 4
app.get('/hello/:id', (req, res) => {
	if (req.params.id) {
		res.send({ status: 200, message: `Hello ${req.params.id}` });
	}
});

app.get('/search', (req, res) => {
	if (req.query) {
		res.send({ status: 200, message: 'ok', data: req.query.s });
	}
	res.send({
		status: 500,
		error: true,
		message: 'you have to provide a search',
	});
});

//Step 5
app.post('/movies/create', (req, res) => {});
app.get('/movies/read', (req, res) => {
	res.send({ status: 200, movies: movies });
});
app.put('/movies/update', (req, res) => {});
app.delete('/movies/delete', (req, res) => {});

//Step 6

// ordering movies by date
app.get('/movies/read/by-date', (req, res) => {
	res.send({
		status: 200,
		movies: movies.sort((a, b) => {
			return a.year - b.year;
		}),
	});
});

// ordering movies by rating
app.get('/movies/read/by-rating', (req, res) => {
	res.send({
		status: 200,
		movies: movies.sort((a, b) => b.rating - a.rating),
	});
});

// // ordering movies by Title
app.get('/movies/read/by-title', (req, res) => {
	res.send({
		status: 200,
		movies: movies.sort((a, b) => {
			return a.title === b.title ? 0 : a.title > b.title ? 1 : -1;
		}),
	});
});

// Step 7
app.get('/movies/read/id/:id', (req, res) => {
	let found = false;
	movies.forEach((movie) => {
		for (let i in movie) {
			if (movie[i] == req.params.id) {
				found = !found;
			}
			continue;
		}
		if (found) res.send({ status: 200, data: req.params.id });
		else {
			res.send({
				status: 404,
				error: true,
				message: `the movie <${req.params.id}> does not exist`,
			});
		}
	});
});

// port Listening
app.listen(port, () => {
	console.log(`listening on PORT : ${port}`);
});



