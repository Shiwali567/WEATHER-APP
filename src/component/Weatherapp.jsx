/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useMemo } from "react";

const Weatherapp = ({ primaryColor }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    if (!city) return;

    const fetchWeather = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
      );

      const data = await res.json();
      setWeather(data);
    };

    fetchWeather();
  }, [city]);

  const temperature = useMemo(() => {
    return weather?.main?.temp;
  }, [weather]);

  const handleSearch = () => {
    setCity(inputRef.current.value);
    inputRef.current.focus(); // ✅ keep cursor inside input
  };
  const styles = {
    input: {
      padding: "10px",
      width: "70%",
      borderRadius: "8px",
      border: "none",
      outline: "none",
      marginRight: "10px",
      fontSize: "14px",
    },

    button: {
      padding: "10px 15px",
      background: "#0B3D91",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "500",
      transition: "0.3s",
    },

    result: {
      marginTop: "20px",
      color: "#fff",
    },

    city: {
      fontSize: "22px",
      fontWeight: "600",
    },

    temp: {
      fontSize: "28px",
      fontWeight: "bold",
      margin: "10px 0",
    },
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "#fff" }}>Search Weather</h2>

      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter city"
          style={styles.input}
        />
        <button style={styles.button} onClick={handleSearch}>
          Search
        </button>
      </div>

      {weather && weather.main && (
        <div style={styles.result}>
          <h3 style={styles.city}>{weather.name}</h3>
          <p style={styles.temp}>{temperature} °C</p>
          <p>{weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default Weatherapp;
