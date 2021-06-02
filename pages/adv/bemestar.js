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
        background-color: #00CDD6;
        height: 50px;
        display: flex;
        justify-content: space-between;
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
        font-weight: 600;
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
        margin-top: 1.5rem;
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
        background-color: #00CDD6;
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
    const titulo = "Dona de casa ganha R$3.487 por mês sem sair de casa fazendo Amigurumis";
    const subTitulo = "REVOLUÇÃO DA RENDA EXTRA: Conheça os Amigurumis, técnica Japonesa que está fazendo muito sucesso na internet!";
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
        font-size: 0.8rem;        
    `;
    const StickTexto = styled.p`
        font-size: 0.7rem;
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
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossOrigin="anonymous"/>
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
                <Cidade>BEM ESTAR</Cidade>
                <Burguer2>
                    <SearchIcon />
                </Burguer2>
            </Header>
            <Title>{titulo}</Title>
            <SubTitle>{subTitulo}</SubTitle>
            <By>Por Natalia Guimarães, G1 MS</By>
            <DataPosted>27/03/2021 10h21 - Atualizado há 1 semana</DataPosted>
            <hr class="content__divider " />
            
            <div className="container">
                <div className="row  justify-content-center">
                    <div className="col-11">
                    
                        <Image 
                            src="/post_video.jpg"
                            width ={400}
                            height={200}
                        />
                


                    <p>Um salário que não passava de R$900, dois filhos em fase de pré-escola, uma casa para sustentar sozinha e abandonada pelo marido há pouco mais de 4 meses, essa era a realidade de Maria de Fátima de 34 anos.</p>
                    <p>
                    Ela conta que não chegaram a passar fome, mas que sempre tirava um pouco de comida de seu prato para garantir que os meninos, na época um de 4 e o outro de 6, pudessem repetir se eles quisessem.</p>
                    <p>
                    O dinheiro não dava para nada, mal pagava as contas e mesmo assim, Maria investia 8 horas por dia, mais 2 horas de trajeto em ônibus lotado para garantir o mínimo possível para eles.</p>
                    <p>
                    “ Aquela situação estava insustentável. Eu percebia que a qualquer momento iria explodir. Quando dividia as contas com meu marido, tínhamos uma vida melhor, mas não luxuosa. Eu sabia que meus pequenos dependiam de mim, se eu perdesse aquele emprego, não sei o que seria de nós.” – comenta com lágrimas nos olhos. </p>
                    <p>
                    A dona de casa conta que estava inconformada de levar aquela vida. Já tinha aceitado bem o abandono do marido depois de 9 anos de casados, mas não queria que seus filhos continuassem naquela vida medíocre.</p>
                    <p>
                    “ Na época, eu era merendeira, não via um futuro ali onde estava. A profissão é linda e eu amava, mas iria continua ganhando o mesmo até me aposentar. Comecei a perceber que eu precisava me movimentar se eu quisesse dar uma vida melhor a eles. Mas eu não sabia fazer nada de diferente além de cozinhar e fazer crochê. “</p>
                    <p><br/>
                    <Publicidade >
                                    <PublicidadeTexto>------- Continua depois da publicidade -------</PublicidadeTexto>
                                </Publicidade>
                                <a href={url}>
                                    <PublicidadeFoto className="mb-5">
                                        <Image src="/ads.png" width={250} height={250} alt="" />
                                    </PublicidadeFoto>
                                </a>
                        <span className="fs-3 fw-bold mt-2">Busca de uma renda extra</span> </p>
                    <p><br/>
                    Maria conta que passou madrugas em claro procurando algo para fazer que pudesse render um dinheiro a mais. Vasculhou a internet em busca de novidades e só via mais do mesmo.</p>
                    <p>
                    Tentou vender quentinhas aos fins de semana, brigadeiro, salgadinho de festa, mas parecia que nada ia para frente.
                    Começou a achar que não tinha cunho empreendedor, que teria que aceitar que o destino dela era ser merendeira, ganhando pouco todos os meses...</p>
                    <p>Ela não conseguia aceitar aquele destino..</p>
                    <p>
                    “Estava inconformada de não conseguir sair do lugar. Não podia me arriscar em buscar um novo emprego e ser demitida do meu atual. Não podia nem faltar para fazer entrevista. Foi quando vi uma reportagem na televisão me chamou a atenção..” </p>
                    <p><br/><a href={url}>
                        <button class="btn btn-outline-success rounded fw-bold animate__animated animate__pulse animate__infinite">Veja como tirar uma renda extra sem sair de casa </button></a></p>
                    <p><br/><br/>
                    <span className="fs-3 fw-bold mt-2">Descoberta de um mercado em ascensão</span> </p>
                    <p><br/>
                    Viu um anúncio através de redes sociais de um garoto de uns 13 anos que estava fazendo o maior sucesso na internet com seus vídeos fazendo crochê. </p>
                    <p><br/>
                    <iframe width="300" height="180" src="https://www.youtube.com/embed/L1H2YXkC3aA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></p>
                    <p><br/>
                    Novamente, a ideia do crochê a veio a cabeça. Ela amava fazer isso. Havia aprendido com a sua avó quando ainda era nova e sempre fez como um hobby.</p>
                    <p><br/>
                        <span className="fs-3 fw-bold mt-2">Mas como ganhar dinheiro com crochê?</span> </p>
                    <p><br/>
                    Ninguém mais usava esse tipo de roupa. Itens para casa não era uma opção boa, até algo curioso aconteceu!<br/>
                    Um de seus filhos voltou da escolinha com um boneco feito de crochê, dizendo que seu amigo havia emprestado, mas ele teria que devolver no dia seguinte. A questão é que ele não queria devolver e perguntou a ela se não poderia fazer um igualzinho a ele...</p>
                    <p>
                    Como ainda tinha umas linhas em casa, passou a madrugada fazendo. Já não conseguia dar nada a eles, o que custava um bonequinho. Fez as pressas e não ficou tão bom, mas o menino adorou.<br/>
                    Foi para escola levando ambos...</p>
                    <p><br/>
                        <span className="fs-3 fw-bold mt-2">A renda extra apareceu!!!!</span></p>
                    <p><br/>
                    Na saída da escola, seu filho disse que os amiguinhos tinham gostado tanto que queria que ela fizesse para eles também. Maria conta que não deu muito crédito, achava que seu filho estava exagerando...<br/>
                    Só que para sua surpresa, ao levar o menino a escola no dia seguinte, 5 mães de alunos a abordaram desejando encomendar Amigurumis com ela. Na hora, ela nem sabia do que estava falando e disse que não fazia!</p>
                    <p>
                    Chegou em casa e foi direto para internet saber do que se travava e ficou INACREDITADA! Talvez, ela estivesse diante de sua renda extra.</p>
                    <p>
                    Procurou muito na internet para entender melhor, até que percebeu que tudo o que ensinavam eram uma cópia de outras coisas. Ou materiais em inglês que ela não sabia traduzir.<br/>
                    Até chegou a comprar um curso baratinho, mas na mesma tarde cancelou. Era só um compilado de coisas da internet.</p><p>
                    Ela precisava aprender com qualidade, novos pontos de crochês, receitas práticas de como fazer modelos diferente, mas isso ela não achava!</p>
                    <p><br/>
                    </p>
                        <p><span className="fs-3 fw-bold mt-2">O Melhor Pacote de Receitas</span></p>
                    <p><br/>
                    Através de grupos do Facebook, Maria conheceu o Arts em Amigurumi e no mesmo instante teve a certeza de que sua vida ia mudar!!!</p>
                    <p>
                    Eram mais de 5000 receitas ensinando a fazer Amigurumis de forma ORIGINAL e sem copias da internet. E o melhor, com vídeo aulas e não apenas um passo a passo escrito.<br/>
                    Era um material completo e perfeito para o que ela queria!</p>
                    <p>
                    Naquele mesmo dia, voltou a escola e conversou com as mães dos amiguinhos do filho. Aceitou as 5 encomendas e já tirou R$576,00 em APENAS uma semana! </p><p>
                    Era mais da metade do seu salário!</p>
                    <p>
                    Ela continuou com a produção e os pedidos não paravam de cair, até que 2 meses depois, ela já estava fazendo mais de R$3000,00 por mês. E só não fazia mais, pois ainda estava de aviso prévio no emprego, mas logo poderia!</p>
                    <p>
                    Assim como Maria, você também pode ter uma renda extra ou tornar a principal, vendendo Amigurumis com o melhor curso da internet!<br/>
                    A Academia de Crochê é para:</p>
                    <p><br/>
                    •	Quem não sabe fazer crochê, nunca pegou em uma agulha, mas tem vontade de aprender;<br/>
                    •	Quem até sabe fazer crochê, mas não faz ideia do que é Amigurumis;<br/>
                    •	Quem está cansado de procurar e só encontrar modelos repetidos na internet;<br/>
                    •	Quem quer aprender com vídeo aulas completas e que mostram tudo;<br/>
                    •	Quem quer uma renda extra vendendo Amigurumis!</p>
                        <p><span className="fs-3 fw-bold mt-2">Aproveite, as inscrições para próxima turma estão abertas!</span> </p>
                    <p><br/>
                    </p><a href={url}>
                        <button class="btn btn-outline-success rounded fw-bold animate__animated animate__pulse animate__infinite">Inscrever no curso Arts em Amigurumi</button></a>

                    </div>
                </div>



</div>
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
