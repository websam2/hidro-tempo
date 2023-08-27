import ButtonFooter from "./components/ButtonFooter.jsx";
import CardFlu from "./components/CardFlu.jsx";

export default function Home() {
  return (
    <main className="flex flex-col sm:justify-center items-center bg-blue2 h-screen sm:w-screen">
      <h1 className="text-center m-4 sm:m-0 text-lg sm:text-3xl text-gray-dark">
        SISTEMA DE MONITORAMENTO FLUVIAL DO VALE DO RIBEIRA
      </h1>
      <section className="flex flex-col items-center">
        <CardFlu />
        <ButtonFooter />
      </section>
    </main>
  );
}
