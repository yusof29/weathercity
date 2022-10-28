import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Forecast from "./components/pages/Forecast";
import Main from "./components/pages/Main";
import GlobalStyles from "./components/styled/Global";
import { ImSpinner8 } from "react-icons/im";
import axios from "axios";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url("https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom right;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const theme = {
  colors: {
    primary: "#282323",
    secondary: "#3f3f3f",
  },
};

function App() {
  const [weatherData, setWeatherData] = useState(null); // weather data array
  const [location, setLocation] = useState("Tokyo"); // default location
  const [loading, setLoading] = useState(false); //
  const [errorMsg, setErrorMsg] = useState(null); // error message

  // ****************************************************************//
  const APIKey = "c3c929591eec5931a449db16a2ec3ac4";

  // fetch the data without axios
  // useEffect(() => {
  //   const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${APIKey}`;

  //   setLoading(true);

  //   fetch(url)
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw Error("City Not Found");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWeatherData(data);
  //       // set loading to false
  //       setLoading(false);
  //       setErrorMsg(null);
  //     })
  //     .catch((err) => {
  //       // set loading to false
  //       setLoading(false);
  //       setErrorMsg(err.message);
  //     });
  // }, [location]);

  // fetch the data with axios
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${APIKey}`;

    setLoading(true);

    axios
      .get(url)
      .then((res) => {
        setWeatherData(res.data);
        // set loading to false
        setLoading(false);
        setErrorMsg(null);
      })
      .catch((err) => {
        // set loading to false
        setLoading(false);
        setErrorMsg(err);
      });
  }, [location]);

  // ****************************************************************//

  // error message countdown
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg("");
    }, 2000);
    // clear timer
    return () => clearTimeout(timer);
  }, [errorMsg]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledWrapper>
        {!weatherData ? (
          <ImSpinner8 className="animate-spin" />
        ) : (
          <>
            <Main
              weatherData={weatherData}
              setLocation={setLocation}
              errorMsg={errorMsg}
              loading={loading}
            />
            <Forecast weatherData={weatherData} loading={loading} />
          </>
        )}
      </StyledWrapper>
    </ThemeProvider>
  );
}

export default App;
