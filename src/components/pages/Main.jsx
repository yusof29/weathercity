import React, { useState } from "react";
import { format } from "date-fns";
import { ImSpinner8 } from "react-icons/im";

// styled import
import {
  StyledCard,
  StyledForm,
  StyledCity,
  StyledDegrees,
} from "../styled/Main.styled";

export default function Main({ weatherData, setLocation, errorMsg, loading }) {
  const [inputValue, setInputValue] = useState(""); // input box
  const [animate, setAnimate] = useState(false); // animate input box

  const handleSubmit = (e) => {
    e.preventDefault();
    // if input value is not empty
    if (inputValue !== "") {
      // set location
      setLocation(inputValue);
    }

    // if input value is empty
    if (inputValue === "") {
      // set animate to true
      setAnimate(true);
      // after 500 ms set animate to false
      setTimeout(() => {
        setAnimate(false);
      }, 1500);
    }

    // clear input
    const input = document.querySelector("input");
    input.value = "";
    setInputValue("");
  };

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledCard>
      <div>
        <StyledForm onSubmit={handleSubmit}>
          <h1>Search for City</h1>

          <input
            className={`${animate ? "animate-shake" : null}`}
            type="text"
            onChange={handleSearch}
          />

          <button>Get</button>

          {/* without axios */}
          {/* {errorMsg && <p>{errorMsg}</p>} */}

          {/* with axios */}
          {errorMsg && <p>City Not Found</p>}
        </StyledForm>

        {loading ? (
          <ImSpinner8 className="animate-spin" />
        ) : (
          <>
            <StyledCity>
              <p>
                {format(
                  new Date(weatherData.list[0].dt * 1000),
                  "EEEE, LLL dd, yyyy"
                )}
              </p>
              <div>
                <h2>{weatherData.city.name}</h2>
                <p>{weatherData.city.country}</p>
              </div>
            </StyledCity>

            <StyledDegrees>
              <h1>{parseInt(weatherData.list[0].main.temp)}°C</h1>

              <div>
                <h3>{weatherData.list[0].weather[0].description}</h3>
                <p>
                  The humidity today is {weatherData.list[0].main.humidity} %
                  with winds at {weatherData.list[0].wind.speed} mps
                </p>
              </div>
            </StyledDegrees>
          </>
        )}
      </div>
    </StyledCard>
  );
}
