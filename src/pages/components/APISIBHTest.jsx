import Loading from "@/layout/Loading";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Level from "./LevelAlert";

// API DA ANA (XML)
export default function APISIBHTest({ id }) {
  const [hidro, setHidro] = useState([
    {
      estacao: id,
      dataInicial: new Date().toISOString().slice(0, 10),
    },
  ]);
  const [valorMetros, setDados] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const newData = [];
        for (const local of hidro) {
          const response = await axios.get(
            `http://sibh.daee.sp.gov.br/api/medicoes?prefixo=${local.estacao}&data=${local.dataInicial}`
          );
          newData.push({
            prefixo: response.data,
          });
        }
        setDados(newData);
        console.log(newData);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
    const intervalRef = setInterval(() => {
      fetchData();
    }, 600000);
    return () => clearInterval(intervalRef);
  }, [hidro]);

  return null;

  return (
    <></>
    // <section className="flex flex-col justify-center w-52 h-40 items-center m-4 p-4 bg-white rounded-md">
    //   {valorMetros === null || valorMetros === 0 || valorMetros === "0.00m" ? (
    //     <p className="text-warning">Está em manutenção</p>
    //   ) : (
    //     <div className="flex flex-col items-center">
    //       <div className="flex flex-row justify-center items-center">
    //         <p className="font-bold">{valorMetros}</p>
    //         <Image src="/ruler.png" alt="ruler" width={25} height={25} />
    //       </div>
    //       <Level />
    //     </div>
    //   )}
    // </section>
  );
}
