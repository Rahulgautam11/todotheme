
import { useEffect, useState } from 'react';
import LandingPage from './Components/LandingPage';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
function App() {
  const { darkTheme } = useSelector((state) => {
    return { darkTheme: state.SwitchThemeReducer }
  })

  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty(
      "--background-color",
      darkTheme ? "#262833" : "#fff"
    );
    root?.style.setProperty("--text-color", darkTheme ? "#fff" : "#262833");
  }, [darkTheme]);

  return (
    <>
      <LandingPage />
      {/* <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider> */}
      {/* <div className="card">

        <div className="cardBody">
          <h2>Dynamically changing scss variable using react </h2>

          <p>
            {" "}
            According to Wikipedia sass is a preprocessor
            scripting language that is interpreted or compiled
            into Cascading Style Sheets (CSS).
          </p>

          <button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? "????" : "????"}
          </button>
        </div>
      </div> */}
    </>
  );
}

export default App;
