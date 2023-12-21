import * as React from 'react';
import './App.css';
import mockupTop from './assets/images/mockup4.png'
import mockup5 from './assets/images/mockup5-wide.png'
import mockup1 from './assets/images/mockup1.png'
import mockup2 from './assets/images/mockup2.png'
import mockup3 from './assets/images/mockup3.png'
import depo1 from './assets/images/depo1.jpeg';
import depo2 from './assets/images/depo2.jpeg';
import depo3 from './assets/images/depo3.jpeg';
import depo4 from './assets/images/depo4.jpeg';
import depo5 from './assets/images/depo5.jpeg';
import depo6 from './assets/images/depo6.jpeg';
import garantia from './assets/images/garantia.png';

import { Carousel, Image } from 'antd';
import { ActionButton } from './Components/ActionButton';
import { CheckCircleFilled, WarningFilled } from '@ant-design/icons';

export default function App() {
  return (
    <div className="page">

      <div className="full-height">
        <Carousel
          fade
          pauseOnHover={false}
          dots={false}
          autoplaySpeed={10000}
          autoplay
          draggable
        >
          <div className="flex wrappable aligned-center max-width justified-center">
            <div className='flex1'>
              <h1 className='title'>Olá Mamãe!</h1>
              <p className=''>Descubra como fazer o seu bebê comer bem <b> em menos de 1 semana</b>, variando o cardápio com mais de 100 receitas práticas e saudáveis. <br />
              </p>
              <p>Você pode começar hoje mesmo a alimentar de forma saudável seu bebê com receitas práticas.</p>

            </div>
            <div className="perspective flex1">
              <img className='mockup-top' src={mockupTop} alt="" />

            </div>
          </div>

          <div className="flex wrappable aligned-center max-width  justified-center">

            <div className="perspective flex1">
              <img className='mockup-top' src={mockup5} alt="" />
            </div>
            <div className='mg1-auto flex1'>
              <h1 className='title'>Você sabia?</h1>
              <p className=''>A má alimentação pode causar vários problemas futuros na saúde do seu filho, tais como: anemia por deficiência de ferro, obesidade, cárie dental, diabetes, hipertensão, osteoporose e outras.</p>
              <p>Mude a rotina de alimentação do seu bebê com receitas <b>equilibradas</b> e <b>saudáveis</b>.</p>

            </div>
          </div>
        </Carousel>
        <ActionButton title="Quero variar o cardápio do meu Bebê" />

      </div>

      <div className='max-width mg1-auto pd2'>
        <h2 className='mg1-auto subtitle'>Mamãe, você passa por algumas dessas dificuldades?</h2>

        <ul className='pd2 issues'>
          <li className='mg1-auto flex gap1'><WarningFilled /> Não consigo variar o cardápio do meu bebê, faço todos os dias a mesma refeição.</li>
          <li className='mg1-auto flex gap1'><WarningFilled /> Eu preciso de informações atualizadas sobre introdução alimentar.</li>
          <li className='mg1-auto flex gap1'><WarningFilled /> Eu já tentei de tudo e meu bebê não aceita a comidinha.</li>
          <li className='mg1-auto flex gap1'><WarningFilled /> Estou muito perdida na introdução alimentar do meu bebê. </li>
          <li className='mg1-auto flex gap1'><WarningFilled /> Não sei quais alimentos corretos para cada fase do meu bebê e nem quais temperos posso utilizar.</li>
        </ul>


        <p><b>Se você passa por alguma dessas dificuldades fique tranquila!</b> Você pode começar uma aliemntação saudável com receitas práticas fazendo seu bebê comer bem em <b>100% das refeições!</b></p>
        <p>Esse cuidado no início da vida é muito importante, para desenvolvimento do bebê e de seus hábitos alimentares futuros.</p>
      </div>

      <div className='max-width mg1-auto'>
        <div className="flex mg1-auto wrappable aligned-center max-width justified-center gap2">


          <div className='flex1'>
            <img className='mockup-top' src={mockup2} alt="" />
          </div>

          <div className='flex1'>
            <h3 className="subtitle">Com a nossa apostila você aprenderá:</h3>
            <ul>
              <ul className='pd2 topics-list'>
                <li className='mg1-auto flex gap1'><CheckCircleFilled /> Uma variedade de receitas para o café da manhã.</li>
                <li className='mg1-auto flex gap1'><CheckCircleFilled /> Uma variedade de receitas para o lanche da tarde.</li>
                <li className='mg1-auto flex gap1'><CheckCircleFilled /> Uma variedade de receitas para o almoço e janta.</li>
                <li className='mg1-auto flex gap1'><CheckCircleFilled /> Uma variedade de receitas para sobremesas.</li>
                <li className='mg1-auto flex gap1'><CheckCircleFilled /> Mais de 100 receitas especiais.</li>
                <li className='mg1-auto flex gap1'><CheckCircleFilled /> Tabela com horário de alimentação. </li>
                <li className='mg1-auto flex gap1'><CheckCircleFilled /> Método Blw </li>
                <li className='mg1-auto flex gap1'><CheckCircleFilled /> Congelamento e Descongelamento</li>
                <li className='mg1-auto flex gap1'><CheckCircleFilled /> Diversas outras dicas fundamentais</li>
              </ul>
            </ul>
          </div>

        </div>

      </div>

      <ActionButton title="Começar hoje mesmo!" />

      <div className='max-width mg1-auto pd2'>
        <div className="flex mg1-auto wrappable aligned-center max-width justified-center gap2">

          <h2 className="subtitle">
            Amamentação saudável
          </h2>


          <div className="flex wrappable justified-center aligned-center  gap1 depos">
            <p className='flex1'>Mamãe, a jornada da maternidade é repleta de amor e cuidados, e a <b>nutrição</b> do seu bebê desempenha um papel fundamental nesse caminho especial. A <b>amamentação</b> é um momento mágico de conexão, e complementá-la com uma <b>alimentação saudável</b> é o segredo para um começo de vida vibrante e cheio de energia.</p>

            <img src={mockup3} alt="" className="flex1" />

          </div>


        </div>
      </div>


      <div className='max-width mg1-auto pd2'>
        <div className="flex mg1-auto wrappable aligned-center max-width justified-center gap2">

          <h2 className="subtitle">
            Veja alguns depoimentos de mamães como você:
          </h2>

          <div className="flex wrappable justified-center  gap1 depos">
            <Image className='depo' src={depo1} alt="" />
            <Image className='depo' src={depo2} alt="" />
            <Image className='depo' src={depo3} alt="" />
            <Image className='depo' src={depo4} alt="" />
            <Image className='depo' src={depo5} alt="" />
            <Image className='depo' src={depo6} alt="" />
          </div>


        </div>
      </div>

      <div className='max-width mg1-auto pd2'>
        <div className="flex mg1-auto wrappable aligned-center max-width justified-center gap2">

          <h2 className="subtitle">
            Nosso compromisso é com a sua satisfação:
          </h2>


          <div className="flex wrappable justified-center aligned-center  gap1 depos">
            <p className='flex1'>Para isso damos uma garantia de <b>7 dias</b>. Dentro deste período se por qualquer motivo, não ficar satisfeita, basta falar com o suporte na plataforma.</p>

            <img className='flex1 garantia' src={garantia} alt="" />
          </div>


        </div>

        <h2 className="subtitle text-centered">Perguntas Frequentes:</h2>
        <br />
        <br />
        <h3 className='subtitle'>1. Como vou receber a apostila?</h3>
        <p className='mg1-auto'>Assim que houver confirmação do pagamento, você receberá no seu E-mail dados para acessar as Apostilas. Você poderá baixá-los e ler do seu Celular, Tablet, ou Computador.</p>
        <h3 className='subtitle'>2. Quais são as formas de pagamento?</h3>
        <p className='mg1-auto'>O pagamento pode ser feito via cartão de crédito ou Pix</p>
        <p className='mg1-auto'>No cartão, o valor pode ser parcelado em até 12x.</p>
        <p className='mg1-auto'>A confirmação de pagamento tanto no cartão quanto no pix acontece em poucos instantes.</p>
        <h3 className='subtitle'>3. Como funciona a garantia?</h3>
        <p className='mg1-auto'>A sua garantia é assegurada pelo Código de Defesa do Consumidor. E fazemos questão de deixar claro que, caso não fique satisfeita, basta nos enviar mensagem no E-mail: <b>suportecardapiodobebe@gmail.com</b> dentro do prazo de 7 dias, que devolveremos 100% do seu dinheiro.</p>
      </div>


      <ActionButton title="Quero a Apostila" />
      <div className="mg1-auto flex justified-center">
        <img src={mockup1} alt="" />

      </div>

      <footer>
        <div className="flex wrappable aligned-center justified-center gap2">
          <p className="small-text">
            suportecardapiodobebe@gmail.com
          </p>
          <p className="small-text">
            © Todos os direitos reservados.
          </p>
        </div>
        <p className="text-centered small-text">Desenvolvido por <a className='subtitle' style={{ textDecoration: 'none' }} href="https://marcelotvieira.github.io" target="_blank" rel="noreferrer">Marcelo Vieira</a></p>

      </footer>
    </div>

  );
}
