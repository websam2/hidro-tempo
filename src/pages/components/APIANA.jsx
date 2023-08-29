import axios from "axios";
import { parseStringPromise } from "xml2js";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Level from "./LevelAlert";
import NomePosto from "./NomePosto";

// API DA ANA (XML)
export default function APIANA({ id }) {
  const [hidro, setHidro] = useState([
    {
      estacao: id,
      dataInicio: new Date().toISOString().slice(0, 10),
      dataFim: new Date().toISOString().slice(0, 10),
    },
  ]);

  const [valorMetros, setDados] = useState(null);
  const intervalRef = useRef(null);

  async function fetchData() {
    for (const local of hidro) {
      try {
        const response = await axios.get(
          `http://telemetriaws1.ana.gov.br/ServiceANA.asmx/DadosHidrometeorologicosGerais?codEstacao=${local.estacao}&dataInicio=${local.dataInicio}&dataFim=${local.dataFim}`
        );
        const json = await parseStringPromise(response.data);
        const dados =
          json["DataTable"]["diffgr:diffgram"][0]["DocumentElement"][0][
            "DadosHidrometereologicos"
          ][0]["NivelSensor"];

        //conversão para metros
        const metros = dados;
        const valor = metros * 0.01;
        const valorMetros = valor.toFixed(2) + "m";
        setDados(valorMetros);

        console.log(valorMetros);
      } catch (err) {}
    }
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
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
    <section className="flex flex-col justify-center w-48 items-center m-2 p-4 bg-white rounded-md">
      {valorMetros === null || valorMetros === 0 || valorMetros === "0.00m" ? (
        <p className="text-warning">Está em manutenção</p>
      ) : (
        <div className="flex flex-col items-center">
          <section>
            <NomePosto />
          </section>

          <section className="flex flex-row justify-center items-center">
            <p className="font-bold">{valorMetros}</p>
            <Image src="/ruler.png" alt="ruler" width={25} height={25} />
          </section>
          <Level />
        </div>
      )}
    </section>
  );
}
