import CardPlu from "./CardPlu";

export default function ModalFlu({ isOpen, setOpen }) {
  if (isOpen) {
    return (
      <div className="flex justify-center items-center bg-blue2 w-screen p-24">
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
