export var Radiobtns = Vue.component('radio-btns', {
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