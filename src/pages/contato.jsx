import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import serverApi from "./api/server";
import { useRouter } from "next/router";

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let router = useRouter();

  const enviarContato = async (dados) => {
    const { nome, email, mensagem } = dados;
    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    try {
      await fetch(`${serverApi}/contatos.json`, opcoes);
      alert("Dados enviados!");
      router.push("/");
    } catch (error) {
      console.error("Deu ruim no envio: " + error.message);
    }
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
                {...register("nome", { required: true })}
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
              />
            </div>
            {/* ? é conhecido como "Optional Chaining [encadeamento opcional]" 
            É usado para evitar erros caso uma propriedade de um objeto seja null ou undefined. Caso não seja null/undefined, aí sim verificamos se o type é required para seguir com a validação*/}
            {errors.nome?.type == "required" && <p>Você deve digitar o nome</p>}
            <div className="label">
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
            </div>
            {errors.email?.type == "required" && (
              <p>Você deve digitar o email</p>
            )}
            <div className="label">
              <textarea
                {...register("mensagem", { required: true, minLength: 20 })}
                maxLength={500}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
              ></textarea>
            </div>
            {errors.mensagem?.type == "required" && (
              <p>Você deve digitar uma mensagem</p>
            )}
            {errors.mensagem?.type == "minLength" && (
              <p>Escreva no mínimo 20 caracteres</p>
            )}
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

  p {
    color: red;
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
