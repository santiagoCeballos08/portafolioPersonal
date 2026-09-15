<script setup lang="ts">
import { useCv } from '@/composables/useCv';
import { Code, Server, Layers } from '@lucide/vue';
import type { Component } from 'vue';

const { cvInfo } = useCv();

const getIcon = (icon: string): Component => {
	switch (icon) {
		case 'frontend':
			return Code;
		case 'backend':
			return Server;
		case 'solutions':
		default:
			return Layers;
	}
};

const formatIndex = (index: number): string => {
	return `0${index + 1}`.slice(-2);
};
</script>

<template>
	<section id="services" class="services">
		<!-- Encabezado de la sección -->
		<header class="services__header">
			<span class="services__badge">&lt;servicios /&gt;</span>
			<h2 class="services__title">
				Soluciones y <span>Servicios</span>
			</h2>
			<p class="services__description">
				Desarrollo de software de alto impacto y arquitectura de soluciones: desde interfaces interactivas modernas hasta plataformas y APIs empresariales escalables.
			</p>
		</header>

		<!-- Grilla de 3 columnas definida en sistemGridHome.scss -->
		<div class="grid-3-cols">
			<article
				v-for="(service, index) in cvInfo.services"
				:key="service.id"
				:class="['services__card', `area-col-${index + 1}`]"
			>
				<div class="services__card-top">
					<div class="services__card-icon-box">
						<component :is="getIcon(service.icon)" />
					</div>
					<span class="services__card-number">// {{ formatIndex(index) }}</span>
				</div>

				<div class="services__card-body">
					<h3 class="services__card-title">{{ service.title }}</h3>
					<p class="services__card-text">{{ service.description }}</p>
				</div>

				<div class="services__card-footer">
					<div class="services__card-tags">
						<span
							v-for="tag in service.tags"
							:key="tag"
							class="services__card-tag"
						>
							#{{ tag }}
						</span>
					</div>
				</div>
			</article>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@import url('@/styles/sistemGridHome.scss');
@import url('@/styles/services/services.scss');
</style>
