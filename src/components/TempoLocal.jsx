import Loading from "@/layout/Loading";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TempoLocal() {
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
        });
        setRemoveLoading(true);
      } catch (err) {
        alert("O painel está em manutenção. Tente novamente mais tarde.");
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
                  <h2>{data.tempMin}º</h2>
                </div>
              </div>
              <div>
                <div>Máxima:</div>
                <div>
                  <h2>{data.tempMax}º</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="text-7xl">
              <h2>{data.temperature}º</h2>
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
