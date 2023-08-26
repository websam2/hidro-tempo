import ButtonFooter from "./components/ButtonFooter.jsx";
import CardFlu from "./components/CardFlu.jsx";

export default function Home() {
  return (
    <main className="flex sm:flex-col sm:justify-center sm:items-center bg-blue2 h-screen w-screen">
      <h1 className="text-3xl text-gray-dark">
        SISTEMA DE MONITORAMENTO FLUVIAL DO VALE DO RIBEIRA
      </h1>
      <section className="flex flex-col items-center">
        <CardFlu />
        <ButtonFooter />
      </section>
    </main>
  );
}
