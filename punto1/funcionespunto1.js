
function consumirApi() {
    var endPoint = document.getElementById("api").value;
    fetch(endPoint)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log("Datos obtenidos de la API:", data);

            var contraseñasmasdeocho = [];

            for (var i = 0; i < data.length; i++) {
                if (data[i].password.length > 8){
                    contraseñasmasdeocho.push(data[i]);
                }
            }

            console.log("Usuarios con contraseña larga:", contraseñasmasdeocho);

            var grafica = [
                {
                    x: ["Usuarios contraseña larga"],
                    y: [contraseñasmasdeocho.length], 
                    type: 'bar'
                }
            ];

            console.log("Datos para la gráfica:", grafica);

            Plotly.newPlot('myDiv', grafica);
        })
        .catch(function (error) {
            console.error("Error al obtener datos de la API:", error);
        })
}


