import Loading from "@/layout/Loading";
import axios from "axios";
import { useEffect, useState } from "react";

// API DO SIBH
export default function APISIBH(props) {
  const [removeLoading, setRemoveLoading] = useState(false);

  const [hidro, setHidro] = useState([
    {
      estacao: props.codEstacaoSIBH,
      dataInicial: new Date().toISOString().slice(0, 10),
    },
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
        setRemoveLoading(true);
      } catch (err) {}
    }

    setHydroData(newData);
  };

  useEffect(() => {
    fetchHydroData();
  }, []);

  return (
    <div>
      {hydroData.map((data, index) => (
        <div key={index}>
          <p>{data.nome_do_posto}</p>
          <p>{data.valor_leitura}</p>
        </div>
      ))}
      {!removeLoading && <Loading />}
    </div>
  );
}
