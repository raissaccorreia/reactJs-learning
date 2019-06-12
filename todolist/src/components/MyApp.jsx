import React from 'react';
import ReactDOM from 'react-dom';

function MyApp(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay
    if (hours < 12) {
        timeOfDay="Morning"
    } else if (hours >= 12 && hours < 18){
        timeOfDay = "Afternoon"
    } else {
        timeOfDay = "Night"
    }

    return (
    <div>
        <h1>Hello!</h1>
        <p>huehuebr</p>
        <ul>
            <li>apple</li>
            <li>honey</li>
            <li>bee</li>
        </ul>
        <h2>Good {timeOfDay}</h2>
    </div>)
}

export default MyApp;