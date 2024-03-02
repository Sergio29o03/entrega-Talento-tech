function consumirApi() {
    var endPoint = document.getElementById("api").value;
    fetch(endPoint)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
        // creamos arreglos para cada pais
            var paisesEurope = [];
            var paisesAsia = [];
            var paisesSouthAmerica = [];
// Esto itera sobre cada elemento en el arreglo data, que contiene los datos de los países de la API
            data.forEach(function(country) {
                if (country.region === "Europe") {
                    //dividimos los paises por region y luego usamos el metodo push aprendido en clase para agregar elementos al arreglo 
                    paisesEurope.push({
                        nombre: country.name.common,
                        poblacion: country.population
                    });
                } else if (country.region === "Asia") {
                    paisesAsia.push({
                        nombre: country.name.common,
                        poblacion: country.population
                    });
                } else if (country.subregion === "South America") {
                    paisesSouthAmerica.push({
                        nombre: country.name.common,
                        poblacion: country.population
                    });
                }
            });
//usamos el metodo map para mapear iterar sobre cada elementos en este caso sobre las caracteristicas 
//escogidas en el item anterior
            var datosEurope = {
                x: paisesEurope.map(function(pais) { return pais.nombre; }),
                y: paisesEurope.map(function(pais) { return pais.poblacion; }),
                type: 'bar',
                name: 'Europe'
            };

            var datosAsia = {
                x: paisesAsia.map(function(pais) { return pais.nombre; }),
                y: paisesAsia.map(function(pais) { return pais.poblacion; }),
                type: 'bar',
                name: 'Asia'
            };

            var datosSouthAmerica = {
                x: paisesSouthAmerica.map(function(pais) { return pais.nombre; }),
                y: paisesSouthAmerica.map(function(pais) { return pais.poblacion; }),
                type: 'bar',
                name: 'South America'
            };
// layout Es el objeto de configuración de diseño que define cómo se verá la gráfica
            var layout = {barmode: 'group'};
            Plotly.newPlot('myDiv', [datosEurope, datosAsia, datosSouthAmerica], layout);
        })
        .catch(function(error) {
            console.log(error);
        });
}
