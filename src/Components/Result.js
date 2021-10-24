import React from 'react'
import './Result.css'

const Result = props => {
    const { date, city, sunrise, sunset,
        temp, wind, error, pressure } = props.weather
    let content = null

    if (!error && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <React.Fragment>
                <h3>Pogoda dla: <em>{city}</em></h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Aktualna temperatura: {temp}&#176;C</h4>
                <h4>Wschód słońca: {sunriseTime}</h4>
                <h4>Zachód słońca: {sunsetTime}</h4>
                <h4>Wiatr: {wind}m/s</h4>
                <h4>Ciśnienie: {pressure} hPa</h4>
                </React.Fragment>
        )
    }

    return (
        <div className="result">
            {error ? `Nie mamy w bazie ${city}` : content}
        </div>

    )
}

export default Result