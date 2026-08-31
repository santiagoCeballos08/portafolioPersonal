/// <reference types="vite/client" />
// src/env.d.ts
declare module '*.css' {
	const content: { [className: string]: string };
	export default content;
}

interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
