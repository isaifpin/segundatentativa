jQuery.support.cors = true;

var data;
var statusMap;

const requestWeather = () => {
    let cidade = document.getElementById("cidade").value;
  
   $.getJSON({
       url: "https://api.hgbrasil.com/weather",
       data: {
           key: '6ee295f6',
           format: 'json-cors',
           city_name: cidade
        },
       success: function ( result ) {
           if (result.by == "default") {
               alert("Cidade não encontrada!")
               
            }

        else{

           data = result.results;
           city_name = data.city_name;

            $ ("#idcidade").html ("Clima em: " + data.city_name );
            $ ("#temp").html ("Temperatura atual: " + data.temp + "°C"); 
            $ ("#status").html ("Descrição: " + data.description);
            $ ("#vent").html ("Velocidade do vento: " + data.wind_speedy);
            $ ("#nascer").html ("Nascer do sol: " + data.sunrise);
            $ ("#porsol").html (" Por do sol: " + data.sunset);        }
        }
    })
}
   
