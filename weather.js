///api key password///

const API_KEY="2356b6e4f30b768a9cbd96b3ef81b7a0";


///making a function of get weather to set fetch url//

getWeather=(city)=>{
const API_URL="https://api.openweathermap.org/data/2.5/weather";
const FULL_URL=`${API_URL}?q=${city}&appid=${API_KEY}`;
const cityPromise= fetch(FULL_URL);
 return cityPromise.then((response)=>{
 return response.json();
})
}


////////////function for search city an dinput 
searchcity=()=>{

let cityname=document.getElementById('city-id').value;
getWeather(cityname).then((response)=>{
console.log(response);
showweathercity(response);
}).catch((error)=>{
 console.log(error);
})

}


showweathercity=(weatherData)=>{

document.getElementById('city-name').innerText=weatherData.name;
document.getElementById('temp').innerText=weatherData.main.temp;
document.getElementById('min-temp').innerText=weatherData.main.temp_min;
document.getElementById('max-temp').innerText=weatherData.main.temp_max;
document.getElementById('weather').innerText=weatherData.weather[0].main;
}