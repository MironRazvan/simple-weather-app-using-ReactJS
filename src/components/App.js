import React, {Component} from "react";
import GetCity from "./GetCity";
import Today from "./Today";
import NextDay from "./NextDay";

const API_key = "f620b7055b5b61c16f207821e1b660ee"

class App extends Component {
    constructor() {
        super()
        this.state = {
            cityName: undefined,
            cityRegion: undefined,
            cityCountry: undefined,
            nextDays: [{}]
        }
    }

    updateValues = async(city) => {
        /** fetch pentru coordonatele locatiei introduse */
        const APIcall = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_key}`)
        const locationInfo = await APIcall.json()

        /** fetch pentru starea meteo la coordonatele date (daca locatia exista in db) */
        let locationWeather
        if (locationInfo.length === 0) {
            console.log("Locatia nu a fost gasita")
        } else {
            const api_call2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationInfo[0].lat}&lon=${locationInfo[0].lon}&units=metric&exclude=minutely,hourly&appid=${API_key}`)
            locationWeather = await api_call2.json()
        }

        this.setState({
            cityName: locationInfo[0].name,
            cityRegion: locationInfo[0].state,
            cityCountry: locationInfo[0].country,
            nextDays: locationWeather.daily
        })
    }

    /* functie ce face fetch datelor pentru locatia introdusa */
    handleSubmit = (event) => {
        event.preventDefault()
        const cityName = event.target.elements.city.value

        this.updateValues(cityName)
    }

    render() {
        const daysArray = this.state.nextDays
        const eachDay = daysArray.map((day, index) => {
            return (
                index > 0 && 
                <NextDay 
                    key={day.dt} 
                    day={day} 
                />
            )
        })
        return(
            <div>
                <GetCity handleSubmit={this.handleSubmit} />
                {this.state.cityName && 
                    <Today 
                        cityName={this.state.cityName} 
                        cityRegion={this.state.cityRegion} 
                        cityCountry={this.state.cityCountry} 
                        temperature={this.state.nextDays} 
                    />
                }
                <div className="nextDays--container--main">
                    {eachDay}
                </div>
            </div>
        )
    }
}
export default App
