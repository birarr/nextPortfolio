import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import profilePng from '../../assets/profilePngNoBackground.png';

function HomeHero() {
  return (
    <Container>
      <img src={profilePng} alt="" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Ubiratan</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">##Minha Apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Ubiratan,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Rodrigues</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev Frontend,</span>
            </div>
            <div>
              Empresa: <span className="blue">Jungle Devs</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
