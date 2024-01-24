import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";

import { useState, useEffect } from "react"; //importação da linha 8 useState(). Primeiro escreve useState
import serverApi from "./api/server"; // usamos na linha 16

/* EXECUTADA NO SERVIDOR/BACK-END 
            Função getStaticProps 
Utilizada para execução de código server-side (neste caso, fetch na API com o objetivo de gerar props com os dados processados)*/
export async function getStaticProps() {
  console.log("Código de servidor (não aparece no cliente)...");

  try {
    const resposta = await fetch(`${serverApi}/posts`); // antes era `http://10.20.46.34:2112/posts`
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    /* Extraindo as categorias dos posts para um novo array */
    const categorias = dados.map((post) => post.categoria);
    console.log(categorias);

    /* Após o processamento (desde que não haja erros), a getStaticProps retorna um objeto com uma propriedade chamada "props", e nesta propriedade colocamos um objeto com as props que queremos usar. No caso, usamos uma prop "posts" (podemos dar qualquer nome) e é nela que colocamos os dados. */

    /* Gerando um array de categorias ÚNICAS */
    const categoriasUnicas = [...new Set(categorias)];
    console.log(categoriasUnicas);

    return {
      props: {
        posts: dados,
        categorias: categoriasUnicas, // [] provisório
      },
    };
  } catch (error) {
    console.error("Deu ruim:" + error.message);
    return {
      notFound: true,
    };
  }
}
//posts pegamos da return linha 20 o {posts}
export default function Home({ posts, categorias }) {
  //Passa a passo do react-fundamento na parte  produto
  const [listaDePosts, SetListaDePosts] = useState(posts);

  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  useEffect(() => {
    if (categoriaSelecionada) {
      const postsFiltrados = posts.filter(
        (post) => post.categoria === categoriaSelecionada
      );
      SetListaDePosts(postsFiltrados);
    } else {
      SetListaDePosts(posts);
    }
  }, [categoriaSelecionada, posts]);

  return (
    <>
      <Head>
        <title>PetShop 2024</title>
        <meta
          name="description"
          contente="Au au au! Melhor PetShop da região"
        />
        <meta
          name="Keywords"
          content="Ração, brinquedos, banho, coleira, Gato, Cachorro, petshop"
        />
        {/* meta name="Keywords" é tipo uma # para encontrar o site */}
      </Head>
      {/* //Antes era <section> mudamos por causa do css */}
      <StyledHome>
        <h2>Pet Notícias</h2>
        {/* arrayPosts vem da pasta api / array-posts */}
        <div>
          {categorias.map((categoria, indice) => {
            return (
              <StyledButton
                key={indice}
                onClick={() => setCategoriaSelecionada(categoria)}
              >
                {categoria}
              </StyledButton>
            );
          })}
        </div>
        <ListaPosts posts={listaDePosts} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰";
  }
`;

const StyledButton = styled.button`
  margin: 30px;
  border: none;
  padding: 20px;
  margin-left: 8.73rem;
  border-radius: var(--borda-arredondada);
  font-size: medium;
  transition: 0.25s;
  cursor: pointer;
  box-shadow: var(--sombra-box);

  &:hover {
    background: #0b0a3f;
    color: white;
  }
`;
