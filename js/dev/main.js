import { Homepage } from "./pages/Homepage.js";
import { Recipespage } from "./pages/Recipespage.js";
import { Recipepage } from "./pages/Recipepage.js";
import { Settingspage } from "./pages/Settingspage.js";


import { initSettings } from "./utils.js";

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