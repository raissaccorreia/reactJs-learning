import React from 'react';
import ReactDOM from 'react-dom';
import toDoItem from './toDoItem';

const styles = {
    color: "#FF8C00",
    backgroundColor: "#000000",
    fontSize: "40px"
}

function MyApp(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay
    if (hours < 12) {
        timeOfDay="Morning"
        styles.color = "#0000FF"
    } else if (hours >= 12 && hours < 18){
        timeOfDay = "Afternoon"
        styles.color = "#FF0000"
    } else {
        timeOfDay = "Night"
        styles.color = "#00FF00"
    }    

    return (
    <div>
        <h1>Hello!</h1>
        <toDoItem/>
        <toDoItem/> 
        <toDoItem/>
        <toDoItem/>        
        <ul>
            <li>apple</li>
            <li>honey</li>
            <li>bee</li>
        </ul>
        <h2 style={styles}>Good {timeOfDay}</h2>
    </div>)
}

export default MyApp;