import Loading from "@/layout/Loading";
import axios from "axios";
import { parseStringPromise } from "xml2js";
import { useEffect, useState } from "react";

// API DA ANA (XML)
export default function APIANA(props) {
  const [removeLoading, setRemoveLoading] = useState(false);

  const [hidro, setHidro] = useState([
    {
      estacao: props.codEstacaoANA,
      dataInicio: new Date().toISOString().slice(0, 10),
      dataFim: new Date().toISOString().slice(0, 10),
    },
  ]);

  const [valorMetros, setDados] = useState(null);

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

        const metros = dados;
        const valor = metros * 0.01;
        const valorMetros = valor.toFixed(2) + "m";
        console.log(valorMetros);

        setDados(valorMetros);

        setRemoveLoading(true);
      } catch (err) {}
    }
  }

  useEffect(() => {
    fetchData();
  });

  setInterval(() => {
    fetchData();
  }, 600000);

  return (
    <div>
      {valorMetros === null || valorMetros === 0 || valorMetros === 0.0 ? (
        <p>Está em manutenção.</p>
      ) : (
        <p>{valorMetros}</p>
      )}
      {!removeLoading && <Loading />}
    </div>
  );
}
