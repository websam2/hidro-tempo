import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { parseStringPromise } from "xml2js";
import Image from "next/image";
import APITempo from "./APIHGBrasil";

const StationCard = ({ id, name }) => {
  const [dataHora, setDataHora] = useState(null);
  const [nivelSensor, setNivelSensor] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;
  const retryDelay = 5000;
  const intervalRef = useRef(null);

  async function fetchData() {
    const dataAtual = new Date().toISOString();
    try {
      const response = await axios.get(
        `http://telemetriaws1.ana.gov.br/ServiceANA.asmx/DadosHidrometeorologicosGerais?codEstacao=${id}&dataInicio=${dataAtual}&dataFim=${dataAtual}`
      );
      const json = await parseStringPromise(response.data);

      const dadosHidro = json.DataTable["diffgr:diffgram"][0].DocumentElement[0].DadosHidrometereologicos[0];
      
      if (!dadosHidro || !dadosHidro.DataHora || !dadosHidro.NivelSensor) {
        if (retryCount < maxRetries) {
          setRetryCount(prev => prev + 1);
          setTimeout(fetchData, retryDelay);
          return;
        }
        setRetryCount(0);
      }

      const dataFormatada = new Date(dadosHidro.DataHora).toLocaleString('pt-BR');
      setDataHora(dataFormatada);
      setNivelSensor(dadosHidro.NivelSensor);
      setRetryCount(0);
    } catch (err) {
      if (retryCount < maxRetries) {
        setRetryCount(prev => prev + 1);
        setTimeout(fetchData, retryDelay);
        return;
      }
      setRetryCount(0);
    }
  }

  useEffect(() => {
    fetchData();
    intervalRef.current = setInterval(fetchData, 600000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center m-2 p-4 bg-white rounded-md shadow-lg shadow-blue2">
      <h1 className="font-bold mb-4 mt-4">{name}</h1>
      {nivelSensor === null || nivelSensor === 0 || nivelSensor === "0.00" || nivelSensor === "" ? (
        <p className="text-warning">Está em manutenção</p>
      ) : (
        <div>
          <section className="flex flex-col items-center">
            <h1 className="flex font-bold text-2xl m-4">
              <Image src="/ruler.png" alt="regua" width={20} height={20} />
              {`${nivelSensor}mm`}
            </h1>
            <div className="flex flex-row">
              <Image src="/atualizar.png" alt="atualizar" width={25} height={0} />
              <p className="ml-2">Último registro: {dataHora}</p>
            </div>
          </section>
          <section className="bg-green text-white rounded-md mt-6">
            <p className="text-center">Nível: atenção</p>
          </section>
        </div>
      )}
    </section>
  );
};

export default function CardFlu() {
  const stations = [
    {
      id: "81881000",
      name: "BARRAGEM DO VALO GRANDE - JUSANTE",
    },
    {
      id: "81880000",
      name: "BARRAGEM DO VALO GRANDE - MONTANTE",
    },
    {
      id: "81200000",
      name: "CAPELA DA RIBEIRA",
    },
    {
      id: "81380000",
      name: "ELDORADO",
    },
    {
      id: "81350000",
      name: "IPORANGA",
    },
    {
      id: "81683000",
      name: "REGISTRO",
    },
    {
      id: "81420000",
      name: "SETE BARRAS",
    },
    {
      id: "81679000",
      name: "JUQUIÁ",
    },
    {
      id: "81630000",
      name: "MIRACATU",
    },
    {
      id: "81710000",
      name: "JACUPIRANGA",
    },
    {
      id: "81337000",
      name: "B. DO TURVO",
    },
    {
      id: "81699000",
      name: "B. DO AZEITE",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center sm:p-10">
      <div className="flex sm:flex-row flex-col sm:rounded-4xl bg-blue shadow-xl">
        <section className="flex flex-col justify-center items-center sm:w-1/4 sm:p-12 m-4 sm:m-0 sm:border-y-gray-light">
          <APITempo />
        </section>
        <section className="flex flex-wrap justify-center bg-blue3 border-y-gray-light rounded-4xl">
          {stations.map((station) => (
            <StationCard key={station.id} id={station.id} name={station.name} />
          ))}
        </section>
      </div>
    </div>
  );
}