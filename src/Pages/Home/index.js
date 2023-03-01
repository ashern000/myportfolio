import {
  FirstSection,
  AboutMe,
  AboutMeTwo,
  SecondarySection,
  DivTech,
  ItensTech,
  ThirdSection,
  LineDivOne,
  LineDivTwo,
  ProjectsDiv,
  TextProject,
  ImgStyled,
  FourSection,
  TextAboutMe,
  ImgAsher,
  FiveSection,
  ContactsDiv
} from "./styles";
import { useState } from "react";
import react from "../../assets/React.png";
import linux from "../../assets/Linux.png";
import node from "../../assets/node.png";
import { FiInstagram, FiLinkedin, FiPhone, FiZap } from "react-icons/fi";
import asher from "../../assets/asher.jpg";

let contador = 0;

export default function Home() {
  const [pic, setPic] = useState(require("../../assets/ubuntu.png"));

  function setPicF() {
    contador++;
    if (contador === 1) {
      setPic(require("../../assets/Lubuntu.png"));
    }
    if (contador === 2) {
      contador = 0;
      setPic(require("../../assets/ubuntu.png"));
    }
  }

  return (
    <>
      <FirstSection>
        <div></div>
        <AboutMe>
          <h1>Asher Novelli</h1><h2>FullStack Developer</h2>
        </AboutMe>
        <AboutMeTwo>
          <img src={pic} onMouseDown={setPicF} width={300} alt="Linux" />
        </AboutMeTwo>
        <div></div>
      </FirstSection>

      <SecondarySection>
        <h1>Tecnologias que uso!</h1>
        <DivTech>
          <ItensTech>
            <ImgStyled
              animationType="rotateImage"
              src={react}
              durationAnimation="61s"
            />
            <div>
              <p>React JS</p>
              <p>For Front-end</p>
            </div>
          </ItensTech>

          <ItensTech>
            <ImgStyled src={linux} alt="Linux" animationType="linuxImage" />
            <div>
              <p>Linux</p>
              <p>For Servers, Automation and CyberSecurity</p>
            </div>
          </ItensTech>

          <ItensTech>
            <ImgStyled
              src={node}
              alt="Node"
              animationType="rotateImageReverse"
              durationAnimation="61s"
            />
            <div>
              <p>Node JS</p>
              <p>For Back-end</p>
            </div>
          </ItensTech>
        </DivTech>
      </SecondarySection>

      <ThirdSection>
        <LineDivOne />

        <ProjectsDiv id="project">
          <TextProject>
            <p>Projects</p>
          </TextProject>

          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
            <li>Project 4</li>
            <li>Project 5</li>
          </ul>
        </ProjectsDiv>

        <LineDivTwo />
      </ThirdSection>

      <FourSection id="aboutme">
        <div></div>

        <TextAboutMe>
          <p>So um jovem programador apaixonado pela área. , entrei para esse mundo bem novo, com apenas 12 anos, realizando manutenção em componentes de Hardware. Com o passar do tempo, acabei criando uma paixão por programação Web, desde a prototipação de Layouts até a criação de sistemas back-end e configurações de servidores. </p>
        </TextAboutMe>

        <ImgAsher src={asher} />

        <div></div>
      </FourSection>

      <FiveSection id="contacts">
      
        <ContactsDiv>
          <FiLinkedin size={95} color="#0c0"/>
        </ContactsDiv>
        
        <ContactsDiv>
        <FiPhone size={95} color="#0c0"/>
        </ContactsDiv>

        <ContactsDiv>
          <FiInstagram size={95} color="#0c0"/>
        </ContactsDiv>
      
      </FiveSection>
    </>
  );
}
