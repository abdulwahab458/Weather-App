console.log("lets write some javascript")
const apiID="81e7078b75aefa330242c73ebe7f086e"
const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
 
const searchbox= document.querySelector(".search input")
const searchbtn= document.querySelector(".search button")
const weathericn = document.querySelector(".weather-icon");


async function checkWeather(city) {
        const response = await fetch(apiURL+city+ `&appid=${apiID}`);
        const data = await response.json();  
        console.log(data);
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
        if(data.weather[0].main== "Clouds"){
            weathericn.src = "clouds.png";
        }
        else if(data.weather[0].main== "Clear"){
            weathericn.src = "clear.png";
        }
        else if(data.weather[0].main== "Rain"){
            weathericn.src = "rain.png";
        }
        else if(data.weather[0].main== "Drizzle"){
            weathericn.src = "drizzle.png";
        }
        
        
}

checkWeather();
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value)
}
)

