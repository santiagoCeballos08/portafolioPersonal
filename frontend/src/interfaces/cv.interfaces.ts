// src/data/cvData.ts
export interface Experience {
	role: string;
	company: string;
	period: string;
	description: string;
}

export interface Education {
	institution: string;
	degree: string;
	year: string;
}

export interface ServiceItem {
	id: string;
	title: string;
	shortTitle?: string;
	description: string;
	icon: 'frontend' | 'backend' | 'solutions' | string;
	tags: string[];
}

export interface ProjectItem {
	id: string;
	title: string;
	category: string;
	client?: string;
	period?: string;
	role?: string;
	description: string;
	image: string;
	liveUrl: string;
	githubUrl?: string;
	tags: string[];
	featured?: boolean;
}

export interface CVData {
	name: string;
	title: string;
	location: string;
	phone: string;
	email: string;
	summary: string;
	experiences: Experience[];
	education: Education[];
	techSkills: string[];
	softSkills: string[];
	services: ServiceItem[];
	projects: ProjectItem[];
}
