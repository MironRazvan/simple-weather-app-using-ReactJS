import React from "react"

const Today = props => (
        <div className="today--container">
            <h2>{props.cityName}, {props.cityRegion}({props.cityCountry})</h2>
            <div className="today--main--info">
                <img className="today--main--image" src={`http://openweathermap.org/img/wn/${props.temperature[0].weather[0].icon}@2x.png`} alt="Weather icon"/>
                <div className="today--main--weather">
                    <h1 className="today--main--weather--temperature">{props.temperature[0].temp.max} °C</h1>
                    <p>{props.temperature[0].weather[0].description}</p>
                </div>
            </div>
            <div className="today--side--info">
                <h3>Precipitation chance: {props.temperature[0].rain ? props.temperature[0].rain : props.temperature[0].snow}%</h3>
                <h3>Humidity: {props.temperature[0].humidity}%</h3>
                <h3>UV index: {props.temperature[0].uvi}</h3>
                <h3>Wind: {props.temperature[0].wind_speed} km/h</h3>
            </div>
        </div>
)

export default Today
