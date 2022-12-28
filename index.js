const app = require('express')();
const port = process.env.PORT || 3000;
const time = new Date();

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

app.listen(port, () => {
	console.log(`listening on PORT : ${port}`);
});

// today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// http://localhost:3000/test
