import Head from 'next/head'
import YouTube from 'react-youtube';
import styled from "styled-components";
import { useRouter } from 'next/router'
import {
    isMobile
  } from "react-device-detect";


const minicurso = () => {
    var aula1 = new Date("May 7, 2021 08:30:00").getTime();
    var aula2 = new Date("May 7, 2021 08:30:00").getTime();
    var aula3 = new Date("May 8, 2021 08:00:00").getTime();
    var aula4 = new Date("May 8, 2021 08:00:00").getTime();
    var aula5 = new Date("May 9, 2021 08:00:00").getTime();
    const { query } = useRouter()
    var src = query.src
    const baseUrl = '/desconto'
    const url = baseUrl + '?src=' + src
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
    //const today = new Date().getTime();
    // Para visualizar as video aulas retire as barras // da linha abaixo e adiciona na linha acima.
     const today = new Date("May 10, 2021 10:30:00").getTime();

    const proxAula = () => {
        if(today>= aula5)
            return false
        else if(today<5 & today>=4)
            return aula5
        else if(today<4 & today>=3)
            return aula4
        else if(today<3 & today>=2)
            return aula3
        else
            return aula2
    }
    const proximaAula = proxAula
    const opts = {
        height: '360',
        width: '100%',
      };
    const opts2 = {
    height: '190',
    width: '90%',
    };
    return (
        <>
            <Head>
                <title>Mini curso de Amigurumi</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossOrigin="anonymous"/>
            </Head>
            <main>
                <div className="d-flex flex-column justify-content-center row text-center mb-5 pb-5">
                    <p className="align-self-center pt-5 fs-2 text-info fw-bold text-capitalize">Mini curso de Amigurumi</p>
                    <div className={`align-self-center col-sm-4 text-center mt-5 ${today>aula1?'d-block': 'd-none'}`}>
                        <p className="text-uppercase fs-2 fw-bold text-info">Aula 01</p>
                        <YouTube videoId="oItQQsmKQJw" opts={isMobile?opts2:opts} />
                    </div>
                    <div className={`align-self-center col-sm-4 text-center mt-5 ${today>aula2?'d-block': 'd-none'}`}>
                        <p className="text-uppercase fs-2 fw-bold text-info">Aula 02</p>
                        <YouTube videoId="BlHyYwtaTvs" opts={isMobile?opts2:opts} />
                    </div>
                    <div className={`align-self-center col-sm-4 text-center mt-5 ${today>aula3?'d-block': 'd-none'}`}>
                        <p className="text-uppercase fs-2 fw-bold text-info">Aula 03</p>
                        <YouTube videoId="3WUy5GZK3WY" opts={isMobile?opts2:opts} />
                    </div>
                    <div className={`align-self-center col-sm-4 text-center mt-5 ${today>aula4?'d-block': 'd-none'}`}>
                        <p className="text-uppercase fs-2 fw-bold text-info">Aula 04</p>
                        <YouTube videoId="vGCGM_fUAf4" opts={isMobile?opts2:opts} />
                    </div>
                    <div className={`align-self-center col-sm-4 text-center mt-5 ${today>aula5?'d-block': 'd-none'}`}>
                        <p className="text-uppercase fs-2 fw-bold text-info">Aula 05</p>
                        <YouTube videoId="hSZaj3hJDAw" opts={isMobile?opts2:opts} />
                    </div>
                    
                </div>
                <Sticky>
                <img src="/pooh.png" width="150px" height="150px" style={{ position: "relative", top: "-70px", left: "-10px" }} />
                <StickBotao>
                    <StickTexto>5 Mil Modelos + Vídeo Aulas</StickTexto>
                    <a href={url}>
                        <BotaoComprar className="animate__animated animate__pulse animate__infinite">Comprar com Desconto</BotaoComprar>
                    </a>
                </StickBotao>
            </Sticky>
            </main>
        </>
    );
}

export default minicurso;