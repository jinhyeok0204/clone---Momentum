//  var options = {
//      enableHighAccuracy: true, // 위치정보를 가장 높은 정확도로 수신하고 싶음
//      timeout: 5000, // 위치 반환 시 소모할 수 있는 최대 시간(ms)
//      maximumAge: 0 // 캐시에 저장한 위치정보를 대신 반환할 수 있는 최대 시간을 나타내는 양
//  };

 const API_KEY = "d85824d36ddcc2068c7e3bbad7e3906b";
 const weatherIcon = document.querySelector("#weatherIcon");
 const area = document.querySelector("#area");
 const tempDiv = document.querySelector("#temp");

 function allocWeatherClass(weather){
     weatherIcon.classList.remove(...weatherIcon.classList);
    if(weather === "Clouds"){
        weatherIcon.classList.add("Clouds");
    }
    else if(weather === "Clear"){
        weatherIcon.classList.add("Clear");
    }
    else if(weather === "Rain"){
        weatherIcon.classList.add("Rain");
    }
    else if(weather === "Snow"){
        weatherIcon.classList.add("Snow");
    }
    else if(weather === "Thunderstorm"){
        weatherIcon.classList.add("Thunderstorm");
    }
    else if(weather === "Atmosphere"){
        weatherIcon.classList.add("Atmosphere");
    }
    else{
        weatherIcon.classList.add("Default");
    }
 }
 function success(position){
     const lat  = position.coords.latitude;
     const lon = position.coords.longitude;
     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

     fetch(url).then(Response => Response.json().then(data => {
        const name = data.name;
        const weather = data.weather[0].main;
        const temp = Math.round(data.main.temp);
        allocWeatherClass(weather);
        area.innerText = `${name}`;
        tempDiv.innerText = `${temp}℃`;
        
     }));
 }
 function error(){

 }
 navigator.geolocation.getCurrentPosition(success, error);
