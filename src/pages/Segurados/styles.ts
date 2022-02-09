import styled from "styled-components";


export const ContainerSegurado = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  left: -230px;
  top: -70px;

`;


export const TitleSegurado = styled.h1`

h1{
  color: #FF5148;
  font-weight: bold;
  font-size: 50px;
  position: relative;
  left: -200px;
  top: 0px;
}
`;

export const ButtonNews = styled.div`
display: flex;
position: relative;
left: 190px;  
top: -15px;
justify-content: space-between;



>.segurado-header {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
`;

// ! ESTILIZAÇÃO DO MODAL

export const ModalIza = styled.div`
  border-radius: 100px 0px 0px 0px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;
export const ModalHeader = styled.div`
 background-color: #680265;
 color: white;
 height: 150px;
 border: none;
 left: -25px;
 top: -25px;
 position: relative;
 width: 810px;

 h2 {
   font-size: 25px;
   position: relative;
   left: 100px;
   top: 30px;
 }
`;
export const ModalCadastro = styled.div`

h3 {
   font-size: 18px;
   font-weight: bold;
   /* position: relative;
   left: 200px;
   top: 50px; */
 }

 div {
   font-size: 15px;
 }

`;

export const BadgePosition = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  left: 100px;
  top: 100px;

`;