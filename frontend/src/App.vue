<script setup lang="ts">
	import AboutMeComponent from './components/AboutMeComponent.vue';
	import BannerComponent from './components/BannerComponent.vue';
	import ProyectsComponent from './components/ProyectsComponent.vue';
	import ServiceComponent from './components/ServiceComponent.vue';
	import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
	<div>
		<!-- ------------ SECCION ------------
			HEADER
		------------ -->
		<header class="cabecera__hero">
			<!-- menu movil -->
			<div class="menu__mini flex justify-around items-center lg:hidden">
				<div class="ico__contenedor__mo flex justify-center items-center">
					<div class="ico__img__contenedor">
						<img src="./assets/img/banner/icon_banner.png" alt="icon santiago ceballos" />
					</div>
					<p class="font-bold"><a href="#">Santiago ceballos</a></p>
				</div>
				<div class="btn_menu flex justify-center items-center">
					<a href="#" class="menu-mini-open">
						<span class="material-symbols-outlined">menu</span>
					</a>
				</div>
			</div>
			<!-- menu principal mini movil -->
			<div class="menu__cover__mini">
				<div class="flex justify-end btn__close"><span class="material-symbols-outlined"> close </span></div>
				<div class="link__contenedor flex flex-col items-center text-center">
					<ul>
						<li>
							<a href="#sobremi" class="hover:underline hover:underline-offset-4">sobre mi</a>
						</li>
						<li>
							<a href="#proyects" class="hover:underline hover:underline-offset-4">proyectos</a>
						</li>
						<li>
							<a href="#service" class="hover:underline hover:underline-offset-4">servicios</a>
						</li>
						<!-- TODO: crear seccion de contacto -->
						<!-- <li>
							<a href="" class="hover:underline hover:underline-offset-4">contacto</a>
						</li> -->
					</ul>
				</div>
				<!-- TODO: activar mas adelante el tema de la traducion -->
				<!-- <div class="content_lang flex justify-center">
					<div class="lang__cotenedor active">
						<a href=""><img src="./assets/img/ico_es.png" alt="español" /></a>
					</div>
					<div class="lang__cotenedor">
						<a href=""><img src="./assets/img/ico_en.png" alt="ingles" /></a>
					</div>
				</div> -->
			</div>

			<!-- menu grande pc -->
			<div class="menu__grande hidden lg:flex lg:justify-around lg:pt-10 fixed top-0 w-full z-20">
				<div class="ico__contenedor__mo flex justify-center items-center">
					<div class="ico__img__contenedor">
						<img src="./assets/img/banner/icon_banner.png" alt="icon santiago ceballos" />
					</div>
					<p class="font-bold"><a href="#">Santiago ceballos</a></p>
				</div>
				<div class="link__contenedor__pc flex">
					<ul class="flex justify-around gap-x-8 items-center">
						<li>
							<a href="#sobremi" class="hover:underline hover:underline-offset-4">sobre mi</a>
						</li>
						<li>
							<a href="#proyects" class="hover:underline hover:underline-offset-4">proyectos</a>
						</li>
						<li>
							<a href="#service" class="hover:underline hover:underline-offset-4">servicios</a>
						</li>
						<!-- TODO: crear seccion de contacto -->
						<!-- <li>
							<a href="" class="hover:underline hover:underline-offset-4">contacto</a>
						</li> -->
					</ul>
				</div>

				<!-- TODO: activar mas adelante el tema de la traducion -->
				<!-- <div class="content_lang flex justify-center">
					<div class="lang__cotenedor active">
						<a href=""><img src="./assets/img/ico_es.png" alt="español" /></a>
					</div>
					<div class="lang__cotenedor">
						<a href=""><img src="./assets/img/ico_en.png" alt="ingles" /></a>
					</div>
				</div> -->
			</div>
		</header>

		<!-- FIN DE SECCION HEAD -->
		<banner-component />

		<!-- ------------ SECCION ------------
		abutme
		------------ -->
		<about-me-component />

		<!-- ------------ SECCION ------------
			section proyects
		------------ -->
		<proyects-component />

		<!-- ------------ SECCION ------------
			section servis
		------------ -->
		<service-component />

		<!-- ------------ SECCION ------------
			footer principal
		------------ -->
		<footer-component />
	</div>
</template>

<style scoped></style>
