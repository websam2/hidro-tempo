import ButtonFooter from "./components/ButtonFooter.jsx";
import CardFlu from "./components/CardFlu.jsx";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col sm:justify-center items-center bg-blue2 h-screen sm:w-screen">
      <h1 className="text-center m-4 sm:m-0 text-lg sm:text-3xl text-gray-dark z-50">
        SISTEMA DE MONITORAMENTO FLUVIAL DO VALE DO RIBEIRA
      </h1>
      <section className="flex flex-col items-center z-40">
        <CardFlu />
        <ButtonFooter />
        <Image
          className="absolute bottom-0 right-0 m-4"
          src="/anaLogo.png"
          alt="ANA"
          width={100}
          height={25}
        />
      </section>
      <section className="z-0 absolute h-full">
        <Image
          className="blur-sm overflow-hidden"
          src="/anaLogoFundo.png"
          alt="ANA"
          width={1060}
          height={25}
        />
      </section>
    </main>
  );
}
