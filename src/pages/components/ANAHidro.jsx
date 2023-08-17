import Loading from "@/layout/Loading";
import axios from "axios";
import { parseStringPromise } from "xml2js";
import { useEffect, useState } from "react";

// API DA ANA (XML)
export default function ANAHidro() {
  const [removeLoading, setRemoveLoading] = useState(false);

  const [dados, setDados] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(
        "http://telemetriaws1.ana.gov.br/ServiceANA.asmx/DadosHidrometeorologicosGerais?codEstacao=81420000&dataInicio=17/08/2023&dataFim=17/08/2023"
      );
      const json = await parseStringPromise(response.data);
      const dados =
        json["DataTable"]["diffgr:diffgram"][0]["DocumentElement"][0][
          "DadosHidrometereologicos"
        ][0]["NivelSensor"];
      setDados(dados);
      console.log(dados);
      setRemoveLoading(true);
    } catch (err) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p className="text-lg text-purple bg-yellow">{dados}</p>
      {!removeLoading && <Loading />}
    </div>
  );
}
