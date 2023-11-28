import APIANA from "./APIANA";

export default function Card() {
  return (
    <>
      <section className="flex flex-col justify-center w-96 h-52 items-center m-2 p-4 bg-white rounded-md shadow-lg shadow-blue2">
        <h1 className="font-bold mb-4 mt-4">
          BARRAGEM DO VALO GRANDE - JUSANTE
        </h1>
        <APIANA id={81881000} key={81881000} />
      </section>
      <section className="flex flex-col justify-center w-96 h-52 items-center m-2 p-4 bg-white rounded-md shadow-lg shadow-blue2">
        <h1 className="font-bold mb-4 mt-4">
          BARRAGEM DO VALO GRANDE - MONTANTE
        </h1>
        <APIANA id={81880000} key={81880000} />
      </section>
      <section className="flex flex-col justify-center w-96 h-52 items-center m-2 p-4 bg-white rounded-md shadow-lg shadow-blue2">
        <h1 className="font-bold mb-4 mt-4">CAPELA DA RIBEIRA</h1>
        <APIANA id={81200000} key={81200000} />
      </section>
      <section className="flex flex-col justify-center w-96 h-52 items-center m-2 p-4 bg-white rounded-md shadow-lg shadow-blue2">
        <h1 className="font-bold mb-4 mt-4">ELDORADO</h1>
        <APIANA id={81380000} key={81380000} />
      </section>
      {/* <section className="flex flex-col justify-center w-96 h-52 items-center m-2 p-4 bg-white rounded-md shadow-lg shadow-blue2">
        <h1 className="font-bold mb-4 mt-4">SÃO SEBASTIÃO</h1>
        <APIANA id={81107000} key={81107000} />
      </section> */}
      <section className="flex flex-col justify-center w-96 h-52 items-center m-2 p-4 bg-white rounded-md shadow-lg shadow-blue2">
        <h1 className="font-bold mb-4 mt-4">IPORANGA</h1>
        <APIANA id={81350000} key={81350000} />
      </section>
      <section className="flex flex-col justify-center w-96 h-52 items-center m-2 p-4 bg-white rounded-md shadow-lg shadow-blue2">
        <h1 className="font-bold mb-4 mt-4">REGISTRO</h1>
        <APIANA id={81683000} key={81683000} />
      </section>
      <section className="flex flex-col justify-center w-96 h-52 items-center m-2 p-4 bg-white rounded-md shadow-lg shadow-blue2">
        <h1 className="font-bold mb-4 mt-4">SETE BARRAS</h1>
        <APIANA id={81420000} key={81420000} />
      </section>
      <section className="flex flex-col justify-center w-96 h-52 items-center m-2 p-4 bg-white rounded-md shadow-lg shadow-blue2">
        <h1 className="font-bold mb-4 mt-4">JUQUIÁ</h1>
        <APIANA id={81679000} key={81679000} />
      </section>
    </>
  );
}
