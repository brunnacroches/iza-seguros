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

import { 
  Container, 
  HeaderIza,
  LogoIzaPonto,
  LogoIzaIP,
  LogoIza,
  FormBody,
  TextLogin,
  BackgrounPage,
  Content
} from "./styles";


const Login: React.FC = () => {
  return (
  <BackgrounPage>
    <Container>
      <HeaderIza>
        <LogoIzaPonto src={LogoIzaPontoFinal} alt=""/>
        <LogoIzaIP src={LogoIzaI} alt="" />
        <LogoIza src={LogoIzaZa} alt="" />
      </HeaderIza>
      <div className="log-form">
            {/*  Login Form  */}
            {/* Signup Form  */}
            <Content>
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
         </div>
    </Container>
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
