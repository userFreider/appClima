let weather = {
    //obtenemos nuestra apikey
    apikey:"5e87a08d335d35a54c82b148f5cf0e3e",

    fechtWeater: function (city) {
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid='+this.apikey)
      .then((response) => response.json())
      .then((data) => console.log(data));
    },

   


}

























const ciudad = document.querySelector('.ciudad');
console.log(ciudad);

ciudad.addEventListener('click', function(){
console.log('kjhg');
});