import * as React from "react";
import Image from "next/image";
import { Wrapper } from "./wrapper";
import Link from "next/link";

// type Props = {
//   children?: React.ReactNode;
// };

export const Footer = () => {
  const [open, setOpen] = React.useState(false);

  const activeClass = "hover:underline hover:text-brand300";

  return (
    <header className="py-6 text-gray">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" passHref>
              <a className="w-[140px] h-[42px] relative inline-block">
                <Image src="/logo.svg" layout="fill" alt="logo na praia" />
              </a>
            </Link>
          </div>
          <div>
            <a
              href="https://pt-br.facebook.com/NaPraiaApp/"
              target="_blank"
              rel="noreferrer"
              className="mr-2"
            >
              <Image
                src="/images/facebook.svg"
                layout="fixed"
                alt="facebook"
                width="24"
                height="24"
              />
            </a>
            <a
              href="https://www.instagram.com/napraiaapp/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/instagram.svg"
                layout="fixed"
                alt="instagram"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="flex md:items-center justify-between text-sm mt-4 flex-col md:flex-row-reverse">
          <Link href="/politica-de-privacidade" passHref>
            <a className="hover:underline mb-4 md:mb-0">
              Política de Privacidade
            </a>
          </Link>
          <div className="">NaPraia© 2021 - Todos os direitos reservados</div>
        </div>
      </Wrapper>
    </header>
  );
};
