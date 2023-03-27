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
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import {FaWhatsapp} from "react-icons/fa"
import asher from "../../assets/asher.jpg";

let counter = 0;

export default function Home() {
  const [pic, setPic] = useState(require("../../assets/ubuntu.png"));

  function setPicF() {
    counter++;
    if (counter === 1) {
      setPic(require("../../assets/Lubuntu.png"));
    }
    if (counter === 2) {
      counter = 0;
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
        <h1>Technologies I use!</h1>
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
          <p>I'm a young programmer passionate about the area, I entered this world very young, with only 12 years old, performing maintenance on Hardware components. Over time, I ended up developing a passion for web programming, from prototyping layouts to creating back-end systems and server configurations.
 </p>
 <p>I currently have the ability to create interfaces with ReactJs, using the backend with nodeJs, starting from NextJs to Express.
About operating systems, I use the Ubuntu distro on a daily basis; I created automation scripts for tasks I needed, such as updating the list of repositories and programs installed on the machine (using systemd).</p>
        </TextAboutMe>

        <ImgAsher src={asher} />

        <div></div>
      </FourSection>

      <FiveSection id="contacts">
      
        <ContactsDiv>
        <a href="https://www.linkedin.com/in/asher-novelli-310475244/" target="_blank">LinkedIn</a >
          <FiLinkedin size={95} color="#0c0"/>
        </ContactsDiv>
        
        <ContactsDiv>
        <a href="#" target="_blank">WhatsApp</a >
        <FaWhatsapp size={95} color="#0c0"/>
        </ContactsDiv>

        <ContactsDiv>
          <a href="https://www.instagram.com/ares_asher/" target="_blank">Instagram</a >
          <FiInstagram size={95} color="#0c0"/>
        </ContactsDiv>
      
      </FiveSection>
    </>
  );
}
