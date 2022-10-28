import React from "react";
import { format } from "date-fns";
import { ImSpinner8 } from "react-icons/im";

// icons import
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from "react-icons/io";

import { BsCloudHaze2Fill, BsCloudDrizzleFill } from "react-icons/bs";

// styled import
import {
  StyledForecastContainer,
  StyledForecast,
} from "../styled/Forecast.styled";

export default function Forecast({ weatherData, loading }) {
  const daysArray = [];

  for (let i = 0; i <= weatherData.list.length; i++) {
    if (i % 8 === 7) {
      daysArray.push(weatherData.list[i]);
    }
  }

  return (
    <StyledForecastContainer>
      {daysArray.map((day, index) => {
        // set the icon according to the weather
        let icon;

        switch (day.weather[0].main) {
          case "Clouds":
            icon = <IoMdCloudy />;
            break;
          case "Haze":
            icon = <BsCloudHaze2Fill />;
            break;
          case "Rain":
            icon = <IoMdRainy />;
            break;
          case "Clear":
            icon = <IoMdSunny />;
            break;
          case "Drizzle":
            icon = <BsCloudDrizzleFill />;
            break;
          case "Snow":
            icon = <IoMdSnow />;
            break;
          case "Thunderstorm":
            icon = <IoMdThunderstorm />;
            break;
          default:
            icon = "";
        }

        return (
          <StyledForecast key={index}>
            {loading ? (
              <ImSpinner8 className="animate-spin" />
            ) : (
              <>
                <p>{format(new Date(day.dt * 1000), "EEEE")}</p>

                <div>{icon}</div>

                <h4>{parseInt(day.main.temp)}°C</h4>
              </>
            )}
          </StyledForecast>
        );
      })}
    </StyledForecastContainer>
  );
}
