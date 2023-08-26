import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function ButtonFooter() {
  return (
    <Tippy
      content={
        <div>
          <h1 className="text-lg text-green">Atenção</h1>
          <h1 className="text-lg text-orange">Alerta</h1>
          <h1 className="text-lg text-pink">Emergencia</h1>
          <h1 className="text-lg text-purple">Extravasamento</h1>
        </div>
      }
    >
      <button className="p-2 w-1/5 bg-blue hover:bg-blue3 text-blue3 hover:text-blue sm:text-sm border-2 m-2 rounded-lg">
        LEGENDA
      </button>
    </Tippy>
  );
}
