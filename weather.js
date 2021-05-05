const fetch = require("node-fetch");
const config = require("./config");
const weatherData = require("./weatherData.json");

// get weather with openweathermap
module.exports = async () => {
    const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=37.38&lon=127.14&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );
    const data = await res.json();

    // the day icon is "XXd" and night one is "XXn"
    // This code is to return only day icon.
    const icon = data.weather[0].icon.slice(0, -1) + "d";

    return {
        weatherDescription: weatherData[data.weather[0].id],
        weatherIconUrl: `http://openweathermap.org/img/wn/${icon}.png`,
        temperture: data.main.temp,
    };
};
