import type { CVData } from '../interfaces/cv.interfaces';
export const personalCVData: CVData = {
	name: 'Santiago Ceballos Deossa', //[cite: 1]
	title: 'Full Stack Software Engineer', //[cite: 1]
	location: 'Medellín - Colombia', //[cite: 1]
	phone: '3197846786', //[cite: 1]
	email: 'sceballos180@gmail.com', //[cite: 1]
	summary:`Ingeniero de software Full Stack con más de 5 años de experiencia en el desarrollo de aplicaciones web, APIs y plataformas empresariales de alto rendimiento. Especializado en tecnologías como Laravel, Vue.js, Node.js y SQL, participando en proyectos enfocados en escalabilidad, optimización y arquitectura de soluciones.
				Experiencia en el desarrollo de plataformas gubernamentales, sistemas empresariales y soluciones digitales modernas, aplicando buenas prácticas de desarrollo, metodologías ágiles y estándares de calidad.
				Orientado a la resolución de problemas, mejora continua y construcción de software eficiente, mantenible y escalable `,
	experiences: [
		{
			role: 'Desarrollador Frontend Mid-Senior', //[cite: 1]
			company: '1CERO1 Software', //[cite: 1]
			period: 'May 2024 - Actualidad', //[cite: 1]
			description:
				'Liderazgo y desarrollo de aplicaciones web robustas y escalables para alcaldías en Colombia[cite: 1]. Optimización de arquitectura frontend, rendimiento y UX/UI accesible[cite: 1].',
		},
		{
			role: 'Desarrollador Fullstack', //[cite: 1]
			company: 'Kubico S.A.S', //[cite: 1]
			period: 'Jun 2022 - May 2024', //[cite: 1]
			description:
				'Creación de aplicaciones web y móviles, desarrollo de APIs bajo arquitectura REST y Onion, y diseño de interfaces UI/UX[cite: 1].',
		},
		{
			role: 'Servicios Tecnológicos Independientes', //[cite: 1]
			company: 'Freelance',
			period: 'Ene 2023 - Actualidad', //[cite: 1]
			description:
				'Desarrollo de aplicaciones web empresariales, APIs de alto rendimiento y soluciones a medida para clientes directos[cite: 1].',
		},
		{
			role: 'Analista de Datos y Reporting', //[cite: 1]
			company: 'Almacontact', //[cite: 1]
			period: 'Jun 2021 - Ene 2022', //[cite: 1]
			description:
				'Análisis y limpieza de datos, automatización y reportabilidad diaria con Power BI, Power Automate, Python y Excel[cite: 1].',
		},
	],
	education: [
		{
			institution: 'SENA (Servicio Nacional de Aprendizaje)', //[cite: 1]
			degree: 'Tecnólogo en Análisis y Desarrollo de Sistemas de la Información', //[cite: 1]
			year: '2022', //[cite: 1]
		},
		{
			institution: 'I.E. Antonio Roldán Betancur', //[cite: 1]
			degree: 'Bachiller Técnico en Programación', //[cite: 1]
			year: '2019', //[cite: 1]
		},
	],
	techSkills: [
		'TypeScript',
		'JavaScript',
		'Vue.js',
		'PHP Laravel',
		'Node.js',
		'Express / NestJS',
		'SQL',
		'Tailwindcss',
		'HTML5 / CSS3',
		'PWA',
		'Figma', //[cite: 1]
	],
	softSkills: [
		'Scrum',
		'Liderazgo',
		'Resolución de problemas',
		'Pensamiento crítico',
		'Trabajo en equipo', //[cite: 1]
	],
	services: [
		{
			id: 'frontend',
			title: 'Desarrollo Frontend & UI/UX',
			shortTitle: 'Frontend & UI/UX',
			description:
				'Creación de interfaces web y móviles modernas, interactivas, accesibles y de alto rendimiento con Vue.js, TypeScript y Tailwindcss. Implementación fiel de prototipos Figma y diseño responsivo.',
			icon: 'frontend',
			tags: ['Vue.js', 'TypeScript', 'Tailwindcss', 'PWA', 'Figma', 'UI/UX'],
		},
		{
			id: 'backend',
			title: 'Backend & APIs Escalables',
			shortTitle: 'Backend & APIs',
			description:
				'Diseño e implementación de APIs robustas y seguras bajo arquitectura limpia (REST y Onion). Alta especialización en Node.js, Express, NestJS y PHP Laravel con bases de datos SQL.',
			icon: 'backend',
			tags: ['Node.js', 'Express / NestJS', 'PHP Laravel', 'SQL', 'Arquitectura Onion', 'REST APIs'],
		},
		{
			id: 'solutions',
			title: 'Soluciones Web Empresariales',
			shortTitle: 'Soluciones Full Stack',
			description:
				'Desarrollo integral de plataformas empresariales y gubernamentales de extremo a extremo. Enfoque en escalabilidad, optimización de procesos y entrega de valor bajo metodología Scrum.',
			icon: 'solutions',
			tags: ['Full Stack', 'Sistemas Empresariales', 'Optimización', 'Scrum', 'Liderazgo'],
		},
	],
};
