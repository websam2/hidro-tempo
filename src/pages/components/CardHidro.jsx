import Hidro from "./Hidro";
import Level from "./LevelAlert";

export default function Card() {
  return (
    <div className="flex flex-col justify-center items-center m-4 p-4 h-36 w-36 bg-white rounded-md shadow-md">
      <Hidro />
      <Level />
    </div>
  );
}
