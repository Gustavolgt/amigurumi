import Link from "next/link";
import Head from "next/head";
import Cards from "react-credit-cards";
import Payment from "payment";
import InputMask from "react-input-mask";
import { useState } from "react";
import Image from "next/image";
import toastr from 'toastr'
import { cpf } from 'cpf-cnpj-validator'; 

const transparente = () => {
    const [loading, setLoading] = useState(false)
    const [modalTab, setModalTab] = useState(0);
    const [meio, setMeio] = useState("");
    const parcelamentos = ["1_34.97", "2_18.27", "3_12.36", "4_9.41"];
    const [parcelamento, setParcelamento] = useState(parcelamentos[0]);
    const orderBump = ""; //0ff9840208608d6a2e5f60930ac9593d
    const [inputNumber, setInputNumber] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputExpiry, setInputExpiry] = useState("");
    const [inputCVC, setInputCVC] = useState("");
    const [inputCpf, setInputCpf] = useState("");
    const [inputFocused, setInputFocused] = useState("");
    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formCel, setFormCel] = useState("");
    const [boleto, setBoleto] = useState(false);
    const [showError, setShowError] = useState(false);
    const [cc, setCC] = useState("");
    const [errorMsg, setErrorMsg] = useState('Por favor preencha todos os campos')
    const [bandCartao, setBandCartao] = useState('')
    const emailValidator = (email) => {
        var google = ["gmil", "gmeil", "gmel", "gemail", "gail", "gmal", "gal", "gmail","gamail","g.mail","gma.il"];
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
    const EfetuarCompra = async () => {
        event.preventDefault();
        setLoading(true)
        if (meio === "pix") {
            setCC("7ff9c1d82934c68a1ccf9b03f790dce8");
        }
        //cartão
        else if (meio === "monetizze") {
            setBandCartao(Payment.fns.cardType(inputNumber))
            setCC("36d01e438bf1dd487a9225378223920c");
        }
        else {
            setBoleto(true);
            setCC("8c4ac09a5aabeca5b2561a2ad223e7d1");
        }
        if(cpf.isValid(inputCpf)){

        
        const res = await fetch("https://app.monetizze.com.br/checkout/salvarPedido", {
            body: `referencia=CRG111444&cc=8c4ac09a5aabeca5b2561a2ad223e7d1&formato_produto=2&cupomValidado=&is_ecommerce=&pessoa=1&nome=${formName}&email=${emailValidator(formEmail)}&pais=BR&endereco_estrangeiro=&telefone=${formCel}&cnpj_cpf=${inputCpf}&data_nascimento=&cep=&endereco=&numero=&complemento=&bairro=&cidade=&estado=&CreditCardNumber=${inputNumber}&NameOnCard=${inputName}&ExpiryDate_month=${inputExpiry.split("/")[0]}&ExpiryDate_year=${inputExpiry.split("/")[1]}&SecurityCode=${inputCVC}&CaixaVirtualDebitCardNumber=&CaixaVirtualDebitNameOnCard=&CaixaVirtualDebitExpiryDate_month=10&CaixaVirtualDebitExpiryDate_year=2021&CaixaVirtualDebitSecurityCode=&cnpj_cpf_pix=${inputCpf}&cnpj_cpf_boleto=${inputCpf}&email_monetizze=&password=&frete_valor=0&frete_vaf=0&frete_des=&frete_slt=&frete_cot=0&quantidade=1&parcelamento=${parcelamentos[parcelamento]}&meio=${meio}&boleto=${boleto}&bandCartao=${bandCartao}&bandCartao2=&usandoDoisC=false&recaptcha=undefined&cnpj_cpf_pix=${inputCpf}&tc=0`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            method: "POST",
        });

        const result = await res.text();
        if (result.indexOf('status":0') > -1){
            var errorMsg = result.split('msg":')[1]
            if(errorMsg.indexOf('data de validade') > -1){
                errorMsg = 'Cartão Expirado, favor conferir a data de validade'
            }
            toastr.error(errorMsg)
            
            setLoading(false)
        }
        else{
        var redUrl = result.split("c=")[1];
        redUrl = redUrl.split('"}')[0];
        redUrl = `https://obrigado.monetizze.com.br/?c=${redUrl}`;
        console.log(redUrl);
        window.location.replace(redUrl);
    }}else{
        toastr.error('CPF inválido!')
        setLoading(false)
    }
    };

    
    const parcelamentocheck = (e) => {
        e.preventDefault();
        var valor = e.target.value;
        setParcelamento(valor);
        
    };
    const handlePaymentType = (paymentType) => {
        setMeio(paymentType);
    };
    const handleChange = async (e, pos) => {
        if (pos === 0) {
            setInputNumber(e.target.value);
        } else if (pos === 1) {
            setInputName(e.target.value);
        } else if (pos === 2) {
            setInputExpiry(e.target.value);
        } else if (pos === 3) {
            setInputCVC(e.target.value);
        } else if (pos === 4) {
            setInputFocused(e.target.value);
        } else if (pos === 5) {
            setFormName(e.target.value);
        } else if (pos === 6) {
            setFormEmail(e.target.value);
        } else if (pos === 7) {
            setFormCel(e.target.value);
        } else {
            setInputCpf(e.target.value);
        }
    };
    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossOrigin="anonymous" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                    crossOrigin="anonymous"
                />
            </Head>
           
            <div className="d-flex flex-column align-items-center " style={{ minWidth: "100%" }}>
                <div className="d-flex flex-column align-items-center justify-content-center col-12">
                    <div className="col-12 text-center">
                        <div className="" style={{ background: "#a3ebff", transition: "300s" }}>
                            {modalTab === 0 ? <Image src="/checkout.png" width={587 / 4} height={587 / 4} /> : <Image src="/checkout.png" width={587 / 6} height={587 / 6} />}

                            <div className="custom-shape-divider-bottom-1625695409">
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path
                                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                        className="shape-fill"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className="col-10 offset-1 mt-4" style={{ display: modalTab === 0 ? "block" : "none" }}>
                            <p className="fs-6 text-secondary fw-bold text-uppercase">Preencha os dados abaixo</p>
                            <div className="text-start">
                                <div className="form-group mt-1">
                                    <label htmlFor="nome">NOME</label>
                                    <input className="form-control" placeholder="Nome Completo" onChange={(event) => handleChange(event, 5)} value={formName} />
                                </div>
                                <div className="form-group mt-1">
                                    <label htmlFor="nome">EMAIL</label>
                                    <input className="form-control" placeholder="E-mail" onChange={(event) => handleChange(event, 6)} />
                                </div>
                                <div className="form-group mt-1">
                                    <label htmlFor="nome">CELULAR</label>
                                    <div className="input-group">
                                        <InputMask className="form-control" mask="+5\5 99 9 9999 9999" name="phone" type="text" placeholder="00 00000-0000" onChange={(event) => handleChange(event, 7)} required />
                                    </div>
                                </div>
                            </div>
                            <p className="text-danger fw-bold mt-2" style={{ display: showError ? "block" : "none" }}>
                                {errorMsg}
                            </p>
                            <div className="text-center mt-3">
                                <button
                                    className="btn btn-outline-info text-uppercase  py-1 px-4"
                                    onClick={() => {
                                        if (formName === "" || formCel === "" || formEmail === "") {
                                            setErrorMsg('Por favor preencha todos os campos.')
                                            setShowError(true);
                                        } 
                                        else if(formName.length < 10){
                                            setErrorMsg('Por favor preencha o nome completo.')
                                            setShowError(true);
                                        }
                                        else {
                                            setShowError(false);
                                            setModalTab(1);
                                        }
                                    }}
                                >
                                    {" "}
                                    Continuar{" "}
                                </button>
                            </div>
                        </div>

                        <div className="col-10 offset-1 mt-4" style={{ display: modalTab === 1 ? "block" : "none" }}>
                            <p className="fs-6 text-secondary fw-bold text-uppercase">Escolha a opção de pagamento</p>
                            <div className="d-flex flex-column align-items-center">
                                <div
                                    onClick={() => {
                                        setMeio("pix");
                                        setModalTab(2);
                                    }}
                                    className="btn btn-outline-secondary text-start w-75 mt-2 border-2 py-2"
                                    style={{ color: "##8a8a8a", borderColor: "##8a8a8a" }}
                                >
                                    <svg viewBox="0 0 512 512" width="16px" xmlns="http://www.w3.org/2000/svg">
                                        <defs />
                                        <g fill="##8a8a8a" fillRule="evenodd">
                                            <path d="M393.072 391.897c-20.082 0-38.969-7.81-53.176-22.02l-77.069-77.067c-5.375-5.375-14.773-5.395-20.17 0l-76.784 76.786c-14.209 14.207-33.095 22.019-53.179 22.019h-9.247l97.521 97.52c30.375 30.375 79.614 30.375 109.988 0l97.239-97.238h-15.123zm-105.049 74.327c-8.55 8.53-19.93 13.25-32.05 13.25h-.02c-12.12 0-23.522-4.721-32.05-13.25l-56.855-56.855c7.875-4.613 15.165-10.248 21.758-16.84l63.948-63.948 64.23 64.23c7.637 7.66 16.188 14.013 25.478 18.952l-54.439 54.46zM310.958 22.78c-30.374-30.374-79.613-30.374-109.988 0l-97.52 97.52h9.247c20.082 0 38.97 7.834 53.178 22.02l76.784 76.785c5.57 5.592 14.622 5.57 20.17 0l77.069-77.068c14.207-14.187 33.094-22.02 53.176-22.02h15.123l-97.239-97.237zm6.028 96.346l-64.23 64.23-63.97-63.97c-6.593-6.592-13.86-12.206-21.736-16.818l56.853-56.877c17.69-17.645 46.476-17.668 64.121 0l54.44 54.461c-9.292 4.961-17.842 11.315-25.479 18.974h.001z" />
                                            <path d="M489.149 200.97l-58.379-58.377h-37.706c-13.838 0-27.394 5.635-37.185 15.426l-77.068 77.069c-7.202 7.18-16.623 10.77-26.067 10.77-9.443 0-18.885-3.59-26.066-10.77l-76.785-76.785c-9.792-9.814-23.346-15.427-37.207-15.427h-31.81L22.78 200.97c-30.374 30.375-30.374 79.614 0 109.988l58.095 58.074 31.81.021c13.86 0 27.416-5.635 37.208-15.426l76.784-76.764c13.925-13.947 38.208-13.924 52.133-.02l77.068 77.066c9.791 9.792 23.346 15.405 37.185 15.405h37.706l58.379-58.356c30.374-30.374 30.374-79.613 0-109.988zm-362.19 129.724c-3.763 3.786-8.942 5.917-14.273 5.917H94.302l-48.59-48.564c-17.689-17.69-17.689-46.476 0-64.143L94.3 175.296h18.385c5.331 0 10.51 2.154 14.295 5.918l74.74 74.74-74.761 74.74zm339.257-42.647l-48.848 48.87h-24.305c-5.309 0-10.508-2.155-14.251-5.92l-75.023-75.043 75.023-75.023c3.743-3.764 8.942-5.918 14.252-5.918h24.304l48.847 48.891c8.573 8.551 13.273 19.93 13.273 32.05 0 12.141-4.7 23.52-13.273 32.093z" />
                                        </g>
                                    </svg>
                                    <span className="ml-4 fw-semibold" style={{ color: "##8a8a8a" }}>
                                        {" "}
                                        Pix
                                    </span>
                                </div>

                                <div
                                    onClick={() => {
                                        setMeio("monetizze");
                                        setModalTab(3);
                                    }}
                                    className="btn btn-outline-secondary text-start w-75 mt-2 border-2 py-2"
                                    style={{ color: "##8a8a8a", borderColor: "##8a8a8a" }}
                                >
                                    <i className="fas fa-credit-card">
                                        <span className="ml-4"> Cartão</span>
                                    </i>
                                </div>

                                <div
                                    onClick={() => {
                                        setMeio("monetizze_boleto");
                                        setModalTab(2);
                                    }}
                                    className="btn btn-outline-secondary text-start w-75 mt-2 border-2 py-2"
                                    style={{ color: "##8a8a8a", borderColor: "##8a8a8a" }}
                                >
                                    <i className="fas fa-barcode">
                                        <span className="ml-4"> Boleto</span>
                                    </i>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 offset-1 mt-4" style={{ display: modalTab === 2 ? "block" : "none" }}>
                            <p className="fs-6 text-secondary fw-bold text-uppercase">Por favor preencha o seu CPF/CNPJ</p>
                            <div className="form-group mt-2 text-start">
                                <label htmlFor="nome">CPF/CNPJ</label>
                                <InputMask mask="999.999.999-99" className="form-control" placeholder="CPF/CNPJ" onChange={(event)=>setInputCpf(event.target.value)}/>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-outline-danger text-uppercase mt-4 py-1 px-4" onClick={() => setModalTab(0)}>
                                    {" "}
                                    Voltar{" "}
                                </button>
                                <button className={`btn btn-success text-uppercase mt-4 py-1 px-4 ${loading?'w-50':''}`} onClick={() =>EfetuarCompra()} > {loading?(<i class="fas fa-spinner fa-spin"></i>):'Finalizar'} </button>
                            </div>
                        </div>
                        <div className="col-12 mt-4" style={{ display: modalTab === 3 ? "block" : "none" }}>
                            <div className="">
                                <Cards number={inputNumber} name={inputName} expiry={inputExpiry} cvc={inputCVC} focused={inputFocused} />
                                <div className="col-10 offset-1 mt-3">
                                    <div className="form-grou text-start text-uppercase mt-2">
                                        <label htmlFor="nome">número do cartão</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="far fa-credit-card"></i>
                                                </div>
                                            </div>
                                            <InputMask mask="9999 9999 9999 9999" className="form-control2 w-75" placeholder="Apenas os números" onChange={(event) => handleChange(event, 0)} />
                                        </div>
                                    </div>
                                    <div className="form-group text-start text-uppercase mt-2">
                                        <label htmlFor="nome">nome do titular</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="far fa-user"></i>
                                                </div>
                                            </div>
                                            <InputMask placeholder="Digite o nome completo impresso" className="form-control2 w-75" maxLength="30" onChange={(event) => handleChange(event, 1)} />
                                        </div>
                                    </div>
                                    <div className="form-group text-start text-uppercase mt-2">
                                        <label htmlFor="nome">data de validade</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-calendar-week"></i>
                                                </div>
                                            </div>

                                            <InputMask mask="99/99" className="w-75 form-control2" placeholder="Mês / Ano" onChange={(event) => handleChange(event, 2)} />
                                        </div>
                                    </div>
                                    <div className="form-group text-start text-uppercase mt-2">
                                        <label htmlFor="nome">CPF do titular</label>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-id-card"></i>
                                                </div>
                                            </div>

                                            <InputMask mask="999.999.999-99" className="form-control2 w-75" placeholder="CPF/CNPJ" onChange={(event)=>setInputCpf(event.target.value)} />
                                        </div>
                                    </div>

                                    <div className="form-group text-start text-uppercase mt-2">
                                        <label htmlFor="nome">CVC</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-lock text-dark"></i>
                                                </div>
                                            </div>
                                            <InputMask mask="999" className="form-control2 w-75" placeholder="CVC" onChange={(event) => handleChange(event, 3)} />
                                        </div>
                                    </div>
                                    <div className="form-group text-start text-uppercase mt-2">
                                        <label htmlFor="nome">Parcelamento do cartão</label>
                                        <select className="form-control2 w-100" onChange={(event) => parcelamentocheck(event)}>
                                            <option value="0">1x de R$ 34,97</option>
                                            <option value="1">2x de R$ 18,27</option>
                                            <option value="2">3x de R$ 12,36</option>
                                            <option value="3">4x de R$ 9,41</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between px-4">
                                <button className="btn btn-outline-danger text-uppercase mt-4 py-1 px-4" onClick={() => setModalTab(0)}>
                                    {" "}
                                    Voltar{" "}
                                </button>
                                <button className={`btn btn-success text-uppercase mt-4 py-1 px-4 ${loading?'w-50':''}`} onClick={() =>EfetuarCompra()} > {loading?(<i class="fas fa-spinner fa-spin"></i>):'Finalizar'} </button>
                            </div>
                        </div>
                    </div>

                    <div className=" col-12 text-success fs-5 text-center">
                        <hr className="w-75 my-3" />
                        <Image src="/compra-segura.png" width={360 / 1.6} height={55 / 1.6} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default transparente;
