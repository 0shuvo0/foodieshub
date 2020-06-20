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

export function revealOnScroll(selector, ops = {rootMargin: "0px 0px -100px 0px"}){
	var els = document.querySelectorAll(selector);
	for(var i = 0; i < els.length; i++){
		var el = els[i];
		addObserver(el, ops);
	}
}

export function getSettingsModel(){
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

export function initSettings(settings){
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
	
	var clr = s.primaryColor.find(function(e){ return e.primary === s.colorIs })
	document.documentElement.style.setProperty('--primary', clr.primary);
	document.documentElement.style.setProperty('--primary-dark', clr["primary-dark"]);
	
	document.documentElement.style.setProperty('--font-size', s.fontSizeSelectBtns.value);
	
	document.documentElement.style.setProperty('--animation-speed', s.animationSpeedBtns.value);
}