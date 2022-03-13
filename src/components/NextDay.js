import React from "react"

const NextDay = props => {
    var nextDay = new Date(props.day.dt * 1000)
    //console.log(nextDay)
    var option = { weekday: 'long'}
    var dayOfWeek = new Intl.DateTimeFormat("en-US", option).format(nextDay)
    //console.log(dayOfWeek)

    return(
        <div className="nextDay--container">
            <h3 className="nextDay--title">{dayOfWeek}</h3>
            <img className="nextDay--image" src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`} alt="Weather icon"/>
            <p>Max. temperature: {props.day.temp.max}</p>
            <p>Min. temperature: {props.day.temp.min}</p>
            <p>Precipitation chance: {props.day.rain ? props.day.rain : props.day.snow}%</p>
            <p>Humidity: {props.day.humidity}%</p>
        </div>
    )
}

export default NextDay