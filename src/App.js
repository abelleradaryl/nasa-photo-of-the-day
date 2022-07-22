import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import NasaImage from "./Details";
import Apod from "./APOD";


function App() {
const [ data, setData] = useState();
const [apiError, setApiError] = useState(null);

useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(resp => {
    console.log(resp);
    setData(resp.data)
  })
  .catch(err => setApiError("Oops Sorry, We'll be back soon!!"));
}, [])

useEffect(() => {
  console.log("AAANNNDDDD WE'RE LIVEEEEE");
}, [])


  return (
    <div className="App">
      { data && <NasaImage photo = {data} />}
      { apiError && <h2 className="error">{apiError}</h2>}
      <div className="bottom-container">
        <h2>Previous APOD's</h2>
        <Apod></Apod>
      </div>
    </div>
    
  );
}

export default App;


// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY


