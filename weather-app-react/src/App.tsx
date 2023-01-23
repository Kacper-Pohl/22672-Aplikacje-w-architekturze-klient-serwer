import React from "react";
import styles from "./styles/App.module.css";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <header>
        <title>Weather App</title>
        <meta name="description" content="Weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </header>
      <main className={styles.weather}>
        <div className={styles.center}>
          <Weather />
        </div>
      </main>
    </>
  );
}

export default App;
