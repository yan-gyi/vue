const smallData = {
	title : "Anatomy",
	author : "Doctor",
	age : 50,
	
}

//const increaseAge  = function(){alert("hi")};
//console.log(increaseAge());
const mtds = {
		increaseAge(age){this.age++},
	}
const data = {
	//template : " My name is Yan Myo Aung. ",
	data : function(){ return smallData},
	methods : mtds,
}	

const app = Vue.createApp(data);

app.mount("#app");

//console.log(app)

