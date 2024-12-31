import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import '@fortawesome/fontawesome-svg-core/styles.css';

import {
	faUser,
	faHome,
	faCoffee,
	faCode,
	faPersonChalkboard,
	faPencil,
	faMobile,
	faChartLine,
	faChartArea,
	faChartPie,
} from '@fortawesome/free-solid-svg-icons';
import { faFigma, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Agrega los íconos a la librería
library.add(
	faUser,
	faHome,
	faCoffee,
	faCode,
	faPersonChalkboard,
	faPencil,
	faFigma,
	faTwitter,
	faMobile,
	faChartLine,
	faChartPie,
	faChartArea,
);

export default FontAwesomeIcon;
