import styled from "styled-components";
import Head from "next/head";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Image from "next/image";
import { useRouter } from "next/router";

const g1 = () => {
    const { query } = useRouter();
    const src = query.src
    const baseUrl = "https://www.amigurumimeu.com/desconto"
    const url = baseUrl + "?src=" + src
    const Header = styled.header`
        background-color: #c4170c;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
    `;
    const Burguer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 50px;
        font-size: 25px;
        color: white;
    `;
    const Burguer2 = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 50px;
        font-size: 25px;
        color: white;
    `;
    const Logo = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 25px;
        font-size: 25px;
        color: white;
    `;
    const Logo2 = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 38px;
        font-size: 25px;
        color: white;
        margin-top: 20px;
    `;
    const Cidade = styled.h1`
        font-family: opensans, helvetica, arial, sans-serif !important;
        font-size: 1rem;
        display: inline-block;
        font-weight: 400;
        vertical-align: middle;
        text-transform: uppercase;
        margin: 0px 0px 0px 20px;
        text-decoration: none;
        color: #fff;
        max-width: 100%;
        margin-right: 30px;
    `;
    const Title = styled.p`
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.25rem;
        letter-spacing: -0.09375rem;
        font-family: opensans, helvetica, arial, sans-serif;
        color: #111;
    `;
    const SubTitle = styled.p`
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        font-size: 1.29rem;
        line-height: 1.5rem;
        letter-spacing: -0.03125rem;
        color: #555;
        vertical-align: initial;
    `;
    const By = styled.p`
        font-weight: 700;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.25rem;
        font-size: 0.875rem;
        letter-spacing: -0.0125rem;
        margin: 0 0 8px;
    `;
    const DataPosted = styled.p`
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        margin-top: -5px;
        font-weight: 200;
        font-size: 0.89rem;
    `;
    const Box = styled.div`
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        color: #555;
    `;
    const MediaDescription = styled.p`
        margin-top: 1rem;
        display: block;
        font-size: 0.75rem;
        line-height: 1rem;
    `;
    const Publicidade = styled.div`
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
        text-align: center;
        justify-content: center;
        align-items: center;
        align-content: center;
    `;
    const PublicidadeTexto = styled.p`
        letter-spacing: -0.6px;
        text-transform: uppercase;
        font-size: 12px;
        color: #999;
        margin-top: 20px;
    `;
    const PublicidadeFoto = styled.div`
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
    `;
    const ContentText = styled.p`
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        font-family: opensans, helvetica, arial, sans-serif;
        font-size: 1.125rem;
        margin-bottom: 1.75rem;
        line-height: 1.75rem;
        letter-spacing: -0.03125rem;
        overflow-wrap: break-word;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: normal;
    `;
    const Footer = styled.div`
        display: flex;
        flex-direction: column;
        padding-left: 1.5rem;
        background-color: #c4170c;
        color: white;
        font-family: opensans, sans-serif;
        -webkit-font-smoothing: antialiased;
    `;
    const PublicidadeFinal = styled.div`
        background: #ddd;
        padding: 20px;
        margin: 10px 10px;
    `;
    const PublicidadeFinalText = styled.p`
        color: #333;
        font-size: 1.6em;
        letter-spacing: -0.02em;
        line-height: 1.3em;
        padding-bottom: 1.5em;
    `;
    const titulo = "Polêmicas à parte, símbolo do vírus da Covid-19 vira renda extra para crocheteiras: 'Muita gente pedindo'";
    const subTitulo = "Feitos como se fossem amigurumis, que é uma técnica japonesa para criar bonecos de crochê ou tricô, em tamanhos pequenos, alguns recebem até nome: Covildson. Pedido, no entanto, divide opiniões em MS. ";
    var hoje = new Date();
    var dias = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
    var mes = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "novembro", "dezembro");

    var dd = String(hoje.getDate()).padStart(2, "0");
    var mm = String(hoje.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = hoje.getFullYear();

    var hoje = dd + " de " + mes[hoje.getDay()] + " de " + yyyy;
    const Sticky = styled.div`
        position: fixed;
        flex-direction: row;
        bottom: 0;
        left: 0;
        background-color: #f9f9f9;
        height: 60px;
        display: flex;
        align-content: center;
        width: 100%;
        justify-content: space-between;
        border-top: 2px solid #e2e2e2;
        text-align: center;
        
    `;
    const BotaoComprar = styled.button`
        background-color: white;
        border-color: green;
        color: green;
        border-radius: 8px;
        margin: 0px 30px 0px 0px;
        text-transform: uppercase;
        font-weight: bold;
        width: 100%;
        padding-left: 25px;
        padding-right: 25px;
    `;
    const StickBotao = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin-top: 3px;
    `;
    const StickTexto = styled.p`
        font-size: 12px;
        margin-top: 0px;
        margin-bottom: 2px;
        font-weight: bold;
        text-transform: uppercase;
        color: orangered;
        margin-right: 0px;
        
    `;
    return (
        <>
            <Head>
                <title>Artesã vira febre na pandemia com seus amigurumis</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-55FTBZN');`}}></script>
            </Head>
            <Header>
                <Burguer>
                    <MenuIcon />
                </Burguer>
                <Logo>
                    <svg id="cor-primaria" viewBox="0 0 516 308" xmlns="http://www.w3.org/2000/svg">
                        <title>G1</title>
                        <path
                            d="M0 208.716C0 263.56 50.353 308 112.558 308h224.66V118.447H212.173v94.417h-59.39c-15.54 0-28.157-11.125-28.157-24.828V95.97c0-13.68 7.63-24.826 23.16-24.826h100.467L304.525.47H112.558C50.353.47 0 49.482 0 104.34v104.376zM387.186 308H512V24.832C512 11.13 499.408 0 483.868 0h-123.05l-56.292 70.95h54.523c15.538 0 28.136 11.123 28.136 24.817V308z"
                            fill="currentColor"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </Logo>
                <Cidade>mato grosso do sul</Cidade>
                <Burguer2>
                    <SearchIcon />
                </Burguer2>
            </Header>
            <Title>{titulo}</Title>
            <SubTitle>{subTitulo}</SubTitle>
            <By>Por Natalia Guimarães, G1 MS</By>
            <DataPosted>27/03/2021 10h21 - Atualizado há 1 semana</DataPosted>
            <hr class="content__divider " />
            <Box>
                <Image src="/whatsapp-image-2021-03-29-at-09.04.09.jpeg" width={366} height={327} alt="" />
                <MediaDescription>Crocheteiras dizem que estão recebendo inúmeros pedidos do símbolo da Covid-19 — Foto: Redes Sociais/Reprodução</MediaDescription>
            </Box>
            <Publicidade>
                <PublicidadeTexto>------- Continua depois da publicidade -------</PublicidadeTexto>
            </Publicidade>
            <a href={url}>
                <PublicidadeFoto>
                    <Image src="/ads.png" width={250} height={250} alt="" />
                </PublicidadeFoto>
            </a>
            <ContentText>
                Polêmicas à parte, símbolo do vírus da Covid-19 vira renda extra para crocheteiras: 'Muita gente pedindo'
                <br />
                <br />
                Feitos como se fossem amigurumis, que é uma técnica japonesa para criar bonecos de crochê ou tricô, em tamanhos pequenos, alguns recebem até nome: Covildson. Pedido, no entanto, divide opiniões em SP.
                <br />
                <br />
                O pedido é polêmico, mas, está garantindo renda extra para muitas crocheteiras, não só em São Paulo como diversos locais do Brasil: o símbolo da Covid-19. Feitos como se fossem amigurumis, que é uma técnica japonesa para
                criar bonecos de crochê ou tricô, em tamanhos pequenos, alguns recebem até nome, o Covildson.
                <br />
                <br />
                A intenção de quem encomenda, segundo as crocheteiras, é tanto para orientar as pessoas como guardar a lembrança do momento em que estamos passando. Sempre por dentro das novidades, a técnica de enfermagem Beatriz Batista de
                Oliveira, de 38 anos, disse que está em diversos grupos de whatsapp, em que crocheteiras postam fotos dos trabalhos e o símbolo da Covid é o que "está em alta no momento".
                <br />
                <br />
                "Eu trabalho no hospital, pego plantão noturno e comecei fazer o crochê bem no início da pandemia. O meu setor é o oncológico, então, aconteceu o falecimento de uma criança e uma mulher associou o fato a nossa equipe. Recebi
                até ameaça de morte e, durante o tratamento psicológico, me recomendaram fazer crochê. Foi aí que entrei nos grupos e comecei a ver as encomendas", afirmou ao G1 Beatriz.
                <br />
                <br />
                O crochê, segundo ela, é o momento em que "afasta a ansiedade" da rotina no hospital. "Vi que muita gente estava pedindo e não tinha nada a ver com o que eu faço. Eu fiz vários trabalhos de bonecas, coisas para bebê, até o
                momento em que juntei um monte e comecei a doar. Depois, começaram as vendas. Neste caso do símbolo da Covid, quando pensei em fazer, chamei as colegas do hospital para ver o que achavam", relembrou.
                <br />
                <br />
                <br />
                Ao conversar, Beatriz disse que o símbolo da Covid, em crochê, dividiu opiniões. "Algumas colegas falaram que não seria legal, principalmente porque estamos atuando contra o vírus. Outras falaram que seria importante caso a
                pessoa usasse o objeto para falar da importância da vacina, do preconceito que possuem com os profissionais da saúde e até mesmo da resistência de alguns com a vacina", comentou.
                <br />
                <br />
                Além das colegas, Beatriz também contou para a psicóloga sobre o crochê e, ao falar dos pedidos do símbolo da Covid, comentaram sobre o fato de muitas pessoas talvez quererem ter a lembrança da pandemia.
                <br />
                <br />
                A enfermeira Camila Unid, que atua na linha de frente contra o novo coronavírus, há pouco mais de um ano, disse encomendou o símbolo de uma crocheteira, que trabalha no mesmo hospital que ela.
                <br />
                <br />
                "Eu dei o nome a ele de Covildson e as fotos que fiz foram para ilustrar que passamos a conviver com ele diariamente e que, se soubermos nos proteger, ele não nos fará mal. Sempre lutei e fico indignada quando vejo pessoas
                desrespeitando o isolamento", comentou.
                <br />
                <br />
                A reportagem também conversou com outras três profissionais. Com exceção de uma dona de casa, que afirmou fazer crochê como fonte de renda, as outras duas também são profissionais da saúde e, por temerem julgamentos,
                preferiram não se identificar.
                <br />
                <br />
                Elas ressaltaram que estão fazendo o amigurumi com o símbolo da Covid, porém preferem realizar outros tipos de trabalho, já que convivem com a doença a maior parte do dia. "Achei algo meio pesado, só que encomenda a gente
                não discute", finalizou.
                <br />
                <br />
                Beatriz Relata ao G1 que aprendeu amigurumi Ano passado 2020, ao ver um anuncio no facebook conheceu os amigurumis e resolveu procurar uma especialista que entendesse sobre amigurumis, com sua falta de tempo ela não
                conseguiu procurar alguém para ensinar!
                <br />
                <br />
                Com muita correria no hospital único tempo livre ela gastava no celular, foi então que pensou, nesse momento difícil encontrar uma especialista para me ensinar pessoalmente vai ser complicado, será que tem algum curso
                online? Pensou ela, então diz ela que começou a realizar varias pesquisas encontrou vários curso oferecido na internert mais diz ela que perdeu muito tempo e dinheiro pois muitos deixavam a desejar, foi então que um Nome
                marcou ela{" "}
                <a href="https://www.artsdeamigurumi.online">
                    <span style={{ color: "blue", marginLeft: "2px", fontWeight: "bold" }}> Arts de Amigurumi</span>
                </a>{" "}
                , nele ela relata que aprendeu de verdade a fazer amigurumi sem nunca ter pegado numa agulha de crochê
                <br />
                <br />
                Já a Camila relata que aprendeu com sua avó quando era pequena e os modelos receitas ela procura na internet! <br />
                <br />
            </ContentText>
            <PublicidadeFinal>
                <PublicidadeFinalText>
                    <span style={{ color: "red", fontWeight: "bold" }}>Atenção:</span> Desconto especial para as leitoras dessa reportagem! Preços promocionais que chegam a 70% de desconto. Essa Promoção EXCLUSIVA estará em vigor até o dia{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>{hoje}</span>
                </PublicidadeFinalText>
            </PublicidadeFinal>
            <Footer>
                <Logo2>
                    <svg id="cor-primaria" viewBox="0 0 516 308" xmlns="http://www.w3.org/2000/svg">
                        <title>G1</title>
                        <path
                            d="M0 208.716C0 263.56 50.353 308 112.558 308h224.66V118.447H212.173v94.417h-59.39c-15.54 0-28.157-11.125-28.157-24.828V95.97c0-13.68 7.63-24.826 23.16-24.826h100.467L304.525.47H112.558C50.353.47 0 49.482 0 104.34v104.376zM387.186 308H512V24.832C512 11.13 499.408 0 483.868 0h-123.05l-56.292 70.95h54.523c15.538 0 28.136 11.123 28.136 24.817V308z"
                            fill="currentColor"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </Logo2>
                <p>Últimas Notícias</p>
                <p>
                    Globo Noticiais
                    <br />
                    <br />
                    2021
                </p>
            </Footer>
            <Sticky>
                <img src="/pooh.png" width="150px" height="150px" style={{ position: "relative", top: "-70px", left: "-10px" }} />
                <StickBotao>
                    <StickTexto>5 Mil Modelos com 70% de Desconto!</StickTexto>
                    <a href={url}>
                        <BotaoComprar className="animate__animated animate__pulse animate__infinite">Pegar Cupom</BotaoComprar>
                    </a>
                </StickBotao>
            </Sticky>
        </>
    );
};

export default g1;
