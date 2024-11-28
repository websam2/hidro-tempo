import Loading from "@/pages/components/Loading";
import axios from "axios";
import Image from "next/image";
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
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.long}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric&lang=pt_br`
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

  // data atualizada diariamente
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
    <>
      {weatherData.map((data, index) => (
        <div key={index} className="flex flex-col text-white">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col m-2">
              <div className="text-2xl">
                <h1>{data.name}</h1>
              </div>
              <div>
                {nomeDoDiaDaSemana} - {dia}/{mes}/{ano}
              </div>
            </div>

            <div className="flex flex-col m-2">
              <div>
                <div>Mínima:</div>
                <div>
                  <h2>{data.tempMin.toFixed(0)}ºC</h2>
                </div>
              </div>
              <div>
                <div>Máxima:</div>
                <div>
                  <h2>{data.tempMax.toFixed(0)}ºC</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image
              width={100}
              height={100}
              src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
              alt="ícone do clima"
            />
            <h2 className="text-7xl">{data.temperature.toFixed(0)}ºC</h2>
            <h2>{data.weather}</h2>
          </div>
        </div>
      ))}
      {!removeLoading && <Loading />}
    </>
  );
}
