class Weather {
    constructor() {
        this.apikey = '4854061ad7c9581ff6165287dbe35aa6';
    }
    async getWeather(state) {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid=${this.apikey}`);

        const weather = await weatherResponse.json();

        return weather;
    }
}