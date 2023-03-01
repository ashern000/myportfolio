import { HeaderStyled, ListStyled, DivStyled } from "./styles";
import { FiGithub } from "react-icons/fi"

export default function Header() {

    return (
        <HeaderStyled>
            <DivStyled justifyContent="center" animationType="esmaecer">
                <div>
                <a href="https://github.com/ashern000" target="_blank"><FiGithub size={22} /></a>
                </div>
                <p><a href="#">Asher Novelli</a></p>
            </DivStyled>
            <ListStyled>

                <li>
                    <a href="#project">Projects</a>
                    <div></div>
                </li>

                <li>
                    <a href="#aboutme">About Me</a>
                    <div></div>
                </li>

                <li>
                    <a href="#contacts">Contacts</a>
                    <div></div>
                </li>

            </ListStyled>

            <DivStyled justifyContent="center" gap="70px" animationType="esmaecer">
               
                <a href="#">Info</a>

            </DivStyled>
        </HeaderStyled>
    )

}