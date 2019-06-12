import React from 'react';
import ReactDOM from 'react-dom';

function MyNavBar(){
    const FirstName = "Raissa"
    const Lastname = "Correia"
    return (
    <div>
        <header className="navbar">{"Oie! " + FirstName + " " + Lastname}</header>
        <p>hahahaha</p>        
    </div>)
}

export default MyNavBar;