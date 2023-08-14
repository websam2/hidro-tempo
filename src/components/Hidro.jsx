import Loading from "@/layout/Loading";
import axios from "axios";
import { useEffect, useState } from "react";

// API DO SIBH
export default function Hidro() {
  const [removeLoading, setRemoveLoading] = useState(false);

  const [hidro, setHidro] = useState([
    { estacao: "81683000", dataInicial: "2023-08-14" },
  ]);

  const [hydroData, setHydroData] = useState([]);

  const fetchHydroData = async () => {
    const newData = [];
    for (const local of hidro) {
      try {
        const res = await axios.get(
          `http://sibh.daee.sp.gov.br/api/medicoes?prefixo=${local.estacao}&data=${local.dataInicial}`
        );

        newData.push({
          nome_do_posto: res.data.medicoes[0].nome_do_posto,
          valor_leitura: res.data.medicoes[0].valor_leitura,
        });
        console.log(newData);
        setRemoveLoading(true);
      } catch (err) {
        alert("O painel está em manutenção. Tente novamente mais tarde.");
      }
    }

    setHydroData(newData);
  };

  useEffect(() => {
    fetchHydroData();
  }, []);

  return (
    <>
      {hydroData.map((data, index) => (
        <div key={index}>
          <div>
            <div>
              <h1>{data.nome_do_posto}</h1>
            </div>
            <div>
              <h1>{data.valor_leitura}</h1>
            </div>
          </div>
        </div>
      ))}
      {!removeLoading && <Loading />}
    </>
  );
}

// // API DA ANA (XML)
// export default function Hidro() {
//   async function fetchData() {
//     const response = await axios.get(
//       "http://telemetriaws1.ana.gov.br/ServiceANA.asmx/DadosHidrometeorologicosGerais?codEstacao=81683000&dataInicio=08/08/2023&dataFim=08/08/2023"
//     );
//     const json = await parseStringPromise(response.data);
//     const dados =
//       json["DataTable"]["diffgr:diffgram"][0]["DocumentElement"][0][
//         "DadosHidrometereologicos"
//       ];
//     console.log(dados);
//   }
//   fetchData();
// }
