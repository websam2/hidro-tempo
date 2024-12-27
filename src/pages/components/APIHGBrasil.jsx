import Loading from "@/pages/components/Loading";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WeatherDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const carrosselRef = useRef(null);

  const cities = [
    { name: "Registro", lat: -24.49496608966295, long: -47.846437048809655 },
  ];

  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const newData = await Promise.all(
        cities.map(async (city) => {
          const response = await axios.get(
            `https://api.hgbrasil.com/weather?format=json-cors&key=${
              process.env.NEXT_PUBLIC_HG_API_KEY
            }&lat=${city.lat}&lon=${city.long}`
          );

          const weatherInfo = response.data.results;

          return {
            name: city.name,
            temperature: weatherInfo.temp,
            weather: weatherInfo.description,
            tempMin: weatherInfo.forecast[0].min,
            tempMax: weatherInfo.forecast[0].max,
            icon: weatherInfo.condition_slug,
            forecast: weatherInfo.forecast,
          };
        })
      );

      setWeatherData(newData);
    } catch (err) {
      console.error("Erro ao buscar dados do clima:", err);
      setError("Não foi possível carregar os dados do clima.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const scrollCarrossel = (direction) => {
    if (carrosselRef.current) {
      const scrollAmount = 200;
      const newScrollPosition = carrosselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      carrosselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const formatDate = () => {
    const dataAtual = new Date();
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
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

    return { dia, mes, ano, nomeDoDiaDaSemana, diasDaSemana };
  };

  if (isLoading) return <Loading />;
  if (error) return <div className="text-orange">{error}</div>;

  const { dia, mes, ano, nomeDoDiaDaSemana, diasDaSemana } = formatDate();

  return (
    <>
      {weatherData.map((data, index) => (
        <div key={index} className="flex flex-col text-white w-full">
          {/* Cabeçalho com data */}
          <div className="mb-6">
            <h2 className="text-xl">
              {nomeDoDiaDaSemana} - {dia}/{mes}/{ano}
            </h2>
          </div>

          {/* Área principal com temperatura atual */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-dark/50 rounded-xl p-2">
            <div className="flex items-center gap-6">
              <Image
                width={80}
                height={80}
                src={`https://assets.hgbrasil.com/weather/icons/conditions/${data.icon}.svg`}
                alt={`Ícone do clima: ${data.weather}`}
                priority
                className="w-20 h-20"
              />
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold mb-1">{data.name}</h1>
                <h2 className="text-5xl font-bold">{data.temperature}ºC</h2>
                <p className="mt-1">{data.weather}</p>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4 md:mt-0">
              <div className="text-center">
                <p className="text-sm ">Mínima</p>
                <p className="text-xl font-bold">{data.tempMin}ºC</p>
              </div>
              <div className="text-center">
                <p className="text-sm ">Máxima</p>
                <p className="text-xl font-bold">{data.tempMax}ºC</p>
              </div>
            </div>
          </div>

          {/* Carrossel de previsão */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold">Previsão para os próximos dias</h3>
            <div className="relative">
              {/* Botões de navegação */}
              <button 
                onClick={() => scrollCarrossel('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-dark/50 p-2 rounded-full hover:bg-gray-dark transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scrollCarrossel('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-dark/50 p-2 rounded-full hover:bg-gray-dark transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="overflow-x-auto">
                <div 
                  ref={carrosselRef}
                  className="flex p-2 min-w-full scroll-smooth overflow-x-hidden"
                >
                  {data.forecast.slice(1).map((day, idx) => {
                    const forecastDate = new Date();
                    forecastDate.setDate(forecastDate.getDate() + idx +1);
                    const dayName = diasDaSemana[forecastDate.getDay()];
                    const dayNumber = forecastDate.getDate();
                    
                    return (
                      <div 
                        key={idx} 
                        className="flex-none bg-gray-dark/50 w-32 rounded-lg p-4 m-2 hover:bg-gray-dark transition-all transform hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="text-center">
                          <p className="font-medium">{dayName.split('-')[0]}</p>
                          <p className="text-sm mb-3">{dayNumber}</p>
                          <Image
                            width={50}
                            height={50}
                            src={`https://assets.hgbrasil.com/weather/icons/conditions/${day.condition}.svg`}
                            alt={`Previsão do tempo para ${dayName}`}
                            className="mx-auto mb-3"
                            priority
                          />
                        <p className="text-sm mb-2">{day.description || "Sem descrição disponível"}</p>
                          <div className="flex justify-center gap-3 text-lg">
                            <span className="font-bold">{day.min}°</span>
                            <span className="font-bold">{day.max}°</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}