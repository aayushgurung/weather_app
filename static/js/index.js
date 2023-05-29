let weatherContainer=document.querySelector('.weather-container');
let weatherIcon = document.querySelector('#weather-icon');

let weather={
    apiKey:"b8176b468ae94689ad7140535232305",
    fetchWeather:function(city){
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=3&aqi=yes&alerts=yes`)
        .then((response)=> response.json())
        .then((data)=> this.displayWeather(data));
        console.log('inside fetchWeatehr');
    },
    displayWeather:function(data){
        const { name }=data.location;
        const { temp_c }=data.current;
        const { icon, text }=data.current.condition;
        const { humidity } = data.current;
        const { wind_kph }=data.current;
        console.log(name,temp_c,icon,text,humidity,wind_kph);
        document.querySelector("#city").innerText=name;
        document.querySelector("#weather-icon").src=this.iconSet(text);
        document.querySelector("#degree").innerText=temp_c+"°C";
        document.querySelector(".humidity").innerText=humidity+"%";
        document.querySelector(".wind").innerText=wind_kph+"km/h";
        document.querySelector("#text").innerText=text;
        // document.querySelector("#weather-icon").src='./static/images/sunny.png';
    },
    iconSet:function(text){
        if (text.toLowerCase() == 'sunny'){
            weatherContainer.style.backgroundImage = 'linear-gradient(to bottom, #FFBE94, #F9E177)';
            return './static/images/sunny.png'
        }
        else if(text.toLowerCase()=='cloudy'){
            weatherContainer.style.backgroundImage = 'linear-gradient(to bottom, #72EFEE, #6EFAE6)';
            return './static/images/partial_cloudy.png'
        }
        else if(text.toLowerCase()=='partly cloudy'){
            weatherContainer.style.backgroundImage = 'linear-gradient(to bottom, #72EFEE, #6EFAE6)';
            return './static/images/partial_cloudy.png'
        }
        else if(text.toLowerCase()=='mist'){
            weatherContainer.style.backgroundImage = 'linear-gradient(to bottom, #72EFEE, #6EFAE6)';
            return './static/images/mist.png'
        }
        else if(text.toLowerCase()=='overcast'){
            weatherContainer.style.backgroundImage = 'linear-gradient(to bottom, #5BE4FE, #5ACBF9)';
            return './static/images/humidity.png'
        }
        else if(text.toLowerCase()=='light drizzle' ){
            weatherContainer.style.backgroundImage = 'linear-gradient(to bottom, #5BE4FE, #5ACBF9)';
            return './static/images/patchy_rain_possible.png'
        }
        else if(text.toLowerCase()=='patchy rain nearby'){
            weatherContainer.style.backgroundImage = 'linear-gradient(to bottom, #5BE4FE, #5ACBF9)';
            return './static/images/rain.png'
        }
        else if(text.toLowerCase()=='blowing snow'){
            weatherContainer.style.backgroundImage = 'linear-gradient(to bottom, #5BE4FE, #5ACBF9)';
            return './static/images/snow.png'
        }
        else{
            weatherContainer.style.backgroundImage = 'linear-gradient(to bottom, #5BE4FE, #5ACBF9)';
            return './static/images/partial_cloudy.png'
        }
        
    }
};

let searchInput=document.querySelector('.search .search-placeholder');
let searchBtn=document.querySelector('.search .search-btn');

searchBtn.addEventListener('click',()=>{
    weather.fetchWeather(searchInput.value);
    console.log('btn working');
})

gsap.to(weatherIcon, {
  y: '-=3', 
  yoyo: true, 
  repeat: -1, 
  ease: 'power1.inOut', 
  duration: 1 
});