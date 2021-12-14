import * as React from "react";
import Image from "next/image";

// type Props = {
//   children?: React.ReactNode;
// };

export const AboutApp = () => (
  <div id="about" className="text-center mb-16 md:mb-32">
    <p className="text-brand300 text-1xl md:text-2xl mb-4">NaPraia</p>
    <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-[-1px]">
      Seu APP favorito para <br /> Delivery na praia
    </h3>

    <div className="grid md:grid-cols-3 gap-12 md:gap-4">
      <div>
        <div className="border-b-[1px] border-[#C4C4C4] mb-8">
          <div className="relative w-full max-w-[360px] m-auto ">
            <Image
              src="/images/facil-de-usar.png"
              layout="responsive"
              alt="fácil de usar"
              width="360"
              height="255"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-2xl mb-5">Fácil de Usar</h4>
          <p className="text-gray text-lg">
            Um clique aqui, outro ali e você localiza os vendedores mais
            próximos de você. Pronto! Agora é só pedir o que há de melhor
            NaPraia!
          </p>
        </div>
      </div>
      <div>
        <div className="border-b-[1px] border-[#C4C4C4] mb-8">
          <div className="relative w-full max-w-[360px] m-auto">
            <Image
              src="/images/rapido-na-entrega.png"
              layout="responsive"
              alt="fácil de usar"
              width="360"
              height="255"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-2xl mb-5">Rápido na Entrega</h4>
          <p className="text-gray text-lg">
            Você chama os vendedores, paga pelo APP com segurança e conforto!
            Recebe seu produto com tranquilidade para curtir mais o seu dia
            NaPraia.
          </p>
        </div>
      </div>
      <div>
        <div className="border-b-[1px] border-[#C4C4C4] mb-8">
          <div className="relative w-full max-w-[360px] m-auto">
            <Image
              src="/images/qualidade.png"
              layout="responsive"
              alt="fácil de usar"
              width="360"
              height="255"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-2xl mb-5">Ótima Qualidade</h4>
          <p className="text-gray text-lg">
            Pode confiar! Veja a avaliação dos vendedores e escolha com
            segurança. Gostou do seu pedido? Deixe sua avaliação e ajude os
            outros usuários. Todo mundo ganha!
          </p>
        </div>
      </div>
    </div>
  </div>
);
