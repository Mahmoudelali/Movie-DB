const app = require('express')();
const PORT = 3000;
const time = new Date();

app.listen(PORT, () => {
	console.log(`ok`);
});

app.get('/test', (req, res) => {
	// this function runs when the route is requested
	res.status(200).send({
		status: 200,
		message: `${time.getHours()}:${time.getMinutes()}`,
	});
});
// today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// http://localhost:3000/test
