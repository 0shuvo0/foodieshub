import { Imageslider } from "./Imageslider.js";
import { Authorinfo } from "./Authorinfo.js";
import { revealOnScroll } from "../utils.js";
export var Recipecard = Vue.component('recipe-card', {
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