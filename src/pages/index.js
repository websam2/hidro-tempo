import TempoLocal from "./components/TempoLocal.jsx";
import Card from "./components/CardHidro.jsx";
import ANAHidro from "./components/ANAHidro.jsx";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-blue2 h-screen w-screen p-24">
      <div className="flex flex-row rounded-4xl h-full w-screen bg-blue shadow-xl">
        <div className="flex flex-col justify-center items-center w-1/4 h-full border-y-gray-light">
          <TempoLocal />
        </div>
        <div className="flex flex-wrap justify-center right-10-8 p-8 bg-blue3 w-3/4 h-full border-y-gray-light rounded-4xl">
          <Card />
        </div>
        <ANAHidro />
      </div>
    </main>
  );
}
