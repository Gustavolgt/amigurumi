import Head from "next/head";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState,useEffect } from 'react';
import toastr from 'toastr'
import Link from 'next/link'
import YouTube from 'react-youtube';
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import Transparente from "../monetizze/transparente";
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
    const { query } = useRouter();
    const opts = {
        height: '190',
        width: '100%',
      };
    const opts2 = {
        height: '190',
        width: '100%',
    };
    const src = query.src
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
            "onclick": function() {handleModal()},
            "showDuration": "3000",
            "hideDuration": "5000",
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
      var hoje = new Date();
      var dias = new Array(
          'domingo','segunda','terça','quarta','quinta','sexta','sábado'
         );
      var mes = new Array(
      'janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'
      );
  
      var dd = String(hoje.getDate()).padStart(2, '0');
      var mm = String(hoje.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = hoje.getFullYear();
  
      var hoje = dd + ' de ' + mes[hoje.getMonth()] + ' de ' + yyyy;
    const [openModal, setOpenModal] = useState(false)
    const handleModal = () => {
        setOpenModal(!openModal)
    }
    return (
        <>
            <Head>
                <title>Arts Amigurumi</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                    crossOrigin="anonymous"
                />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossOrigin="anonymous"/>
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </Head>
            
            
            <main className="mt-2">
                
                {openModal?(<div className="col-10 offset-1 border rounded border-2 shadow my-2"  >
                <div className="text-end p-2 " style={{background:'#a3ebff', marginBottom:'-10px'}}><i className="fa fa-times " aria-hidden="true" onClick={()=>handleModal()}></i></div>
                    <Transparente />
                </div>):(
                <>
                <div className="container">
                    <div className="row justify-content-center">
                        
                        <div className="col-12 text-center">
                            
                            <p className="fs-1 text-uppercase fw-bold">5000 Receitas<br/><span className="fw-bold bg-success text-white px-2 fs-amigurumis">Amigurumis </span><br/>100% em português</p>
                            <p className="fs-3 px-4 text-secondary"><span className="text-danger">Pare de Procurar</span> por receitas na Internet, temos todas receitas aqui,<br/><span className="bg-warning text-white fs-1 px-2 fw-bold"> + Raras e Exclusivas</span></p>
                            <YouTube videoId="w4Krk1_GwjA" opts={isMobile?opts2:opts} className="border border-4 border-warning mb-3" />
                            <a onClick={()=>handleModal()}><button className="btn btn-outline-success text-uppercase animate__animated animate__pulse animate__infinite py-3 px-5">Quero Comprar Agora</button></a>
                            <Image src="/seguro.png" width={300} height={65} />
                        </div>
                    </div>
                    
                </div>
                <div className="bg-info mt-5">
                    <div className="custom-shape-divider-top-1623255952">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
                        </svg>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <p className="fs-2 mt-5 destaque text-white fw-bold">Algumas das Nossas Receitas</p>
                            </div>
                            <div className="col-10 text-center">
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
                                containerclassName="carousel-container"
                                removeArrowOnDeviceType={["tablet"]}
                                dotListclassName="custom-dot-list-style"
                                itemclassName="carousel-item-padding-40-px mt-4"
                            >
                                <div>
                                    <Image src="/areceitas/receita (1).jpg" width={352} height={352} />
                                </div>
                                <div>
                                    <Image src="/areceitas/receita (2).jpg" width={352} height={352} />
                                </div>
                                <div>
                                    <Image src="/areceitas/receita (3).jpg" width={352} height={352} />
                                </div>
                                <div>
                                    <Image src="/areceitas/receita (4).jpg" width={352} height={352} />
                                </div>
                                <div>
                                    <Image src="/areceitas/receita (5).jpg" width={352} height={352} />
                                </div>
                                <div>
                                    <Image src="/areceitas/receita (6).jpg" width={352} height={352} />
                                </div>
                                <div>
                                    <Image src="/areceitas/receita (7).jpg" width={352} height={352} />
                                </div>
                                <div>
                                    <Image src="/areceitas/receita (8).jpg" width={352} height={352} />
                                </div>
                                <div>
                                    <Image src="/areceitas/receita (9).jpg" width={352} height={352} />
                                </div>
                                <div>
                                    <Image src="/areceitas/receita (10).jpg" width={352} height={352} />
                                </div>
                                <div>
                                    <Image src="/areceitas/receita (11).jpg" width={352} height={352} />
                                </div>
                            </Carousel>
                                <Link href={"/galeria2" + "?src=PV2/" + src}><button className="btn btn-outline-light text-uppercase px-5 mt-4 py-3 fw-bold animate__animated animate__tada animate__repeat-3">Ver Galeria</button></Link>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="custom-shape-divider-bottom-1623257402 mt-5">
                                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                        <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className="shape-fill"></path>
                                    </svg>
                                </div>
                </div>
                <div className="container mt-3">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center row justify-content-center">
                            <p className="text-white fs-1 fw-bold bg-danger text-uppercase py-2">Faça sua Inscrição!</p>
                            <p className="fs-4 text-primary">Se inscreva agora para ter acesso a Todas as<span className="fw-bold"> Receitas e Bônus Exclusivos</span></p>
                            <div className="col-11 text-center">
                                <p className="fs-3">De <span className="text-decoration-line-through text-danger fs-1 fw-bold">R$147,00</span> <br/><span className="">Por apenas 4x</span><br/><span className=""><span className="fs-0 fw-bold font-monospace text-success">9</span><span className="fs-1 fw-bold text-success" style={{position:'absolute', marginTop:'25px'}}>,41</span></span><br/><span className="fs-5 fw-bolder">ou R$34,97 à vista.</span></p>
                                <p className="fs-5 bg-info py-1 text-white fw-bold">Custa Menos de R$0,02 por Receita</p>
                                <a onClick={()=>handleModal()}><button className="btn btn-outline-success text-uppercase fw-bolder animate__animated animate__pulse animate__infinite rounded-fill px-4 py-3">quero meu desconto</button></a>
                                <Image src="/seguro.png" width={300} height={65} />
                                <p className="fs-3 mt-5 fw-bold"><i className="fas fa-exclamation-triangle" style={{color:'#FFDF20'}}></i> ATENÇÃO <i className="fas fa-exclamation-triangle" style={{color:'#FFDF20'}}></i><br/><span className="fs-5">Promoção válida até <span className="text-danger fw-bold"> {hoje}</span></span></p>
                            </div>
                            
                            
                        </div>
                    </div>
                    
                </div>
                <div className="text-center mt-2">
                    <hr className="w-50"/>
                </div>
                <div className="container mt-3">
                    <div className="row justify-content-center text-center">
                        <p className="fs-2 mt-5 destaque is-roxo fw-bold">Nossas Alunas Recomendam</p>
                        <p className="fs-6 fw-bold">Avaliação das Alunas 4.9 de 5.0 <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></p>
                        <div className="col-12">
                        <Carousel
                                    swipeable={false}
                                    draggable={false}
                                    showDots={true}
                                    responsive={responsive}
                                    ssr={true} // means to render carousel on server-side.
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={5000}
                                    keyBoardControl={true}
                                    customTransition="all .5"
                                    transitionDuration={500}
                                    containerclassName="carousel-container"
                                    removeArrowOnDeviceType={["tablet","mobile"]}
                                    dotListclassName="custom-dot-list-style"
                                    itemclassName="carousel-item-padding-40-px"
                                    className="border border-2 rounded-2 border-warning"
                                >
                                    <div>
                                        <Image src="/adepo/depoimento (1).jpg" width={1241/3.5} height={321/3.5} />
                                    </div>
                                    <div>
                                        <Image src="/adepo/depoimento (2).jpg" width={1241/3.5} height={321/3.5} />
                                    </div>
                                    <div>
                                        <Image src="/adepo/depoimento (3).jpg" width={1241/3.5} height={321/3.5} />
                                    </div>
                                    <div>
                                        <Image src="/adepo/depoimento (4).jpg" width={1241/3.5} height={321/3.5} />
                                    </div>
                                    <div>
                                        <Image src="/adepo/depoimento (5).jpg" width={1241/3.5} height={543/3.5} />
                                    </div>
                                    <div>
                                        <Image src="/adepo/depoimento (6).jpg" width={1241/3.5} height={352/3.5} />
                                    </div>
                                    <div>
                                        <Image src="/adepo/depoimento (7).jpg" width={1241/3.5} height={352/3.5} />
                                    </div>
                                    <div>
                                        <Image src="/adepo/depoimento (8).jpg" width={1241/3.5} height={352/3.5} />
                                    </div>
                                    <div>
                                        <Image src="/adepo/depoimento (9).jpg" width={1241/3.5} height={352/3.5} />
                                    </div>
                                    <div>
                                        <Image src="/adepo/depoimento (10).jpg" width={1241/3.5} height={543/3.5} />
                                    </div>
                                    <div>
                                        <Image src="/adepo/depoimento (11).jpg" width={1241/3.5} height={352/3.5} />
                                    </div>
                                </Carousel>
                                <a onClick={()=>handleModal()}><button className="btn btn-outline-success text-uppercase fw-bolder animate__animated animate__pulse animate__infinite rounded-fill px-4 py-3 mt-4">eu quero participar</button></a>
                                
                    </div>
                    
                </div>
                    
                </div>
                <div className="bg-info mt-5">
                <div className="custom-shape-divider-top-1623260093">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <p className="fs-1 text-uppercase mt-5 destaque text-white fw-bold">Sorteio!</p>
                            <p className="fs-5 text-white">Isso mesmo, você participará de um sorteio dia 28 de cada mês, é sua oportunidade de ganhar um Kit Completo de Agulhas e Linhas.</p>
                            <Image src="/kitagulha.png" width={300} height={300} className="border border-3 border-warning mt-4"  />
                            <a onClick={()=>handleModal()}><button className="btn btn-outline-light text-uppercase fw-bolder animate__animated animate__pulse animate__infinite rounded-fill px-4 py-3 mt-4 mb-5">eu quero participar</button></a>
                        </div>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1623260477">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
                    </svg>
                </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <p className="fs-2 mt-5 destaque is-roxo fw-bold">Suporte Exclusivo pelo <span className="text-success"> WhatsApp</span> para Alunas</p>
                            <Carousel
                                    swipeable={false}
                                    draggable={false}
                                    showDots={false}
                                    responsive={responsive}
                                    ssr={true} // means to render carousel on server-side.
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={5000}
                                    keyBoardControl={true}
                                    customTransition="all .5"
                                    transitionDuration={500}
                                    containerclassName="carousel-container"
                                    removeArrowOnDeviceType={["tablet"]}
                                    dotListclassName="custom-dot-list-style"
                                    itemclassName="carousel-item-padding-40-px"
                                    className="border border-2 rounded-2 border-warning"
                                >
                                    <div>
                                        <Image src="/awpp/depoimento (1).jpg" width={720} height={1280} />
                                    </div>
                                    <div>
                                        <Image src="/awpp/depoimento (2).jpg" width={720} height={1280} />
                                    </div>
                                    <div>
                                        <Image src="/awpp/depoimento (3).jpg" width={720} height={1280} />
                                    </div>
                                    <div>
                                        <Image src="/awpp/depoimento (4).jpg" width={720} height={1280} />
                                    </div>
                                    <div>
                                        <Image src="/awpp/depoimento (5).jpg" width={720} height={1280} />
                                    </div>
                                    <div>
                                        <Image src="/awpp/depoimento (6).jpg" width={720} height={1280} />
                                    </div>
                                    <div>
                                        <Image src="/awpp/depoimento (7).jpg" width={720} height={1280} />
                                    </div>
                                    <div>
                                        <Image src="/awpp/depoimento (8).jpg" width={720} height={1280} />
                                    </div>
                                    
                                </Carousel>
                                <a onClick={()=>handleModal()}><button className=" mt-4 btn btn-outline-success text-uppercase fw-bolder animate__animated animate__pulse animate__infinite rounded-fill px-4 py-3">quero meu desconto</button></a>
                                <Image src="/seguro.png" width={300} height={65} />
                        </div>
                        
                    </div>
                </div>
                <div className="bg-warning mt-5">
                <div className="custom-shape-divider-top-1623261153">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <p className="fs-1 fw-bold text-white mt-3">Satisfação 100% Garatinda</p>
                                <Image src="/garantia.png" width={360/2} height={313/2} />
                                <p className="mt-3 text-white fs-5">
                                Acreditamos tanto no nosso trabalho e quero comigo pessoas que estejam realmente satisfeitas e felizes por isso eu criei uma GARANTIA INCONDICIONAL de 7 dias! 
    Sabe o que isso significa? <br /><br />

    Se matriculando HOJE, você tem 7 dias para testar e ver se o curso é para você, caso não goste (por QUALQUER MOTIVO), eu te DEVOLVO 100% DO SEU DINHEIRO! <br /><br />


    Aproveite esse presentão e garanta sua vaga 👇
                                </p>
                                <a onClick={()=>handleModal()}><button className=" mt-4 btn btn-outline-success text-uppercase fw-bolder animate__animated animate__pulse animate__infinite rounded-fill px-4 py-3">quero meu desconto</button></a>
                                <Image src="/seguro.png" width={300} height={65} />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="row justify-content-center text-center has-background-roxo-claro pb-5">
                <div className="custom-shape-divider-top-1623261544">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
                    </svg>
                </div>
                    <div className="container">
                        <p className="fs-2 mb-4 destaque text-white fw-bold">Fale Conosco :)</p>
                        <p className="fs-5 is-roxo2">Será um prazer conversar contigo para maiores esclarecimentos</p>
                        <br/>
                        <br/>
                        <a href="https://api.whatsapp.com/send?phone=554391914561&text=Ola%20gostaria%20de%20saber%20mais!"><i className="fab fa-whatsapp fa-6x"></i></a>
                    </div>
                    </section>
                    <section className="p-4 bg-dark has-text-center text-white">
                    <div className="container">
                        <p>Arts em Amigurumi</p>
                        <p className="mt-2">Termos de Uso / Politica de Privacidade</p>
                    </div>
                    <img href="https://app.monetizze.com.br/r/ARC15357455/?u=DU58594" width="1" height="1" style={{display: 'none'}}/>
                    </section>
                    </>
                    )}
                
            </main>
        </>
    );
};

export default Home;
