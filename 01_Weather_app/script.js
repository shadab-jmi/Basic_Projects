const apiKey = '49abc3ed7454e5b62ad675e67476fbe3'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')

async function getWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`)
        if(!response.ok){
            throw new Error("Failed to fetch weather data");
        }
        const data = await response.json()
        console.log(data)
        document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`
        document.querySelector('.city').innerHTML = `${data.name}`
        document.querySelector('.humid-per').innerHTML = `${data.main.humidity}%`
        document.querySelector('.Wind-speed').innerHTML = `${data.wind.speed}m/s`

        if(data.weather[0].main == 'Snow'){
            weatherIcon.src = 'images/snow.png'
        }else if(data.weather[0].main == 'Wind'){
            weatherIcon.src = 'images/wind.png'
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = 'images/rain.png'
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = 'images/mist.png'
        }
        else if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = 'images/clouds.png'
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = 'images/drizzle.png'
        }else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = 'images/clear.png'
        }

        document.querySelector('.weather').style.display = 'block';

    } catch (error) {
        console.log('Error fetching the data', error)
    }
}

searchBtn.addEventListener('click',()=>{
    getWeather(searchInput.value);
    searchInput.value =''
})
