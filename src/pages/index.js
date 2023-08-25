import { useState } from "react";
import ModalFlu from "./components/ModalFlu.jsx";
import ModalPlu from "./components/ModalPlu.jsx";

export default function Home() {
  const [openFlu, setOpenFlu] = useState(false);
  const [openPlu, setOpenPlu] = useState(false);

  return (
    <main className="flex">
      <div className="flex sm:flex-col sm:justify-center sm:items-center bg-blue2 h-screen w-screen">
        <button
          className="p-6 bg-blue hover:bg-blue3 text-blue3 hover:text-blue sm:text-4xl border-2 m-4 rounded-lg"
          onClick={() => setOpenFlu(!openFlu)}
        >
          DADOS FLUVIOMÉTRICOS
        </button>
        <ModalFlu isOpen={openFlu} setOpenFlu={setOpenFlu} />
      </div>

      <div className="flex sm:flex-col sm:justify-center sm:items-center bg-blue2 h-screen w-screen">
        <button className="p-6 bg-blue hover:bg-blue3 text-blue3 hover:text-blue sm:text-4xl border-2 m-4 rounded-lg">
          DADOS PLUVIOMÉTRICOS
        </button>
        <ModalPlu isOpen={openPlu} setOpenPlu={setOpenPlu} />
      </div>
    </main>
  );
}
