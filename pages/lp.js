import Head from 'next/head'


const lp = () => {
    return (
        <>
            <Head>
            <!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '743547729685211');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=743547729685211&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->

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
                  Aprenda como ter um
                </p>
                <p className="is-orange is-size-3-mobile">
                  Negócio Lucatrivo de Amigurumis
                </p>
                <p
                  className="has-background-roxo is-size-2 is-size-4-mobile has-text-white"
                >
                  Sem Grandes Investimentos e no conforto de sua Casa
                </p>
                <p className="is-size-1 has-text-weight-bold has-text-black is-size-3-mobile mt-1">
                  Ainda ESSA SEMANA!
                </p>
        
                <p className="is-size-4 is-size-6-mobile mt-2">
                  Para isso, você precisar aprender amigurumi <br />Entre para o
                  VIP e Aprenda no conforto da sua Casa e GRÁTIS.<br/> <span className="has-text-weight-bold"> ULTIMAS VAGAS!.</span>
                </p>
        
              </div>
              <div className="columns is-mobile mt-2">
                    <div className="column"></div>
                    <div className="column">
                        <a href="https://chat.whatsapp.com/BLFyyPwehD38JPUpmY5x8T"><button className="botao2-mobile has-background-light-verde mt-5" value="Submit">Começar Aula Grátis</button></a>
                    </div>
                    <div className="column"></div>
                </div>
                </div>
            </main>
        </>
        
    );
}

export default lp;