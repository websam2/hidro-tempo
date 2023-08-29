// import { useState, useEffect } from "react";
// import bdFlu from "../../json/bdFlu.json";

// export default function NomePosto(props) {
//   const [names, setNames] = useState([]);

//   useEffect(() => {
//     const names = Object.values(bdFlu)
//       .filter((obj) => obj && obj.hasOwnProperty("name"))
//       .map((obj) => obj.name);

//     names.forEach((name) => {
//       console.log(name);
//     });

//     setNames(names);
//   }, []);

//   return (
//     <>
//       <section className="text-center">{props.names}</section>
//     </>
//   );
// }

export default function NomePosto() {
  return (
    <>
      <h1 className="text-center m-4">Nome do Posto</h1>
    </>
  );
}
