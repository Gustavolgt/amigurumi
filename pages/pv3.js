import Head from 'next/head'



const amigurumi = () => {
    return (
        <>
        <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Aprenda a fazer Amigurumi</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"
        />
        <link rel="stylesheet" href="./css/style.css" />
        <link rel="stylesheet" href="./css/style-min.css" />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        ></script>
        </Head>
        <main>
        <section class="hero is-light is-large">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="/img/input.png" alt="Logo" />
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title is-size-1-desktop is-uppercase">
            aprenda a fazer Amigurumi
          </p>
          <p class="subtitle is-uppercase is-size-2-desktop">
            mesmo que não saiba fazer crochê
          </p>
          <a
            class="button has-background-orange has-text-white has-text-weight-bold is-large" href="https://app.monetizze.com.br/checkout/DCT115675?split=4"
            >COMPRAR AGORA!</a
          >
        </div>
      </div>
    </section>
    <section class="section has-background-white">
      <div class="container has-text-centered">
        <p class="has-text-weight-bold is-size-1-desktop has-text-black">
          O QUE VOCÊ IRÁ APRENDER:
        </p>
        <ul class="is-size-3-desktop has-text-black">
          <br /><br /><br />
          <li>Pontos de crochê</li>
          <li>Técnica de Amigurumi</li>
          <li>Quais materiais usar</li>
          <li>Aprendendo na prática</li>
        </ul>
      </div>
    </section>
    <section class="section has-background-white-ter">
      <div class="container">
        <p
          class="is-size-2-desktop is-size-4-mobile has-text-centered is-uppercase has-text-weight-bold"
        >
          COMO VOCÊ PODERÁ ACESSAR O CURSO?
        </p>
        <br/><br/><br/>
        <br />
        <div class="columns is-centered">
          <div class="column is-3-desktop has-text-centered">
            <i class="fas fa-mobile-alt fa-5x"></i>
            <p class="is-size-5-desktop">
              <br />Você poderá acessar o curso através do seu Celular.
            </p>
          </div>
          <div class="column is-3-desktop has-text-centered">
            <i class="fas fa-tablet-alt fa-5x"></i>
            <p class="is-size-5-desktop">
              <br />Você poderá acessar o curso através do seu Tablet.
            </p>
          </div>
          <div class="column is-3-desktop has-text-centered">
            <i class="fas fa-desktop fa-5x"></i>
            <p class="is-size-5-desktop">
              <br />Você poderá acessar o curso através do seu Computador.
            </p>
          </div>
        </div>
      </div>
    </section>
          <section class="section">
            <div class="container">
              <br /><br />
              <p
                class="is-size-2-desktop is-size-4-mobile has-text-centered is-uppercase is-roxo has-text-weight-bold"
              >
                SATISFAÇÃO 100% GARANTIDA
              </p>
              <br /><br />
              <div class="columns">
                <div class="column">
                  <p class="is-size-5 has-text-weight-bold">
                    <br />Confiamos tanto em nosso produto
                    que podemos fazer essa garantia:<br /><br />Se você não estiver
                    satisfeita com o produto após 7 dias, re-embolsamos 100% do seu dinheiro!
                  </p>
                </div>
                <div class="column has-text-centered">
                  <img src="/img/input.png" alt="" />
                  <br /><br />
                  <a href="https://app.monetizze.com.br/checkout/DCT115675"
                    ><button
                      class="button has-background-laranja has-text-white has-text-weight-bold is-large"
                    >
                      COMPRAR AGORA!
                    </button></a
                  >
                </div>
              </div>
            </div>
          </section>
          <section class="section has-background-white-ter">
              <div class="container"><br/><br/>
                  <p class="is-size-2-desktop is-size-4-mobile has-text-centered is-uppercase is-roxo has-text-weight-bold" >SOMENTE HOJE COM SUPER DESCONTO. </p>
                <p class="is-size-4 has-text-centered has-text-weight-bold">De: <span class="riscado is-vermelho">69,99</span></p>
                <p class="is-size-4 has-text-centered has-text-weight-bold">Por: <span class="is-size-3">39,97</span></p>
                
                  <a href="https://app.monetizze.com.br/checkout/DCT115675">
                    <div class="has-text-centered">
                      <button class="button has-background-laranja is-large has-text-white has-text-weight-bold">COMPRAR AGORA!</button>
                    </div>
                  </a>
                      
              </div>
          </section>
          <section class="section has-background-dark">
              <div class="container has-text-centered">
              <p class="has-text-white">Atendimento 24 horas</p>
              <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
              <p class="has-text-white">E-mail: suporte@artsamigurumi.com</p>
              </div>
          </section>
        </main>
        </>
    )
}

export default amigurumi