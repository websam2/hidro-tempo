import Loading from "@/pages/components/Loading";
import axios from "axios";
import { useState, useEffect } from "react";

export default function APITempoLocal() {
  const [removeLoading, setRemoveLoading] = useState(false);

  const [cities, setCities] = useState([
    { name: "Registro", lat: -24.49496608966295, long: -47.846437048809655 },
  ]);

  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = async () => {
    const newData = [];

    for (const city of cities) {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.long}&appid=de84edb4ca485a51e6cb1ccb98ff259a&units=metric&lang=pt_br`
        );

        newData.push({
          name: city.name,
          temperature: res.data.main.temp,
          weather: res.data.weather[0].description,
          tempMin: res.data.main.temp_min,
          tempMax: res.data.main.temp_max,
          icon: res.data.weather[0].icon,
        });
        setRemoveLoading(true);
      } catch (err) {
        res.status(err.response ? err.response.status : 500);
        res.send(err.message || "Algo de errado! Por favor tente mais tarde.");
      }
    }
    setWeatherData(newData);
  };
  useEffect(() => {
    fetchWeatherData();
  });

  const dataAtual = new Date();
  const dia = dataAtual.getDate();
  const mes = dataAtual.getMonth() + 1;
  const ano = dataAtual.getFullYear();
  const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const nomeDoDiaDaSemana = diasDaSemana[dataAtual.getDay()];

  return (
    <div className="flex">
      {weatherData.map((data, index) => (
        <div key={index} className="flex flex-col text-white">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="text-2xl">
                <h1>{data.name}</h1>
              </div>
              <div>
                {nomeDoDiaDaSemana} - {dia}/{mes}/{ano}
              </div>
            </div>

            <div className="flex flex-col">
              <div>
                <div>Mínima:</div>
                <div>
                  <h2>{data.tempMin}ºC</h2>
                </div>
              </div>
              <div>
                <div>Máxima:</div>
                <div>
                  <h2>{data.tempMax}ºC</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="text-7xl">
              <div id="icon">{data.icon}</div>
              <h2>{data.temperature}ºC</h2>
            </div>
            <div>
              <h2>{data.weather}</h2>
            </div>
          </div>
        </div>
      ))}
      {!removeLoading && <Loading />}
    </div>
  );
}
