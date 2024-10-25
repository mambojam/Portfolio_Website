import { ChangeEvent, useRef, useState } from "react";
import { Header, Button, Form, Grid} from "semantic-ui-react";
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();
  
  const initialMessage = {
    contactName: '',
    contactDetails: '',
    messageDetails: '',
    messageSubject: '',
    timeSubmitted: ''
}
  const [message, setMessage] = useState(initialMessage);

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = event.target;
    setMessage({...message, [name]: value})
  }

  const sendEmail = () => {
    emailjs
      .send(import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        contactName: message.contactName,
        contactDetails: message.contactDetails,
        messageDetails: message.messageDetails,
        messageSubject: message.messageSubject,
        timeSubmitted: new Date().toLocaleString()
      }, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        alert('Email sent successfully!');
    })
    .catch((error) => {
        console.error('Failed to send email:', error);
    });
};
  return (
    <Grid l className="masthead">
      <Grid.Row>
      <Header as='h1' inverted className="pageHeader">Contact</Header>

      </Grid.Row>
      <Grid.Column  width='6'>
      <p  >
        I'd love to hear from visitors their thoughts on the site, particularly from other developers. So please feel free to provide some feedback for me!
        If you have any questions you'd like to ask about the site, any of my projects or anything else, please do get in touch here or reach out to me on <a href="https://www.linkedin.com/in/harry-jacobs-8546b7198/">LinkedIn</a>.
        You can also follow me and keep up-to-date with ongoing projects via my <a href="https://github.com/mambojam">GitHub</a> account.
      </p>
      </Grid.Column>
      <Grid.Column  width='10'>
      <Form ref={form} onSubmit={sendEmail} autoComplete='off'>

        <Form.Input name='contactName' placeholder='Please enter your name here..' onChange={handleInputChange} />
        <Form.Input name='contactDetails' placeholder='Please enter contact details here..' onChange={handleInputChange} />
        <Form.Input name='messageSubject' placeholder='Please enter message subject here..' onChange={handleInputChange} />
        <Form.TextArea name='messageDetails' placeholder='Please write me a message or ask me a question here..' onChange={handleInputChange} />
        
        <Button floated='right' positive type='submit' content='Submit' />
        <Button to='/activities' negative floated='right' type='button' content='Clear' />
    </Form>
      </Grid.Column>
    </Grid>
   
  )
}
