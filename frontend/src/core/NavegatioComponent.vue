<script lang="ts" setup>
import { useNavigation } from '@/composables/useNavigation';

const {
	isDrawerOpen,
	navLinks,
	socialLinks,
	toggleDrawer,
	closeDrawer,
	toggleTheme
} = useNavigation();
</script>

<template>
	<!-- Navbar Superior -->
	<header class="navbar max-w-[140rem] mx-auto">
		<div class="navbar__left">
			<button class="navbar__menu-btn" @click="toggleDrawer" aria-label="Abrir menú">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M3 12h18M3 6h18M3 18h18" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>

			<a href="#" class="navbar__logo">
				<span class="navbar__logo-code">&lt;/&gt;</span> santiago.dev
			</a>
		</div>

		<nav class="navbar__center">
			<ul class="navbar__links">
				<li v-for="link in navLinks" :key="link.name">
					<a :href="link.href" class="navbar__link">{{ link.name }}</a>
				</li>
			</ul>
		</nav>

		<div class="navbar__right">
			<div class="navbar__socials">
				<a v-for="social in socialLinks" :key="social.name" :href="social.href" class="navbar__social-link">
					<!-- Placeholder de ícono social -->
					<span>{{ social.icon.charAt(0).toUpperCase() }}</span>
				</a>
			</div>

			<button class="navbar__theme-btn" @click="toggleTheme" aria-label="Cambiar tema">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="12" cy="12" r="5" />
					<path
						d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
				</svg>
			</button>
		</div>
	</header>

	<!-- Overlay oscuro al abrir el sidebar -->
	<div class="sidebar-overlay" :class="{ 'sidebar-overlay--active': isDrawerOpen }" @click="closeDrawer"></div>

	<!-- Sidebar lateral (Get in touch) -->
	<aside class="sidebar" :class="{ 'sidebar--open': isDrawerOpen }">
		<header class="sidebar__header">
			<h2 class="sidebar__title">Get in touch</h2>
			<button class="sidebar__close-btn" @click="closeDrawer" aria-label="Cerrar menú">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
		</header>

		<div class="sidebar__content">
			<p class="sidebar__text">
				I'm always excited to take on new projects and collaborate with innovative minds.
			</p>

			<div class="sidebar__contact-group">
				<h4 class="sidebar__label">Phone Number</h4>
				<p class="sidebar__value">+1-234-567-8901</p>
			</div>

			<div class="sidebar__contact-group">
				<h4 class="sidebar__label">Email</h4>
				<a href="mailto:contact@james.dev" class="sidebar__value">contact@james.dev</a>
			</div>

			<div class="sidebar__contact-group">
				<h4 class="sidebar__label">Skype</h4>
				<p class="sidebar__value">JamesDeveloper</p>
			</div>

			<div class="sidebar__contact-group">
				<h4 class="sidebar__label">Address</h4>
				<p class="sidebar__value">0811 Erdman Prairie Road,<br>Jonville, California 90210</p>
			</div>

			<div class="sidebar__contact-group">
				<h4 class="sidebar__label">Social</h4>
				<div class="sidebar__socials-list">
					<a v-for="social in socialLinks" :key="social.name" :href="social.href">
						<span>{{ social.icon.charAt(0).toUpperCase() }}</span>
					</a>
				</div>
			</div>
		</div>
	</aside>
</template>

<style lang="scss" scoped>
@import url('../styles/navegation/navegation.scss');
</style>