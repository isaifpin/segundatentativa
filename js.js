
city_name = "Delmiro Gouveia";

function requestWeather(city_name) {
  
   $.getJSON({
       url: "https://api.hgbrasil.com/weather",
       data: {
           key: '57956d7b',
           format: 'json-cors',
           woeid: 459329,
           locale: "pt-br"
        },
       success: function ( result ) {

           data = result.results;
           city_name = data.city_name;

            $ ("#cidade").html ("Clima em: " + city_name );
            $ ("#temp").html ("Temperatura atual: " + data.temp + "°C"); 
            $ ("#status").html ("Descrição: " + data.description);
            $ ("#vent").html ("Velocidade do vento: " + data.wind_speedy);
            $ ("#nascer").html ("Nascer do sol: " + data.sunrise);
            $ ("#porsol").html (" Por do sol: " + data.sunset);
          
        }
    })
}
$( document ).ready(function() {

    
    requestWeather(city_name)
});
   