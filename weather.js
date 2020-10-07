var city = "Sasolburg";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=2e26c053380ee5c5377f297e1003f29a&units=metric", function(data){
    console.log(data);
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    var humid = data.main.humidity;

    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
    $(".humid").append(humid);
});