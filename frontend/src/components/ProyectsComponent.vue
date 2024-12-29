<template>
	<div class="container mx-auto" id="proyects">
		<h1 class="uppercase text-center text-6xl font-bold mb-10 opacity-50">proyectos relevantes</h1>

		<section class="container__proyects p-8 md:p-0">
			<article class="proyects__card rounded-xl">
				<div class="card__img">
					<img src="https://placehold.co/400x300" alt="imagen de proyecto" class="w-full rounded-xl" />
				</div>
				<div class="card__info p-4">
					<h3 class="capitalize hover:underline font-bold">
						<a href="https://www.alcaldiasoacha.gov.co/">alcaldia de soacha</a>
					</h3>
					<div class="card__info__icons languaje-use">
						<span>
							<img src="" alt="icon tecnologia" />
						</span>
					</div>
				</div>
			</article>
			<article class="proyects__card rounded-xl">
				<div class="card__img">
					<img src="https://placehold.co/400x300" alt="imagen de proyecto" class="w-full rounded-xl" />
				</div>
				<div class="card__info p-4">
					<h3 class="capitalize hover:underline font-bold">
						<a href="https://app.credimas.us/mascredimas/credimas/informacionapp/publicidad_app.php"
							>Credimas app PWA</a
						>
					</h3>
					<div class="card__info__icons languaje-use">
						<span>
							<img src="" alt="icon tecnologia" />
						</span>
					</div>
				</div>
			</article>

			<article class="proyects__card rounded-xl">
				<div class="card__img">
					<img src="https://placehold.co/400x300" alt="imagen de proyecto" class="w-full rounded-xl" />
				</div>
				<div class="card__info p-4">
					<h3 class="capitalize hover:underline font-bold">
						<a href="nitrolix.com">nitrolix</a>
					</h3>
					<div class="card__info__icons languaje-use">
						<span>
							<img src="" alt="icon tecnologia" />
						</span>
					</div>
				</div>
			</article>
			<article class="proyects__card rounded-xl">
				<div class="card__img">
					<img src="https://placehold.co/400x300" alt="imagen de proyecto" class="w-full rounded-xl" />
				</div>
				<div class="card__info p-4">
					<h3 class="capitalize hover:underline font-bold">
						<a href="https://www.salma.com.co/">salma guro</a>
					</h3>
					<div class="card__info__icons languaje-use">
						<span>
							<img src="" alt="icon tecnologia" />
						</span>
					</div>
				</div>
			</article>
			<article class="proyects__card rounded-xl">
				<div class="card__img">
					<img src="https://placehold.co/400x300" alt="imagen de proyecto" class="w-full rounded-xl" />
				</div>
				<div class="card__info p-4">
					<h3 class="capitalize hover:underline font-bold">
						<a href="https://touris.world/login">touris</a>
					</h3>
					<div class="card__info__icons languaje-use">
						<span>
							<img src="" alt="icon tecnologia" />
						</span>
					</div>
				</div>
			</article>
			<article class="proyects__card rounded-xl">
				<div class="card__img">
					<img src="https://placehold.co/400x300" alt="imagen de proyecto" class="w-full rounded-xl" />
				</div>
				<div class="card__info p-4">
					<h3>name proyect</h3>
					<div class="card__info__icons languaje-use">
						<span>
							<img src="" alt="icon tecnologia" />
						</span>
					</div>
				</div>
			</article>
		</section>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	.container__proyects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
		gap: 2rem;

		.proyects__card {
			background-color: red;
		}
	}
</style>
