import Hidro from "./SIBHHidro";
import Level from "./LevelAlert";

export default function CardHidro() {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-4 p-4  bg-white rounded-md shadow-md">
        <Hidro number="81200000" />
        <Level />
      </div>
      <div className="flex flex-col justify-center items-center m-4 p-4 bg-white rounded-md shadow-md">
        <Hidro number="4F-005" />
        <Level />
      </div>
      <div className="flex flex-col justify-center items-center m-4 p-4 bg-white rounded-md shadow-md">
        <Hidro number="5F-017" />
        <Level />
      </div>
      <div className="flex flex-col justify-center items-center m-4 p-4 bg-white rounded-md shadow-md">
        <Hidro number="81380000" />
        <Level />
      </div>
      <div className="flex flex-col justify-center items-center m-4 p-4 bg-white rounded-md shadow-md">
        <Hidro number="373" />
        <Level />
      </div>
      <div className="flex flex-col justify-center items-center m-4 p-4 bg-white rounded-md shadow-md">
        <Hidro number="81683000" />
        <Level />
      </div>
      <div className="flex flex-col justify-center items-center m-4 p-4 bg-white rounded-md shadow-md">
        <Hidro number="4F-041" />
        <Level />
      </div>
      <div className="flex flex-col justify-center items-center m-4 p-4 bg-white rounded-md shadow-md">
        <Hidro number="4F-044" />
        <Level />
      </div>
    </>
  );
}
