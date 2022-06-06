import { Container, Right, Center, Left } from "./styles";

import Logo from "../../assets/logo.svg";
import Avatar from "../../assets/photo.png";
export function Header() {

  return (
    <Container>

      <Left>
        <img src={Logo} alt="" />
      </Left>
      <Center>
        <input type="text"
          placeholder="Busque por algo" />
      </Center>
      <Right>
        <img src={Avatar} alt="" />
        <span>Harry</span>

      </Right>

    </Container>
  )
}