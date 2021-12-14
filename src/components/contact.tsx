import * as React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

export const regionsId = [
  {
    code: "",
    name: "",
  },
  {
    code: "AC",
    name: "Acre",
  },
  {
    code: "AL",
    name: "Alagoas",
  },
  {
    code: "AP",
    name: "Amapá",
  },
  {
    code: "AM",
    name: "Amazonas",
  },
  {
    code: "BA",
    name: "Bahia",
  },
  {
    code: "CE",
    name: "Ceará",
  },
  {
    code: "DF",
    name: "Distrito Federal",
  },
  {
    code: "ES",
    name: "Espírito Santo",
  },
  {
    code: "GO",
    name: "Goiás",
  },
  {
    code: "MA",
    name: "Maranhão",
  },
  {
    code: "MT",
    name: "Mato Grosso",
  },
  {
    code: "MS",
    name: "Mato Grosso do Sul",
  },
  {
    code: "MG",
    name: "Minas Gerais",
  },
  {
    code: "PA",
    name: "Pará",
  },
  {
    code: "PB",
    name: "Paraíba",
  },
  {
    code: "PR",
    name: "Paraná",
  },
  {
    code: "PE",
    name: "Pernambuco",
  },
  {
    code: "PI",
    name: "Piauí",
  },
  {
    code: "RJ",
    name: "Rio de Janeiro",
  },
  {
    code: "RN",
    name: "Rio Grande do Norte",
  },
  {
    code: "RS",
    name: "Rio Grande do Sul",
  },
  {
    code: "RO",
    name: "Rondônia",
  },
  {
    code: "RR",
    name: "Roraima",
  },
  {
    code: "SC",
    name: "Santa Catarina",
  },
  {
    code: "SP",
    name: "São Paulo",
  },
  {
    code: "SE",
    name: "Sergipe",
  },
  {
    code: "TO",
    name: "Tocantins",
  },
];

// type Props = {
//   children?: React.ReactNode;
// };

export function ErrorMessage(props) {
  if (!props.errors[props.index]) {
    return null;
  }

  return (
    <div className="text-sm pt-2">
      {props.errors[props.index]?.type === "required" && (
        <div>Campo obrigatório</div>
      )}
      {props.errors[props.index]?.message && (
        <div>{props.errors[props.index].messsage}</div>
      )}
    </div>
  );
}

export const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const [contactSend, setContactSend] = React.useState("idle");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const { city, name, state, products, phoneNumber } = data;
      const response = await fetch(
        "https://api.apispreadsheets.com/data/2HyrI2aO0FE3Q2XH/",
        {
          method: "POST",
          body: JSON.stringify({
            data: {
              city,
              name,
              state,
              products,
              phoneNumber,
            },
          }),
        }
      );

      reset();
      setValue("phoneNumber", "");
      setContactSend("success");
    } catch {
      setContactSend("error");
    } finally {
      setLoading(false);
    }
  };

  console.log(errors);

  return (
    <div id="contato" className="grid md:grid-cols-3">
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
          O APP NaPraia te ajuda a vender mais! Divulgue seus produtos e
          serviços, conquiste mais clientes e receba suas vendas pelo APP no
          mesmo dia. Aumente seus ganhos participando do melhor Programa de
          Benefícios das areias!{" "}
        </p>
        <p className="text-brand300 text-lg">Cadastre-se agora:</p>
        {contactSend === "success" && (
          <div className="mt-2 mb-3 p-2 text-sm rounded-md text-[#0f5132] border-[1px] border-[#badbcc] bg-[#d1e7dd]">
            Cadastro realizado com sucesso.
          </div>
        )}
        {contactSend === "error" && (
          <div className="mt-2 mb-3 p-2 text-sm rounded-md text-[#842029] border-[1px] border-[#f5c2c7] bg-[#f8d7da]">
            Estamos com algum problema, tente novamente mais tarde.
          </div>
        )}
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="grid md:grid-cols-3 gap-5 mb-5">
            <label className="md:col-span-2">
              <div>Nome:</div>
              <input
                type="text"
                className="w-full rounded-md"
                {...register("name", {
                  required: true,
                })}
              />
              <ErrorMessage errors={errors} index="name" />
            </label>
            <label>
              <div>Telefone:</div>
              <InputMask
                mask="(99) 999999999"
                maskChar="_"
                type="text"
                className="w-full rounded-md"
                {...register("phoneNumber", {
                  required: true,
                })}
              />
              <ErrorMessage errors={errors} index="phoneNumber" />
            </label>
          </fieldset>
          <fieldset className="grid md:grid-cols-3 gap-5 mb-5">
            <label className="md:col-span-2">
              <div>Cidade:</div>
              <input
                type="text"
                className="w-full rounded-md"
                {...register("city", {
                  required: true,
                })}
              />
              <ErrorMessage errors={errors} index="city" />
            </label>
            <label>
              <div>Estado:</div>
              <select
                className="w-full rounded-md"
                {...register("state", {
                  required: true,
                })}
              >
                {regionsId.map((r: any) => (
                  <option key={r.code} value={r.code}>
                    {r.name}
                  </option>
                ))}
              </select>
              <ErrorMessage errors={errors} index="state" />
            </label>
          </fieldset>
          <fieldset className="mb-5">
            <label>
              <div>Produtos:</div>
              <input
                type="text"
                className="w-full rounded-md"
                {...register("products")}
              />
            </label>
          </fieldset>
          <fieldset className="b-5 text-right">
            <button
              disabled={loading}
              className={`${
                loading ? "bg-brand300/30" : "bg-brand300"
              } inline-flex relative  py-2 px-8 items-center rounded-full text-white`}
            >
              Enviar
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
