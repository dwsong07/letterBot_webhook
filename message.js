const {
    location: { home, star },
} = require("./config");
const weather = require("./weather");
const moon = require("./moon");

module.exports = async () => {
    const date = new Date().toLocaleDateString("ko-KR", {
        timeZone: "Asia/Seoul",
    });

    const message = {
        content: `${date} 편지 왔숑`,
        embeds: [],
    };

    const { weatherDescription, weatherIconUrl, temperture } = await weather();

    message.embeds.push({
        title: "집 날씨",
        image: {
            url: weatherIconUrl,
        },
        fields: [
            {
                name: "날씨",
                value: `${weatherDescription}`,
                inline: true,
            },
            {
                name: "온도",
                value: `${temperture}°C`,
                inline: true,
            },
        ],
    });

    message.embeds.push({
        title: "관측지 날씨",
        image: {
            url: `http://clearoutside.com/forecast_image_medium/${star[0]}/${star[1]}/forecast.png`,
        },
    });

    message.embeds.push({
        title: "달",
        description: `${moon.phase()} ${Math.round(moon.age)}일`,
    });
    console.log(message);
    return message;
};
