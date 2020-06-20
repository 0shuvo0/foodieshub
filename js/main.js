var Navbar = Vue.component('nav-bar', {
	data: function(){
		return {
			showNavbar: false,
			links: [
				{
					title: "Home",
					path: "/",
					icon: "fa-home"
				},
				{
					title: "Recipes",
					path: "/recipes",
					icon: "fa-list"
				},
				{
					title: "Tips",
					path: "/tips",
					icon: "fa-star"
				},
				{
					title: "Infos",
					path: "/infos",
					icon: "fa-info"
				},
				{
					title: "Settings",
					path: "/settings",
					icon: "fa-cogs"
				}
			]
		}
	},
	template: `
<div>
	<header class="navbar container">
		<router-link to="/" class="brand"><span>F</span>oo<span>diesHub</span></router-link>
		<nav class="nav">
			<router-link class="nav-link" v-for="(link, key) in links" :key="key" :to="link.path" :class="{ active: link.path === $route.path }">{{ link.title }}</router-link>
		</nav>
		<div class="toggle-btn" :class="{active: showNavbar}" @click="showNavbar = true">
			<div class="bar a"></div>
			<div class="bar b"></div>
			<div class="bar c"></div>
		</div>
	</header>
	
	<div class="side-menu-wrapper" :class="{active: showNavbar}" @click="showNavbar = false">
		<div class="side-menu">
			<router-link class="menu-item" v-for="(link, key) in links" :key="key" :to="link.path" :class="{ active: link.path === $route.path }">
				<i class="fas" :class="link.icon"></i> {{ link.title }}
			</router-link>
		</div>
	</div>
</div>
	`
});

function addObserver(el, ops){
	var observer = new IntersectionObserver(function (entries, observer){
		entries.forEach(function (entry){
			if(entry.isIntersecting){
				entry.target.classList.add('active');
				observer.unobserve(entry.target);
			}
		});
	}, ops);
	observer.observe(el);
}

function revealOnScroll(selector, ops = {rootMargin: "0px 0px -100px 0px"}){
	var els = document.querySelectorAll(selector);
	for(var i = 0; i < els.length; i++){
		var el = els[i];
		addObserver(el, ops);
	}
}

function getSettingsModel(){
	return {
			themeIsLight: true,
			colorIs: "#FF0056",
			themes: {
				light: {
					background: "#fff",
					dark: "#fff",
					light: "#fff",
					text: "#0A0A0A",
					"text-light": "#575757",
					shadow: "rgba(0, 0, 0, 0.1)",
					"shadow-dark": "rgba(0, 0, 0, 0.1)"
				},
				dark: {
					background: "#2F2F2F",
					dark: "#131313",
					light: "#1A1A1A",
					text: "#fff",
					"text-light": "#F0F0F0",
					shadow: "rgba(255, 255, 255, 0.05)",
					"shadow-dark": "rgba(0, 0, 0, 0.2)"
				}
			},
			primaryColor: [
				{primary: "#FF0056", "primary-dark": "#E1004D"},
				{primary: "#2196f3", "primary-dark": "#1C83D3"},
				{primary: "#ffc107", "primary-dark": "#E1AA05"},
				{primary: "#00c853", "primary-dark": "#00A946"},
				{primary: "#9c27b0", "primary-dark": "#7E1F8E"}
			],
			fontSizeSelectBtns: {
				btns: [
					{
						title: "Large",
						value: "1.2rem"
					},
					{
						title: "Medium",
						value: "1rem"
					},
					{
						title: "small",
						value: "0.8rem"
					}
				],
				value: "1rem"
			},
			animationSpeedBtns: {
				btns: [
					{
						title: "Slow",
						value: "0.6s"
					},
					{
						title: "Normal",
						value: "0.3s"
					},
					{
						title: "Fast",
						value: "0.1s"
					}
				],
				value: "0.3s"
			}
		}
}

function initSettings(settings){
	t = localStorage.getItem("foodieshub_settings");
	if(!t) return;
	try{
		var settings = JSON.parse(t);
		applyTheme(settings);
	}catch(err){
		var settings = getSettingsModel();
		applyTheme(settings);
	}
}

function applyTheme(s){
	var light = s.themeIsLight;
	
	var themes = s.themes;
	var theme = light? themes.light : themes.dark;
	for(var prop in theme){
		document.documentElement.style.setProperty('--' + prop, theme[prop]);
	}
	
	var clr = s.primaryColor.find(function(e){ return e.primary === s.colorIs });
	document.documentElement.style.setProperty('--primary', clr.primary);
	document.documentElement.style.setProperty('--primary-dark', clr["primary-dark"]);
	
	document.documentElement.style.setProperty('--font-size', s.fontSizeSelectBtns.value);
	
	document.documentElement.style.setProperty('--animation-speed', s.animationSpeedBtns.value);
}

var Homepage = Vue.component('home-page', {
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

var Searchform = Vue.component('search-form', {
	data: function(){
		return {
			prevSearches: ["pizza", "burger", "cookies", "juice", "biriyani", "salad", "ice cream", "lasagna", "pudding", "soup"],
			searchText: "",
			suggestions: []
		} 
	},
	methods: {
		handleSubmit: function(){
			this.$emit('searched', this.searchText);
		}
	},
	template: `
		<div class="search-section">
			<div v-if="prevSearches.length > 0">
				<h2 class="title">Previous serarches</h2>
				<div class="prev-searches">
					<span class="prev-search" v-for="(search, index) in prevSearches" :key="prevSearches" @click="searchText = search">{{ search }}</span>
				</div>
			</div>
			<div class="search-box">
				<div class="search-form">
					<form method="post" class="form" @submit.prevent="handleSubmit()">
						<input type="text" placeholder="Search ..." v-model="searchText">
						<button type="submit"><i class="fas fa-search"></i></button>
					</form>
					<ul class="suggestions" v-if="suggestions.length > 0">
						<li class="suggestion" v-for="(suggestion, index) in suggestions" :key="index" @click="searchText = suggestion"><span>{{ suggestion }}</span><i class="fas fa-arrow-left"></i></li>
					</ul>
				</div>
			</div>
		</div>
	`
});

var Imageslider = Vue.component('image-slider', {
	props: ['slides'],
	data: function(){
		return {
			current: 0
		}
	},
	computed: {
		length: function(){
			return this.slides.length
		}
	},
	template: `
		<div class="image-slider">
			<div class="slider-box" :style="{width: (length * 100) + '%', left: (current * -100) + '%'}">
				<img alt="Recipe image" v-for="(slide, index) in slides" :key="index" :src="'img/gallery-preview/' + slide" :style="{width: 100 / length + '%'}">
			</div>
			<div class="ctrl">
				<i class="fas fa-angle-left" @click="current > 0 && current--"></i>
				<span>{{ (current + 1) + "/" + length}}</span>
				<i class="fas fa-angle-right" @click="current < (length - 1) && current++"></i>
			</div>
		<div>
	`
});

var Authorinfo = Vue.component('author-info', {
	template: `
		<div class="author-section">
			<img src="file:///storage/emulated/0/www/pisland/img/top-chiefs-prev/img_5.JPG" class="dp" alt="FoodiesHub user profile picture">
			<div class="info">
				<a href="#" class="name">John Smith</a>
				<span class="post-date">05th June 2020</span>
			</div>
		</div>
	`
});

var Recipecard = Vue.component('recipe-card', {
	data: function(){
		return {
			images: ["img_5.jpg", "img_3.jpg", "img_2.jpg", "img_1.jpg", "img_4.jpg", "img_7.jpg", "img_8.jpg", "img_9.jpg", "img_6.jpg"]
		}
	},
	mounted: function(){
		revealOnScroll(".scroll-reveal");
	},
	template: `
		<div class="recipe-card scroll-reveal">
			<author-info></author-info>
			<router-link to="/recipes/57" title="view recipe" class="recipe-title">
				American cheese burger
			</router-link>
			<image-slider :slides="images"></image-slider>
			<div class="react-ctrl">
				<p class="ctrl react" @click.stop="alert(0)"><i class="fas fa-heart active"></i> 303 reacts</a>
				<p class="ctrl"><i class="fas fa-comment"></i> 78 comment</a>
			</div>
			<!--
			<form class="comment-form" method="post">
				<textarea class="input" placeholder="Say something ..."></textarea>
				<button type="submit"><i class="fas fa-paper-plane"></i></button>
			</form>
			-->
		</div>
	`
});

var Recipespage = Vue.component('recipes-page', {
	methods: {
		searchRecipes: function(v){
			alert(v);
		}
	},
	template: `
<div class="container">
	<search-form @searched="searchRecipes"></search-form>
	<div class="recipes-container">
		<recipe-card></recipe-card>
		<recipe-card></recipe-card>
		<recipe-card></recipe-card>
		<recipe-card></recipe-card>
	</div>
</div>
	`
});

var Recipepage = Vue.component('recipe-page', {
	data: function(){
		return {
			images: ["img_5.jpg", "img_3.jpg", "img_2.jpg", "img_1.jpg", "img_4.jpg", "img_7.jpg", "img_8.jpg", "img_9.jpg", "img_6.jpg"]
		}
	},
	template: `
		<div class="container">
			<div class="recipe-info">
				<image-slider :slides="images"></image-slider>
				<div class="infos">
					<p class="fid">American Cheese Burger</p>
					<p class="info">Total ingredients: 5</p>
					<p class="info">Time takes to cook: 30 Minutes</p>
					<p class="info">Type: Fast Food</p>
					<p class="info">Tasts: Spicy</p>
					<author-info></author-info>
				</div>
			</div>
		</div>
	`
});

var Radiobtns = Vue.component('radio-btns', {
	props: ['btns', 'value', 'callback'],
	methods: {
		changeSelected: function(v){
			this.selected = v;
			this.callback(v);
		}
	},
	data: function(){
		return {
			selected: this.value
		}
	},
	template: `
		<div class="options">
			<button class="btn" v-for="(btn, index) in btns" :key="index" :class="{ active: btn.value === selected }" @click="changeSelected(btn.value)">{{ btn.title }} <i class="fas fa-check"></i></button>
		</div>
	`
});

var Settingspage = Vue.component('settings-page', {
	data: function(){
		return { settings: JSON.parse(localStorage.getItem("foodieshub_settings")) || getSettingsModel()}
	},
	mounted: function(){
		try{
			this.applyTheme();
		}catch(err){
			this.settings = getSettingsModel();
			this.applyTheme();
		}
	},
	methods: {
		saveModel: function(){
			localStorage.setItem("foodieshub_settings", JSON.stringify(this.settings));
		},
		applyTheme: function(){
			var s = this.settings;
			
			var light = s.themeIsLight;
			var themes = s.themes;
			this.changeTheme(light ? themes.light : themes.dark);
			
			var c = s.colorIs;
			this.changeTheme(s.primaryColor.find(function(e){ return e.primary === c }));
			
			this.changeTextSize(s.fontSizeSelectBtns.value);
			
			this.changeAnimationSpeed(s.animationSpeedBtns.value);
		},
		changeTheme: function(theme){
			for(var prop in theme){
				document.documentElement.style.setProperty('--' + prop, theme[prop]);
			}
			this.saveModel();
		},
		changeTextSize: function(fs){
			document.documentElement.style.setProperty('--font-size', fs);
			this.settings.fontSizeSelectBtns.value = fs;
			this.saveModel();
		},
		changeAnimationSpeed: function(as){
			document.documentElement.style.setProperty('--animation-speed', as);
			this.settings.animationSpeedBtns.value = as;
			this.saveModel();
		}
	},
	template: `
<div class="container">
	<section class="section settings-section">
		<h2 class="title">preferred theme</h2>
		<div class="options">
			<div class="option highlight" :style="{backgroundColor: settings.themes.light.background}" :class="{active: settings.themeIsLight}" @click="settings.themeIsLight = true, changeTheme(settings.themes.light)">
				<i class="fas fa-check"></i>
			</div>
			<div class="option highlight" :style="{backgroundColor: settings.themes.dark.background}" :class="{active: !settings.themeIsLight}" @click="settings.themeIsLight = false, changeTheme(settings.themes.dark)">
				<i class="fas fa-check"></i>
			</div>
		</div>
		<h2 class="title">primary color</h2>
		<div class="options">
			<div class="option" v-for="(color, key) in settings.primaryColor" :key="key" :style="{ backgroundColor: color.primary }" :class="{ active: settings.colorIs === color.primary }" @click="settings.colorIs = color.primary, changeTheme(color)">
				<i class="fas fa-check"></i>
			</div>
		</div>
		<h2 class="title">Font size</h2>
		<radio-btns :btns="settings.fontSizeSelectBtns.btns" :value="settings.fontSizeSelectBtns.value" :callback="changeTextSize"></radio-btns>
		<h2 class="title">Animation speed</h2>
		<radio-btns :btns="settings.animationSpeedBtns.btns" :value="settings.animationSpeedBtns.value" :callback="changeAnimationSpeed"></radio-btns>
	</section>
</div>
	`
});

var routes = [
	{ path: '/', component: Homepage, name: 'homepage' },
	{ path: '/recipes', component: Recipespage, name: 'recipespage' },
	{ path: '/recipes/:id', component: Recipepage, name: 'recipepage' },
	{ path: '/settings', component: Settingspage, name: 'settingspage' }
];

var router = new VueRouter({
	routes: routes,
});

initSettings();

var app = new Vue({
	router: router,
	el: "#app"
});
