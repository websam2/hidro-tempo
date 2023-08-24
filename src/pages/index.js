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
          className="btn sm:w-1/2 bg-blue hover:bg-blue3 text-blue3 hover:text-blue"
          onClick={() => setOpenFlu(!openFlu)}
        >
          DADOS FLUVIOMÉTRICOS
        </button>
        <ModalFlu isOpen={openFlu} setOpenFlu={setOpenFlu} />
      </div>

      <div className="flex sm:flex-col sm:justify-center sm:items-center bg-blue2 h-screen w-screen">
        <button
          className="btn sm:w-1/2 bg-blue hover:bg-blue3 text-blue3 hover:text-blue"
          onClick={() => setOpenPlu(!openPlu)}
        >
          DADOS PLUVIOMÉTRICOS
        </button>
        <ModalPlu isOpen={openPlu} setOpenPlu={setOpenPlu} />
      </div>
    </main>
  );
}
