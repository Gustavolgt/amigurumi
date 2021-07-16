import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from 'react'
import validator from 'validator'
import toastr from 'toastr'
import { useRouter } from "next/router";

const lp = () => {
    const { query } = useRouter();
    const [emailError, setEmailError] = useState('')
    const [valid, setValid] = useState(false)
    const [loading, setLoading] = useState(false);
    const [showOpt, setShowOpt] = useState(false);
    var userNivel = ''
    const src = query.src
    function Toast(type) {
        this.type = type;
        this.msg = 'Por favor preencha todos os campos.';
    }
    
    var toasts = [
        new Toast('error')
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
            "onclick": function() {window.location.href = url+"-Toastr"},
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
    }
    const emailValider = (email) => {
        var google = ["gmil","gmeil",'gmel','gemail','gail','gmal','gal','gmail']
        var microsoft = ['hotmil','hotmal','hotimal','hotimail','hotmeil','hotmei','hotmial','hotmail']
        var outlook = ['outloki','outlooke','outlok','oltlook','oulook']
        var yahoo = ['iahoo','yaho','yahoo','yahou','yahul']
        var emailbefore = email.split("@")[0]
        var emailafter = email.split("@")[1]
        const emailaftervalide = emailafter.split(".")[0]
        if(google.indexOf(emailaftervalide)){
            emailafter = "gmail.com"
        }
        else if(microsoft.indexOf(emailaftervalide)){
            emailafter = "hotmail.com"
        }
        else if(outlook.indexOf(emailaftervalide)){
            emailafter = "outlook.com"
        }
        else if(yahoo.indexOf(emailaftervalide)){
            emailafter = "yahoo.com.br"
        }
        else{
            return email
        }
        return emailbefore + '@' + emailafter
        
    }
    const registerUser = async event => {
        event.preventDefault()
        const userName = event.target.nome.value
        const userEmail2 = event.target.email.value
        if (userName==="" || userEmail2===""){
            setShowOpt(false)
            delayToasts()
        }
        else{
            const userEmail = emailValider(userEmail2)
            const fname = userName.split(" ")[0]
            const base = 'http://egoi.amigurumimeu.com/wh.php?key=47290f9daccde4c4e4acd2aa1a9f2265347fd7e5'  // link webhook lista avançada
            if (userNivel==='1'){
                base = 'http://egoi.amigurumimeu.com/wh.php?key=c140f207ffd867192eabf49a9940713ba75529fd'  // link webhook lista iniciante
            }
            else if(userNivel==='2'){
                base = 'http://egoi.amigurumimeu.com/wh.php?key=2c8304c79c9620643aa063af83e631d90b93b714' // link webhook lista intermediario
            }
            const result = await fetch(base + '&first_name='+ fname +'&email='+ userEmail ,
            {
                method: 'POST',
                mode:'no-cors'
            }
            
            )
            location.href = "/confirmado?nome=" + fname + '&email=' + userEmail + '&nivel=' + userNivel + '&src=' + src + '&fullname=' + userName

        }
        
  }
  const dataHoje = () => {
    var hoje = new Date();
    var dd = String(hoje.getDate()).padStart(2, '0');
    var mm = String(hoje.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = hoje.getFullYear();

    var hoje = dd + '/' + mm + '/' + yyyy;
    return hoje
}
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
    setEmailError('')
    setValid
    } else {
    setEmailError('Digite um email válido')
    }
}

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Arts de Amigurumi</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>
            <main>
                <div className="has-text-centered mt-4">
                    <Image src="/img/input.png" width={552 / 3} height={174 / 3} alt="logo arts de amigurumi." className="" />
                </div>
                <div className={showOpt?'is-hidden':'is-block'}>
                    <div className="CTA has-text-centered mt-5">
                        <p className="is-size-1 is-size-4-mobile">Aprenda como fazer</p>
                        <p className="is-orange is-size-3-mobile">Amigurumis do Zero</p>
                        <p className="has-background-roxo is-size-2 is-size-4-mobile has-text-white">Gratuitamente e no conforto de sua Casa</p>
                        <p className="is-size-1 has-text-weight-bold has-text-black is-size-4-mobile mt-1">Ainda HOJE <span className="is-size-4 is-roxo2">({dataHoje()})</span></p>

                        <p className="is-size-4 is-size-6-mobile mt-2">
                            Tenha uma nova profissão, com praticidade <br />e podendo ganhar dinheiro sem perder o o conforto.
                            <br /> <span className="has-text-weight-bold"> Para começar insira seus dados abaixo.</span>
                        </p>
                    </div>
                    </div>
                        <div className="columns is-mobile">
                            <div className="column is-10 is-offset-1">
                                <form className="mt-6 has-text-centered" onSubmit={registerUser}>
                                  <div className={showOpt?'is-hidden':'is-block'}>
                                  <div className="field">
                                        <label className="label">Nome</label>
                                        <div className="control has-icons-left has-icons-right">
                                            <input className="input" type="text" placeholder="Seu nome" name="nome"/>
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-user"></i>
                                            </span>
                                            
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control has-icons-left has-icons-right">
                                            <input className="input" type="email" placeholder="Seu email" name="email" onChange={(e) => validateEmail(e)}/>
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                            <span style={{fontWeight: 'bold',color: 'red',}}>{emailError}</span>
                                            
                                        </div>
                                    </div>
                                        <div className="botao-confirmado btn-roxo mt-5" onClick={setShowOpt}>
                                            Começar Aula Grátis
                                        </div>
                                    </div>
                                    <div className={ showOpt?'is-block':'is-hidden'}>

                                        <div className="columns is-mobile is-centered text-center">
                                        <div className="column is-10 is-flex is-flex-direction-column has-text-centered">
                                            <p className="mt-5 p-5 is-size-5 is-orange-mobile has-text-weight-bold">Para continuar, por favor selecione abaixo seu nível de conhecimento.</p>
                                            <button className="botao-confirmado btn-roxo mt-5" type="submit" onClick={() => {userNivel = '1'}}>
                                                Iniciante
                                            </button>
                                            <button className="botao-confirmado btn-roxo mt-5" type="submit" onClick={() => {userNivel = '2'}}>
                                                Intermediario
                                            </button>
                                            <button className="botao-confirmado btn-roxo mt-5"  type="submit" onClick={() => {userNivel = '3'}}>
                                                Avançado
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>                
            </main>
        </>
    );
};

export default lp;
