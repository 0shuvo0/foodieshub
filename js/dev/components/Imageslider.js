export var Imageslider = Vue.component('image-slider', {
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