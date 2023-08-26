import APITempo from "./APITempo";
import APIANA from "./APIANA";
import codEstacao from "../../json/bdFlu.json";

export default function CardFlu() {
  return (
    <div className="flex flex-col justify-center items-center bg-blue2 p-10">
      <div className="flex flex-row rounded-4xl bg-blue shadow-xl">
        <section className="flex flex-col justify-center items-center w-1/4 p-12 border-y-gray-light">
          <APITempo />
        </section>
        <section className="flex flex-wrap justify-center p-4 bg-blue3 w-3/4 border-y-gray-light rounded-4xl">
          {codEstacao.map((estacao, posto) => (
            <APIANA
              id={estacao.id}
              key={estacao.id}
              id2={posto.name}
              key2={posto.name}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
