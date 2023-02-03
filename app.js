const citySearchInput = document.getElementById('city-search-input')
const citySearchButton = document.getElementById('city-search-button')

const currentDate = document.getElementById('current-date')
const cityName = document.getElementById('city-name')
const weatherIcon = document.getElementById('weather-icon')
const weatherDescription = document.getElementById('weather-description')
const currentTemperature = document.getElementById('current-temperature')
const windSpeed = document.getElementById('wind-speed')
const feelsLikeTemperature = document.getElementById('feels-like-temperature')
const currentHumidity = document.getElementById('current-humidity')
const sunriseTime = document.getElementById('sunrise-time')
const sunsetTime = document.getElementById('sunset-time')


citySearchButton.addEventListener('click', () => {

    let cityName = citySearchInput.value
    getCityWeather(cityName)

})

const apiKey = 'dece10af97249edc370df64f10eea680'
// https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${api_key}
function getCityWeather(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => displayWeather(data))
}

function displayWeather(data) {

}


