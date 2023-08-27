import APITempo from "./APITempo";
import APIANA from "./APIANA";
import codEstacao from "../../json/bdFlu.json";

export default function CardFlu() {
  return (
    <div className="flex flex-col justify-center items-center sm:bg-blue2 sm:p-10">
      <div className="flex sm:flex-row flex-col sm:rounded-4xl bg-blue shadow-xl">
        <section className="flex flex-col justify-center items-center sm:w-1/4 sm:p-12 m-4 sm:m-0 sm:border-y-gray-light">
          <APITempo />
        </section>
        <section className="flex flex-wrap justify-center p-4 bg-blue3 sm:w-3/4 border-y-gray-light rounded-4xl">
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
