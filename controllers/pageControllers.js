import { __dirname } from '../index.js';

function paginaInicio(req, res) {
	res.sendFile(__dirname + 'views/index.html');
}

export { paginaInicio };
