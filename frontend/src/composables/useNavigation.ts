import { ref } from 'vue';

export function useNavigation() {
	// Estado
	const isDrawerOpen = ref(false);
	const isDarkTheme = ref(true);

	// Datos de navegación
	const navLinks = [
		{ name: 'About me', href: '#about' },
		{ name: 'CV', href: '/cv' },
		{ name: 'Resume', href: '#resume' },
		{ name: 'Services', href: '#services' },
		{ name: 'Portfolio', href: '#portfolio' },
		{ name: 'Blog', href: '#blog' },
		{ name: 'Contact', href: '#contact' },
	];

	const socialLinks = [
		{ name: 'Github', icon: 'github', href: '#' },
		{ name: 'X', icon: 'x', href: '#' },
		{ name: 'LinkedIn', icon: 'linkedin', href: '#' },
	];

	// Métodos
	const toggleDrawer = () => {
		isDrawerOpen.value = !isDrawerOpen.value;
	};

	const closeDrawer = () => {
		isDrawerOpen.value = false;
	};

	const toggleTheme = () => {
		isDarkTheme.value = !isDarkTheme.value;
		// Aquí puedes inyectar la clase global para tu sistema de temas
		const html = document.documentElement;
		if (isDarkTheme.value) {
			html.classList.remove('light-theme');
			html.classList.add('dark-theme');
		} else {
			html.classList.remove('dark-theme');
			html.classList.add('light-theme');
		}
	};

	return {
		isDrawerOpen,
		isDarkTheme,
		navLinks,
		socialLinks,
		toggleDrawer,
		closeDrawer,
		toggleTheme,
	};
}
