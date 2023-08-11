import Loading from "@/layout/Loading";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Hidro() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get(
          "http://telemetriaws1.ana.gov.br/ServiceANA.asmx/DadosHidrometeorologicosGerais?codEstacao=81683000&dataInicio=08/08/2023&dataFim=08/08/2023"
        )
        .then((response) => {
          console.log(response);
        });

      //   setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {/* {data.map((item) => (
        <li key={item.id}>
          {item.name} {item.price}
        </li>
      ))} */}
    </ul>
  );
}

// export default function Hidro() {
//   const [hydroData, setHydroData] = useState([]);
//     const fechHydroData = async () => {
//       const newData = [];
//       const codEstacao = { number: "81683000" };
//       const dataInicio = { startDate: "08/08/2023" };
//       const dataFim = { endDate: "08/08/2023" };

//       try {
//         const res = await axios.get(
//           `http://telemetriaws1.ana.gov.br/ServiceANA.asmx/DadosHidrometeorologicosGerais?${codEstacao.number}&${dataInicio.startDate}&${dataFim.endDate}`
//         );
//         newData.push({
//           VazaoFinal: res.data.VazaoFinal,
//         });
//       } catch (err) {}

//       setHydroData(newData);
//     };
//     console.log(fechHydroData);

//     useEffect(() => {
//       fetchHydroData();
//     }, []);

//   return (
//     <>
//       {hydroData.map((data, index) => (
//         <div key={index}>
//           <div>
//             <h1>{data.VazaoFinal}</h1>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
