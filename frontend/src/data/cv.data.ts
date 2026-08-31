import { CVData } from '../interfaces/cv.interfaces';

export const cvData: CVData = {
	name: 'Santiago Ceballos Deossa',
	title: 'Full Stack Software Engineer',
	location: 'Medellín - Colombia',
	phone: '3197846786',
	email: 'sceballos180@gmail.com',
	summary:
		'Ingeniero de software Full Stack con más de 5 años de experiencia en el desarrollo de aplicaciones web, APIs y plataformas empresariales de alto rendimiento. Especializado en tecnologías como Laravel, Vue.js, Node.js y SQL, participando en proyectos enfocados en escalabilidad, optimización y arquitectura de soluciones.',
	experiences: [
		{
			role: 'Desarrollador Frontend Mid-Senior',
			company: '1CERO1 Software',
			period: 'May 2024 - Actualidad',
			description:
				'Liderazgo y desarrollo de aplicaciones web robustas y escalables para alcaldías en Colombia. Optimización de arquitectura frontend, rendimiento y UX/UI accesible.',
		},
		{
			role: 'Desarrollador Fullstack',
			company: 'Kubico S.A.S',
			period: 'Jun 2022 - May 2024',
			description: 'Creación de aplicaciones web y móviles, desarrollo de APIs bajo arquitectura REST y Onion, y diseño de interfaces UI/UX.',
		},
		{
			role: 'Servicios Tecnológicos Independientes',
			company: 'Freelance',
			period: 'Ene 2023 - Actualidad',
			description: 'Desarrollo de aplicaciones web empresariales, APIs de alto rendimiento y soluciones a medida para clientes directos.',
		},
		{
			role: 'Analista de Datos y Reporting',
			company: 'Almacontact',
			period: 'Jun 2021 - Ene 2022',
			description: 'Análisis y limpieza de datos, automatización y reportabilidad diaria con Power BI, Power Automate, Python y Excel.',
		},
	],
	education: [
		{
			institution: 'SENA (Servicio Nacional de Aprendizaje)',
			degree: 'Tecnólogo en Análisis y Desarrollo de Sistemas de la Información',
			year: '2022',
		},
		{
			institution: 'I.E. Antonio Roldán Betancur',
			degree: 'Bachiller Técnico en Programación',
			year: '2019',
		},
	],
	techSkills: ['TypeScript', 'JavaScript', 'Vue.js', 'PHP / Laravel', 'Node.js', 'Express / NestJS', 'SQL', 'Tailwind CSS', 'HTML5 / CSS3', 'PWA', 'Figma'],
	softSkills: ['Scrum', 'Liderazgo', 'Resolución de problemas', 'Pensamiento crítico', 'Trabajo en equipo'],
};
