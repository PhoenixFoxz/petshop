import Head from "next/head";
import Container from "@/components/ui/Container";
import styled from "styled-components";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - PetShop</title>
        <meta
          name="description"
          contente="Au au au! Saiba um pouco sobre nós"
        />
        <meta name="Keywords" content="petshop, missão,valores, visão" />
      </Head>
      {/* //Antes era <section> mudamos por causa do css */}
      
        <StyledSobre>
          <h2>Sobre nossos PetShop</h2>
          <Container>
            <h3>Missão</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos, vero quod ullam quam voluptates quasi ea pariatur odio maxime, suscipit corrupti asperiores sit nesciunt nulla accusamus. Vero, commodi nostrum?
            </p>
            <h3>Visão</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam odit obcaecati modi nam nulla sapiente aspernatur quae? Quibusdam corporis odio quidem nulla vel accusantium numquam! Facere culpa dolorum ullam iusto quo, nemo repellendus nobis minus quas eligendi voluptates sunt vero deleniti, error illo fugiat. Fugiat, maiores possimus? Itaque reprehenderit fugiat facere eius deleniti eum, exercitationem fugit nesciunt molestiae repudiandae natus et. Fugit aperiam ab vero doloribus? Quasi, nulla praesentium.
            </p>
            <h3>Valores</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda exercitationem id placeat ex. Labore nihil maxime expedita odio, quam dolorum.
            </p>
          </Container>
        </StyledSobre>
      
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡";
  }
`;
