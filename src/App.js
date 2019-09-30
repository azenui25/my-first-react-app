import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title"
import LightSwitch from './components/LightSwitch'

function App() {
    return ( <div className = "App" >
        <main> 
        <Title content= "Some Simple Title" />
        <LightSwitch />
        </main>

        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" />
        <p> Welcome to Codaisseur</p>
        <p>Edit < code > src / App.js < /code> and save to reload. </p > 
        <p>Here you will learn some very awesome React principles</p>
        <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn Reactjs
        </a> 
        <p>HAVE FUN  </p>
        </header> 
        </div>
    );
}




export default App;