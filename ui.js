class UI {
    constructor() {
        this.state = document.querySelector('.state');
        this.temperature = document.querySelector('.temperature');
        this.icon = document.querySelector('.icon');
        this.description = document.querySelector('.description');
        this.humidity = document.querySelector('.humidity');
        this.wind = document.querySelector('.wind');
    }
    displayWeather(data) {
        this.state.textContent = `Weather in ${data.name} ${data.sys.country}`;
        this.temperature.textContent = `${data.main.temp}°C`;
        this.icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        this.description.textContent = `${data.weather[0].description}`;
        this.humidity.textContent = `Humidity: ${data.main.humidity}%`;
        this.wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
        document.querySelector('.weather').classList.remove("loading")
    }
    
} 