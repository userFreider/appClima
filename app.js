let weather = {
    //obtenemos nuestra apikey
    apikey:"5e87a08d335d35a54c82b148f5cf0e3e",
    fechtWeater: function (city) {
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid='+this.apikey)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
    },
  
    displayWeather: function(data){
        const{name} = data;
        const{icon, description} = data.weather[0];
        const{temp, humidity } = data.main;
        const{speed} = data.wind;

        console.log(name, icon, description, temp, humidity, speed);

        document.querySelector('.ciudad').innerHTML =`El tiempo en ${name}`;
        document.querySelector('.temperatura').innerHTML = `temperatura:<span class="fs-3 fw-bold"> ${temp}&#8451;</span>`;
        document.querySelector('#icono').src =`https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector('.descripcion').innerHTML = ` ${description}`;
        document.querySelector('.humedad').innerHTML = `humedad: <span class="fw-bold">${humidity}&#37;</span> `;
        document.querySelector('.viento').innerHTML = `viento: a <span class="fw-bold">${speed} km/h</span> `;
    }

}

























const ciudad = document.querySelector('.ciudad');
console.log(ciudad);

ciudad.addEventListener('click', function(){
console.log('kjhg');
});