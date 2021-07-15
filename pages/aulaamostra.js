import Head from 'next/head'
import YouTube from 'react-youtube';
import {
    isMobile
  } from "react-device-detect";


const minicurso = () => {
    var aula1 = new Date("May 7, 2021 08:30:00").getTime();
    var aula2 = new Date("May 7, 2021 08:30:00").getTime();
    var aula3 = new Date("May 8, 2021 08:00:00").getTime();
    var aula4 = new Date("May 8, 2021 08:00:00").getTime();
    var aula5 = new Date("May 9, 2021 08:00:00").getTime();
    

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
    const proximaaAula = proxAula
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
                <div className="d-flex flex-column justify-content-center row text-center">
                    <p className="align-self-center pt-5 fs-2 text-info fw-bold text-capitalize">Mini curso de Amigurumi</p>
                    <div className={`align-self-center col-sm-4 text-center mt-5 ${today>aula1?'d-block': 'd-none'}`}>
                        <p className="text-uppercase fs-2 fw-bold text-info">Aula 01</p>
                        <YouTube videoId="SulOkqnVpSc" opts={isMobile?opts2:opts} />
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
                        <YouTube videoId="DNqwTuP6aF4" opts={isMobile?opts2:opts} />
                    </div>
                    
                </div>
            </main>
        </>
    );
}

export default minicurso;