var isDay = true,
    temperatureLowBound = config.temperatureLowBound,
    temperatureHighBound = config.temperatureHighBound,
    humidityLowBound = config.humidityLowBound,
    humidityHighBound = config.humidityHighBound;

var checkTime = function () {
    var currentHour = new Date().getHours();
    isDay = false;
    
    if (currentHour < config.nightBegin || currentHour > config.nightEnd) {
        $('body').addClass('night');
        setNightRange();
    }
};

var setNightRange = function () {
    // override default day range
    var tLowBound = config.temperatureNightLowBound,
        tHighBound = config.temperatureNightHighBound,
        radius = 80,
        mainRangeChart = $('#central-target-range'),
        rot = (begin / 50) * 360 + 90;

    temperatureLowBound = tLowBound;
    temperatureHighBound = tHighBound;

    mainRangeChart.attr('transform', 'rotate(' + rot + ' 100 100)');

    var mainOffset = (2 * Math.PI * radius) - (((tHighBound / 50) * 360) - ((tLowBound / 50 * 360)));
    mainRangeChart.css('stroke-dashoffset', mainOffset);
};

var checkTemperature = function (display, chart) {
    var temp = parseInt(display.text());

    if (temp < temperatureLowBound || temp > temperatureHighBound) {
        chart.attr('class', 'warning');
        display.addClass('warning');
    }
}

var checkHumidity = function (display, chart) {
    var humidity = parseInt(display.text());

    if (humidity < humidityLowBound || humidity > humidityHighBound) {
        chart.attr('class', 'warning');
        display.addClass('warning');
    }
}

$(document).ready(function () {
    var temperatureChart = $('#central-bar'),
        humidityChart = $('#humidity-percent-bar'),
        temperatureDisplay = $('#central-temperature-display'),
        humidityDisplay = $('#humidity-display');
    
    if(config.nightMode === 'true') {
        checkTime();
    }

    window.setInterval(function(){
        checkTemperature(temperatureDisplay, temperatureChart);
        checkHumidity(humidityDisplay, humidityChart);
        if(config.nightMode === 'true') {
            checkTime();
        }
    }, 10000);
});


