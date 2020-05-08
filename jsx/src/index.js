// Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component

const App = () => {
    const buttonName = "Click Me!"
    return(
        <div>
            <label for="name" className="label">
                Enter Name
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'green', color:'white'}}>{buttonName}</button>
        </div>
    )
}


//Take the react component and show it on the screen

ReactDOM.render(
< App / >,
    document.querySelector('#root')
)