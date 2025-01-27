<template>
	<section class="contendor__hero__benner flex flex-col items-center mt-20 lg:mt-52 mb-12">
		<div class="contendor__banner">
			<div class="seccion__info">
				<div class="title__banner">
					<h1 class="font-bold">desarrollador</h1>
					<h2 class="font-bold">fullstack</h2>
					<p class="sl__1 opacity-50">Desarrollo con pasión y amor</p>
				</div>
				<div class="contenedor__info">
					<div class="contenedor__nombre xl:flex md:gap-x-3">
						<h2 class="sl__text">santiago</h2>
						<h2 class="sl__text">ceballos deossa</h2>
					</div>
					<div class="contenedor__toggle__words flex gap-x-4 md:gap-x-12 md:text-3xl capitalize opacity-50">
						<p>diseño</p>
						<p>desarrollo</p>
						<p>creación</p>
						<p>innovación</p>
					</div>
				</div>
				<div class="btn__sobre_mi flex justify-center flex-col">
					<div class="contenedor__redes__sociales flex justify-center md:justify-start gap-y-12">
						<div class="redes">
							<a href="https://github.com/santiagoCeballos08" target="_blank">
								<div class="contendor_img">
									<img src="../assets/img/github.png" alt="icon githhub" />
								</div>
							</a>
						</div>
						<div class="redes">
							<a href="https://wa.link/7gzos8" target="_blank">
								<div class="contendor_img">
									<img src="../assets/img/wapp.png" alt="icon whatsapp" />
								</div>
							</a>
						</div>
						<div class="redes">
							<a href="https://www.linkedin.com/in/santiago-ceballos-deossa-5410421b8/" target="_blank">
								<div class="contendor_img">
									<img src="../assets/img/ling.png" alt="icon linkedig" />
								</div>
							</a>
						</div>
					</div>
					<a
						href="#sobremi"
						class="btn btn__me self-center md:self-start shadow-md hover:translate-y-[-0.5rem] transition-all mt-20"
						>sobre mi</a
					>
				</div>
			</div>
			<div class="seccion__img_contenedor md:flex md:justify-center md:items-center hidden">
				<div class="circular__image">
					<img src="../assets/img/banner_programing.svg" alt="boy programing" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
