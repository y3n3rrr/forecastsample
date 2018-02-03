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
