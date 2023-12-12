let apiKey = 'fdb1ac3e28d8174436b5105cea64bd7b'

const difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    let city = document.getElementById('ciudadEntrada').value
})

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
.then(response => response.json())
.then(response => console.log(response))
