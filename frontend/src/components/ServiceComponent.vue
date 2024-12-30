<template>
	<div class="min-h-[50vh]" id="service">
		<div class="container mx-auto p-4">
			<h1 class="uppercase text-center text-6xl font-bold mb-10 opacity-50 shadow-md">
				servicios y herramientas
			</h1>

			<p class="text-center max-w-[60rem] mx-auto mb-10">
				Durante mis tres años de experiencia en desarrollo, he proporcionado soluciones utilizando diversas
				tecnologías, lo que me ha permitido adquirir y fortalecer distintas habilidades.
			</p>

			<div class="flex w-full items-center justify-center">
				<div class="grid w-full gap-10 p-2 grid-cols-1 md:grid-cols-3 md:grid-rows-5 min-h-[50rem]">
					<div
						class="md:col-span-1 md:row-span-4 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
						1
					</div>

					<div
						class="md:col-span-1 md:row-span-3 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
						2
					</div>

					<div
						class="md:col-span-1 md:row-span-2 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
						3
					</div>

					<div
						class="md:col-span-1 md:row-span-2 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
						4
					</div>

					<div
						class="md:col-span-1 md:row-span-3 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
						5
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
	#service {
		background: linear-gradient(0deg, hsla(238, 38%, 19%, 0.747) 10%, hsla(238, 38%, 19%, 0.767) 100%),
			url(../assets/img/fondo_tuercas.svg);
		background-size: cover;
	}
</style>
