export var Navbar = Vue.component('nav-bar', {
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