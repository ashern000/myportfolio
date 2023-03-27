import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 11vh;
  display: flex;
  position: fixed;
  z-index: 4;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background: rgba(0, 0, 0, 0.35);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(0, 220, 0, 0.10);
`;

export const DivStyled = styled.div`
  width: 30%;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => (props.gap ? props.gap : 0)};
  animation: ${(props) => (props.animationType ? props.animationType : null)}
    1.25s 1 alternate ease-in-out;
  color: #0f0;
  align-items: center;
  z-index: 4;
  font-weight: 100;
  margin-top: 6px;

  @keyframes esmaecer {
    0% {
      filter: brightness(0);
      color: none;
    }
    100% {
      filter: brightness(0.9);
      color: #0f0;
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 130px;
    height: 30px;
    color: #0f0;
    border-radius: 10px;
    border: 0;
    font-size: 1rem;
    font-weight: 300;
    transition: 0.7s;
  }

  a:hover{
    filter: brightness(0.7);
  }

  div{
        a{
            background-color: transparent;
        }
        a:hover{
            background-color: transparent;
        }

        svg{
            display: flex;
            transition: all 0.45s;
            color: #0f0;
        }

        svg:hover{
            transform: scale(1.5, 1.5);
            filter: brightness(0.7);
        }
  }
`;

export const MyLink = styled.a``;

export const ListStyled = styled.ul`
margin-top: 4px;
  width: 40%;
  color: #0f0;
  display: flex;
  list-style: none;
  font-weight: 400;
  justify-content: space-around;
  align-items: center;

  li {
    text-align: center;
    a {
      color: #0f0;
      text-decoration: none;
      font-size: 1.15rem;
    }

    div {
      width: 100%;
      height: 2px;
      background: none;
      transition: 0.5s;
    }

    a:hover + div {
      width: 100%;
      height: 2px;
      background: green;
    }

    a:hover {
      filter: brightness(0.65);
      transition: 0.5s;
    }
  }

  li:nth-child(1) {
    animation: surgir1 1s 0.25s 1 alternate;
  }

  li:nth-child(2) {
    animation: surgir1 1s 0.4s 1 alternate;
  }

  li:nth-child(3) {
    animation: surgir1 1s 0.4s 1 alternate;
  }

  @keyframes surgir1 {
    0% {
      transform: translate(0, -300px);
    }

    100% {
      transform: translate(0, 0);
    }
  }
`;
