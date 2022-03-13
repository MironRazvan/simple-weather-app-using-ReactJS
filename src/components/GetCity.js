import React from "react";

const GetCity = props => (
    <div className="form--container">
        <form onSubmit={props.handleSubmit}>
            <input className="form--input" type="text" name="city" placeholder="Enter city name..." />
            <button className="form--button">Get weather</button>
        </form>    
    </div>
)

export default GetCity