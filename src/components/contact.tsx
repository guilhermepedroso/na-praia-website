import * as React from "react";
import Image from "next/image";

// type Props = {
//   children?: React.ReactNode;
// };

export const Contact = () => (
  <div className="grid md:grid-cols-3">
    <div>
      <div className="max-w-[360px] h-[436px] relative md:pr-8 m-auto">
        <Image
          src="/images/seller-image.png"
          layout="responsive"
          alt="seller"
          width="356"
          height="436"
        />
      </div>
    </div>
    <div className="md:col-span-2 md:pl-10">
      <p className="text-[#72C6E6] text-1xl md:text-2xl mb-2 md:mb-4">
        Vendedores
      </p>
      <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-[-1px]">
        Que tal entrar para o mundo <br /> digital nas areias?
      </h3>
      <p className="text-gray text-xl mb-5">
        O APP NaPraia te ajuda a vender mais! Divulgue seus produtos e serviços,
        conquiste mais clientes e receba suas vendas pelo APP no mesmo dia.
        Aumente seus ganhos participando do melhor Programa de Benefícios das
        areias!{" "}
      </p>
      <p className="text-brand300 text-lg">Cadastre-se agora:</p>
      <form className="">
        <fieldset className="mb-5">
          <label>
            <div>Nome:</div>
            <input type="text" disabled className="w-full rounded-md" />
          </label>
        </fieldset>
        <fieldset className="grid md:grid-cols-2 gap-5">
          <label>
            <div>Telefone:</div>
            <input type="text" disabled className="w-full rounded-md" />
          </label>
          <label>
            <div>E-mail:</div>
            <input type="text" disabled className="w-full rounded-md" />
          </label>
        </fieldset>
        <fieldset className="mt-5 text-right">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="inline-flex relative bg-brand300/60 py-2 px-8 items-center  rounded-full text-white"
          >
            Em breve
          </button>
        </fieldset>
      </form>
    </div>
  </div>
);
