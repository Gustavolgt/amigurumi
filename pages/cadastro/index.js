import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import validator from "validator";
import toastr from "toastr";
import { useRouter } from "next/router";

const lp = () => {
    const questions = [
		{
			questionText: 'O que você busca?',
			answerOptions: [
				{ answerText: 'Faturar vendendo amigurumis', idkey: 0},
				{ answerText: 'Fazer como terapia e saúde mental', idkey: 1},
				{ answerText: 'Aperfeiçoar na arte dos Amigurumis', idkey: 2},
				{ answerText: 'Um hobby para passar o tempo', idkey: 3},
			],
		},
		{
			questionText: 'Qual a sua afinidade com essas fofuras?',
			answerOptions: [
				{ answerText: 'Vai ser meu primeiro Amigurumi', idkey: 0},
				{ answerText: 'Já fiz alguns mais simples', idkey: 1},
				{ answerText: 'Já fiz alguns e já vendi, quero aperfeiçoar', idkey: 2},
				{ answerText: 'Já faço e vendo, quero mais modelos', idkey: 3},
			],
		},
		{
			questionText: 'Quais modelos você gosta mais',
			answerOptions: [
				{ answerText: 'Boneca', idkey: 0},
				{ answerText: 'Animais', idkey: 1},
				{ answerText: 'Desenhos e filme', idkey: 2},
				{ answerText: 'Outro', idkey: 3},
			],
		},
        {
			questionText: 'Conte-nos um pouco sobre você',
			answerOptions: [
				{ answerText: 'Tenho de 18 a 30 anos', idkey: 0},
				{ answerText: 'Tenho de 30 a 40 anos', idkey: 1},
				{ answerText: 'Tenho de 40 a 50 anos', idkey: 2},
				{ answerText: 'Tenho mais de 50 anos', idkey: 3},
			],
		},
	];
    
	const [currentQuestion, setCurrentQuestion] = useState(0);
    const [respostas, setRespostas] = useState([])
    const { query } = useRouter();
    const [emailError, setEmailError] = useState("");
    const [valid, setValid] = useState(false);


    var [loading, setLoading] = useState(false);
    const [showOpt, setShowOpt] = useState(false);
    const src = query.src;
    var utm_source = query.utm_source;
    var utm_medium = query.utm_medium;
    var utm_campaign = query.utm_campaign;
    var utm_term = query.utm_term;
    var utm_content = query.utm_content;
    const handleAnswerOptionClick = (texto) => {
        setRespostas(respostas => [...respostas, texto])
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
        }
        else{
            setShowOpt(true)
        }
	};
    
    function Toast(type) {
        this.type = type;
        this.msg = "Por favor preencha todos os campos.";
    }

    var toasts = [new Toast("error")];

    var i = 0;

    function delayToasts() {
        if (i === toasts.length) {
            return;
        }
        var delay = i === 0 ? 0 : 13000;
        window.setTimeout(function () {
            showToast();
        }, delay);

        // re-enable the button
        if (i === toasts.length - 1) {
            window.setTimeout(function () {
                i = 0;
            }, delay + 1000);
        }
    }
    function showToast() {
        var t = toasts[i];
        toastr.options = {
            closeButton: true,
            debug: false,
            newestOnTop: true,
            progressBar: true,
            positionClass: "toast-bottom-left",
            preventDuplicates: true,
            onclick: function () {
                window.location.href = url + "-Toastr";
            },
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
        };
        toastr[t.type](t.msg);
        i++;
    }
    const emailValider = (email) => {
        var google = ["gmil", "gmeil", "gmel", "gemail", "gail", "gmal", "gal", "gmail","gamail"];
        var microsoft = ["hotmil", "hotmal", "hotimal", "hotimail", "hotmeil", "hotmei", "hotmial", "hotmail"];
        var outlook = ["outloki", "outlooke", "outlok", "oltlook", "oulook"];
        var yahoo = ["iahoo", "yaho", "yahoo", "yahou", "yahul"];
        var emailbefore = email.split("@")[0];
        var emailafter = email.split("@")[1];
        const emailaftervalide = emailafter.split(".")[0];
        if (google.indexOf(emailaftervalide)) {
            emailafter = "gmail.com";
        } else if (microsoft.indexOf(emailaftervalide)) {
            emailafter = "hotmail.com";
        } else if (outlook.indexOf(emailaftervalide)) {
            emailafter = "outlook.com";
        } else if (yahoo.indexOf(emailaftervalide)) {
            emailafter = "yahoo.com.br";
        } else {
            return email;
        }
        return emailbefore + "@" + emailafter;
    };
    const registerUser = async (event) => {
        setLoading(true)
        event.preventDefault();
        const userName = event.target.nome.value;
        const userEmail2 = event.target.email.value;
        utm_source = respostas[0]
        utm_medium = respostas[1]
        utm_campaign = respostas[2]
        utm_term = respostas[3]
        if (userName === "" || userEmail2 === "") {
            delayToasts();
        } else {
            var base = "https://egoi.amigurumimeu.com/wh.php?key=47290f9daccde4c4e4acd2aa1a9f2265347fd7e5"; // link webhook lista avançada
            var userNivel = "3";
            var listId = "13";
            if(utm_medium===0){
                userNivel="1"
                base = "https://egoi.amigurumimeu.com/wh.php?key=c140f207ffd867192eabf49a9940713ba75529fd";
                listId="11"
            }
            else if(utm_medium===1){
                userNivel="2"
                base = "https://egoi.amigurumimeu.com/wh.php?key=2c8304c79c9620643aa063af83e631d90b93b714"; 
                listId="12"
            }
            const userEmail = emailValider(userEmail2);
            const fname = userName.split(" ")[0];
            const result = await fetch(base + "&first_name=" + fname + "&email=" + userEmail, {
                method: "POST",
                mode: "no-cors",
            });
            location.href = "/confirmado?nome=" + fname + '&email=' + userEmail + '&nivel=' + userNivel + '&src=' + src + '&fullname=' + userName + '&utm_source=' + utm_source + '&utm_medium=' + utm_medium + '&utm_campaign=' + utm_campaign + '&utm_term=' + utm_term
        }
    };
    const dataHoje = () => {
        var hoje = new Date();
        var dd = String(hoje.getDate()).padStart(2, "0");
        var mm = String(hoje.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = hoje.getFullYear();

        var hoje = dd + "/" + mm + "/" + yyyy;
        return hoje;
    };
    const validateEmail = (e) => {
        var email = e.target.value;

        if (validator.isEmail(email)) {
            setEmailError("");
            setValid;
        } else {
            setEmailError("Digite um email válido");
        }
    };

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Arts de Amigurumi</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
            <main>
                <div className="has-text-centered mt-4">
                    <Image src="/img/input.png" width={552 / 3} height={174 / 3} alt="logo arts de amigurumi." className="" />
                </div>
                <div className={!showOpt ? "is-hidden" : "is-block"}>
                    <div className="CTA has-text-centered mt-5">
                        <p className="is-size-1 is-size-4-mobile">Aprenda como fazer</p>
                        <p className="is-orange is-size-3-mobile">Amigurumis do Zero</p>
                        <p className="has-background-roxo is-size-2 is-size-4-mobile has-text-white">Gratuitamente e no conforto de sua Casa</p>
                        <p className="is-size-1 has-text-weight-bold has-text-black is-size-4-mobile mt-1">
                            Ainda HOJE <span className="is-size-4 is-roxo2">({dataHoje()})</span>
                        </p>

                        <p className="is-size-4 is-size-6-mobile mt-2">
                            Tenha uma nova profissão, com praticidade <br />e podendo ganhar dinheiro sem perder o conforto.
                            <br /> <span className="has-text-weight-bold"> Para finalizar insira seus dados abaixo.</span>
                        </p>
                    </div>
                </div>
                <div className="columns is-mobile">
                    <div className="column is-10 is-offset-1">
                        <form className="mt-6 has-text-centered" id="formulario" onSubmit={registerUser}>
                            <div className={!showOpt ? "is-hidden" : "is-block"}>
                                <div className="field">
                                    <label className="label">Nome</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" type="text" id="nome" placeholder="Seu nome" name="nome" />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" id="email" type="email" placeholder="Seu email" name="email" onChange={(e) => validateEmail(e)} />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        <span style={{ fontWeight: "bold", color: "red" }}>{emailError}</span>
                                    </div>
                                </div>
                                <button className="botao-confirmado btn-roxo mt-5" type="submit">
                                    
                                    { loading && <i className="fas fa-spinner fa-spin"> </i> }
                                        { !loading && <span> Começar Aula Grátis</span> }
                                        { loading && <span> Aguarde ...</span> }
                                </button>
                            </div>
                            <div className={!showOpt ? "is-block" : "is-hidden"}>
                                <p className="is-size-6">Ajude-nos a escolher a melhor aula para você respondendo a 4 perguntas rápidas abaixo.</p>
                                <div className="columns is-mobile is-centered text-center mt-2">
                                    <div className="column is-12 is-flex is-flex-direction-column has-text-centered">
                                        
                                    <div className='question-section'>
                                        <div className='question-count'>
                                        <progress className="progress is-success mb-2" value={currentQuestion} max={questions.length} />
                                            
                                        </div>
                                        <div className='is-size-4 has-text-success has-text-weight-bold'>{questions[currentQuestion].questionText}</div>
                                    </div>
                                    <div className='answer-section'>
                                        {questions[currentQuestion].answerOptions.map((answerOption, key) => (
                                            <button className="botao-confirmado2 btn-roxo has-text-weight-bold mt-5"  key={key} type="button" onClick={() => handleAnswerOptionClick(answerOption.idkey)}>{answerOption.answerText}</button>
                                        ))}
                                    </div>
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
