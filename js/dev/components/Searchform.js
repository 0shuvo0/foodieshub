export var Searchform = Vue.component('search-form', {
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