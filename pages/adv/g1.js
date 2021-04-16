import styled from "styled-components"
import Head from 'next/head'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Image from 'next/image'

const g1 = () => {
    const Header = styled.header`
        background-color: #C4170C;
        height:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        align-content:center;
    `
    const Burguer = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        align-content:center;
        width:50px;
        font-size:25px;
        color:white;
    `;
    const Burguer2 = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        align-content:center;
        width:50px;
        font-size:25px;
        color:white;
        
    `;
    const Logo = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        align-content:center;
        width:25px;
        font-size:25px;
        color:white;
    `;
    const Logo2 = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        align-content:center;
        width:38px;
        font-size:25px;
        color:white;
        margin-top:20px;
    `;
    const Cidade = styled.h1`
        font-family: opensans,helvetica,arial,sans-serif !important;
        font-size: 1rem;
        display: inline-block;
        font-weight:400;
        vertical-align: middle;
        text-transform: uppercase;
        margin: 0px 0px 0px 20px;
        text-decoration: none;
        color: #fff;
        max-width: 100%;
        margin-right:30px;
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
        letter-spacing: -.03125rem;
        color: #555;
        vertical-align: initial;
    `;
    const By = styled.p`
        font-weight: 700;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.25rem;
        font-size: .875rem;
        letter-spacing: -.0125rem;
        margin: 0 0 8px;
    `;
    const DataPosted = styled.p`
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        margin-top:-5px;
        font-weight:200;
        font-size:0.89rem;
      
    `;
    const Box = styled.div`
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        color: #555;
    `;
    const MediaDescription = styled.p`
        margin-top: 1rem;
        display: block;
        font-size: .75rem;
        line-height: 1rem;
    `;
    const Publicidade = styled.div`
        display:flex;
        flex-direction:column;
        width:80%;
        margin: 0 auto;
        text-align:center;
        justify-content:center;
        align-items:center;
        align-content:center;
        
    `;
    const PublicidadeTexto = styled.p`
        letter-spacing: -0.6px;
        text-transform: uppercase;
        font-size:12px;
        color: #999;
        margin-top:20px;
    `;
    const PublicidadeFoto = styled.div`
        display:flex;
        align-items:center;
        align-content:center;
        justify-content:center;
    `;
    const ContentText = styled.p`
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        font-family: opensans,helvetica,arial,sans-serif;
        font-size: 1.125rem;
        margin-bottom: 1.75rem;
        line-height: 1.75rem;
        letter-spacing: -.03125rem;
        overflow-wrap: break-word;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: normal;
      
    `;
    const Footer = styled.div`
        display:flex;
        flex-direction:column;
        padding-left:1.5rem;
        background-color:#c4170c;
        color: white;
        font-family: opensans, sans-serif;
        -webkit-font-smoothing: antialiased;
    `;
    const titulo = "Polêmicas à parte, símbolo do vírus da Covid-19 vira renda extra para crocheteiras: 'Muita gente pedindo'"
    const subTitulo = "Feitos como se fossem amigurumis, que é uma técnica japonesa para criar bonecos de crochê ou tricô, em tamanhos pequenos, alguns recebem até nome: Covildson. Pedido, no entanto, divide opiniões em MS. "
    return (
        <>
        <Head>
            <title>Artesã vira febre na pandemia com seus amigurumis</title>
            
        </Head>
        <Header>
            <Burguer><MenuIcon/></Burguer>
            <Logo>
                <svg id="cor-primaria" viewBox="0 0 516 308" xmlns="http://www.w3.org/2000/svg"><title>G1</title><path d="M0 208.716C0 263.56 50.353 308 112.558 308h224.66V118.447H212.173v94.417h-59.39c-15.54 0-28.157-11.125-28.157-24.828V95.97c0-13.68 7.63-24.826 23.16-24.826h100.467L304.525.47H112.558C50.353.47 0 49.482 0 104.34v104.376zM387.186 308H512V24.832C512 11.13 499.408 0 483.868 0h-123.05l-56.292 70.95h54.523c15.538 0 28.136 11.123 28.136 24.817V308z" fill="currentColor" fillRule="evenodd"></path></svg>
            </Logo>
            <Cidade>mato grosso do sul</Cidade>
            <Burguer2><SearchIcon/></Burguer2>
        </Header>
        <Title>{titulo}</Title>
        <SubTitle>{subTitulo}</SubTitle>
        <By>Por Natalia Guimarães, G1 MS</By>
        <DataPosted>27/03/2021  10h21 - Atualizado há 1 semana</DataPosted>
        <hr class="content__divider "/>
        <Box>
            <Image
                src="/whatsapp-image-2021-03-29-at-09.04.09.jpeg"
                width={366}
                height={327}
                alt=""
            />
            <MediaDescription>Crocheteiras dizem que estão recebendo inúmeros pedidos do símbolo da Covid-19 — Foto: Redes Sociais/Reprodução</MediaDescription>
            
        </Box>
        <Publicidade>
            <PublicidadeTexto>-------  Continua depois da publicidade  -------</PublicidadeTexto>
            </Publicidade>
            <PublicidadeFoto>
                <Image 
                    src="/ads.png"
                    width={250}
                    height={250}
                    alt=""
                />
            </PublicidadeFoto>
            <ContentText>
            O pedido é polêmico, mas, está garantindo renda extra para muitas crocheteiras, não só em Campo Grande como diversos locais do Brasil: o símbolo da Covid-19. Feitos como se fossem amigurumis, que é uma técnica japonesa para criar bonecos de crochê ou tricô, em tamanhos pequenos, alguns recebem até nome, o Covildson.

A intenção de quem encomenda, segundo as crocheteiras, é tanto para orientar as pessoas como guardar a lembrança do momento em que estamos passando. Sempre por dentro das novidades, a técnica de enfermagem Rosana Priscilla Freitas, de 38 anos, disse que está em diversos grupos de whatsapp, em que crocheteiras postam fotos dos trabalhos e o símbolo da Covid é o que "está em alta no momento".

"Eu trabalho no hospital, pego plantão noturno e comecei fazer o crochê bem no início da pandemia. O meu setor é o oncológico, então, aconteceu o falecimento de uma criança e uma mulher associou o fato a nossa equipe. Recebi até ameaça de morte e, durante o tratamento psicológico, me recomendaram fazer crochê. Foi aí que entrei nos grupos e comecei a ver as encomendas", afirmou ao G1 Rosana.

O crochê, segundo ela, é o momento em que "afasta a ansiedade" da rotina no hospital. "Vi que muita gente estava pedindo e não tinha nada a ver com o que eu faço. Eu fiz vários trabalhos de bonecas, coisas para bebê, até o momento em que juntei um monte e comecei a doar. Depois, começaram as vendas. Neste caso do símbolo da Covid, quando pensei em fazer, chamei as colegas do hospital para ver o que achavam", relembrou.
            </ContentText>
            <Footer>
                <Logo2>
                    <svg id="cor-primaria" viewBox="0 0 516 308" xmlns="http://www.w3.org/2000/svg"><title>G1</title><path d="M0 208.716C0 263.56 50.353 308 112.558 308h224.66V118.447H212.173v94.417h-59.39c-15.54 0-28.157-11.125-28.157-24.828V95.97c0-13.68 7.63-24.826 23.16-24.826h100.467L304.525.47H112.558C50.353.47 0 49.482 0 104.34v104.376zM387.186 308H512V24.832C512 11.13 499.408 0 483.868 0h-123.05l-56.292 70.95h54.523c15.538 0 28.136 11.123 28.136 24.817V308z" fill="currentColor" fillRule="evenodd"></path></svg>
                </Logo2>
                <p>Últimas Notícias</p>
                <p>Globo Noticiais<br/>2021</p>
                
            </Footer>
        </>
    )
}


export default g1