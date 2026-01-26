<template>
	<footer class="footer">
		<div class="footer__container">
			<!-- Sección principal con marca personal -->
			<div class="footer__brand">
				<h3 class="footer__logo">Santiago<span>Ceballos</span></h3>
				<p class="footer__tagline">Desarrollador Fullstack & Freelancer</p>
				<p class="footer__description">
					Transformando ideas en experiencias digitales únicas.
					Especializado en desarrollo web moderno y soluciones a medida.
				</p>
			</div>

			<!-- Links de navegación rápida -->
			<div class="footer__nav">
				<h4 class="footer__title">Navegación</h4>
				<ul class="footer__links">
					<li><a href="#inicio">Inicio</a></li>
					<li><a href="#sobremi">Sobre mí</a></li>
					<li><a href="#servicios">Servicios</a></li>
					<li><a href="#proyectos">Proyectos</a></li>
				</ul>
			</div>

			<!-- Servicios destacados -->
			<div class="footer__services">
				<h4 class="footer__title">Servicios</h4>
				<ul class="footer__links">
					<li>Desarrollo Web</li>
					<li>Aplicaciones Móviles</li>
					<li>Diseño UI/UX</li>
					<li>Consultoría Tech</li>
				</ul>
			</div>

			<!-- Redes sociales y contacto -->
			<div class="footer__social">
				<h4 class="footer__title">¡Conectemos!</h4>
				<div class="footer__social-links">
					<a href="https://github.com/santiagoCeballos08" target="_blank" class="social-link github"
						aria-label="GitHub">
						<font-awesome-icon :icon="['fab', 'github']" />
					</a>
					<a href="https://www.linkedin.com/in/santiago-ceballos-deossa-5410421b8/" target="_blank"
						class="social-link linkedin" aria-label="LinkedIn">
						<font-awesome-icon :icon="['fab', 'linkedin']" />
					</a>
					<a href="https://wa.link/7gzos8" target="_blank" class="social-link whatsapp" aria-label="WhatsApp">
						<font-awesome-icon :icon="['fab', 'whatsapp']" />
					</a>
				</div>
				<a href="mailto:sceballos180@gmail.com" class="footer__email">
					<font-awesome-icon :icon="['fas', 'envelope']" />
					sceballos180@gmail.com
				</a>
			</div>
		</div>

		<!-- Sección de CTA Freelancer -->
		<div class="footer__cta">
			<div class="footer__cta-content">
				<h3>¿Tienes un proyecto en mente?</h3>
				<p>Estoy disponible para proyectos freelance. ¡Hagamos realidad tu idea!</p>
				<a href="https://wa.link/7gzos8" target="_blank" class="footer__cta-btn">
					<font-awesome-icon :icon="['fab', 'whatsapp']" />
					Contáctame ahora
				</a>
			</div>
		</div>

		<!-- Copyright -->
		<div class="footer__bottom">
			<div class="footer__bottom-content">
				<p>© 2026 Santiago Ceballos. Todos los derechos reservados.</p>
				<p class="footer__made-with">
					Hecho con <span class="heart">❤</span> y mucho <span class="coffee">☕</span>
				</p>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
	background: linear-gradient(180deg, var(--scColorPricipal) 0%, #1a1a2e 100%);
	padding-top: 4rem;
	position: relative;
	overflow: hidden;
}

.footer::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 4px;
	background: linear-gradient(90deg, var(--scColorPinck), #6366f1, var(--scColorPinck));
	background-size: 200% 100%;
	animation: gradient-slide 3s ease infinite;
}

@keyframes gradient-slide {

	0%,
	100% {
		background-position: 0% 50%;
	}

	50% {
		background-position: 100% 50%;
	}
}

.footer__container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 2rem 3rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2.5rem;
}

@media (min-width: 768px) {
	.footer__container {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: 1024px) {
	.footer__container {
		grid-template-columns: 2fr 1fr 1fr 1.5fr;
	}
}

/* Marca personal */
.footer__brand {
	max-width: 350px;
}

.footer__logo {
	font-size: 2.4rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	color: var(--scColorBlanco);
}

.footer__logo span {
	color: var(--scColorPinck);
}

.footer__tagline {
	font-size: 1.4rem;
	color: var(--scColorPinck);
	font-weight: 600;
	margin-bottom: 1rem;
	text-transform: uppercase;
	letter-spacing: 1px;
}

.footer__description {
	font-size: 1.4rem;
	color: rgba(255, 255, 255, 0.7);
	line-height: 1.7;
}

/* Títulos de secciones */
.footer__title {
	font-size: 1.6rem;
	font-weight: 700;
	color: var(--scColorBlanco);
	margin-bottom: 1.5rem;
	position: relative;
	padding-bottom: 0.8rem;
}

.footer__title::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 40px;
	height: 3px;
	background: var(--scColorPinck);
	border-radius: 2px;
}

/* Links */
.footer__links {
	list-style: none;
	padding: 0;
	margin: 0;
}

.footer__links li {
	margin-bottom: 1rem;
	font-size: 1.4rem;
	color: rgba(255, 255, 255, 0.7);
}

.footer__links a {
	color: rgba(255, 255, 255, 0.7);
	text-decoration: none;
	transition: all 0.3s ease;
	position: relative;
}

.footer__links a::before {
	content: '';
	position: absolute;
	bottom: -2px;
	left: 0;
	width: 0;
	height: 2px;
	background: var(--scColorPinck);
	transition: width 0.3s ease;
}

.footer__links a:hover {
	color: var(--scColorPinck);
}

.footer__links a:hover::before {
	width: 100%;
}

/* Redes sociales */
.footer__social-links {
	display: flex;
	gap: 1rem;
	margin-bottom: 1.5rem;
}

.social-link {
	width: 45px;
	height: 45px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	color: var(--scColorBlanco);
	background: rgba(255, 255, 255, 0.1);
	border: 2px solid transparent;
	transition: all 0.3s ease;
}

.social-link:hover {
	transform: translateY(-5px);
}

.social-link.github:hover {
	background: #333;
	border-color: #333;
	box-shadow: 0 10px 25px rgba(51, 51, 51, 0.4);
}

.social-link.linkedin:hover {
	background: #0077b5;
	border-color: #0077b5;
	box-shadow: 0 10px 25px rgba(0, 119, 181, 0.4);
}

.social-link.whatsapp:hover {
	background: #25d366;
	border-color: #25d366;
	box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
}

.footer__email {
	display: inline-flex;
	align-items: center;
	gap: 0.8rem;
	color: rgba(255, 255, 255, 0.7);
	text-decoration: none;
	font-size: 1.4rem;
	transition: color 0.3s ease;
}

.footer__email:hover {
	color: var(--scColorPinck);
}

/* CTA Freelancer */
.footer__cta {
	background: linear-gradient(135deg, var(--scColorPinck) 0%, #6366f1 100%);
	padding: 3rem 2rem;
	margin: 2rem 0;
}

.footer__cta-content {
	max-width: 800px;
	margin: 0 auto;
	text-align: center;
}

.footer__cta-content h3 {
	font-size: 2.4rem;
	font-weight: 700;
	color: var(--scColorBlanco);
	margin-bottom: 0.8rem;
}

.footer__cta-content p {
	font-size: 1.5rem;
	color: rgba(255, 255, 255, 0.9);
	margin-bottom: 1.5rem;
}

.footer__cta-btn {
	display: inline-flex;
	align-items: center;
	gap: 0.8rem;
	background: var(--scColorBlanco);
	color: var(--scColorPinck);
	padding: 1.2rem 2.5rem;
	border-radius: 50px;
	font-size: 1.6rem;
	font-weight: 600;
	text-decoration: none;
	transition: all 0.3s ease;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.footer__cta-btn:hover {
	transform: translateY(-3px);
	box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* Bottom */
.footer__bottom {
	background: rgba(0, 0, 0, 0.3);
	padding: 1.5rem 2rem;
}

.footer__bottom-content {
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	text-align: center;
}

@media (min-width: 768px) {
	.footer__bottom-content {
		flex-direction: row;
		justify-content: space-between;
	}
}

.footer__bottom-content p {
	font-size: 1.3rem;
	color: rgba(255, 255, 255, 0.6);
	margin: 0;
}

.footer__made-with .heart {
	color: #ff4757;
	animation: pulse 1.5s ease infinite;
}

.footer__made-with .coffee {
	color: #f0932b;
}

@keyframes pulse {

	0%,
	100% {
		transform: scale(1);
	}

	50% {
		transform: scale(1.2);
	}
}
</style>
