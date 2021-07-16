const smallData = {
	title : "Anatomy",
	author : "Doctor",
	age : 50,
}

 const data = {
	//template : " My name is Yan Myo Aung. ",
	data : function(){ return smallData},
}	


const app = Vue.createApp(data);

app.mount("#app");

//console.log(app)
