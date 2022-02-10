import styled from "styled-components";


export const ContainerSegurados = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 350px;
  top: 160px;
  width: 900px;
  height: auto;

h1 {
  font-size: 45px;
  font-weight: bold;
  color: #FF5148
}

`;
export const ContainerContent = styled.div`
  position: fixed;
  left: 350px;
  top: 150px

`;

export const LinkBack = styled.a`
font-size: 22px;
font-weight: bold;
color: #FF5148;
  /*/ TIRAR O SUBLINHADO */
text-decoration:none;
display: flex;
position: fixed;
left: 360px;
top: 620px;
height: auto;
cursor: pointer;
  transition: all .3s;
  &:hover {
    opacity: 0.9;
    transform: translateX(10px);
    color: #FF5148;
  }
`;

export const ButtonSave = styled.div`
display: flex;
position: fixed;
left: 820px;
top: 620px;
height: auto;
cursor: pointer;
  transition: all .3s;
  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
    color: white;
  }

`;


export const HeaderSegurados = styled.div`
display: flex;
position: fixed;
left: 900px;
top: 120px;
height: auto;

.h1 {
  color: #FF5148;

}

`;

