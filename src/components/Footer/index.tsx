import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

function handleRedirect(url: string) {
  window.open(url);
}

function Footer() {
  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Back to the top
        </button>
        <section>
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://linkedin.com')}
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
