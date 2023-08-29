import Loading from "@/pages/components/Loading";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function APITempo() {
  const [removeLoading, setRemoveLoading] = useState(false);

  const [weatherData, setWeatherData] = useState({});

  const fetchWeatherData = async () => {
    try {
      const res = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=3fe3f6bb8b0f48069e0172558232108&q=Registro&lang=pt`
      );
      const newData = {
        city: res.data.location.name,
        temperature: res.data.current.temp_c,
        tempMin: res.data.forecast.forecastday[0].day.mintemp_c,
        tempMax: res.data.forecast.forecastday[0].day.maxtemp_c,
        description: res.data.current.condition.text,
        icon: res.data.current.condition.icon,
      };
      setRemoveLoading(true);

      setWeatherData(newData);
    } catch (err) {
      console.log(err.response ? err.response.status : 500);
      console.log(err.message || "Algo de errado! Por favor tente mais tarde.");
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="flex flex-col text-white items-center">
      <div className="flex flex-row sm:flex-col md:flex-row items-center">
        <div className="flex flex-col sm:m-4">
          <h1 className="text-xl font-bold">{weatherData.city}</h1>
          <div>
            {new Date().toLocaleDateString("pt-BR", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </div>
        </div>
        <div className="flex flex-col m-4">
          <div>
            <div className="font-bold">Mínima:</div>
            <h2>{weatherData.tempMin}ºC</h2>
          </div>
          <div>
            <div className="font-bold">Máxima:</div>
            <h2>{weatherData.tempMax}ºC</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-7xl sm:text-6xl md:text-7xl">
        <h2>{weatherData.temperature}ºC</h2>
        <img className="w-2/3" src={weatherData.icon} alt="icon" />
      </div>
      <h2>{weatherData.description}</h2>
      {!removeLoading && <Loading />}
    </div>
  );
}
