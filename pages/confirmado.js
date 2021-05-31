import Head from 'next/head'
import Image from 'next/image'
import toastr from 'toastr'
import { useEffect } from 'react';
import { useRouter } from "next/router";


const confirmado = () => {
    
    var oferta = ''
    const { query } = useRouter();
    const src = query.src
    const userEmail = query.userEmail
    const userNivel = query.userNivel
    const userName = query.userName
    const baseUrl = 'https://app.monetizze.com.br/r/BWS1267812'
    const url = baseUrl +"?src="+ src + '&email=' + userEmail + '&nivel=' + userNivel + '&nome=' + userName

    function Toast(type, msg, msg2, tempo) {
        this.type = type;
        this.msg =  msg + ' acabou de comprar no ' + msg2;
    }
    var toasts = [
        new Toast('success', 'Teresa D.', 'cartão', '51'),
        new Toast('info', 'Fernanda S.', 'boleto', '45'),
        new Toast('success', 'Cris L.', 'cartão', '42'),
        new Toast('success', 'Fernanda E.', 'cartão', '34'),
        new Toast('info', 'Elidiane S.', 'boleto', '29'),
        new Toast('success', 'Margaret O.', 'cartão', '27'),
        new Toast('info', 'Adriane A.', 'boleto', '25'),
        new Toast('success', 'Nathália B.', 'cartão', '26'),
        new Toast('success', 'Ienir B.', 'cartão', '23'),
        new Toast('success', 'Karina S.', 'cartão', '18'),
        new Toast('info', 'Jéssica S.', 'boleto', '12'),
        new Toast('success', 'Iêda A.', 'cartão', '10'),
        new Toast('success', 'Valéria C.', 'cartão', '7'),
        new Toast('success', 'Dayane F.', 'cartão', '4'),
        new Toast('info', 'Aline C.', 'boleto', '1'),
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
        delayToasts()
        
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
    const nome = query.nome
    const email = query.email
    const nivel = query.nivel
    const utm_source = query.utm_source
    const utm_medium = query.utm_medium
    const utm_content = query.utm_content
    const utm_term = query.utm_term
    const utm_campaign = query.utm_campaign

    const opt1 = [
        "Fature muito mais com nossos modelos raros de Amigurumis, os mais procurados do momento.",
        "Deixe o amigurumi mudar sua vida, você se sentirá melhor do que nunca.",
        "Faça qualquer amigurumi que quiser, crie suas receitas e use nossa base de 5mil modelos.",
        "Passe aquele tempo sozinha e ainda fature com sua arte."
    ]
    const opt2 = [
        "Nossas Vídeo Aulas irão te ensinar a fazer amigurumi do absoluto zero, mesmo se nunca tiver pego em uma agulha.",
        "Faça amigurumis detalhados em pouco tempo com video aulas e receitas detalhadas.",
        "Lucre muito mais com amigurumis raros e bem trabalhados com receitas explicativas em português",
        "São mais de 5mil modelos selecionados pelos mais pedidos do ano, é uma loucura."

    ]
    const opt3 = [
        "São lindas bonecas e bonecos com roupas e acessorios, modelos de todos tamanhos e que agradam a todos",
        "Lindos cachorros, gatos, ursos e muitos outros animais de todos os lugares do mundo",
        "Lembra aquele filme ou desenho da infância? Que tal fazer essa receita?",
        "Uma imensidão de receitas que irão lhe fazer apaixonar mais a cada olhar"
]
    
    console.log(opt3)
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
            <title>Confirmado com Sucesso!</title>
        </Head>
        <main>
            <div className="d-flex justify-content-center align-items-center py-2 px-5 mb-1 border-bottom border-2 border-light">
                
                <Image 
                    src="/img/input.png"
                    width={552/4}
                    height={174/4}
                />
                
            </div>
            
            <div className="bg-success text-center">
                <p className="py-4 text-white fs-1 fw-bold text-uppercase">Vaga Reservada</p>
            </div>
            
            <div className="d-flex flex-column align-items-center">
                <div className="col-11 text-center">
                    <div className={`${nome?'d-block':'d-none'}`}><p className="fs-4"><span className="text-capitalize">{nome}</span>, seu cadastro foi realizado com sucesso!</p></div>
                    <div className={`${nome?'d-none':'d-block'}`}><p className="fs-4">Seu cadastro foi realizado com sucesso!</p></div>
                    <p className="fs-5">Acompanhe as receitas que enviaremos no email: <span className="fw-bold text-warning">{email}</span>.</p>
                    <hr className="w-50"/>
                    <p className="fs-5 fw-bolder">🎁 Brinde Especial para você que se cadastrou na Semana do Amigurumi</p>
                    <p className="fs-5 fw-bolder bg-info px-1 text-white">{opt1[utm_campaign]}</p>
                    <p className="fs-5 fw-bolder text-success">{opt2[utm_medium]}</p>
                    <p className="fs-5 fw-bolder">{opt3[utm_campaign]}</p>
                    <p className="fs-5 fw-bolder">São mais de 5 mil Modelos em Português com passo a passo detalhado, Vídeo Aulas e tudo isso com 50% de Desconto!'</p>
                    
                </div>
                <div className="col-11 text-center">
                    <p className="fs-3">De <span className="text-decoration-line-through text-danger fs-1">R$147,00</span> <br/><span className="">Por apenas 9x</span><br/><span className=""><span className="fs-0 fw-bold font-monospace text-success">7</span><span className="fs-1 fw-bold text-success" style={{position:'absolute', marginTop:'25px'}}>,97</span></span><br/><span className="fs-5 fw-bolder">ou R$67,97 à vista.</span></p>
                    <p className="fs-5 bg-info py-1 text-white fw-bold">Custa Menos de R$0,02 por Receita</p>
                    <a href={url}><button className="btn btn-outline-success text-uppercase fw-bolder animate__animated animate__pulse animate__infinite rounded-fill">quero meu desconto</button></a>
                    <p className="fs-3 mt-5 fw-bold"><i className="fas fa-exclamation-triangle" style={{color:'#FFDF20'}}></i> ATENÇÃO <i className="fas fa-exclamation-triangle" style={{color:'#FFDF20'}}></i><br/><span className="fs-5">Promoção válida até<span className="text-danger fw-bold"> {hoje}</span></span></p>
                </div>
            </div>
            
            <div className="d-flex flex-column align-items-center">
            <Image
                    src="/fotobanner.png"
                    width={800}
                    height={800}   
                />
            <Image
                    src="/setas.webp"
                    width={500}
                    height={171}     
                    
                />
                
                <a href={url}><button className="btn btn-success text-uppercase fw-bolder animate__animated animate__pulse animate__infinite rounded-fill">quero meu desconto</button></a>
            </div>
            <br/><br/><br/>
            <div className="mt-5 d-flex justify-content-between px-5 py-2 bg-dark text-white">
            <p className="#">Politica de Privacidade</p>
                <p className="#">Termos de Uso</p>
            </div>
            
        </main>
        </>
    );
}

export default confirmado;