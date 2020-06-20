import { Navbar } from "../components/Navbar.js";
import { revealOnScroll } from "../utils.js";
export var Homepage = Vue.component('home-page', {
	mounted: function(){
		revealOnScroll(".scroll-reveal");
	},
	template: `
	<div class="container">
		<section class="section banner-section">
			<div class="cell content">
				<h2 class="title">What are we about.</h2>
				<p class="info">WeGotSauce is a place where you can please your soul and tummy with delicious food recepies of all cuisine.</p>
				<a href="#" class="btn">Start Exploring</a>
			</div>
			<div class="cell">
				<div class="gallery">
					<img src="img/gallery-preview/img_10.jpg" alt="Galley image">
					<img src="img/gallery-preview/img_2.jpg" alt="Galley image">
					<img src="img/gallery-preview/img_3.jpg" alt="Galley image">
					<img src="img/gallery-preview/img_4.jpg" alt="Galley image">
					<img src="img/gallery-preview/img_5.jpg" alt="Galley image">
					<img src="img/gallery-preview/img_6.jpg" alt="Galley image">
					<img src="img/gallery-preview/img_7.jpg" alt="Galley image">
					<img src="img/gallery-preview/img_8.jpg" alt="Galley image">
					<img src="img/gallery-preview/img_9.jpg" alt="Galley image">
				</div>
			</div>
		</section>
		
		
		<section class="section">
			<div class="cell">
				<img src="img/gallery-preview/img_1.jpg" class="banner-img scroll-reveal" alt="Banner image">
			</div>
			<div class="cell content right">
				<h2 class="title">Improve your skills.</h2>
				<div class="info">
					<ul class="scroll-reveal">
						<li>Learn new recepies</li>
						<li>Experiment with food</li>
						<li>Write your own recepies</li>
						<li>Know nutrition facts</li>
						<li>Get cooking tips</li>
						<li>Get ranked</li>
					</ul>
				</div>
				<a href="#" class="btn">Signup now</a>
			</div>
		</section>
		
		
		<section class="section">
			<div class="quote scroll-reveal">
				<i class="fas fa-quote-left"></i>
				Food is everything we are. It's an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. It's inseparable from those from the get-go.
				<p class="by"> - Anthony Bourdain</p>
			</div>
		</section>
		
		
		<section class="top-cheifs-section">
			<h2 class="title">Our top Chiefs</h2>
			<div class="top-cheifs">
				<div class="top-cheif scroll-reveal">
					<div class="dp">
						<img src="img/top-chiefs-prev/img_1.jpg" alt="top chief image">
					</div>
					<div class="content">
						<p class="uid">Alexa Jame</p>
						<p class="info">Recepies: <span>05</span></p>
						<p class="info">Cuisine: <span>Japanese</span></p>
						<p class="info rating">Rating: <span>4.8</span></p>
					</div>
				</div>
				<div class="top-cheif scroll-reveal">
					<div class="dp">
						<img src="img/top-chiefs-prev/img_2.jpg" alt="top chief image">
					</div>
					<div class="content">
						<p class="uid">Anna Banana</p>
						<p class="info">Recepies: <span>03</span></p>
						<p class="info">Cuisine: <span>French</span></p>
						<p class="info rating">Rating: <span>5.0</span></p>
					</div>
				</div>
				<div class="top-cheif scroll-reveal">
					<div class="dp">
						<img src="img/top-chiefs-prev/img_3.jpg" alt="top chief image">
					</div>
					<div class="content">
						<p class="uid">Rebecca Den</p>
						<p class="info">Recepies: <span>13</span></p>
						<p class="info">Cuisine: <span>Chinese</span></p>
						<p class="info rating">Rating: <span>3.4</span></p>
					</div>
				</div>
				<div class="top-cheif scroll-reveal">
					<div class="dp">
						<img src="img/top-chiefs-prev/img_4.JPG" alt="top chief image">
					</div>
					<div class="content">
						<p class="uid">Alexa Jame</p>
						<p class="info">Recepies: <span>05</span></p>
						<p class="info">Cuisine: <span>Japanese</span></p>
						<p class="info rating">Rating: <span>4.8</span></p>
					</div>
				</div>
				<div class="top-cheif scroll-reveal">
					<div class="dp">
						<img src="img/top-chiefs-prev/img_5.JPG" alt="top chief image">
					</div>
					<div class="content">
						<p class="uid">Anna Banana</p>
						<p class="info">Recepies: <span>03</span></p>
						<p class="info">Cuisine: <span>French</span></p>
						<p class="info rating">Rating: <span>5.0</span></p>
					</div>
				</div>
				<div class="top-cheif scroll-reveal">
					<div class="dp">
						<img src="img/top-chiefs-prev/img_6.JPG" alt="top chief image">
					</div>
					<div class="content">
						<p class="uid">Rebecca Den</p>
						<p class="info">Recepies: <span>13</span></p>
						<p class="info">Cuisine: <span>Chinese</span></p>
						<p class="info rating">Rating: <span>3.4</span></p>
					</div>
				</div>
			</div>
		</section>
	</div>
	`
});