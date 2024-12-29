<template>
	<div class="flex justify-center mb-40">
		<!-- ------------ SECCION ------------
			SECCION SOBRE MI
		------------ -->
		<main class="contenedor__hero__sobremi container flex justify-center" id="sobremi">
			<section class="contenedor__sobremi md:flex md:justify-center">
				<article class="contenedor__informacion md:flex md:items-center md:gap-x-6">
					<div class="contenedor__img__soremi mb-20 lg:mb-0 flex">
						<img
							src="../assets/img/foto_sobremi.png"
							loading="lazy"
							alt="imagen sobre mi"
							class="contenedor__img__sobremi" />
					</div>
					<div class="info__sobremi flex flex-col gap-y-10 lg:max-w-[600px]">
						<h3 class="text-center font-bold text-8xl uppercase opacity-50">Sobre mi</h3>
						<p>
							Hola, mi nombre es Santiago. Soy un desarrollador con experiencia en desarrollo web y móvil,
							complementado con habilidades en diseño gráfico. He trabajado con tecnologías como
							JavaScript, PHP, Node.js y PWA. En mi anterior posición en Kubico S.A.S, lideré un proyecto
							que desarrolle credimásApp, una aplicación que alcanzó más de 1000 descargas en su primer
							mes. Estoy comprometido con el aprendizaje continuo, habiendo obtenido certificaciones en
							JavaScript Moderno y Desarrollo FullSatck. Mi pasión por la música y la lectura refleja mi
							dedicación al autodesarrollo y el enriquecimiento continuo. En el ámbito profesional, valoro
							la responsabilidad y la puntualidad, asegurándome de que cada proyecto se complete con la
							más alta calidad y dentro del plazo acordado.
						</p>
						<a
							download="CV santiago ceballos"
							href="../assets/files/CV_santiago_ceballos.pdf"
							class="btn_menu descargar__cv self-center shadow-md hover:translate-y-[-0.5rem] transition-all mt-20">
							CV
						</a>
					</div>
				</article>
				<article class="contenedor__experiencia"></article>
			</section>
		</main>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
