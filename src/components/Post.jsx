import Link from "next/link";
import styled from "styled-components";

export default function Post({Posts}){
  /* Se não houver posts (ou seja, posts está vazio/zerado), em vez de retornar artigos com o map, retorn uma mensagem provisória para o usuário. */
  if(Posts.lenght === 0) return <h3 style={{ textAlign: "center" }}>Ainda não há posts!</h3>

   return <>
   <StyledListaPosts>
    {Posts.map((post) => {
        return <>
            <article key={post.id}>
              <Link href="">
                <h3>{post.titulo}</h3>
                <p>{post.subtitulo}</p>
              </Link>
            </article>   
          </> 
    })}
   </StyledListaPosts>
  </>
}

const StyledListaPosts = styled.div`
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 200ms;
  }

  article:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    article {
      width: 49%;
    }
  }

  & a {
    text-decoration: none;
    color: black;

    &:hover, &:focus {
    color: #0066ff;
    transition: 200ms;
  }
  }
`;

