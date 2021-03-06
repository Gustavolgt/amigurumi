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
    const titulo = "Dona de casa ganha R$3.487 por m??s sem sair de casa fazendo Amigurumis";
    const subTitulo = "REVOLU????O DA RENDA EXTRA: Conhe??a os Amigurumis, t??cnica Japonesa que est?? fazendo muito sucesso na internet!";
    var hoje = new Date();
    var dias = new Array("domingo", "segunda", "ter??a", "quarta", "quinta", "sexta", "s??bado");
    var mes = new Array("janeiro", "fevereiro", "mar??o", "abril", "maio", "junho", "julho", "agosto", "setembro", "novembro", "dezembro");

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
                <title>Artes?? vira febre na pandemia com seus amigurumis</title>
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
            <By>Por Natalia Guimar??es, G1 MS</By>
            <DataPosted>27/03/2021 10h21 - Atualizado h?? 1 semana</DataPosted>
            <hr class="content__divider " />
            
            <div className="container">
                <div className="row  justify-content-center">
                    <div className="col-11">
                    
                        <Image 
                            src="/post_video.jpg"
                            width ={400}
                            height={200}
                        />
                


                    <p>Um sal??rio que n??o passava de R$900, dois filhos em fase de pr??-escola, uma casa para sustentar sozinha e abandonada pelo marido h?? pouco mais de 4 meses, essa era a realidade de Maria de F??tima de 34 anos.</p>
                    <p>
                    Ela conta que n??o chegaram a passar fome, mas que sempre tirava um pouco de comida de seu prato para garantir que os meninos, na ??poca um de 4 e o outro de 6, pudessem repetir se eles quisessem.</p>
                    <p>
                    O dinheiro n??o dava para nada, mal pagava as contas e mesmo assim, Maria investia 8 horas por dia, mais 2 horas de trajeto em ??nibus lotado para garantir o m??nimo poss??vel para eles.</p>
                    <p>
                    ??? Aquela situa????o estava insustent??vel. Eu percebia que a qualquer momento iria explodir. Quando dividia as contas com meu marido, t??nhamos uma vida melhor, mas n??o luxuosa. Eu sabia que meus pequenos dependiam de mim, se eu perdesse aquele emprego, n??o sei o que seria de n??s.??? ??? comenta com l??grimas nos olhos. </p>
                    <p>
                    A dona de casa conta que estava inconformada de levar aquela vida. J?? tinha aceitado bem o abandono do marido depois de 9 anos de casados, mas n??o queria que seus filhos continuassem naquela vida med??ocre.</p>
                    <p>
                    ??? Na ??poca, eu era merendeira, n??o via um futuro ali onde estava. A profiss??o ?? linda e eu amava, mas iria continua ganhando o mesmo at?? me aposentar. Comecei a perceber que eu precisava me movimentar se eu quisesse dar uma vida melhor a eles. Mas eu n??o sabia fazer nada de diferente al??m de cozinhar e fazer croch??. ???</p>
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
                    Maria conta que passou madrugas em claro procurando algo para fazer que pudesse render um dinheiro a mais. Vasculhou a internet em busca de novidades e s?? via mais do mesmo.</p>
                    <p>
                    Tentou vender quentinhas aos fins de semana, brigadeiro, salgadinho de festa, mas parecia que nada ia para frente.
                    Come??ou a achar que n??o tinha cunho empreendedor, que teria que aceitar que o destino dela era ser merendeira, ganhando pouco todos os meses...</p>
                    <p>Ela n??o conseguia aceitar aquele destino..</p>
                    <p>
                    ???Estava inconformada de n??o conseguir sair do lugar. N??o podia me arriscar em buscar um novo emprego e ser demitida do meu atual. N??o podia nem faltar para fazer entrevista. Foi quando vi uma reportagem na televis??o me chamou a aten????o..??? </p>
                    <p><br/><a href={url}>
                        <button class="btn btn-outline-success rounded fw-bold animate__animated animate__pulse animate__infinite">Veja como tirar uma renda extra sem sair de casa </button></a></p>
                    <p><br/><br/>
                    <span className="fs-3 fw-bold mt-2">Descoberta de um mercado em ascens??o</span> </p>
                    <p><br/>
                    Viu um an??ncio atrav??s de redes sociais de um garoto de uns 13 anos que estava fazendo o maior sucesso na internet com seus v??deos fazendo croch??. </p>
                    <p><br/>
                    <iframe width="300" height="180" src="https://www.youtube.com/embed/L1H2YXkC3aA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></p>
                    <p><br/>
                    Novamente, a ideia do croch?? a veio a cabe??a. Ela amava fazer isso. Havia aprendido com a sua av?? quando ainda era nova e sempre fez como um hobby.</p>
                    <p><br/>
                        <span className="fs-3 fw-bold mt-2">Mas como ganhar dinheiro com croch???</span> </p>
                    <p><br/>
                    Ningu??m mais usava esse tipo de roupa. Itens para casa n??o era uma op????o boa, at?? algo curioso aconteceu!<br/>
                    Um de seus filhos voltou da escolinha com um boneco feito de croch??, dizendo que seu amigo havia emprestado, mas ele teria que devolver no dia seguinte. A quest??o ?? que ele n??o queria devolver e perguntou a ela se n??o poderia fazer um igualzinho a ele...</p>
                    <p>
                    Como ainda tinha umas linhas em casa, passou a madrugada fazendo. J?? n??o conseguia dar nada a eles, o que custava um bonequinho. Fez as pressas e n??o ficou t??o bom, mas o menino adorou.<br/>
                    Foi para escola levando ambos...</p>
                    <p><br/>
                        <span className="fs-3 fw-bold mt-2">A renda extra apareceu!!!!</span></p>
                    <p><br/>
                    Na sa??da da escola, seu filho disse que os amiguinhos tinham gostado tanto que queria que ela fizesse para eles tamb??m. Maria conta que n??o deu muito cr??dito, achava que seu filho estava exagerando...<br/>
                    S?? que para sua surpresa, ao levar o menino a escola no dia seguinte, 5 m??es de alunos a abordaram desejando encomendar Amigurumis com ela. Na hora, ela nem sabia do que estava falando e disse que n??o fazia!</p>
                    <p>
                    Chegou em casa e foi direto para internet saber do que se travava e ficou INACREDITADA! Talvez, ela estivesse diante de sua renda extra.</p>
                    <p>
                    Procurou muito na internet para entender melhor, at?? que percebeu que tudo o que ensinavam eram uma c??pia de outras coisas. Ou materiais em ingl??s que ela n??o sabia traduzir.<br/>
                    At?? chegou a comprar um curso baratinho, mas na mesma tarde cancelou. Era s?? um compilado de coisas da internet.</p><p>
                    Ela precisava aprender com qualidade, novos pontos de croch??s, receitas pr??ticas de como fazer modelos diferente, mas isso ela n??o achava!</p>
                    <p><br/>
                    </p>
                        <p><span className="fs-3 fw-bold mt-2">O Melhor Pacote de Receitas</span></p>
                    <p><br/>
                    Atrav??s de grupos do Facebook, Maria conheceu o Arts em Amigurumi e no mesmo instante teve a certeza de que sua vida ia mudar!!!</p>
                    <p>
                    Eram mais de 5000 receitas ensinando a fazer Amigurumis de forma ORIGINAL e sem copias da internet. E o melhor, com v??deo aulas e n??o apenas um passo a passo escrito.<br/>
                    Era um material completo e perfeito para o que ela queria!</p>
                    <p>
                    Naquele mesmo dia, voltou a escola e conversou com as m??es dos amiguinhos do filho. Aceitou as 5 encomendas e j?? tirou R$576,00 em APENAS uma semana! </p><p>
                    Era mais da metade do seu sal??rio!</p>
                    <p>
                    Ela continuou com a produ????o e os pedidos n??o paravam de cair, at?? que 2 meses depois, ela j?? estava fazendo mais de R$3000,00 por m??s. E s?? n??o fazia mais, pois ainda estava de aviso pr??vio no emprego, mas logo poderia!</p>
                    <p>
                    Assim como Maria, voc?? tamb??m pode ter uma renda extra ou tornar a principal, vendendo Amigurumis com o melhor curso da internet!<br/>
                    A Academia de Croch?? ?? para:</p>
                    <p><br/>
                    ???	Quem n??o sabe fazer croch??, nunca pegou em uma agulha, mas tem vontade de aprender;<br/>
                    ???	Quem at?? sabe fazer croch??, mas n??o faz ideia do que ?? Amigurumis;<br/>
                    ???	Quem est?? cansado de procurar e s?? encontrar modelos repetidos na internet;<br/>
                    ???	Quem quer aprender com v??deo aulas completas e que mostram tudo;<br/>
                    ???	Quem quer uma renda extra vendendo Amigurumis!</p>
                        <p><span className="fs-3 fw-bold mt-2">Aproveite, as inscri????es para pr??xima turma est??o abertas!</span> </p>
                    <p><br/>
                    </p><a href={url}>
                        <button class="btn btn-outline-success rounded fw-bold animate__animated animate__pulse animate__infinite">Inscrever no curso Arts em Amigurumi</button></a>

                    </div>
                </div>



</div>
            <PublicidadeFinal>
                <PublicidadeFinalText>
                    <span style={{ color: "red", fontWeight: "bold" }}>Aten????o:</span> Desconto especial para as leitoras dessa reportagem! Pre??os promocionais que chegam a 70% de desconto. Essa Promo????o EXCLUSIVA estar?? em vigor at?? o dia{" "}
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
                <p>??ltimas Not??cias</p>
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
