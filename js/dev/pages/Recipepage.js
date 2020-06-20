import { Imageslider } from "../components/Imageslider.js";
import { Authorinfo } from "../components/Authorinfo.js";
export var Recipepage = Vue.component('recipe-page', {
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