import Head from 'next/head'


const lp = () => {
    return (
        <>
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
                  AINDA ESSA SEMANA:
                </p>
        
                <p className="is-size-4 is-size-6-mobile mt-2">
                  Tenha uma nova profissão A mais comentada do momento <br />PARA ISSO VOCÊ
                  PRECISAR APRENDER AMIGURUMI, ENTRE PARA O GRUPO VIP E APRENDA AINDA ESSA SEMANA.<br/> <span className="has-text-weight-bold"> Entre para o Grupo VIP clicando no botão abaixo, É GRÁTIS .</span>
                </p>
        
              </div>
              <div className="columns is-mobile mt-2">
                    <div className="column"></div>
                    <div className="column">
                        <form action="./curso.php" method="post">
                        <div className="container has-text-centered">
                            <div className="field">
                                <label className="label">Nome</label>
                                <div className="control">
                                <div className="control has-icons-left has-icons-right">
                                  <input className="input" type="text" name="nome" placeholder="Exemplo: Maria de Fátima" required/>
                                  <span className="icon is-small is-left">
                                    <i className="fas fa-user fa-xs"></i>
                                  </span>
                                  <span className="icon is-small is-right">
                                    <i className="fas fa-check fa-xs"></i>
                                  </span>
                                </div>
                                </div>
                              </div>
                              
                              <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <div className="control has-icons-left has-icons-right">
                                  <input className="input" name="email" type="email" placeholder="Exemplo: maria.f@hotmail.com" required/>
                                  <span className="icon is-small is-left">
                                    <i className="fas fa-envelope fa-xs"></i>
                                  </span>
                                  <span className="icon is-small is-right">
                                    <i className="fas fa-check fa-xs"></i>
                                  </span>
                                </div>
                            </div>
                              </div>
                            <button className="botao2-mobile has-background-light-verde mt-5" value="Submit">Começar Aula Grátis</button>
                        </div>
                    </form>
                    </div>
                    <div className="column"></div>
                </div>
                </div>
            </main>
        </>
        
    );
}

export default lp;