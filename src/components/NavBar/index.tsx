import { Container, Div } from './styles'
import iconComunidade from '../../assets/icon-editor.svg'
import iconEditor from '../../assets/icon-comunidade.svg'
export function NavBar() {
  return (
    <Container>
      <h3>menu</h3>
      <Div>
        <img src={iconEditor} alt="" />
        <div>
          Editor de código
        </div>
      </Div>
      <Div>
        <img src={iconComunidade} alt="" />
        <div style={{ opacity: 0.56 }}>
          Comunidade
        </div>
      </Div>

    </Container>
  )
}
