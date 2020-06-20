import { Searchform } from "../components/Searchform.js";
import { Recipecard } from "../components/Recipecard.js";

export var Recipespage = Vue.component('recipes-page', {
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