import React from "react"
import './App.css';
import MainPage from "./pages/MainPage";

function Car() {
    return (
        <h1>car</h1>
    );
}

function Hi(){
    return(
        <h3>hi</h3>
    );
}

function App() {
    return (
        <div className="App">
            <Car/>
            <Hi/>
            <MainPage/>
        </div>
    );
}

export default App;
