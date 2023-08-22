import APISIBH from "./APISIBH";
import APIANA from "./APIANA";
import Level from "./LevelAlert";

export default function CardHidro() {
  return (
    <>
      <div className="flex flex-col justify-center w-52 items-center m-4 p-4 bg-white rounded-md shadow-md">
        <p>BALSA DO CERRO</p>
        <APIANA codEstacaoANA="81135000" />
        <Level />
      </div>

      <div className="flex flex-col justify-center w-52 items-center m-4 p-4 bg-white rounded-md shadow-md">
        <p>BARRA DO BATATAL</p>
        <APIANA codEstacaoANA="81380000" />
        <Level />
      </div>

      <div className="flex flex-col justify-center w-52 items-center m-4 p-4 bg-white rounded-md shadow-md">
        <p>BARRAGEM DO VALO GRANDE - JUSANTE</p>
        <APIANA codEstacaoANA="81881000" />
        <Level />
      </div>

      <div className="flex flex-col justify-center w-52 items-center m-4 p-4 bg-white rounded-md shadow-md">
        <p>BARRAGEM DO VALO GRANDE - MONTANTE</p>
        <APIANA codEstacaoANA="81880000" />
        <Level />
      </div>

      <div className="flex flex-col justify-center w-52 items-center m-4 p-4  bg-white rounded-md shadow-md">
        <p>CAPELA DA RIBEIRA</p>
        <APIANA codEstacaoANA="81200000" />
        <Level />
      </div>

      <div className="flex flex-col justify-center w-52 items-center m-4 p-4 bg-white rounded-md shadow-md">
        <p>ELDORADO</p>
        <APIANA codEstacaoANA="81380000" />
        <Level />
      </div>

      <div className="flex flex-col justify-center w-52 items-center m-4 p-4 bg-white rounded-md shadow-md">
        <p>SÃO SEBASTIÃO</p>
        <APIANA codEstacaoANA="81107000" />
        <Level />
      </div>

      <div className="flex flex-col justify-center w-52 items-center m-4 p-4 bg-white rounded-md shadow-md">
        <p>IPORANGA</p>
        <APIANA codEstacaoANA="81350000" />
        <Level />
      </div>

      <div className="flex flex-col justify-center w-52 items-center m-4 p-4 bg-white rounded-md shadow-md">
        <p>REGISTRO</p>
        <APIANA codEstacaoANA="81683000" />
        <Level />
      </div>

      <div className="flex flex-col justify-center w-52 items-center m-4 p-4 bg-white rounded-md shadow-md">
        <p>SETE BARRAS</p>
        <APIANA codEstacaoANA="81420000" />
        <Level />
      </div>
    </>
  );
}
