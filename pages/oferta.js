import React, { useEffect } from "react";
import styled from 'styled-components'

function Contact() {

  useEffect(() => {
    window.location.href = "https://app.monetizze.com.br/r/BJX1222284?src=zap";
  }, []);
  const Redirect = styled.div`
    display:flex;
    align-items:center;
    align-content:center;
    text-align:center;
    width:100%;
    height:100vh;

  `;
  return (
    <div className="">
      Redirecionando...
    </div>
  );
}

export default Contact;