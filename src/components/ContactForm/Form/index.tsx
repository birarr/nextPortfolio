import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../../services/sendMail';
import theme from '../../../styles/theme';
import { FormContainer, Input, TextArea } from '../styles';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      toast('Please, fill all the fields!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      await sendContactMail(name, email, message);
      setName('');
      setEmail('');
      setMessage('');

      toast('Email successfully sent', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });
    } catch (error) {
      toast('Error. Email not sent. Try again', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Message"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
      <button type="submit" disabled={loading}>
        SEND
      </button>
    </FormContainer>
  );
}
