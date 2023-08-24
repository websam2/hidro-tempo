import { useState } from "react";
import ModalFlu from "./components/ModalFlu.jsx";
import ModalPlu from "./components/ModalPlu.jsx";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex">
      <div className="flex flex-col justify-center items-center bg-blue2 h-screen w-screen">
        <button
          className="btn w-1/2 bg-blue hover:bg-blue3 text-blue3 hover:text-blue"
          onClick={() => setOpen(!open)}
        >
          DADOS FLUVIOMÉTRICOS
        </button>
        <ModalFlu isOpen={open} setOpen={setOpen} />
      </div>

      <div className="flex flex-col justify-center items-center bg-blue2 h-screen w-screen">
        <button
          className="btn w-1/2 bg-blue hover:bg-blue3 text-blue3 hover:text-blue"
          onClick={() => setOpen(!open)}
        >
          DADOS PLUVIOMÉTRICOS
        </button>
        <ModalPlu isOpen={open} setOpen={setOpen} />
      </div>
    </main>
  );
}
