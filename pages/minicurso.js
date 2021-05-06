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
                  Aprenda Amigurumis Exclusivos
                </p>
                <p className="is-orange is-size-3-mobile">
                  No Conforto Da Sua Casa
                </p>
                <p
                  className="has-background-roxo is-size-2 is-size-4-mobile has-text-white"
                >
                  Entre Para o Grupo VIP No Whatsapp é GRÁTIS!
                </p>
                <p className="is-size-1 has-text-weight-bold has-text-black is-size-3-mobile mt-1">
                  Ainda ESSA SEMANA!
                </p>
        
                <p className="is-size-4 is-size-6-mobile mt-2">
                  Preparamos um Mini Curso Ensinando<br /> Amigurumi Do zero Com Video Aulas Passo a Passo
                  E No Final você ganhará Modelos de Amigurumis Exclusivos para fazer.<br/> <span className="has-text-weight-bold"> ULTIMAS VAGAS!.</span>
                </p>
        
              </div>
              <div className="columns is-mobile mt-2">
                    <div className="column"></div>
                    <div className="column">
                        <a href="https://chat.whatsapp.com/FJJsjyBO2J58dvc7Oc72m7"><button className="botao2-mobile has-background-light-verde mt-5" value="Submit">PARTICIPAR DO GRUPO VIP</button></a>
                    </div>
                    <div className="column"></div>
                </div>
                </div>
            </main>
        </>
        
    );
}

export default lp;