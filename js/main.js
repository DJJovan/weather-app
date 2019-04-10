function getWeather(city=false) {
    if (city !== false) {
        var request = new XMLHttpRequest();
        
        request.onload = function() {
            var response = JSON.parse(request.response);
            document.querySelector('div.stats span').innerHTML = Math.round(response.main.temp);
            
        }
        
        request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=57dbd56603443fed04dfc54f9fe1808b');
        request.send();
    }
}

window.onload = function() {
    getWeather();
}


document.querySelector('input').onkeypress = function(event) {
    if (event.key === "Enter") {
        var city = document.querySelector('input').value;
        getWeather(city);
    }
}