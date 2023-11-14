import express from 'express';

const PORT = process.env.PORT ?? 3000;

//seleccionamos
const app = express();

app.use(express.static('public'));

app.get('/home', (req, res) => {
	res.status(200).json({
		mensaje: 'correo enviado',
	});
});

app.listen(PORT, () => {
	console.log(`conectados para http://localhost:${PORT}`);
});
