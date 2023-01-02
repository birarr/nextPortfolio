import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import profilePng from '../../assets/profilePngNoBackground.png';
import profileBlinkPng from '../../assets/profileBlink.png';

function HomeHero() {
  return (
    <Container>
      <div className="images">
        <img src={profilePng} className="img1" alt="profile pic" />
        <img src={profileBlinkPng} className="img2" alt="blink profile pic" />
      </div>
      <div>
        <TextContainer>
          <h1>Hello,</h1>
          <h2>My name is Ubiratan</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">// My presentation</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              name: <span className="blue">Ubiratan,</span>
            </div>
            <div>
              lastName: <span className="blue">Rodrigues</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Function: <span className="blue">Dev Frontend,</span>
            </div>
            <div>
              Company: <span className="blue">Appy Apps</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
