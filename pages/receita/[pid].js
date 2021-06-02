import Head from 'next/head'
import Image from 'next/image'
import styled from "styled-components";
import { useRouter } from 'next/router'

export async function getServerSideProps({params}) {
  const res = await fetch(`https://kademia.online/wp-json/wp/v2/posts?include[]=${params.pid}`)
  const post = await res.json()

  return {
    props: {
      post,
    }
  }
}

const Post = ({post}) => {
    const { query } = useRouter()
    var src = query.src
    const baseUrl = '/desconto'
    const url = baseUrl + '?src=' + src
    const receita = post[0].content.rendered
    const receita2 = receita.replace("\n","<br/>")
    const receita3 = receita2.replace('\"','"')
    const receita4 = receita3.replace('wp-image-','')
    const Sticky = styled.div`
        position: fixed;
        flex-direction: row;
        bottom: 0;
        left: 0;
        background-color: #f9f9f9;
        height: 60px;
        display: flex;
        align-content: center;
        width: 100%;
        justify-content: space-between;
        border-top: 2px solid #e2e2e2;
        text-align: center;
        
    `;
    const BotaoComprar = styled.button`
        background-color: white;
        border-color: green;
        color: green;
        border-radius: 8px;
        margin: 0px 20px 0px 0px;
        text-transform: uppercase;
        font-weight: bold;
        width: 100%;
        font-size: 13px;
    `;
    const StickBotao = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin-top: 0px;
    `;
    const StickTexto = styled.p`
        font-size: 12px;
        margin-top: 5px;
        margin-bottom: 2px;
        font-weight: bold;
        text-transform: uppercase;
        color: orangered;
        margin-right: 0px;
        
    `;
    return (
        <>
            <Head>
                <title>Arts de Amigurumi</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </Head>
            <main className="text-center mt-4">
                <Image
                  src="/img/input.png"
                  width={384/3}
                  height={121/3}
                  />
                <p className="fs-2 fw-bold text-info mt-4">{post[0].title.rendered}.</p>

                <div className="container">
                  <div className="row">
                    <div className="col-12 text-center mb-5">
                      <div className="text-container" dangerouslySetInnerHTML={{ __html: receita4 }} /></div>
                    </div>
                  </div>
                  <br/><br/><br/><br/>
                  
            </main>
            <Sticky>
                <img src="/pooh.png" width="150px" height="150px" style={{ position: "relative", top: "-70px", left: "-10px" }} />
                <StickBotao>
                    <StickTexto>5 Mil Modelos + Vídeo Aulas</StickTexto>
                    <a href={url}>
                        <BotaoComprar className="animate__animated animate__pulse animate__infinite">Comprar com Desconto</BotaoComprar>
                    </a>
                </StickBotao>
            </Sticky>
        </>
    )
}

export default Post