// api -> tusgai beldsen data g holboh
// fetch(link/url)->api holboh func
// status => 200 approved
// .json() => zambaraagui datag boginsogdog
// [0]-> massive
fetch('https://fakestoreapi.com/products').then(
	response => response.json()
).then(
	data => {
		console.log(data[0]);
		console.log(data[data.length-1].rating.count);
	}
);
fetch('https://fakestoreapi.com/users').then(
	response => response.json()
).then(
	firstname => {
		console.log(firstname[0].name.firstname);
	}
);

let search = document.getElementsByTagName('input')[0];
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let wind = document.querySelector('.wind');
let temp = document.querySelector('.temp');
let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click',()=>{
	let city = search.value;
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
	response => response.json()
).then(
	tsagagaar =>{
		name.innerText=tsagagaar.name;
		temp.innerText=tsagagaar.main.temp;
		wind.innerText=tsagagaar.wind.speed;
		desc.innerText=tsagagaar.weather[0].description;
		console.log(tsagagaar.weather[0].main);
		if(tsagagaar.weather[0].main=="Rain"){
			document.getElementsByTagName('img')[0].src="https://th.bing.com/th/id/OIP.tN9m6yQJzK6wLilJSGHmvQHaHT?rs=1&pid=ImgDetMain";
		}else if(tsagagaar.weather[0].main=="Sunny"){
			document.getElementsByTagName('img')[0].src="https://www.clipartmax.com/png/middle/24-248320_sunny-weather-symbol-transparent.png";
		}else if(tsagagaar.weather[0].main=="Clear"){
			document.getElementsByTagName('img')[0].src="https://th.bing.com/th/id/OIP.cOXU-NT3gzSpUWA9j5xcBQHaHa?rs=1&pid=ImgDetMain";
		}else if(tsagagaar.weather[0].main=="Clouds"){
			document.getElementsByTagName('img')[0].src="https://th.bing.com/th/id/OIP.OUM27NXTvDbj8RXaBA32qwHaHE?rs=1&pid=ImgDetMain";
		}else if(tsagagaar.weather[0].main=="Snow"){
			document.getElementsByTagName('img')[0].src="https://th.bing.com/th/id/OIP.dEOx_RX_negJHPK2p3AuoAHaHa?rs=1&pid=ImgDetMain";
		}
		//  baihgui uls bol baihgui gej garch ireh	
	}
);
