import Head from 'next/head'
import styled from "styled-components";
import { useRouter } from 'next/router'
import YouTube from 'react-youtube';
import { isMobile } from "react-device-detect";
import Image from 'next/image'


const Post = () => {
  const { query } = useRouter()
  var src = query.src
  var vid = query.vid
  const baseUrl = "https://www.amigurumimeu.com/desconto"
  const url = baseUrl + "?src=" + src
  const titulos = {
    'BGPqVgA0XzA':'Abelinha',
    'BB1s0lGqRxY':'Polvinho',
    'hSZaj3hJDAw':'Coração',
    'Nkr_60gbvmo': 'Kekel'
  }
  const receitas = {
    'Nkr_60gbvmo':`
    <div>
    <p><strong>Materiais:&nbsp;</strong></p>
    <p>As cores de linhas é de sua preferência, foi usado: (marrom, preto e roxo metálico), coração vermelho super suave (framboesa, listra de papagaio e rosa para os&nbsp;</p>
    <p>lábios).&nbsp;</p>
    <p>Agulha de 3.5mm&nbsp;</p>
    <p>Botões, olhos de 15mm, feltro, enchimento de fibra, agulha de agulha de cerzir, marcador de ponto, cílios (opcional), cavilha de madeira&nbsp;</p>
    <p>A boneca tem entre 25 a 28 cm&nbsp;</p>
    <p>Este padrão de boneca é trabalhado nas carreiras. A cabeça é feita separada do corpo e anexada depois. Esse padrão requer muito aumento e diminuição. Por&nbsp;</p>
    <p>ste pad ão de bo eca é t aba ado as ca e as. cabeça é e ta sepa ada do co po e a e ada depo s. sse pad ão eque u to au e to e d u ção. o&nbsp;</p>
    <p>favor, esteja ciente da contagem de pontos no final de cada linha. Foto e detalhes adicionais estão localizados no final. Vamos começar a fazer a nossa querida&nbsp;</p>
    <p>Kekel!!&nbsp;</p>
    <p>6 pontos baixos no anel mágico&nbsp;</p>
    <p><strong>Carreira 1: </strong>ponto baixo, aumento [12]&nbsp;</p>
    <p><strong>Carreira 2: </strong>(ponto baixo no próximo ponto, ponto baixo aumento) [18]&nbsp;</p>
    <p><strong>Carreira 3: </strong>(ponto baixo nos próximos 2 pontos, aumento) [24]&nbsp;</p>
    <p><strong>Carreira 4: </strong>(ponto baixo nos próximos 3 pontos, aumento) [30]&nbsp;</p>
    <p><strong>Carreira 5: </strong>(ponto baixo nos próximos 4 pontos, aumento) [36]&nbsp;</p>
    <p><strong>Carreira 6</strong>: (ponto baixo nos próximos 5 pontos, aumento) [42]&nbsp;</p>
    <p><strong>Carreira 7: </strong>(ponto baixo nos próximos 6 pontos, aumento) [48]&nbsp;</p>
    <p><strong>Carreira 8</strong>: (ponto baixo nos próximos 7 pontos, aumento) [54]&nbsp;</p>
    <p><strong>Carreira 9: </strong>(ponto baixo nos próximos 8 pontos, aumento) [60]&nbsp;</p>
    <p><strong>Carreira 10-22: </strong>(ponto baixo em toda volta) [60] coloque os olhos com feltro entre a carreira 16 e 17, 6 espaços na parte.&nbsp;</p>
    <p><strong>Carreira 23</strong>: (ponto baixo nos próximos 8 pontos, diminuição) [54]&nbsp;</p>
    <p><strong>Carreira 24</strong>: (ponto baixo nos próximos 7 pontos, diminuição) [48]&nbsp;</p>
    <p><strong>Carreira 25: </strong>(ponto baixo nos próximos 6 pontos, diminuição) [42]&nbsp;</p>
    <p><strong>Carreira 26: </strong>(ponto baixo nos próximos 5 pontos, diminuição) [36] Comece enchendo&nbsp;</p>
    <p><strong>Carreira 27: </strong>(ponto baixo nos próximos 4 pontos, diminuição) [30]&nbsp;</p>
    <p><strong>Carreira 28</strong>: (ponto baixo nos próximos 3 pontos, diminuição) [24]&nbsp;</p>
    <p><strong>Carreira 29</strong>: (ponto baixo nos próximos 2 pontos, diminuição) [18]&nbsp;</p>
    <p><strong>Carreira 30: </strong>(ponto baixo no próximo ponto, diminuição) [12]&nbsp;</p>
    <p><strong>Carreira 31</strong>: 33 (ponto baixo em toda volta) [12]&nbsp;</p>
    <p>Prenda e feche nas pontas&nbsp;</p>
    <p>Corte um quadrado maior que os olhos. Faça uma pequena fenda e inserir os olhos. Usando a forma dos olhos, corte o feltro. Insira os olhos na cabeça da boneca&nbsp;</p>
    <p>e use a arruela de forma segura.&nbsp;</p>
    <p><strong>Sapato e pernas (faça 2)&nbsp;</strong></p>
    <p>Começando com fio preto&nbsp;</p>
    <p><strong>Carreira 1: </strong>7 pontos baixos, 2 meio pontos altos na 2o correntinha da agulha, 1 meio ponto alto nos próximos 4 pontos, 5 meios pontos altos no último ponto,&nbsp;</p>
    <p>(continue a trabalhar na outra ponta) 1 meio ponto alto nos 4 pontos seguintes, 3 meios pontos altos no começo [18]&nbsp;</p>
    <p><strong>Carreira 2: </strong>2 meios pontos altos nos 2 pontos seguintes, 1 meio ponto alto nos 3 pontos seguintes, 1 ponto baixo no ponto seguinte, 2 meio pontos altos nos 5&nbsp;</p>
    <p>pontos seguintes, 1 ponto baixo no ponto seguinte, 1 meio ponto alto nos 3 pontos seguintes, 2 ponto baixíssimo nos últimos 3 pontos. [28]&nbsp;</p>
    <p><strong>Carreira 3: </strong>1 meio ponto alto no próximo ponto, (2 meio pontos altos, 1 meio ponto alto) (2 vezes), meio ponto alto nos próximos 2 pontos, 1 ponto baixo nos&nbsp;</p>
    <p>próximos 2 pontos, (2 meio pontos altos, 1 meio ponto alto) (4 vezes), 2 meio ponto alto, 1 ponto baixo nos próximos 2 pontos, 1 meio ponto alto nos próximos 2&nbsp;</p>
    <p>pontos, (meio ponto alto, 2 meios pontos altos) (3 vezes) [38] encha firmemente&nbsp;</p>
    <p>Troque o fio e faça ponto baixo nos pontos da volta somente da 4a carreira.&nbsp;</p>
    <p><strong>Carreira 4: </strong>(ponto baixo em toda volta) [38]&nbsp;</p>
    <p><strong>Carreira 5: </strong>repetir a carreira 4&nbsp;</p>
    <p><strong>Carreira 6: </strong>1 ponto baixo nos próximos 14 pontos, meio ponto alto nos próximos 10 pontos, 1 ponto baixo em todos os 14 pontos [38]&nbsp;</p>
    <p><strong>Carreira 7: </strong>repetir a carreira 6&nbsp;</p>
    <p><strong>Carreira 8</strong>: 1 ponto baixo nos próximos 12 pontos, 7 diminuição, 1 ponto baixo nos próximos 12 pontos [31]&nbsp;</p>
    <p><strong>Carreira 9</strong>: 1 ponto baixo nos próximos 9 pontos, 7 diminuição, 1 ponto baixo nos próximos 8 pontos [24]&nbsp;</p>
    <p><strong>Carreira 10</strong>: 1 ponto baixo nos próximos 7 pontos, 5 diminuição, 1 ponto baixo nos próximos 7 pontos [19]&nbsp;</p>
    <p><strong>Carreira 11: </strong>1 ponto baixo nos próximo 9 pontos, 1 diminuição, 1 ponto baixo nos próximos 8 pontos [18] mudar o fio.&nbsp;</p>
    <p><strong>Carreira 12-15: </strong>(ponto baixo em toda volta) [18] coloque enchimento para moldar o trabalho.&nbsp;</p>
    <p><strong>Carreira 16: </strong>1 ponto baixo nos próximos 17 pontos, aumento em todos os pontos [19]&nbsp;</p>
    <p><strong>Carreira 17</strong>: 1 ponto baixo no ponto, (ponto baixo, aumento) 2 vezes, 1 ponto baixo nos próximos 15 pontos [21]&nbsp;</p>
    <p><strong>Carreira 18-24: </strong>ponto baixo em toda volta [21]&nbsp;</p>
    <p><strong>Carreira 25: </strong>(diminuição, ponto baixo no próximo ponto) 3 vezes, 1 ponto baixo nos próximos 12 pontos [18]&nbsp;</p>
    <p><strong>Carreira 26</strong>: 1 ponto baixo nos próximos 10 pontos, 2 pontos baixos nos próximos 4 pontos, 1 ponto baixo nos próximos 4 pontos [22]&nbsp;</p>
    <p><strong>Carreira 27</strong>: ponto baixo em toda volta [22]&nbsp;</p>
    <p><strong>Carreira 28</strong>: 1 ponto baixo nos próximos 11 pontos, (diminuição) 4 vezes, 1 ponto baixo, aumento, 1 ponto baixo [19]&nbsp;</p>
    <p><strong>Carreira 29: </strong>(aumento, ponto baixo) 5 vezes, 9 pontos baixos [24]&nbsp;</p>
    <p><strong>Carreira 30-40: </strong>ponto baixo em toda volta [24]&nbsp;</p>
    <p><strong>Junta de pernas e corpo&nbsp;</strong></p>
    <p>Para unir as pernas, segure as pernas com os pés voltados para você. Localize o centro de ambas as pernas para a união (você pode usar dois marcadores de ponto&nbsp;</p>
    <p>como pontos de referência). Insira a agulha no marcador da perna direita.&nbsp;</p>
    <p><strong>Carreira 1: </strong>3 correntinhas, junte á outra perna, junte-se (conta 1 ponto baixo), 1 ponto baixo nos próximos 12 pontos, (aumento, ponto baixo) 5 vezes, 1 ponto&nbsp;</p>
    <p>baixo nos próximos 2 pontos, 1 ponto baixo na parte de cima da 3a correntinha, 1 ponto baixo na perna, junte, 1 ponto baixo no próximo ponto, (aumento, ponto&nbsp;</p>
    <p>baixo) 5 vezes, 1 ponto baixo nos próximos 13 pontos [64]&nbsp;</p>
    <p><strong>Carreira 2: </strong>1 ponto baixo começando na parte de cima da 3a correntinha, continue com ponto baixo em toda volta [64]&nbsp;</p>
    <p><strong>Carreira 3-7</strong>: ponto baixo em toda volta [64]&nbsp;</p>
    <p><strong>Carreira 8</strong>: 1 ponto baixo nos próximos 32 pontos, diminuição, 1 ponto baixo nos próximos 2 pontos, diminuição, 1 ponto baixo nos próximos 26 pontos [62]&nbsp;</p>
    <p><strong>Carreira 9-10: </strong>ponto baixo em toda volta [62]&nbsp;</p>
    <p><strong>Carreira 11</strong>: 1 ponto baixo nos próximos 15 pontos, (diminuição, ponto baixo) 12 vezes, 1 ponto baixo nos próximos 11 pontos [50]&nbsp;</p>
    <p><strong>Carreira 12</strong>: 1 ponto baixo nos próximos 20 pontos, diminuição, 1 ponto baixo nos próximos 10 pontos, diminuição, 1 ponto baixo nos próximos 16 pontos [48]&nbsp;</p>
    <p><strong>Carreira 13</strong>: ponto baixo em toda volta [48] mude o fio para o tom da pele&nbsp;</p>
    <p><strong>Carreira 14-32</strong>: ponto baixo em toda volta [48] encha com fibra&nbsp;</p>
    <p><strong>Carreira 33: </strong>1 ponto baixo nos próximos 6 pontos, diminuição (em toda volta) [42]&nbsp;</p>
    <p><strong>Carreira 34</strong>: 1 ponto baixo nos próximos 5 pontos, diminuição (em toda volta) [36]&nbsp;</p>
    <p><strong>Carreira 35</strong>: 1 ponto baixo nos próximos 4 pontos, diminuição (em toda volta) [30]&nbsp;</p>
    <p><strong>Carreira 36: </strong>1 ponto baixo nos próximos 3 pontos, diminuição (em toda volta) [24]&nbsp;</p>
    <p><strong>Carreira 37</strong>: 1 ponto baixo nos próximos 2 pontos, diminuição (em toda volta) [18]&nbsp;</p>
    <p><strong>Carreira 38-41: </strong>ponto baixo em toda volta [18]&nbsp;</p>
    <p>Prenda-se, tecer nas pontas.&nbsp;</p>
    <p><strong>Braços (fazer 2):&nbsp;</strong></p>
    <p>6 pontos baixo no anel mágico&nbsp;</p>
    <p><strong>Carreira 1</strong>: aumento [12]&nbsp;</p>
    <p><strong>Carreira 2-32</strong>: ponto baixo em toda volta [12]&nbsp;</p>
    <p><strong>Macacão:&nbsp;</strong></p>
    <p>65 correntinhas, junte ao início do ponto. [64]&nbsp;</p>
    <p><strong>Carreira 1-16: </strong>trabalhando nas carreiras, ponto baixo em toda volta [64]&nbsp;</p>
    <p><strong>Carreira 17: </strong>1 ponto baixo nos próximos 6 pontos, diminuição (em toda volta), 1 ponto baixo em todos os pontos [56]&nbsp;</p>
    <p><strong>Carreira 18: </strong>ponto baixo em toda volta [36] prenda e feche nas extremidades.&nbsp;</p>
    <p><strong>Macacão (frente):&nbsp;</strong></p>
    <p>Deixando uma cauda longa, 21 correntinhas&nbsp;</p>
    <p><strong>Carreira 1: </strong>1 ponto baixo na 2a correntinha da agulha em todo o lado [20]&nbsp;</p>
    <p><strong>Carreira 2: </strong>Gire o trabalho, ponto baixo, 1 correntinha e vire [20]&nbsp;</p>
    <p><strong>Carreira 3: </strong>repetir a carreira 2 [20]&nbsp;</p>
    <p><strong>Carreira 4</strong>: diminuição, 1 ponto baixo nos próximos 16 pontos, diminuição, 1 correntinha e vire [18]&nbsp;</p>
    <p><strong>Carreira 5</strong>: ponto baixo em volta, 1 correntinha e vire [18]&nbsp;</p>
    <p><strong>Carreira 6: </strong>diminuição, 1 ponto baixo nos próximos 14 pontos, diminuição, 1 correntinha e vire [16]&nbsp;</p>
    <p><strong>Carreira 7</strong>: ponto baixo em toda volta, 1 correntinha e vire [16]&nbsp;</p>
    <p><strong>Carreira 8: </strong>diminuição, 1 ponto baixo nos próximos 12 pontos, diminuição, 1 correntinha e vire [14]&nbsp;</p>
    <p><strong>Carreira 9-12: </strong>ponto baixo em volta, 1 correntinha e vire [14] prenda fora, feche nas extremidades.&nbsp;</p>
    <p><strong>Bolso do macacão:&nbsp;</strong></p>
    <p>11 correntinhas&nbsp;</p>
    <p><strong>Carreira 1: </strong>na 2a correntinha da agulha, 1 ponto baixo em toda volta, 1 correntinha e vire [10]&nbsp;</p>
    <p><strong>Carreira 2-5</strong>: ponto baixo em volta, 1 correntinha e vire [10]&nbsp;</p>
    <p>Prenda deixando uma cauda longa.&nbsp;</p>
    <p><strong>Macacão (costas):&nbsp;</strong></p>
    <p><strong>Carreira 1: </strong>19 correntinhas, na 2a agulha da correntinha 1 ponto baixo em toda a volta, 1 correntinha e vire [18]&nbsp;</p>
    <p><strong>Carreira 2-4: </strong>ponto baixo em volta, 1 correntinha e vire [18]&nbsp;</p>
    <p><strong>Carreira 5: </strong>diminuição, 1 ponto baixo nos próximos 14 pontos, diminuição, 1 correntinha e vire [16]&nbsp;</p>
    <p><strong>Carreira 6: </strong>ponto baixo em volta, 1 correntinha e vire [16]&nbsp;</p>
    <p><strong>Carreira 7: </strong>diminuição, 1 ponto baixo nos próximos 12 pontos, diminuição, 1 correntinha e vire [12]&nbsp;</p>
    <p><strong>Carreira 8</strong>: ponto baixo em volta, 1 correntinha e vire [14]&nbsp;</p>
    <p><strong>Carreira 9: </strong>diminuição, 1 ponto baixo nos próximos 10 pontos, diminuição, 1 correntinha e vire [12]&nbsp;</p>
    <p><strong>Carreira 10: </strong>ponto baixo em volta, 1 correntinha e vire [12]&nbsp;</p>
    <p><strong>Carreira 11: </strong>diminuição, 1 ponto baixo nos próximos 8 pontos, diminuição, 1 correntinha e vire [10]&nbsp;</p>
    <p><strong>Carreira 12-14</strong>: ponto baixo ao redor, 1 correntinha e vire [10]&nbsp;</p>
    <p><strong>Correias (faça 2):&nbsp;</strong></p>
    <p>27 correntinha, na segunda correntinha da agulha 25 pontos altos em volta. Prenda deixando uma cauda longa.&nbsp;</p>
    <p><strong>Orelhas (fazer 2):&nbsp;</strong></p>
    <p>3 correntinhas, 7 pontos altos na última correntinha. Prenda deixando uma cauda longa.]&nbsp;</p>
    <p><strong>Blusa:&nbsp;</strong></p>
    <p><strong>Carreira 1</strong>: 37 correntinhas, na 2a correntinha da agulha 1 meio ponto alto nos próximos 5 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (mesmo&nbsp;</p>
    <p>ponto), 1 meio ponto alto nos próximos 5 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (mesmo ponto), 1 meio ponto alto nos próximos 11&nbsp;</p>
    <p>pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (mesmo ponto), 1 meio ponto alto nos próximos 5 pontos, (1 meio ponto alto, 1 correntinha, 1 meio&nbsp;</p>
    <p>ponto alto) (mesmo ponto), 1 meio ponto alto nos próximos 6 pontos. [42]&nbsp;</p>
    <p><strong>Carreira 2: </strong>2 correntinhas, vire, 1 meio ponto alto nos próximos 6 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto&nbsp;</p>
    <p>alto nos próximos 6 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto alto nos próximos 12 pontos, (1 meio ponto&nbsp;</p>
    <p>alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto alto nos próximos 6 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1&nbsp;</p>
    <p>correntinha), 1 meio ponto alto nos últimos 6 pontos [48]&nbsp;</p>
    <p><strong>Carreira 3: </strong>2 correntinhas, vire, 1 meio ponto alto nos próximos 6 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto&nbsp;</p>
    <p>alto nos próximos 7 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto alto nos próximos 13 pontos, (1 meio ponto&nbsp;</p>
    <p>alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto alto nos próximos 7 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1&nbsp;</p>
    <p>correntinha), 1 meio ponto alto nos últimos 7 pontos [52]&nbsp;</p>
    <p><strong>Carreira 4: </strong>2 correntinhas, vire, 1 meio ponto alto nos próximos 7 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto&nbsp;</p>
    <p>alto nos próximos 8 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto alto nos próximos 14 pontos, (1 meio ponto&nbsp;</p>
    <p>alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto alto nos próximos 8 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1&nbsp;</p>
    <p>correntinha), 1 meio ponto alto nos últimos 7 pontos [56]&nbsp;</p>
    <p><strong>Carreira 5: </strong>2 correntinhas, vire, 1 meio ponto alto nos próximos 7 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto&nbsp;</p>
    <p>alto nos próximos 9 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto alto nos próximos 15 pontos, (1 meio ponto&nbsp;</p>
    <p>alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto alto nos próximos 9 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1&nbsp;</p>
    <p>correntinha), 1 meio ponto alto nos últimos 8 pontos [60]&nbsp;</p>
    <p><strong>Carreira 6</strong>: 2 correntinhas, vire, 1 meio ponto alto nos próximos 8 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto&nbsp;</p>
    <p>alto nos próximos 10 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto alto nos próximos 16 pontos, (1 meio ponto&nbsp;</p>
    <p>alto, 1 correntinha, 1 meio ponto alto) (em 1 correntinha), 1 meio ponto alto nos próximos 10 pontos, (1 meio ponto alto, 1 correntinha, 1 meio ponto alto) (em 1&nbsp;</p>
    <p>correntinha), 1 meio ponto alto nos últimos 8 pontos [64] junte com um ponto baixíssimo no 1o ponto.&nbsp;</p>
    <p><strong>Carreira 7: </strong>2 correntinhas, meio ponto alto no mesmo espaço da 2a correntinha, 1 meio ponto alto nos próximos 8 pontos, 1 meio ponto alto no espaço da 1a&nbsp;</p>
    <p>correntinha, 5 correntinhas (então junte 5 correntinhas no próximo 1 espaço para formar a cava), 2 correntinhas, meio ponto alto no mesmo espaço da 2a&nbsp;</p>
    <p>correntinha, 1 meio ponto alto nos próximos 17 pontos, meio ponto alto no espaço da 1a correntinha, 5 correntinhas, (depois junte 5 correntinhas no próximo 1o&nbsp;</p>
    <p>espaço da correntinha para formar a cava), 2 correntinhas, 1 meio ponto alto no mesmo espaço da 2a correntinha, 1 meio ponto alto nos últimos 8 pontos [50].&nbsp;</p>
    <p><strong>Carreira 8: </strong>ponto baixíssimo para o ponto de início, 2 correntinhas, meio ponto alto no mesmo espaço da 2a correntinha e em toda parte (incluindo 5 correntinhas)&nbsp;</p>
    <p><strong>Carreira 9-10: </strong>repetir a carreira 8 [50] prenda e feche nas extremidades.&nbsp;</p>
    <p><strong>Boné de peruca:&nbsp;</strong></p>
    <p><strong>Carreira 1: </strong>siga as carreiras 1-18 da cabeça [60]&nbsp;</p>
    <p><strong>Carreira 2</strong>: ponto baixo, meio ponto alto, 1 ponto alto nos próximos 2 pontos, 1 ponto alto nos próximos 3 pontos, 1 ponto alto nos próximos 2 pontos, meio&nbsp;</p>
    <p>ponto alto, (em toda volta) [60] apertar e fechar nas extremidades.&nbsp;</p>
    <p><strong>Coque:&nbsp;</strong></p>
    <p><strong>Carreira 1</strong>: 6 pontos baixos no anel mágico [6]&nbsp;</p>
    <p><strong>Carreira 2: </strong>aumento (em volta) [12]&nbsp;</p>
    <p><strong>Carreira 3</strong>: 1 ponto baixo no próximo ponto, aumento, (em volta) [18]&nbsp;</p>
    <p><strong>Carreira 4: </strong>1 ponto baixo nos próximos 2 pontos, aumento (em volta) [24]&nbsp;</p>
    <p><strong>Carreira 5</strong>: 1 ponto baixo nos próximos 3 pontos, aumento (em volta) [30]&nbsp;</p>
    <p><strong>Carreira 6-9</strong>: ponto baixo ao redor [30]&nbsp;</p>
    <p><strong>Carreira 10: </strong>1 ponto baixo nos próximos 3 pontos, diminuição (em volta) [24]&nbsp;</p>
    <p><strong>Carreira 11: </strong>1 ponto baixo nos próximos 2 pontos, diminuição (em volta) [18]&nbsp;</p>
    <p><strong>Carreira 12</strong>: Encha o coque, prenda deixando uma cauda longa.&nbsp;</p>
    <p><strong>Cachos</strong>:&nbsp;</p>
    <p><strong>Carreira 1: </strong>29 correntinhas, na 2a correntinha da agulha, aumento, ponto baixo (até o final).&nbsp;</p>
    <p>Deixe a cauda longa para costurar.&nbsp;</p>
    <p><strong>Montagem:&nbsp;</strong></p>
    <p><strong>Anexando o macacão.&nbsp;</strong></p>
    <p>Coloque os macacões no fundo e coloque o macacão no topo do centro. Uma vez no meio costurar juntos usando uma escada de ponto. Faça o mesmo para o&nbsp;</p>
    <p>macacão de trás. Anexar correias para o topo do macacão de trás. Coloque o macacão e fitas de medida para a frente. Costure nos botões.&nbsp;</p>
    <p><strong>Anexando membros:&nbsp;</strong></p>
    <p>Coloque a cabeça de boneca no corpo da boneca. Usando sua madeira cavilha, meça o comprimento do topo da cabeça da boneca para a bunda dela. Corte o&nbsp;</p>
    <p>pino e insira-o no corpo da boneca (encha levemente ao redor da área do pescoço). Insira a cabeça para trás no corpo. O pescoço da cabeça deve encaixar&nbsp;</p>
    <p>perfeitamente no pescoço do corpo. Usando sua agulha de cerzir, costure o pescoço para o pescoço. Em seguida, prenda os braços ao lado do corpo e das orelhas&nbsp;</p>
    <p>da boneca até a cabeça da boneca.&nbsp;</p>
    <p><strong>Anexando o cabelo:&nbsp;</strong></p>
    <p>Tomando uma longa faixa de fio, tira-o em dois e rosca a agulha de cerzir. Coloque a touca da peruca na cabeça da boneca, certificando-se de que está centrada e&nbsp;</p>
    <p>costure a touca da peruca. Em seguida, coloque o coque no topo do centro da cabeça da boneca. Costurar em seguida, coloque cachos ao seu gosto.&nbsp;</p>
    <p><strong>Cardaços:&nbsp;</strong></p>
    <p>Usando fio preto e agulha de cerzido, costure de esquerda para a direita nas sapatilhas superiores para fazer cordões falsos. Adicionando botões e cílios (cílios é&nbsp;</p>
    <p>opcional).&nbsp;</p>
    <p>Seção de foto tutorial: Fotos guiadas para ajudar na montagem.&nbsp;</p>
    <p>1. Alinhe as pernas para cima.&nbsp;</p>
    <p>2. Localize o centro&nbsp;</p>
    <p>3. insira a junção inicial&nbsp;</p>
    <p>4. 3 correntinhas e junte-se a outra perna&nbsp;</p>
    <p>5. ponto baixo&nbsp;</p>
    <p>imagens de geral.&nbsp;</p>
    <p>Medir com a cavilha da bunda da boneca completa. Até o topo da cabeça da&nbsp;</p>
    <p>boneca e corte. Inserir enchimento ao redor da cavilha&nbsp;</p>
</div>

    `,
    'hSZaj3hJDAw':`<div class="mt-5">
    <p class="title is-size-2-desktop">Receita</p>
    <p>Coração amigurumi iniciantes</p>
<p>Matériais</p>
<p>*Agulha de crochê <br>*Agulha de tapeceiro <br>*Enchimento <br>*Tesoura pra arremate</p>
<p><br>1. 6pb no anel mágico [6pts]<br>2. 6aum [12pts]<br>3. (1pb, 1aum) 6x [18pts]<br>4. (2pb, 1aum) 6x [24pts] <br>5-6. 24pb em toda a volta [24pts]<br> Finalize e arremate a primeira parte.
Não corte o fio quando terminar a segunda.
Prossiga dessa maneira: <br> Parte inferior <br>7. 24pb em torno da primeira parte + 24pb em torno da segunda parte
[48pts]<br>8-10. 48pb em toda a volta [48pts]<br>11. (10pb, 1dim) 4x [44pts]<br>12. (9pb, 1dim) 4x [40pts]<br>13. 4pb, 1dim, (8pb, 1dim) 3x, 4pb [36pts]<br>14. (7pb, 1dim) 4x [32pts]<br>15. 3pb, 1dim, (6pb, 1dim) 3x, 3pb [28pts]<br>16. (5pb, 1dim) 4x [24pts]<br>17. 2pb, 1dim, (4pb, 1dim) 3x, 2pb [20pts]<br>18. (3pb, 1dim) 4x [16pts] Coloque o enchimento<br>19. (2pb, 1dim) 4x [12pts]<br>20. (1pb, 1dim) 4x [8pts]<br>21. 4dim [4pts].</p>
  </div>`,
    'BGPqVgA0XzA':`
    <div class="mt-5">
    <p class="title is-size-2-desktop">Receita</p>
    <p>Material <br>*Linha amarela<br>*Linha preta <br>*Linha branca<br>*Olhos com trava de segurança <br>*Enchimento</p>
<p>1. anel mágico <br>2. 6 pb<br>3. 6 aum<br>4. 1pb 1aum 18pb<br>5. 2pb 1aum 24pb<br>6. 3pb 1aum 30pb<br>7. 4pb 1aum 35pb<br>8. 1 carreira reta sem aumentos por toda a volta <br>* Coloca os olhos entre as carreiras 3 e 4 ,5pt de distância <br>Carreiras 8 e 9 na cor preta<br>10 11 e 12 amarela<br>13 e 14 preta<br>15 amarela <br>16. 4pb 1 dim<br>17. 3pb 1 dim<br>18. 2 pb 1 dim<br>19. 1pb 1 dim<br>20. fecha co agulha de tapeceiro</p>
<p>Azinha<br> Com a linha branca faça um anel mágico <br>1pb e 1aum na próxima careira <br>2pb 1 aum <br>Arremate o fio deixe tamanho pra costurar.</p>
  </div>
    `,
    'BB1s0lGqRxY':`<div>
    <div>Polvo iniciantes amigurumi</div>
    <br>
    <div>Lista de materiais</div>
    <br>
    <div>*Tesoura</div>
    <div>*Aguha de tapeceiro</div>
    <div>*Enchimento</div>
    <div>*Olhos com travas de segurança</div>
    <div>*Agulha de crochê</div>
    <br>
    <div>Cabeça do polvo</div>
    <br>
    <div>1. 1 anel mágico</div>
    <div>2. 6 aum</div>
    <div>3 .1pb 1 aum</div>
    <div>4 .2pb 2 aum</div>
    <div>5 .3 pb 3 aum</div>
    <div>6 .5 carreiras pontos baixos sem aumentos</div>
    <div>Coloca os olhos entre as carreiras 8 e 9 co distância de 5 pontos</div>
    <div>7 .4pb 1 dim</div>
    <div>8 .3pb 1 dim</div>
    <div>9 .2pb 1 dim</div>
    <div>10 .1pb 1 dim</div>
    <div>11 .6 dim</div>
    <div>12 .corta o fio, com aguha de tapeceiro ,pegando na lançada de traz fecha a cabeça do polvo.</div>
    <br>
    <div>Tentáculos</div>
    <br>
    <div>12 correntinhas</div>
    <div>3 meio ponto auto em cada ponto de base</div>
    <div>Deixa um fo rede pr costurar os tentáculos .</div>
    </div>`
  }
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
  margin: 0px 20px 0px 0px;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  font-size: 13px;
`;
const StickBotao = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 0px;
`;
const StickTexto = styled.p`
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 2px;
  font-weight: bold;
  text-transform: uppercase;
  color: orangered;
  margin-right: 0px;
  
`;
    const opts = {
      height: '360',
      width: '100%',
    };
    const opts2 = {
    height: '190',
    width: '90%',
    };
    return (
        <>
            <Head>
                <title>Arts de Amigurumi</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </Head>
            <main className="text-center mt-4">
            <Image
                  src="/img/input.png"
                  width={384/3}
                  height={121/3}
                  />
              <div className="mt-5">
                <p className="fs-1 text-info fw-bold">Vídeo Aula</p>
                <hr className="w-50"/>
                <p className="fs-2 fw-bold text-capitalize mb-4">{titulos[vid]}</p>
                <YouTube videoId={vid} opts={isMobile?opts2:opts} className="border border-info border-3 rounded" />
                <p className="fs-2 fw-bold">Receita</p>
                <div className="text-container mb-5" dangerouslySetInnerHTML={{ __html: receitas[vid] }} />
                <br/><br/><br/><br/>
              </div>
              
            </main>
            <Sticky>
                <img src="/pooh.png" width="150px" height="150px" style={{ position: "relative", top: "-70px", left: "-10px" }} />
                <StickBotao>
                    <StickTexto>5 Mil Modelos + Vídeo Aulas</StickTexto>
                    <a href={url}>
                        <BotaoComprar className="animate__animated animate__pulse animate__infinite">Comprar com Desconto</BotaoComprar>
                    </a>
                </StickBotao>
            </Sticky>
        </>
    )
}

export default Post