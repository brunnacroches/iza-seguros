import styled from "styled-components";

export const BackgrounPage = styled.div`
  width: auto;
  height: 650px;
  background-color: #FF5148;

`;
export const Container = styled.div`
  border-radius: 500px 0px 0px 0px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  /*/ PARA QUE TODO O CONTEÚDO ANDE PARTINDO DA ESQUERDA */
  cursor: pointer;
  transition: all .3s;
  width: 80%;
  position: relative;
  left: 290px;
  align-items: center;
  height: 100%;
  background-color: #FFF;

`;
export const FormBody = styled.div`
  border-radius:16px;
  padding-left: 30px;
  cursor: pointer;
  transition: all .3s;
  width: 800px;
  height: 400px;
  align-items: center;
  position: relative;
  left: 300px;
  top: 20px;
  &:hover {
    transform: translateX(10px);
  }
`;

// !HEADER => 
export const HeaderIza = styled.div`
  height: 48px;
  width: 200px;
  position: relative;
  left: 570px;
  top: 30px;

  cursor: pointer;
  transition: all .3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
  
`;
// ! LOGO IZA => I PONTO
export const LogoIzaPonto = styled.img`
  height: 50px;
  width: 15px;
  position: relative;
  left: 95px;
  top: -30px;

  cursor: pointer;
  transition: all .3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

`;
// ! LOGO IZA => IZA
export const LogoIzaIP = styled.img`
  height: 60px;
  width: 60px;
  position: relative;
  top: 10px;
  left: 58px;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

`;

// ! LOGO IZA => IZA
export const LogoIza = styled.img`
  height: 60px;
  width: 130px;
  position: relative;
  top: -50px;
  left: 120px;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
`;

export const TextLogin = styled.h3`
    font-size: 20px;
    text-align: center;
    position: relative;
    top:-30px;
    opacity: 0.7;
    left: 100px;
`;


// ESTILIZANDO O LOGIN 
export const Content = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 40%;
  
    .form{
    position: relative;
  }

   .form-peice{
      background: #fff;
      min-height: 480px;
      margin-top: 30px;
      border-radius: 400px 0px 0px 0px;
      /* box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2); */
      color: #bbbbbb;
      padding: 30px 0 60px;
      transition: all 0.9s cubic-bezier(1.000, -0.375, 0.285, 0.995);
      position: absolute;
      top: 100px;
      left: 15%;
      width: 80%;
      overflow: hidden;
    }
      &.switched {
         transform: translateX(-100%);
         width: 100%;
         left: 0;
        }
   form{
      padding: 0 40px;
      margin: 0;
      width: 70%;
      position: absolute;
      top: 50%;
      left: 60%;
      transform: translate(-50%, -50%);
}

      .form-group {
         margin-bottom: 5px;
         position: relative;
}
         &.hasError{
            input{
               border-color: #FF5148 !important;
}
            label{
               color: #FF5148 !important;
}
}

      label{
         font-size: 12px;
         font-weight: 400px;
         text-transform: uppercase;
         font-family: 'Montserrat', sans-serif;
         transform: translateY(40px);
         transition: all 0.4s;
         cursor: text;
         z-index: -1;
}
         &.active{
            transform: translateY(10px);
            font-size: 10px;
}
         &.fontSwitch{
            font-family: 'Raleway', sans-serif !important;
            font-weight: 600;
  }
      input:not([type=submit]){
         background: none;
         outline: none;
         border: none;
         display: block;
         padding: 10px 0;
         width: 100%;
         border-bottom: 1px solid #eee;
         color: #444;
         font-size: 15px;
         font-family: 'Montserrat', sans-serif;
         z-index: 1;
}
         &.hasError{
            border-color: $primaryColor
}
      span.error{
         color: #FF5148;
         font-family: 'Montserrat', sans-serif;
         font-size: 12px;
         position: absolute;
         bottom: -20px;
         right: 0;
         display: none;
}

      input[type=password]{
         color: #FF5148;
}

      .CTA{
         margin-top: 30px;
}
         input {
            font-size: 12px;
            text-transform: uppercase;
            padding: 5px 30px;
            background: #FF5148;
            color: #fff;
            border-radius: 30px;
            margin-right: 20px;
            border: none;
            font-family: 'Montserrat', sans-serif;
}

         a.switch{
            font-size: 13px;
            font-weight: 400;
            font-family: 'Montserrat', sans-serif;
            color: $inputColor;
            text-decoration: underline;
            transition: all 0.3s;
}
            &:hover{
               color: #FF5148;
}

`;








 