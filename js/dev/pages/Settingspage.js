import { Radiobtns } from "../components/Radiobtns.js";
import { getSettingsModel } from "../utils.js";
export var Settingspage = Vue.component('settings-page', {
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
			localStorage.setItem("foodieshub_settings", JSON.stringify(this.settings))
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