import React from "react";


const NasaImage = (props) => {
    return (
    <div>
        <h1>{props.photo.title}</h1>
        <img src = {props.photo.hdurl} />
        <p>{props.photo.explanation}</p>
        
    </div>
    )
}

export default NasaImage;