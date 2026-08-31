<template>
	<div class="min-h-screen bg-slate-100 print:bg-white text-slate-800 font-sans py-10 px-4 print:p-0">
		<!-- Barra superior de control (Se oculta al imprimir) -->
		<div class="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
			<router-link to="/" class="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-2">
				← Volver al Inicio
			</router-link>
			<button @click="printCV"
				class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow transition-all cursor-pointer">
				🖨️ Imprimir / Guardar en PDF
			</button>
		</div>

		<!-- Contenedor del CV -->
		<main
			class="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-xl print:shadow-none print:max-w-full print:p-0 rounded-xl print:rounded-none border border-slate-200 print:border-none">

			<!-- Header -->
			<header
				class="border-b-2 border-slate-800 pb-6 mb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
				<div>
					<h1 class="text-3xl font-extrabold uppercase tracking-tight text-slate-900">
						{{ cvInfo.name }}
					</h1>
					<h2 class="text-xl font-semibold text-emerald-700 print:text-slate-700 mt-1">
						{{ cvInfo.title }}
					</h2>
				</div>
				<div class="text-xs sm:text-sm text-slate-600 space-y-1 sm:text-right">
					<p>📍 {{ cvInfo.location }}</p>
					<p>📧 {{ cvInfo.email }}</p>
					<p>📱 {{ cvInfo.phone }}</p>
				</div>
			</header>

			<!-- Sobre mí -->
			<section class="mb-6">
				<h3
					class="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
					Sobre Mí
				</h3>
				<p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
					{{ cvInfo.summary }}
				</p>
			</section>

			<!-- Experiencia Laboral -->
			<section class="mb-6">
				<h3
					class="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
					Experiencia Laboral
				</h3>
				<div class="space-y-4">
					<div v-for="(exp, index) in cvInfo.experiences" :key="index">
						<div class="flex justify-between items-baseline">
							<h4 class="text-sm font-bold text-slate-900">{{ exp.role }}</h4>
							<span class="text-xs font-semibold text-slate-500">{{ exp.period }}</span>
						</div>
						<p class="text-xs font-semibold text-emerald-700 print:text-slate-600 mb-1">{{ exp.company }}
						</p>
						<p class="text-xs text-slate-700 leading-relaxed">{{ exp.description }}</p>
					</div>
				</div>
			</section>

			<!-- Educación y Habilidades -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section>
					<h3
						class="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
						Educación
					</h3>
					<div class="space-y-3">
						<div v-for="(edu, index) in cvInfo.education" :key="index">
							<span class="text-xs font-bold text-slate-500 block">{{ edu.year }}</span>
							<h4 class="text-xs font-bold text-slate-900">{{ edu.degree }}</h4>
							<p class="text-xs text-slate-600">{{ edu.institution }}</p>
						</div>
					</div>
				</section>

				<section>
					<h3
						class="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
						Tecnologías & Habilidades
					</h3>
					<div class="flex flex-wrap gap-1.5">
						<span v-for="tech in cvInfo.techSkills" :key="tech"
							class="px-2 py-0.5 bg-slate-100 print:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-medium rounded">
							{{ tech }}
						</span>
					</div>
				</section>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
import { useCv } from '../composables/useCv';

const { cvInfo, printCV } = useCv();
</script>

<style scoped>
@media print {
	@page {
		margin: 1.2cm;
	}
}
</style>