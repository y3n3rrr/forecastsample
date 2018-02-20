export default {
    theme: "light",
    type: "serial",
    startDuration: 2,
    dataProvider: [],
    graphs: [{
        balloonText: "Temperature([[temp]]): [[value]]</b>",
        fillColorsField: "color",
        fillAlphas: 1,
        lineAlpha: 0.1,
        type: "column",
        valueField: "visits"
    }],
    depth3D: 20,
    angle: 30,
    chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
    },
    categoryField: "country",
    categoryAxis: {
        gridPosition: "start",
        labelRotation: 45
    },
    export: {
        enabled: true
    }
}

export const weather_images = { "Sunny": "Sunny.png", "Cloudy": "Cloudy.png", "PartlyCloudy": "Partly Cloudy.png", "MostlyCloudy": "Mostly Cloudy.png", "MostlySunny": "Mostly Sunny.png", "RainAndSnow": "Rain And Snow.png", "RainAndSunny": "Rain And Sunny.gif", "ScatteredShowers": "Scattered Showers.gif", "Showers": "Showers.gif", "Rain": "Rain.png" }