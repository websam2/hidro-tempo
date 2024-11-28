import axios from "axios";
import { parseStringPromise } from "xml2js";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function APIANA({ id }) {
  const [dataHora, setDataHora] = useState(null);
  const [nivelSensor, setNivelSensor] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3; // Maximum number of retry attempts
  const retryDelay = 5000; // 5 seconds delay between retries
  const intervalRef = useRef(null);
  const dataAtual = new Date().toISOString();

  async function fetchData() {
    try {
      const response = await axios.get(
        `http://telemetriaws1.ana.gov.br/ServiceANA.asmx/DadosHidrometeorologicosGerais?codEstacao=${id}&dataInicio=${dataAtual}&dataFim=${dataAtual}`
      );
      const json = await parseStringPromise(response.data);

      const dadosHidro = json.DataTable["diffgr:diffgram"][0].DocumentElement[0].DadosHidrometereologicos[0];
      
      if (!dadosHidro || !dadosHidro.DataHora || !dadosHidro.NivelSensor) {
        if (retryCount < maxRetries) {
          console.log(`Tentativa ${retryCount + 1} de ${maxRetries}: Dados não disponíveis, tentando novamente em ${retryDelay/1000} segundos...`);
          setRetryCount(prev => prev + 1);
          setTimeout(fetchData, retryDelay);
          return;
        }
          console.log("Número máximo de tentativas atingido. Dados não disponíveis.");
          setRetryCount(0);
      }

      const dataHora = dadosHidro.DataHora;
      const nivelSensor = dadosHidro.NivelSensor;

      // Formatar a data para o padrão brasileiro
      const dataFormatada = new Date(dataHora).toLocaleString('pt-BR');

      setDataHora(dataFormatada);
      setNivelSensor(nivelSensor);
      setRetryCount(0); // Reset retry count on successful fetch
    } catch (err) {
      console.error(err);
      if (retryCount < maxRetries) {
        console.log(`Tentativa ${retryCount + 1} de ${maxRetries}: Erro na requisição, tentando novamente em ${retryDelay/1000} segundos...`);
        setRetryCount(prev => prev + 1);
        setTimeout(fetchData, retryDelay);
        return;
      }
        console.log("Número máximo de tentativas atingido. Erro na requisição.");
        setRetryCount(0);
    }
    
    clearInterval(intervalRef.current);
    intervalRef.current = setTimeout(() => {
      fetchData();
    }, 600000);
  }

  useEffect(() => {
    fetchData();
    intervalRef.current = setInterval(() => {
      fetchData();
    }, 600000);
    return () => clearInterval(intervalRef.current);
  });

  return (
    <>
      {nivelSensor === null ||
      nivelSensor === 0 ||
      nivelSensor === "0.00" ||
      nivelSensor === "" ? (
        <p className="text-warning">Está em manutenção</p>
      ) : (
        <div>
          <section className="flex flex-col items-center">
            <h1 className="flex font-bold text-2xl m-4">
              <Image src="/ruler.png" alt="regua" width={20} height={20} />
              {`${nivelSensor}mm`}
            </h1>
            <div className="flex flex-row">
              <Image
                src="/atualizar.png"
                alt="atualizar"
                width={25}
                height={0}
              />
              <p className="ml-2">Último registro: {dataHora}</p>
            </div>
          </section>
          <section className="bg-green rounded-md mt-6">
            <p className="text-center">Nível: atenção</p>
          </section>
        </div>
      )}
    </>
  );
}
