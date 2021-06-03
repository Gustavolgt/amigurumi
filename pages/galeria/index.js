import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from "next/router";


var list = 
    [
        '/images/01.png',  '/images/02.png',
        '/images/03.png', '/images/04.png',  '/images/05.png',
        '/images/06.png', '/images/07.png',  '/images/08.png',
        '/images/09.png', '/images/10.png', '/images/11.png',
        '/images/12.png', '/images/13.png',  '/images/14.png',
        '/images/15.png', '/images/16.png',  '/images/17.png',
        '/images/18.png', '/images/19.png',  '/images/20.png',
        '/images/21.png', '/images/22.png',  '/images/23.png',
        '/images/24.png', '/images/25.png',  '/images/26.png',
        '/images/27.png', '/images/28.png',  '/images/29.png',
        '/images/30.png', '/images/31.png',  '/images/32.png',
        '/images/33.png', '/images/34.png',  '/images/35.png',
        '/images/36.png', '/images/37.png',  '/images/38.png',
        '/images/39.png', '/images/40.png',  '/images/41.png',
        '/images/42.png', '/images/43.png',  '/images/44.png',
        '/images/45.png', '/images/46.png',  '/images/47.png',
        '/images/48.png', '/images/49.png',  '/images/50.png',
        '/images/51.png', '/images/52.png',  '/images/53.png',
        '/images/54.png'
      ]
const index = () => {
    const { query } = useRouter();
    const src = query.src
    const url ="https://app.monetizze.com.br/r/BXR1264399"
    return (
        <>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossOrigin="anonymous"/>
        </Head>
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <p className="fs-1 fw-bold text-info mb-5">Algumas das Nossas Receitas</p>
            {list.map((value, key) => (
                <div className="d-flex flex-column justify-content-center align-items-center mb-5">
                    <Image src={value} alt="Galeria Arts Amigurumi" width={300} height={300} className="border border-2"/>
                    <a href={url + "?src="+ src +"-GaleriaFoto-"+ key+1}><button className="btn text-uppercase fw-bold btn-success py-3 px-5 border border-2 mt-2">Eu Quero Todas</button></a>
                </div>
            ))}
            
        </div>
        </>
    );
}

export default index;