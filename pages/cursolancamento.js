import Head from 'next/head'


const lp = () => {
    return (
        <>
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-55FTBZN');`}}></script>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Arts de Amigurumi</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"/>
            </Head>
            <main>
                <div className="has-text-centered">
                    <img src="/img/input.png"/>
                </div>
                <div className="">
                <div className="CTA has-text-centered mt-5">
                <p className="is-size-1 is-size-4-mobile">
                  Lançamento Exclusivo
                </p>
                <p className="is-orange is-size-3-mobile">
                  5000 Receitas em português video aulas e 11 bonûs
                </p>
                <p
                  className="has-background-roxo is-size-2 is-size-4-mobile has-text-white"
                >
                  Entre para o Grupo VIP no Whatsapp!
                </p>
                <p className="is-size-1 has-text-weight-bold has-text-black is-size-3-mobile mt-1">
                  Desconto VIP, aproveite!
                </p>
        
                <p className="is-size-4 is-size-6-mobile mt-2">
                  Está cansada?<br />  De perder seu tempo procurando receitas exclusivas?
                  Oque acha de pagar 1 centavo em cada receita Exclusiva.<br/> <span className="has-text-weight-bold"> Entre para o grupo VIP, Ultimas vagas!!.</span>
                </p>
        
              </div>
              <div className="columns is-mobile mt-2">
                    <div className="column"></div>
                    <div className="column">
                        <a href="https://chat.whatsapp.com/FGzxValG9XZ3d77QSqwFX2"><button className="botao2-mobile has-background-light-verde mt-5" value="Submit">PARTICIPAR DO GRUPO VIP</button></a>
                    </div>
                    <div className="column"></div>
                </div>
                </div>
            </main>
        </>
        
    );
}

export default lp;