import express from 'express';

const PORT = process.env.PORT ?? 3000;

//seleccionamos
const app = express();
// Para servir archivos en 'public'
app.use('/assets', express.static('assets'));
app.use('/dist', express.static('dist'));
app.use('/controllers', express.static('controllers'));

app.get('/', (req, res) => {
	res.sendFile(process.cwd() + '/public/index.html');
});

app.listen(PORT, () => {
	console.log(`conectados para http://localhost:${PORT}`);
});
