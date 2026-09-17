<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCv } from '@/composables/useCv';
import { ArrowUpRight, ChevronLeft, ChevronRight } from '@lucide/vue';

const { cvInfo } = useCv();

const activeIndex = ref(0);

const projects = computed(() => cvInfo.value.projects || []);

const currentProject = computed(() => {
	if (!projects.value.length) return null;
	return projects.value[activeIndex.value] || projects.value[0];
});

const totalProjects = computed(() => projects.value.length);

const nextProject = () => {
	if (!projects.value.length) return;
	activeIndex.value = (activeIndex.value + 1) % projects.value.length;
};

const prevProject = () => {
	if (!projects.value.length) return;
	activeIndex.value = (activeIndex.value - 1 + projects.value.length) % projects.value.length;
};

const selectProject = (index: number) => {
	activeIndex.value = index;
};

const formatIndex = (index: number): string => {
	return `0${index + 1}`.slice(-2);
};
</script>

<template>
	<section id="portfolio" class="works">
		<!-- Encabezado de la sección -->
		<header class="works__header">
			<span class="works__badge">&lt;proyectos /&gt;</span>
			<h2 class="works__title">
				Mis Trabajos <span>Recientes</span>
			</h2>
			<p class="works__description">
				Proyectos reales y plataformas en producción donde he liderado el desarrollo frontend, backend, integraciones de APIs y arquitectura de software.
			</p>
		</header>

		<!-- Card Showcase Principal (Grid réplica del diseño) -->
		<div v-if="currentProject" class="works__showcase">
			<!-- Columna Izquierda: Mockup / Imagen -->
			<div class="works__preview">
				<a
					:href="currentProject.liveUrl"
					target="_blank"
					rel="noopener noreferrer"
					class="works__preview-link"
					:aria-label="`Ver proyecto ${currentProject.title} en vivo`"
				>
					<img
						:src="currentProject.image"
						:alt="`Captura del proyecto ${currentProject.title}`"
						class="works__preview-img"
						loading="lazy"
					/>
				</a>

				<span class="works__preview-badge">
					{{ currentProject.category }}
				</span>

				<span class="works__preview-counter">
					{{ formatIndex(activeIndex) }} / {{ formatIndex(totalProjects - 1) }}
				</span>
			</div>

			<!-- Columna Derecha: Especificaciones y Detalles -->
			<div class="works__content">
				<span class="works__project-category">
					// {{ currentProject.category }}
				</span>

				<h3 class="works__project-title">
					{{ currentProject.title }}
				</h3>

				<p class="works__project-desc">
					{{ currentProject.description }}
				</p>

				<!-- Tabla de especificaciones -->
				<div class="works__specs">
					<div v-if="currentProject.client" class="works__spec-row">
						<span class="works__spec-label">Cliente:</span>
						<span class="works__spec-value">{{ currentProject.client }}</span>
					</div>

					<div v-if="currentProject.role" class="works__spec-row">
						<span class="works__spec-label">Rol:</span>
						<span class="works__spec-value">{{ currentProject.role }}</span>
					</div>

					<div v-if="currentProject.period" class="works__spec-row">
						<span class="works__spec-label">Periodo:</span>
						<span class="works__spec-value">{{ currentProject.period }}</span>
					</div>

					<div class="works__spec-row">
						<span class="works__spec-label">Tecnologías:</span>
						<div class="works__tags">
							<span
								v-for="tag in currentProject.tags"
								:key="tag"
								class="works__tag"
							>
								#{{ tag }}
							</span>
						</div>
					</div>
				</div>

				<!-- Acciones y Navegación -->
				<footer class="works__footer">
					<a
						:href="currentProject.liveUrl"
						target="_blank"
						rel="noopener noreferrer"
						class="works__cta"
					>
						<span>Ver Proyecto</span>
						<ArrowUpRight :size="18" />
					</a>

					<div class="works__controls">
						<button
							type="button"
							class="works__nav-btn"
							aria-label="Proyecto anterior"
							@click="prevProject"
						>
							<ChevronLeft :size="20" />
						</button>

						<button
							type="button"
							class="works__nav-btn"
							aria-label="Proyecto siguiente"
							@click="nextProject"
						>
							<ChevronRight :size="20" />
						</button>
					</div>
				</footer>
			</div>
		</div>

		<!-- Selector interactivo de miniaturas/pestañas de todos los proyectos -->
		<div class="works__tabs">
			<button
				v-for="(project, index) in projects"
				:key="project.id"
				type="button"
				:class="['works__tab', { 'works__tab--active': index === activeIndex }]"
				@click="selectProject(index)"
			>
				<span class="works__tab-number">// {{ formatIndex(index) }}</span>
				<div class="works__tab-info">
					<h4 class="works__tab-title">{{ project.title }}</h4>
					<span class="works__tab-category">{{ project.category }}</span>
				</div>
			</button>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@import url('@/styles/sistemGridHome.scss');
@import url('@/styles/works/works.scss');
</style>
