import APITempo from "./APITempo";
import APIANA from "./APIANA";
import codEstacao from "../../json/bdFlu.json";

export default function CardFlu() {
  return (
    <div className="flex justify-center items-center bg-blue2 w-screen p-24">
      <div>
        <div className="flex flex-row rounded-4xl bg-blue shadow-xl">
          <section className="flex flex-col justify-center items-center w-1/4 border-y-gray-light">
            <APITempo />
          </section>

          <section className="flex flex-wrap justify-center right-10-8 p-8 bg-blue3 w-3/4 h-full border-y-gray-light rounded-4xl">
            {codEstacao.map((codEstacao, posto) => (
              <APIANA
                id={codEstacao.id}
                key={codEstacao.id}
                id2={posto.nome}
                key2={posto.nome}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
