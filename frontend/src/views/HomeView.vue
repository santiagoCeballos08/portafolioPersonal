<script lang="ts" setup>
import BannerComponent from '@/components/home/BannerComponent.vue';
import NavegatioComponent from '@/core/NavegatioComponent.vue';
// --------------------------------------------------
// FUTURAS IMPORTACIONES PREPARADAS
// --------------------------------------------------
// import TrustedComponent from '@/components/home/TrustedComponent.vue';
// import ServicesComponent from '@/components/home/ServicesComponent.vue';
// import ResumeComponent from '@/components/home/ResumeComponent.vue';
// import WorksComponent from '@/components/home/WorksComponent.vue';
// import SkillsComponent from '@/components/home/SkillsComponent.vue';
// import BlogComponent from '@/components/home/BlogComponent.vue';
// import ContactComponent from '@/components/home/ContactComponent.vue';
</script>

<template>
	<!-- Contenedor principal con layout de columna para separación automática -->
	<navegatio-component />
	<main class="container page-layout">

		<!-- 1. Hero / Banner -->
		<section class="section-wrapper">
			<banner-component />
		</section>

		<!-- 2. Trusted By (Compañías/Clientes) -->
		<section class="section-wrapper">
			<!-- <trusted-component /> -->
		</section>

		<!-- 3. Servicios -->
		<section class="section-wrapper">
			<!-- <services-component /> -->
		</section>

		<!-- 4. Currículum (Educación y Experiencia) -->
		<section class="section-wrapper">
			<!-- <resume-component /> -->
		</section>

		<!-- 5. Trabajos Recientes -->
		<section class="section-wrapper">
			<!-- <works-component /> -->
		</section>

		<!-- 6. Habilidades (Skills) -->
		<section class="section-wrapper">
			<!-- <skills-component /> -->
		</section>

		<!-- 7. Blog -->
		<section class="section-wrapper">
			<!-- <blog-component /> -->
		</section>

		<!-- 8. Contacto -->
		<section class="section-wrapper">
			<!-- <contact-component /> -->
		</section>

	</main>
</template>

<style lang="scss" scoped>
@import url('@/styles/sistemGridHome.scss');

/* Layout principal de la página */
.page-layout {
	display: flex;
	flex-direction: column;
	gap: 7.5rem;
	/* Espacio exacto entre componentes (ajusta a rem según necesites) */
	padding-block: 5rem;
	/* Espaciado al inicio y final de la página completa */
}

/* Envoltura para asegurar que los componentes ocupen el 100% de su fila */
.section-wrapper {
	width: 100%;
}
</style>