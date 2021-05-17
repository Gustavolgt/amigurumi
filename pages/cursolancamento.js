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
                  ESTÁ CANSADA
                </p>
                <p className="is-orange is-size-3-mobile">
                  De perder seu valioso tempo procurando receitas e não encontrar?
                </p>
                <p
                  className="has-background-roxo is-size-2 is-size-4-mobile has-text-white"
                >
                  Isso é um grande problema!
                </p>
                <p className="is-size-1 has-text-weight-bold has-text-black is-size-3-mobile mt-1">
                  E em breve será resolvido com o nosso pacote!
                </p>
        
                <p className="is-size-4 is-size-6-mobile mt-2">
                  Estamos preparando um super pacote<br /> Com 5000 Modelos exclusivos em português,
                  Video aulas e 11 Bonûs.<br/> <span className="has-text-weight-bold"> Enquanto isso entre para o GRUPO VIP e receba receitas GRÁTIS.</span>
                </p>
        
              </div>
              <div className="columns is-mobile mt-2">
                    <div className="column"></div>
                    <div className="column">
                        <a href="https://chat.whatsapp.com/GN6IiOxwQJ3AaPgayr6fcg"><button className="botao2-mobile has-background-light-verde mt-5" value="Submit">PARTICIPAR DO GRUPO VIP</button></a>
                    </div>
                    <div className="column"></div>
                </div>
                </div>
            </main>
        </>
        
    );
}

export default lp;