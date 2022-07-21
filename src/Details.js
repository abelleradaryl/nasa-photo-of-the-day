import React from "react";


const NasaImage = (props) => {
    return (
    <div>
        <div className= "header">
            <h1>{props.photo.title}</h1>
            <h4>{props.photo.date}</h4>
        </div>
        <div className="dataContainer">
        <img src = {props.photo.hdurl} />
        <p className="textContainer">{props.photo.explanation}</p>
        </div>
        
    </div>
    )
}

export default NasaImage;