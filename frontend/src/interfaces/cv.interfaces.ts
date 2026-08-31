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
}
