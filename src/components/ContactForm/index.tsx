import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function ContactForm() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Do you need
            <br />
            some Frontend service?
          </>
        }
        description={
          <>
            Fill the form below
            <br />
            I'll contact you soon
          </>
        }
      />
      <Form />
    </Container>
  );
}

export default ContactForm;
