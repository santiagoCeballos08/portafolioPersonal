import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT ?? 3000;

//seleccionamos
const app = express();
// Para servir archivos en 'public'
app.use(`/assets`, express.static(`${__dirname}/assets`));
app.use(`/dist`, express.static(`${__dirname}/dist`));
app.use(`/controllers`, express.static(`${__dirname}/controllers`));
app.use(`/public`, express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
	console.log(`conectados para http://localhost:${PORT}`);
});
