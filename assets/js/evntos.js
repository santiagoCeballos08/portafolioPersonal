/*---------------------------------------------------------------------------------
NOTA: aca vamos a tener todos los eventos de js para la paina web y todos los que tenga que ver
con los eventos
----------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
	/* cerrar el menu cover movil */
	let bton_close = document.querySelector('.btn__close');
	bton_close.addEventListener('click', () => {
		document.querySelector('.menu__cover__mini').style.display = 'none';
	});

	/* abrir el menu cover movil */
	let boton_open = document.querySelector('.menu-mini-open');
	boton_open.addEventListener('click', () => {
		document.querySelector('.menu__cover__mini').style.display = 'block';
	});
});
