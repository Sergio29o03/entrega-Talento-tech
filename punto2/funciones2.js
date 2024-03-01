function consumirApi(){
    var endPoint = document.getElementById("api").value;
    fetch(endPoint)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        var poblacionEurope = 0;
        var poblacionAsia = 0;
        var poblacionSouthAmerica = 0; // Inicializa la población de Sudamérica en 0

        for(var i = 0; i < data.length; i++){
            if(data[i].subregion === "South America"){ // Verifica la subregión en lugar de la región
                poblacionSouthAmerica += data[i].population; // Suma la población de cada país en Sudamérica
            } else if(data[i].region === "Europe"){
                poblacionEurope += data[i].population;
            } else if(data[i].region === "Asia"){
                poblacionAsia += data[i].population;
            }
        }

        var grafica = [
            {
                x: ['Europe', 'Asia', 'South America'],
                y: [poblacionEurope, poblacionAsia, poblacionSouthAmerica],
                type: 'bar'
            }
        ];
        Plotly.newPlot('myDiv', grafica);
    })
    .catch(function(error){
        console.log(error);
    })
}
