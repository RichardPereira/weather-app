import React from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from './components/Weather';
import { async } from 'q';

const API_KEY = "b3cc600f6df91bfdae0a91178d64ef0d";


class App extends React.Component{
  getWeather = async () =>{
    const API_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=Porto&appid=${API_KEY}`);
    const data = await API_call.json();
    console.log(data);
  }
  render(){
    return (
      <div>
        <Titles/>
        <Form/>
        <Weather/>
      </div>
    );
  }
};

export default App;
