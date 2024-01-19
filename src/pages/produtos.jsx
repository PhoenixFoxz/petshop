import Head from "next/head";
import styled from "styled-components";

export default function Produtos() {
  return (
    <>
      <Head>
        <title>Produtos - PetShop</title>
        <meta
          name="description"
          contente="Au au au! Melhor Produtos da região"
        />
        <meta name="Keywords" content="Ração, brinquedos, remedio" />
      </Head>
      {/* //Antes era <section> mudamos por causa do css */}
      <StyledProduto>
        <h2>Conheça nossos Produtos</h2>

        <article>
          <h3>Banho</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas officia saepe delectus animi facilis possimus consequuntur molestias ipsam fugiat, tempore, architecto voluptate ipsa? Placeat perspiciatis, laudantium quas accusamus totam modi sed sint quidem exercitationem, quae, adipisci consequuntur iste necessitatibus!
          </p>
        </article>
        <article>
          <h3>Tosa</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas officia saepe delectus animi facilis possimus consequuntur molestias ipsam fugiat, tempore, architecto voluptate ipsa? Placeat perspiciatis, laudantium quas accusamus totam modi sed sint quidem exercitationem, quae, adipisci consequuntur iste necessitatibus!
          </p>
        </article>
        <article>
          <h3>Castração</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas officia saepe delectus animi facilis possimus consequuntur molestias ipsam fugiat, tempore, architecto voluptate ipsa? Placeat perspiciatis, laudantium quas accusamus totam modi sed sint quidem exercitationem, quae, adipisci consequuntur iste necessitatibus!
          </p>
        </article>
      </StyledProduto>
    </>
  );
}

const StyledProduto = styled.section`
  h2::before {
    content: "🎁";
  }
`;
