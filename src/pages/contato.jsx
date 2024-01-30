import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function Contato() {
  const { register, handleSubmit } = useForm();

  const enviarContato = (dados) => {
    console.log(dados);
  };

  return (
    <>
      <Head>
        <title>Contato - PetShop</title>
        <meta
          name="description"
          contente="Au au au! Dúvidas ou sugestões entre em contato conosco"
        />
        <meta name="Keywords" content="petshop, contato" />
      </Head>
      {/* //Antes era <section> mudamos por causa do css */}
      <StyledContato>
        <h2>Fale Conosco</h2>

        <Container>
          <form
            action=""
            method="post"
            onSubmit={handleSubmit((dados) => enviarContato(dados))}
          >
            <div className="label">
              <input
                {...register("nome")}
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
              />
            </div>
            <div className="label">
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
            </div>
            <div className="label">
              <textarea
                {...register("mensagem")}
                maxLength={500}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
              ></textarea>
            </div>
            <div>
              <button type="submit">Enviar mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}

const StyledContato = styled.section`
  h2::before {
    content: "💌";
  }

  .label input,
  textarea {
    border: none;
    box-shadow: var(--sombra-box);
    width: 100%;
    margin-bottom: 20px;
    padding: 20px;
    font-size: 16px;
    border-radius: var(--borda-arredondada);
  }

  button {
    margin: 30px;
    border: none;
    padding: 20px;
    margin-left: auto;
    border-radius: var(--borda-arredondada);
    font-size: medium;
    transition: 0.25s;
    cursor: pointer;
    box-shadow: var(--sombra-box);
  }

  button:hover {
    background: #0b0a3f;
    color: white;
  }
`;
