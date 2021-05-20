import Head from "next/head";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect } from 'react';
import toastr from 'toastr'


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const Home = () => {
    const opts = {
        height: "182",
        width: "90%",
    };
    const url = "https://app.monetizze.com.br/r/ABF15286575?u=c&pl=CT115675&src=gps"
    function Toast(type, msg, msg2, tempo) {
        this.type = type;
        this.msg = '<b>há ' + tempo + ' minutos atrás<br>' + msg + '</b> comprou Arts de Amigurumi no ' + msg2;
    }
    
    var toasts = [
        new Toast('success', 'Sandra Freitas', 'cartão de crédito.', '52'),
        new Toast('info', 'Marcia Ribeiro S.', 'boleto.', '41'),
        new Toast('success', 'Cristiane Lima Silva', 'cartão de crédito.', '37'),
        new Toast('success', 'Fernanda Elizionete', 'cartão de crédito.', '34'),
        new Toast('info', 'Elidiane dos Santos Dias', 'boleto.', '29'),
        new Toast('success', 'Margaret O Airoldi', 'cartão de crédito.', '27'),
        new Toast('info', 'Adriane Aschembrener', 'boleto.', '25'),
        new Toast('success', 'Nathália Batista C', 'cartão de crédito.', '26'),
        new Toast('success', 'Ienir Barbosa', 'cartão de crédito.', '23'),
        new Toast('success', 'Karina Sayuri', 'cartão de crédito.', '18'),
        new Toast('info', 'Jéssica Suelen Pires', 'boleto.', '12'),
        new Toast('success', 'Iêda Amorim S.', 'cartão de crédito.', '10'),
        new Toast('success', 'Valéria Cristina Gomes', 'cartão de crédito.', '7'),
        new Toast('success', 'Dayane Farias', 'cartão de crédito.', '4'),
        new Toast('info', 'Aline Corrêa Nunes', 'boleto.', '1'),
    ];
    
    var i = 0;
    
    function delayToasts() {
        if (i === toasts.length) { return; }
        var delay = i === 0 ? 0 : 13000;
        window.setTimeout(function() { showToast(); }, delay);
    
        // re-enable the button        
        if (i === toasts.length - 1) {
            window.setTimeout(function() {
                i = 0;
            }, delay + 1000);
        }
    }
    function showToast() {
        var t = toasts[i];
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-bottom-left",
            "preventDuplicates": true,
            "onclick": function() {window.location.href = url+"?src=Toastr"},
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr[t.type](t.msg);
        i++;
        delayToasts();
    }
    useEffect(() => {
        delayToasts()
      });
    return (
        <>
            <Head>
                <title>Arts Amigurumi</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma.min.css"
                    integrity="sha512-byErQdWdTqREz6DLAA9pCnLbdoGGhXfU6gm1c8bkf7F51JVmUBlayGe2A31VpXWQP+eiJ3ilTAZHCR3vmMyybA=="
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/css/bulma-carousel.min.css" />
                <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-55FTBZN');`}}></script>
            </Head>

            <main className="">
                <section className="section has-background-white-ter">
                    <div className="columns is-mobile">
                        <div className="column has-text-left">
                            <img src="/img/input.png" alt="" width="300px" />
                        </div>
                        <div className="column">
                            <p className="is-size-7-mobile is-size-3-desktop is-italic has-text-right">
                                Trabalhe com o que Ama
                                <br />e mude seu Estilo de vida
                            </p>
                        </div>
                    </div>
                    <div className="CTA has-text-centered">
                        <br />
                        <br />
                        <p className="is-size-1 is-size-4-mobile">Aprenda Amigurumis</p>
                        <p className="is-orange is-size-3-mobile">Com Video Aulas +</p>
                        <p className="has-background-roxo is-size-2 is-size-4-mobile has-text-weight-bold p-2 is-uppercase has-text-white">5000 Modelos Exclusivos</p>
                        <p className="is-size-1 has-text-weight-bold has-text-black is-size-3-mobile">Ainda HOJE!</p>
                        <br />
                        <br />
                        <div className="">
                            <iframe
                                width="310px"
                                height="190px"
                                src="https://www.youtube-nocookie.com/embed/7L8t5yZy6FM?controls=0"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="is-size-4 is-size-6-mobile">
                            Tenha uma nova profissão, com praticidade <br />e podendo ganhar dinheiro fazendo a felicidade do próximo.
                        </p>
                        <br />
                        <a href={url}>
                            <button className="botao is-hidden-mobile">Comece Hoje Mesmo!</button>
                        </a>
                        <a href={url}>
                            <button className="botao-mobile is-hidden-desktop is-hidden-tablet animate__animated animate__pulse animate__infinite">Comece Hoje Mesmo!</button>
                        </a>
                    </div>
                </section>
                <section className="section has-background-light-roxo">
                    <div className="container has-text-centered">
                        <p className="is-size-3-desktop is-size-5-mobile">
                            Já imaginou começar seu <span className="is-roxo">Negocio proprio de Amigurumis</span> em seu proprio <br /> lar e <span className="is-roxo">sem precisar investir</span> em equipamentos caros?
                        </p>
                        <br />
                        <br />
                        <p className="is-size-3-desktop is-size-5-mobile">
                            É muito mais do que um Negocio, <span className="is-roxo">é um Estilo de Vida</span> que lhe trará renda <br /> e promovendo o Bem, Alegria e Amor para seus Clientes.
                        </p>
                        <br />
                        <br />
                        <p className="is-size-3-desktop is-size-5-mobile">
                            Tenha seu negócio própio, ajude o bem-estar de seus clientes e poderá <br />
                            faturar uma <span className="is-roxo">renda mensal de R$2.000 a R$5.000</span> fazendo lindos <br /> Amigurimis que <span className="is-roxo">todos irão AMAR!</span>
                        </p>
                        <br />
                        <br />
                        <p className="is-size-3-desktop is-size-5-mobile">
                            O Curso <span className="is-roxo">Arts em Amigurumi</span> é um curso
                            <span className="is-roxo"> COMPLETO</span> para <br /> que você começar a fazer lindos Amigurumis mesmo que <br /> nunca tenha feito crochê com nossas
                            <span className="is-roxo"> Vídeo Aulas</span> e <br /> mais
                            <span className="is-roxo"> 5000 modelos exclusivos.</span>
                        </p>

                        <p className="mt-5 has-background-orange has-text-white is-size-3-desktop is-size-5-mobile">Contém 5000 receitas com Passo-a-Passo para seu SUCESSO!</p>

                    </div>
                </section>

                <div id="beneficios" className="section has-text-centered has-background-light-verde">
                    <p className="is-size-4 has-text-weight-bold mb-6 destaque has-text-white">Quais serão seus beneficios?</p>
                    <div className="columns">
                        <div className="column mb-6">
                            <Image src="/beneficio1.png" width={100} height={100} />
                            <p className="has-text-white is-size-4 has-text-weight-800">5000 Modelos</p>
                            <p className="has-text-black has-text-weight-semibold mt-3 is-size-6">Você vai ter acesso a 5.000 modelos exclusivos e super raros, todos os modelos são super detalhados.</p>
                        </div>
                        <div className="column mb-6">
                            <Image src="/beneficio2.png" width={100} height={100} />
                            <p className="has-text-white is-size-4 has-text-weight-800">Video Aulas</p>
                            <p className="has-text-black has-text-weight-semibold mt-3 is-size-6">Vamos te disponibilizar VideoAulas super explicativas que vão te ensinar tudo o que você precisa passo a passo.</p>
                        </div>
                        <div className="column mb-6">
                            <Image src="/beneficio3.png" width={100} height={100} />
                            <p className="has-text-white is-size-4 has-text-weight-800">Suporte Zap</p>
                            <p className="has-text-black has-text-weight-semibold mt-3 is-size-6">Você terá acesso a suporte para todas as suas dúvidas junto com uma artesã profissional no WhatsApp.</p>
                        </div>
                        <div className="column mb-6">
                            <Image src="/beneficio4.png" width={80} height={100} />
                            <p className="has-text-white is-size-4 has-text-weight-800">Atualizações</p>
                            <p className="has-text-black has-text-weight-semibold mt-3 is-size-6">Todos os meses iremos adicionar novos modelos e videoaulas para que você possa ficar sempre atualizada.</p>
                        </div>
                    </div>
                    <a href={url}><button
              className="botao2-mobile animate__animated animate__pulse animate__infinite is-hidden-desktop is-hidden-tablet"
              >
              Inscrever-me Agora
              </button></a>
                </div>
                <div id="iniciante" className="section has-text-centered">
                    <p className="is-capitalized is-size-4 has-text-weight-bold mb-6 is-orange-mobile">iniciante ao avançado</p>
                    <p className="">
                        Se você é uma total iniciante, não se preocupe , nossas videoaulas foram criadas para te ensinar tudo passo a passo<span className="has-text-weight-800"> mesmo não tendo nenhuma experiência</span>
                    </p>
                    <div className="columns mt-3">
                        <div className="column">
                            <Image src="/iniciante1.png" width={273} height={157} />
                            <p className="has-text-weight-semibold p-4">Você vai aprender todos os passos para se tornar uma verdadeira profissional</p>
                        </div>
                        <div className="column">
                            <Image src="/iniciante2.png" width={273} height={157} />
                            <p className="has-text-weight-semibold p-4">Vamos te guiar passo a passo para confeccionar suas primeiras peças</p>
                        </div>
                        <div className="column">
                            <Image src="/iniciante3.png" width={273} height={157} />
                            <p className="has-text-weight-semibold p-4">Vamos te ensinar técnicas exclusivas para aperfeiçoamento de sua peça</p>
                        </div>
                    </div>
                    <a href={url}><button
              className="botao2-mobile animate__animated animate__pulse animate__infinite is-hidden-desktop is-hidden-tablet"
              >
              Inscrever-me Agora
              </button></a>
                    <p className="is-capitalized is-size-4 has-text-weight-bold mb-6 is-orange-mobile mt-6">MODELOS DETALHADOS</p>
                    <p className="is-size-2-desktop has-text-left has-text-weight-bold has-text-black mb-5">Todos os modelos são super detalhados com imagens passo a passo, você não terá nenhuma dificuldade ao confeccionar a peça</p>
                    <div className="columns">
                        <div className="column">
                            <Image src="/detalhado.png" width={514} height={385} />
                        </div>
                        <div className="column">
                            <Image src="/detalhado2.png" width={514} height={385} />
                        </div>
                    </div>
                </div>
                <div id="tecnicas" className="section">
                    <p className="is-capitalized is-size-4 has-text-weight-bold mb-6 is-orange-mobile">Veja algumas Técnicas exclusivas do curso</p>
                    <div className="columns">
                        <div className="column">
                            <Image src="/tecnica1.jpg" width={534} height={413} />
                        </div>
                        <div className="column">
                            <p className="is-capitalized is-size-4 has-text-weight-bold mb-4 mt-2 is-orange-mobile">Olhos realistas</p>
                            <p className="is-size-2-desktop has-text-left has-text-weight-bold has-text-black">
                                Os olhos realista sempre da um destaque incrivel na peça, por isso trazemos em video aula passo a passo para você aprender a bordar os olhos de maneira simples é fácil que vai fazer total diferença na sua
                                peça finalizada.
                            </p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Image src="/tecnica2.jpg" width={534} height={520} />
                        </div>
                        <div className="column">
                            <p className="is-capitalized is-size-4 has-text-weight-bold mb-4 mt-2 is-orange-mobile">Expressões no rosto</p>
                            <p className="is-size-2-desktop has-text-left has-text-weight-bold has-text-black">Vamos te ensinar a deixar o rostinho de seu amigurumi ainda mais bonito, as expressões faciais vão deixar suas peças ainda mais realistas e incriveis.</p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Image src="/tecnica3.png" width={534} height={413} />
                        </div>
                        <div className="column">
                            <p className="is-capitalized is-size-4 has-text-weight-bold mb-4 mt-2 is-orange-mobile">Aplique de Cabelos</p>
                            <p className="is-size-2-desktop has-text-left has-text-weight-bold has-text-black">Vamos te ensinar passo a passo o jeito mais fácil e mais pratico de aplicar cabelos em suas bonecas.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="my-2 mb-6 has-text-centered">
                    <a href={url}><button className="botao2-mobile animate__animated animate__pulse animate__infinite is-hidden-desktop is-hidden-tablet">Inscrever-me Agora</button></a>
                </div>
                <div id="variedades" className="section has-background-roxo has-text-centered">
                    <p className="is-size-4 has-text-weight-bold mb-6 destaque has-text-white">Veja algumas variedades de modelos que você vai aprender</p>
                    <p className="is-size-5 has-text-weight-bold mb-6 has-text-white">Bonecas exclusivas e raras,todas as nossas bonecas são super trabalhadas com detalhes impecáveis que você só encontra aqui.</p>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div>
                            <Image src="/slider.jpg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider2.png" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider3.jpg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider4.jpg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slide5.jpg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider6.jpg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider7.jpg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider8.jpg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider9.jpg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider10.jpg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider11.jpeg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider12.jpeg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider13.jpg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider14.jpg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider15.jpg" width={400} height={600} />
                        </div>
                        <div>
                            <Image src="/slider16.jpeg" width={400} height={600} />
                        </div>
                    </Carousel>
                    <div className="has-text-centered">
                        <p className="is-size-3 has-text-weight-bold mb-5 destaque has-text-white mt-6">Certificado Incluso</p>
                        <img src="/cert.png" alt="" width="90%" />
                    </div>
                </div>
                <section className="section has-text-centered bg-circle">
                    <div className="container">
                        <p className="is-size-2-desktop is-size-5-mobile has-text-left has-text-weight-bold has-text-black mb-6">Por que nos momentos de escuridão, elas vendem a <span className="has-background-yellow-circle">luz!</span></p>
                        <p className="is-size-2-desktop is-size-5-mobile has-text-black">Nós sabemos como <span className="has-text-weight-bold"> é possível ter seu negócio próprio</span> que garanta<br/> <span className="has-text-weight-bold has-background-yellow has-text-white">uma renda mensal de R$2.000 até R$5.000</span> fazendo lindos<br/> Amigurumis que todos irão <span className="has-text-weight-bold">Amar.</span><br/><br/>Com este curso você terá um <span className="has-text-weight-bold">treinamento COMPLETO</span> para ter seu <br/>negócio próprio <span className="has-text-weight-bold">altamente LUCRATIVO</span>, o risco é nosso com<br/><span className="has-text-weight-bold has-background-yellow  has-text-white">7 DIAS DE GARANTIA</span> após a compra.</p>
                    
                        <div className="columns">
                            <div className="column has-text-right has-text-centered-mobile mt-6"><img src="img/selo-garantia.png" alt=""/></div>
                            <div className="column is-hidden-mobile"><img src="img/logo.png" alt=""/> </div>
                        </div>
                    </div>
                </section>
        
                <section className="section separador3 has-text-centered">
          <div className="container">
            <p className="title is-size-1-desktop is-size-4-mobile is-roxo2">Faça Já Sua Matrícula</p>
            <p className="subtitle is-size-2-desktop is-roxo2">Fazendo Sua Matricula <span className="destaque has-text-white is-uppercase has-text-weight-bold"> AGORA</span> Você Vai Receber:</p>
            <div>
                <p className="mt-6 has-text-weight-bold mb-2 is-size-3 has-text-white destaque is-uppercase">Bônus 01</p>
                <Image
                src="/bonus/b (1).png"
                width={696/4}
                height={1120/4}
                alt=""
                />
            </div>
            <div>
                <p className="mt-6 has-text-weight-bold mb-2 is-size-3 has-text-white destaque is-uppercase">Bônus 02</p>
                <Image
                src="/bonus/b (2).png"
                width={696/4}
                height={1120/4}
                alt=""
                />
            </div>
            <div>
                <p className="mt-6 has-text-weight-bold mb-2 is-size-3 has-text-white destaque is-uppercase">Bônus 03</p>
                <Image
                src="/bonus/b (3).png"
                width={696/4}
                height={1120/4}
                alt=""
                />
            </div>
            <div>
                <p className="mt-6 has-text-weight-bold mb-2 is-size-3 has-text-white destaque is-uppercase">Bônus 04</p>
                <Image
                src="/bonus/b (4).png"
                width={696/4}
                height={1120/4}
                alt=""
                />
            </div>
            <div>
                <p className="mt-6 has-text-weight-bold mb-2 is-size-3 has-text-white destaque is-uppercase">Bônus 05</p>
                <Image
                src="/bonus/b (5).png"
                width={696/4}
                height={1120/4}
                alt=""
                />
            </div>
            <div>
                <p className="mt-6 has-text-weight-bold mb-2 is-size-3 has-text-white destaque is-uppercase">Bônus 06</p>
                <Image
                src="/bonus/b (6).png"
                width={696/4}
                height={1120/4}
                alt=""
                />
            </div>
            <div>
                <p className="mt-6 has-text-weight-bold mb-2 is-size-3 has-text-white destaque is-uppercase">Bônus 07</p>
                <Image
                src="/bonus/b (7).png"
                width={696/4}
                height={1120/4}
                alt=""
                />
            </div>
            <div>
                <p className="mt-6 has-text-weight-bold mb-2 is-size-3 has-text-white destaque is-uppercase">Bônus 08</p>
                <Image
                src="/bonus/b (8).png"
                width={696/4}
                height={1120/4}
                alt=""
                />
            </div>
            <div>
                <p className="mt-6 has-text-weight-bold mb-2 is-size-3 has-text-white destaque is-uppercase">Bônus 09</p>
                <Image
                src="/bonus/b (9).png"
                width={696/4}
                height={1120/4}
                alt=""
                />
            </div>
            <div>
                <p className="mt-6 has-text-weight-bold mb-2 is-size-3 has-text-white destaque is-uppercase">Bônus 10</p>
                <Image
                src="/bonus/b (10).png"
                width={696/4}
                height={1120/4}
                alt=""
                />
            </div>
            <div>
                <p className="mt-6 has-text-weight-bold mb-2 is-size-3 has-text-white destaque is-uppercase">Bônus 11</p>
                <Image
                src="/bonus/b (11).png"
                width={696/4}
                height={1120/4}
                alt=""
                />
            </div>

            
            <div className="is-hidden-desktop is-hidden-tablet has-text-left">
              <p className="has-text-weight-normal is-size-2-desktop is-size-4-mobile is-roxo2 mt-6">Somente <span className="is-size-2-desktop has-text-weight-bold"> nesta semana*<br/>Você vai levar<br/> <span className="is-size-1-desktop destaque has-text-white is-size-10">TUDO</span> por:</span></p>
            <br/>
            <div className="columns is-mobile">
              <div className="column has-text-right is-3 is-roxo2"><br/><br/><br/><p className="is-size-1"></p><p className="is-size-1 has-text-weight-bold">R$</p></div>
              <div className="column has-text-centered is-8 has-background-roxo redondo2 "><br/><p className="is-size-10 has-text-white destaque">34,97</p><p className="has-text-white">4x de 9,41 no cartão.</p></div>
            </div>
            <div className="columns is-mobile">
              <div className="column"></div>
            
            <div className="column"></div>
          </div></div>
            <div className="is-hidden-mobile">
            <p className="has-text-weight-normal is-size-2-desktop is-roxo2">Somente <span className="is-size-2-desktop has-text-weight-bold"> nesta semana*<br/>Você vai levar <span className="is-size-1-desktop destaque has-text-white">TUDO</span> por:</span></p>
            <br/>
            <div className="columns">
              <div className="column is-4"></div>
              <div className="column has-text-right is-1 is-roxo2"><br/><br/><p className="is-size-1"> 4x</p><p className="is-size-1 has-text-weight-bold">R$</p></div>
              <div className="column has-text-centered is-2 has-background-roxo redondo2 esquerda2"><br/><br/><p className="is-size-10 has-text-white destaque">9,41</p><p className="has-text-white">no cartão ou R$34,97 a vista.</p></div>
              
              <div className="column esquerda redondo2"></div>
            </div>
          </div>
            <br/>
            <div className="is-hidden-desktop is-hidden-tablet">
              <br/><br/>
            </div>
            <p className="is-size-5-desktop">*Oferta disponível por quantidade limitada</p>
            <a href={url}><button
            className="botao2 is-hidden-mobile"
              >
                REALIZAR INSCRIÇÃO AGORA
              </button></a>
              <a href={url}><button
              className="botao2-mobile animate__animated animate__pulse animate__infinite is-hidden-desktop is-hidden-tablet"
              >
              INSCREVER AGORA
              </button></a>
          </div>
        </section>
        <section className="section has-text-centered has-background-roxo-claro">
          <div className="container">
            <p className="is-size-1 is-size-2-mobile mb-4 destaque has-text-white has-text-weight-bold">Fale Conosco :)</p>
            <p className="is-size-5-desktop is-roxo2">Será um prazer conversar contigo para maiores esclarecimentos</p>
            <br/>
            <br/>
            <a href="https://api.whatsapp.com/send?phone=554391914561&text=Oii,%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20cuso"><i className="fab fa-whatsapp fa-6x"></i></a>
          </div>
        </section>
        <section className="p-4 has-background-black has-text-centered has-text-white">
          <div className="container">
            <p>Arts em Amigurumi</p>
            <p className="mt-2">Termos de Uso / Politica de Privacidade</p>
          </div>
          <img href="https://app.monetizze.com.br/r/ABF15286575/?u=DU58594" width="1" height="1"/>
        </section>
            </main>
        </>
    );
};

export default Home;
