import express from 'express';
import path from 'node:path';
import pageRouter from './routers/pageRouter.js';
import { fileURLToPath } from 'node:url';

export let __dirname = fileURLToPath(new URL('.', import.meta.url));
const PORT = process.env.PORT ?? 3000;

//seleccionamos
const app = express();
// Para servir archivos en 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pageRouter);

app.listen(PORT, () => {
	console.log(`conectados para http://localhost:${PORT}`);
});
