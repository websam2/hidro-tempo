import Loading from "@/pages/components/Loading";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function APITempoLocal() {
  const [removeLoading, setRemoveLoading] = useState(false);

  const [cities] = useState([
    { name: "Registro", lat: -24.49496608966295, long: -47.846437048809655 },
  ]);

  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = async () => {
    const newData = [];

    for (const city of cities) {
      try {
        const res = await axios.get(
          `https://api.hgbrasil.com/weather?format=json-cors&key=${process.env.NEXT_PUBLIC_HG_API_KEY}&lat=${city.lat}&lon=${city.long}`
        );

        const weatherInfo = res.data.results;

        newData.push({
          name: city.name,
          temperature: weatherInfo.temp,
          weather: weatherInfo.description,
          tempMin: weatherInfo.forecast[0].min,
          tempMax: weatherInfo.forecast[0].max,
          icon: weatherInfo.condition_slug, 
        });

        setRemoveLoading(true);
      } catch (err) {
        console.error("Erro ao buscar dados do clima:", err);
      }
    }

    setWeatherData(newData);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []); // Adicionei array de dependências vazio para evitar loop infinito

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
            <Image
              width={100}
              height={100}
              src={`https://assets.hgbrasil.com/weather/icons/conditions/${data.icon}.svg`}
              alt="ícone do clima"
            />
            <h2 className="text-7xl">{data.temperature}ºC</h2>
            <h2>{data.weather}</h2>
          </div>
        </div>
      ))}
      {!removeLoading && <Loading />}
    </>
  );
}