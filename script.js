let input=document.querySelector(".search");
let btn=document.querySelector("#button");
let degree=document.querySelector(".degree");
let desc=document.querySelector(".description");
let humidity=document.querySelector(".hmd");
let wind=document.querySelector(".wind-speed");
let img=document.querySelector(".image");

btn.addEventListener("click",()=>{
    let city=input.value;
    getWeather(city);
})



async function getWeather(city){
    const key="caa8b4c42c4ee95300f7b34a01cc7f4e";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    let res=await axios.get(url,key);
    console.log(res);

    if(res.data.cod==404){
        document.querySelector(".location-not-found").style.display="flex";
    }
    if(res.data.cod==200){
        document.querySelector(".weather-box").style.display="flex";
        degree.innerText=`${Math.round(res.data.main.temp-273.15)}°C`
        desc.innerText=`${res.data.weather[0].description}`;
        humidity.innerText=`${res.data.main.humidity}%`;
        wind.innerText=`${res.data.wind.speed}Km/H`;
        
        switch(res.data.weather[0].description){
            case 'clouds':
                img.src = "/assets/cloud.png";
                break;
            case 'clear':
                img.src = "/assets/clear.png";
                break;
            case 'rain':
                img.src = "/assets/rain.png";
                break;
            case 'mist':
                img.src = "/assets/mist.png";
                break;
            case 'snow':
                img.src = "/assets/snow.png";
                break;
        }
    }
}


