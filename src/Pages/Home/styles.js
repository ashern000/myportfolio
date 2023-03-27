import styled from "styled-components";
import pic from "../../assets/worldBites.jpg";
import picTwo from "../../assets/codes.webp"

export const FirstSection = styled.section`
  width: 100%;
  height: 99vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 50px;
  background-color: #000000;
  background-image: linear-gradient(
    43deg,
    #000000 0%,
    #121112 46%,
    #000000 100%
  );
  color: #fff;
  div:first-child {
    position: absolute;
    background-color: #0f0;
    left: 30px;
    height: 50%;
    width: 1px;
  }

  div:last-child {
    position: absolute;
    background-color: #0f0;
    right: 30px;
    height: 50%;
    width: 1px;
  }

  @media(min-width: 1024px) and (max-width: 1200px){
    justify-content: center;
  }
`;

export const AboutMe = styled.article`
  height: 80%;
  padding-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  word-break: break-all;

  h1{
    font-size: 4rem;
    font-weight:700;
    letter-spacing: -0.5px;
    word-spacing: -0.5px;
  }

  h2{
    font-size: 1.5rem;
    word-spacing: -1px;
    letter-spacing: 0.2px;
    font-style: italic;
    font-weight: 400;
  }
  
`;

export const AboutMeTwo = styled.article`
  height: 80%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  img {
    width: 50%;
    
    animation: surgir 0.95s 1 ease alternate;
   
  }

  img:hover {
    animation: pulsar 0.95s infinite ease alternate;
    transition: 2.5s;
  }

  @keyframes pulsar {
    0% {
      transform: scale(0.75, 0.75);
    }

    100% {
      transform: scale(1, 1);
    }
  }

  @keyframes surgir {
    0% {
      transform: scale(0.75, 0.75);
    }
    50% {
      transform: scale(1.05, 1.05);
    }

    100% {
      transform: scale(1, 1);
    }
  }
`;

export const SecondarySection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-image: url(${pic});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;

  ::before {
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgb(10, 10, 10, 0.83);
    position: absolute;
  }

  h1 {
    z-index: 3;
    color: white;
    position: relative;
    top: 110px;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 1.5px;
    word-spacing: 2px;
  }
`;

export const DivTech = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: row;
`;

export const ItensTech = styled.div`
  display: flex;
  width: 27.5%;
  height: 380px;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  z-index: 2;
  font-weight: 300;
  color: white;
  font-size: 1.02rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  border: 1px solid rgba(30, 130, 30, 0.23);

 
  @keyframes rotateImage {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

`;

export const ImgStyled = styled.img`
  width: 200px;
  height: 200px;
  animation: ${props => props.animationType} ${props => props.durationAnimation ? props.durationAnimation : "7.7s"} ease-in-out infinite;
  transition: 0.5s all;

  @keyframes rotateImage {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotateImageReverse{
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes linuxImage{
    0%{
        transform: rotateY(0deg);
    }

    100%{
    transform: rotateY(360deg);
  }

}

  :hover{
    transition: 0.5s all;
    animation:rotateImageTwo 1 1.5s alternate ease;
  }


  @keyframes rotateImageTwo {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ThirdSection = styled.section`
  width: 100%;
  height: 99vh;
  background-color: #000000;
  background-image: linear-gradient(
    -36deg,
    #000000 0%,
    #121112 46%,
    #000000 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const LineDivOne = styled.div`
  position: absolute;
  background-color: #0f0;
  left: 140px;
  top: -250px;
  height: 70%;
  width: 1px;
  transform: rotate(45deg);
`;

export const LineDivTwo = styled.div`
  position: absolute;
  background-color: #0f0;
  right: 30px;
  height: 75%;
  width: 1px;
  bottom: -130px;
  transform: rotate(45deg);
`;

export const ProjectsDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  
  ul{
    list-style: none;
  }
`;
export const TextProject = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  p:nth-child(1) {
    font-size: 3.4rem;
  }

  p:first-letter {
    font-size: 4rem;
    color: #0f0;
  }
`;


export const FourSection = styled.section`
width: 100%;
height: 99.5vh;
display: flex;
z-index: 3;
justify-content: space-evenly;
align-items: center;
background-image: url(${picTwo});
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
::before{
    width: 100%;
    height: 100%;
    content:"";
    background-color: rgb(2,2,2,0.9);
    position: absolute;
    
}

  div:first-child {
    position: absolute;
    background-color: #0f0;
    left: 30px;
    height: 50%;
    width: 1px;
  }

  div:last-child {
    position: absolute;
    background-color: #0f0;
    right: 30px;
    height: 50%;
    width: 1px;
  }
`

export const TextAboutMe = styled.div`
width: 42.5%;
z-index: 3;
gap: 10.5px;
word-spacing: -1px;
letter-spacing: 1px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
text-indent: 7.5%;
color: #FFF;
flex-direction: column;
font-style: italic;
font-weight: 300;
font-size: 1.3rem;
text-align: justify;

@media(min-width: 1024px) and (max-width:1200px){
  font-size: 1.1rem;  
  width: 50%;
}

@media(min-width:1201px) and (max-width:1300px){
  width: 50%;
  font-size:1.075rem ;
}
`


export const ImgAsher = styled.img`

border-radius: 100%;
z-index: 2;
filter: brightness(0.85);
border: 2px solid #090;
width:25%;
height: auto;

`

export const FiveSection = styled.section`
width: 100%;
height: 100vh;
display:flex;
justify-content: space-around;
align-items: center;
background-color: #000000;
  background-image: linear-gradient(
    43deg,
    #000000 0%,
    #121112 46%,
    #000000 100%
  );

`

export const ContactsDiv = styled.div`

width: 270px;
height: 270px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
background: rgba(0, 0, 0, 0.59);
border-radius: 10rem;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(16.1px);
-webkit-backdrop-filter: blur(16.1px);
border:1px solid rgba(0, 255, 0, 0.18);
transition: 0.25s all;

a{
  display: none;
  opacity: 0;
  font-weight: 300;
  font-size: 1.75rem;
}
:hover{
  background: rgba(10, 10, 10, 0.75);
  border:1px solid rgba(0, 0, 0, 0.85);

a{
  text-decoration: none;
  display: inline;
  opacity: 1;
  transition: 0.45s;
  color: #0F0;
}

a:hover{
  transform: scale(1.05,1.05);
}
  svg{
    transition: 0.45s;
    display: none;
  }

  @media(min-width: 1024px) and (max-width: 1200px){
  background-color: blue;
  
  }
 
}
`