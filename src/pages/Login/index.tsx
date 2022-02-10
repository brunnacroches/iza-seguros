// * aqui vai ficar a estrutua e página inteligente

// NO PAGES FICARÁ AS PASTAS DAS NOSSAS TELAS
// TELA LOGIN
import React, {useState, useEffect} from 'react';
import { Badge, Button, Form, Table } from 'react-bootstrap';
import api from "../../services/api";
import moment from 'moment'; 
import { useNavigate,} from 'react-router-dom';
import LogoIzaI from '../../assets/svg/logo-iza-i-orange.svg';
import LogoIzaPontoFinal from '../../assets/svg/logo-iza-ponto-orange.svg';
import LogoIzaZa from '../../assets/svg/logo-iza-za-orange.svg';

// FOOTER
import LogoIzaIBranco from '../../assets/svg/logo-iza-i-info.svg';
import LogoIzaPontoBranco from '../../assets/svg/logo-iza-ponto-info.svg';
import LogoIzaZaBranco from '../../assets/svg/logo-iza-za-info.svg';
import facebook from '../../assets/svg/facebook.svg';
import whatsapp from '../../assets/svg/whatsapp.svg';
import instagram from '../../assets/svg/instagram.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import apple from '../../assets/img/apple-stores.png';
import google from '../../assets/img/google-play.png';


import { 
  Container, 
  HeaderIza,
  LogoIzaPonto,
  LogoIzaIP,
  LogoIza,
  FormBody,
  TextLogin,
  BackgrounPage,
  Content,
  FooterLogin,
  LogoIzaPontoFinalBranco,
  LogoIzaIPontoBranco,
  LogoIzaBranco,
  SvgFacebook,
  SvgInstagram,
  SvgLinkedin,
  ImgGoogle,
  ImgApple,
  SvgWhatsapp
} from "./styles";


const Login: React.FC = () => {
  return (
  <BackgrounPage>
    <Container>
      {/*  Login Form  */}
      <Content>
        
        <HeaderIza>
          <LogoIzaPonto src={LogoIzaPontoFinal} alt=""/>
          <LogoIzaIP src={LogoIzaI} alt="" />
          <LogoIza src={LogoIzaZa} alt="" />
        </HeaderIza>
        <div className="signup form-peice">
          <TextLogin>
            <p>
              A IZA é diferente de todas as 
              <br />
              seguradoras que você já conhece!</p>
          </TextLogin>
            <form className="signup-form" action="#" method="post">
                <div className="form-group"> Email
                  <label htmlFor="email">Email Adderss</label>
                  <input type="email" name="emailAdress" id="email" className="email" />
                  <span className="error"></span>
                </div>

                <div className="form-group"> Senha
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" className="pass" />
                  <span className="error"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="passwordCon">Confirm Password</label>
                  <input type="password" name="passwordCon" id="passwordCon" className="passConfirm" />
                  <span className="error"></span>
                </div>
                <div className="CTA">
                  <input type="submit" value="Entrar" id="submit" />
                </div>
            </form>
        </div>
      </Content>
      {/* End Signup Form  */}
    </Container>

      <FooterLogin>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">  
              </div>
                <div className='Imagens__Contato'>
                </div>
              <div className="col-xs-6 col-md-3">
                <div className='logo__Iza__Footer'>
                    <LogoIzaIPontoBranco src={LogoIzaPontoBranco} alt=""/>
                    <LogoIzaPontoFinalBranco src={LogoIzaIBranco} alt="" />
                    <LogoIzaBranco src={LogoIzaZaBranco} alt="" />
                </div>
                <div className='Imagens__Contato'>
                <h4>Siga a gente</h4>
                    <ImgGoogle src ={google} alt="" />
                    <ImgApple src ={apple} alt="" />
                    <SvgFacebook src ={facebook} alt="" />
                    <SvgInstagram src={instagram} alt="" />
                    <SvgLinkedin src={linkedin} alt="" />
                </div>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>A IZA</h6>
                <p>Perguntas Frequentes</p>
                <br />
                <p>Condições Gerais</p>
                <br />
              </div>
              
              <div className="col-xs-6 col-md-3">
                <h6>Seguro IZA</h6>
                <p>Seguro IZA</p>
                <br />
                <p>Consultas Médicas Online</p>
                <br />
                <p>Termos de Uso</p>
                <br />
                <p>Política de Privacidade</p>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Fale com a Iza</h6>
                <p>Ligue para gente</p>
                <br />
                  <a href="#">11 4673 2002</a>
                  <SvgWhatsapp src={whatsapp} alt="" />
                  <p>Mande um oi pelo WhatsApp</p>
                  <br />
                  <a href="#">11 4673 2004</a>
                  <br />
                  <p>
                    Se preferir, 
                    <br />
                    temos um chat também
                  </p>
                  <br />
                  <h5> Chat Online </h5>
              </div>
            </div>

            <hr></hr>
          
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <h3> IZA Seguros S.A CNPJ 40.004.544/0001-46 Constituída no âmbito do ambiente
                regulatório experimental("Sandox") da SUSEP sob o Processo SUSEP nº 154.618857/2020-48 Autorizada a operar nos termos
                da Portaria SUSEP nº 7.764 de 04/03/2021
                </h3>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                 
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </FooterLogin>
  </BackgrounPage>
  );
};

export default Login;

/**
 */
/**
 * @O @MEU @Login @É @TIPO @FC
 * ? ==> const Login:
 * * NOME DA PÁGINA
 * ? -> const Login <-
 * * ESSES DOIS PONTOS :
 * ? -> : <- É PARA ATRIBUIR A TIPAGEM DA MINHA PÁGINA
 * * A TIPAGEM DA PÁGINA:
 * ? -> React.FC <- ( A PÁGINA É DO TIPO DE UM COMPONENTE FUNCIONAL )
 * * APONTANDO PARA UMA FUNÇÃO :
 * ? -> = () => {} <- (ARRAY FUNCTION)
 * * SEMPRE TEM QUE RETONRAR PELO MENOS 1 ELEMENTO !SEMPRE!
 * ? return (
 * ? <Container>
 * ?   <h1>Login</h1>
 * ? </Container>
 * ? );
 */
