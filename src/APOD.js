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
const StyledApod = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .5rem;

    @media ${prop => prop.theme.breakpointMobile} {
        width: 100%;
      }

    background-color: ${props => props.theme.primaryColor};
    h3 {
      color: ${props => props.theme.tertiaryColor};
    }
    h2 {
      color: ${props => props.theme.secondaryColor};
    }

        button {
      background-color: ${prop => prop.theme.tertiaryColor};
      &:hover {
        transform: scale(1.1);
      }
    }

    transition: all .2s ease-in-out;
    &:hover {
      background-color: ${pr => pr.theme.secondaryColor};
      color: ${pr => pr.theme.primaryColor};


    transform: scale(2);
    opacity: 0;
    animation: ${kf} 0.3s ease-in-out forwards;
`

const Apod = (props) => {
    return (
        <StyledApod className="apod-container">
            <input type="date" />
            <div>
                <h3>Jupiter's Rings <button>Read More</button></h3>
            </div>
            <div>
                <h3>Messier 10 and Comet <button>Read More</button></h3>
            </div>
            <div>
                <h3>Neptune's Atmosphere <button>Read More</button></h3>
            </div>
        </StyledApod>
    )
}


export default Apod