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

/* cabera */
let headMovil = document.querySelector('.menu__mini');
let headPc = document.querySelector('.menu__grande');
let higthPcCabecera = headPc.scrollHeight;
let higthMovilCabecera = headMovil.scrollHeight;
window.addEventListener('scroll', (e) => {
	if (window.scrollY > higthMovilCabecera) {
		headMovil.classList.add('cabecera-header');
	} else {
		headMovil.classList.remove('cabecera-header');
	}
	if (window.scrollY > higthPcCabecera) {
		headPc.classList.add('cabecera-header');
	} else {
		headPc.classList.remove('cabecera-header');
	}
});
