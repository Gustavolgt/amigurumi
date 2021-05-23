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
    const baseUrl = 'https://www.amigurumimeu.com/nvpv'
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

    if(nivel==='1'){
        oferta = '🎁 Brinde Especial para você que se cadastrou na Semana do Amigurumi, 50% de Desconto no nosso curso completo onde você aprenderá com Vídeo Aulas didaticas e mais de 5 MIL MODELOS LINDOS, todos em Português e com passo a passo detalhado.'
    }
    else if(nivel==='2'){
        oferta = '🎁 Brinde Especial para você que se cadastrou na Semana do Amigurumi, tenha acesso a mais de 5 MIL Modelos de Amigurumis em Português com passo a passo detalhado, aprenda também com nossas Vídeo Aulas e tudo isso com 50% de Desconto!'
    }
    else {
        oferta = "E para você que se cadastrou na Semana do Amigurumi, estamos te Presenteando com  🎁 50% de DESCONTO no nosso Pacote Completo com 5 MIL RECEITAS DE AMIGURUMIS EM PORTUGUÊS"
    }
    return (
        <>
        <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
            <title>Confirmado com Sucesso!</title>
        </Head>
        <main>
            <div className="d-flex justify-content-between align-items-center py-2 px-5 mb-1 border-bottom border-2 border-light">
                <p className="fs-5 text-uppercase fw-bold mt-4 text-success">sobre</p>
                <Image 
                    src="/img/input2.png"
                    width={120/4}
                    height={174/4}
                />
                <p className="fs-5 text-uppercase fw-bold mt-4 text-success">fotos</p>
            </div>
            
            <div className="bg-success text-center">
                <p className="py-4 text-white fs-1 fw-bold text-uppercase">Vaga Reservada</p>
            </div>
            
            <div className="d-flex flex-column align-items-center">
                <div className="col-11 text-center">
                    <div className={`${nome?'d-block':'d-none'}`}><p className="fs-4"><span className="text-capitalize">{nome}</span>, seu cadastro foi realizado com sucesso!</p></div>
                    <div className={`${nome?'d-none':'d-block'}`}><p className="fs-4">Seu cadastro foi realizado com sucesso!</p></div>
                    <p className="fs-5">Acompanhe as receitas que enviaremos no email: <span className="fw-bold text-warning">{email}</span>.</p>
                    <p className="fs-5 fw-bolder">{oferta}</p>
                </div>
                <div className="col-11 text-center">
                    <p className="fs-3">De <span className="text-decoration-line-through text-danger fs-1">R$147,00</span> <br/><span className="">Por apenas 9x</span><br/><span className=""><span className="fs-0 fw-bold font-monospace text-success">7</span><span className="fs-1 fw-bold text-success" style={{position:'absolute', marginTop:'25px'}}>,97</span></span><br/><span className="fs-5 fw-bolder">ou R$67,97 à vista.</span></p>
                    <p className="fs-5 bg-info py-1 text-white fw-bold">Custa Menos de R$0,02 por Receita</p>
                    <p className="fs-3 mt-5 fw-bold"><i class="fas fa-exclamation-triangle" style={{color:'#FFDF20'}}></i> ATENÇÃO <i class="fas fa-exclamation-triangle" style={{color:'#FFDF20'}}></i><br/><span className="fs-5">Promoção válida até<span className="text-danger fw-bold"> {hoje}</span></span></p>
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
                
                <a href={url}><button className="btn btn-success w-75 text-uppercase fw-bolder animate__animated animate__pulse animate__infinite rounded-fill py-3">quero meu desconto</button></a>
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