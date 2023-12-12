let apiKey = 'fdb1ac3e28d8174436b5105cea64bd7b'
const mainUrl = 'https://api.openweathermap.org/data/2.5/weather'
const difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    let city = document.getElementById('ciudadEntrada').value
    if (city) {
        fetchClimateData(city)
    }
})

function fetchClimateData(city) {
    fetch(`${mainUrl}?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(response => showClimateData(response))
}

function showClimateData(response) {
    console.log(response)
    const divClimateData = document.getElementById('datosClima')
    divClimateData.innerHTML = ''

    const cityName = response.name
    const countryName = response.sys.country
    const temperature = response.main.temp
    const feelsLike = response.main.feels_like
    const description = response.weather[0].description
    const icon = response.weather[0].icon

    const cityTitle = document.createElement('h2')
    cityTitle.textContent = `${cityName}, ${countryName}`

    const temperatureInfo = document.createElement('p')
    temperatureInfo.textContent = `La temperatura es ${Math.floor(temperature-difKelvin)} °C`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripción metereologica es ${description}`

    const feelsLikeInfo = document.createElement('p')
    feelsLikeInfo.textContent = `La sensación termica es ${Math.floor(feelsLike-difKelvin)} °C`

    divClimateData.appendChild(cityTitle)
    divClimateData.appendChild(temperatureInfo)
    divClimateData.appendChild(feelsLikeInfo)
    divClimateData.appendChild(descriptionInfo)
    divClimateData.appendChild(iconInfo)
    
}
