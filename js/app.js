const smallData = {
	
	books : [
		{
			title : "Anatomy",
			author : "Yan Gyi",
			age : 25,
		},
		{
			title : "BC",
			author: "Shin Moe Oo",
			age : 20,
		},
		{
			title : "Physiology",
			author : "Shinn Mon Latt",
			age : 21,
		},
	],
	showBook : true,
	link : "http://www.google.com",
};


//const increaseAge  = function(){alert("hi")};
//console.log(increaseAge());
const methods = {
		increaseAge(age){this.age++},
		mouseoverHandler(event, dta) {console.log("This is mouseover", event, dta)},
		mouseleaveHandler() {console.log("This is mouseleave", event.type)},
		doubleclick() {console.log("this is double click")},
	}

const data = {
	//template : " My name is Yan Myo Aung. ",
	data(){ return smallData},
	methods,
}	


const app = Vue.createApp(data);

app.mount("#app");

//console.log(app)

