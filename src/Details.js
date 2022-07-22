import React from "react";
import styled, {keyframes} from "styled-components";


const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
const StyledDetails = styled.div`
    width: 75%;
    height: 75vh;
    padding: 8px;
    margin: 5px;
    border-borrom: 2px solid white;

    @media ${pr => pr.theme.breakpointMobile} {
        width: 100%;
      }

    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.secondaryColor};

    transition: all .1s ease-in-out;
    &:hover {
      background-color: ${pr => pr.theme.secondaryColor};
      color: ${pr => pr.theme.primaryColor};


    transform: scale(2);
    opacity: 0;
    animation: ${kf} 0.3s ease-in-out forwards;
`

const NasaImage = (props) => {
    return (
    <div className="top-container">
        <div className= "header">
            <h1>{props.photo.title}</h1>
            <h4>{props.photo.date}</h4>
        </div>
        <StyledDetails className="dataContainer">
        <img src = {props.photo.hdurl} />
        <p className="textContainer">{props.photo.explanation}</p>
        </StyledDetails>
        
    </div>
    )
}

export default NasaImage;