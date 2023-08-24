import CardPlu from "./CardPlu";

export default function ModalPlu({ isOpen, setOpen }) {
  if (isOpen) {
    return (
      <div className="flex flex-col justify-center items-center bg-blue2 w-screen p-24">
        <h1 className="text-3xl text-gray-dark">
          SISTEMA DE MONITORAMENTO - VALE DO RIBEIRA
        </h1>
        {/* <button onClick={() => setOpen(!isOpen)}>Fechar</button> */}
        <div>
          <div className="flex flex-row rounded-4xl bg-blue">
            <CardPlu />
          </div>
        </div>
      </div>
    );
  }
}
