import Head from "next/head";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Post from "@/components/Post";

export default function Home() {
  const [listaDePosts, setListaDePosts] = useState([]);

  useEffect(() => {
    const carregarPosts = async () => {
      try {
        const resposta = await fetch(`http://10.20.46.36:3000/posts`);
        if (!resposta.ok) {
          throw new Error(
            `Erro requisição: ${resposta.status} - ${resposta.statusText}`
          );
        }

        const dados = await resposta.json();
        setListaDePosts(dados);
      } catch (error) {
        console.error("Erro ao carregar Posts: " + error);
      }
    };

    carregarPosts();
  }, []);

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
        <Post posts={listaDePosts} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰";
  }
`;
