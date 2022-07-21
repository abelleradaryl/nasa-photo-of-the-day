import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import NasaImage from "./Image";


function App() {
const [ data, setData] = useState();
const [apiError, setApiError] = useState(null);

useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(resp => {
    console.log(resp);
    setData(resp.data)
  })
  .catch(err => apiError("Opps Sorry, We'll be back soon!!"));
}, [])

console.log()

  return (
    <div className="App">
      { data && <NasaImage photo = {data} />}
      <button></button>
    </div>
    
  );
}

export default App;


// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY


