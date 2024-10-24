import { ChangeEvent, useState } from "react";
import { Header, Button, Form, Grid} from "semantic-ui-react";
import { Message } from "../../app/domain/Message";

interface Props {
   submitForm: (message : Message) => void
}
export default function Contact({submitForm} : Props) {

  const initialMessage = {
    contactName: '',
    contactDetails: '',
    messageDetails: '',
    timeSubmitted: ''
}
  const [message, setMessage] = useState(initialMessage);

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = event.target;
    setMessage({...message, [name]: value})
  }

  function handleSubmit() {
    submitForm(message);
  }
  return (
    <Grid l className="masthead">
      <Grid.Row>
      <Header as='h1' inverted className="pageHeader">Contact</Header>

      </Grid.Row>
      <Grid.Column  width='6'>
      <p  >
        I'd love to here from visitors their thoughts on the site, particularly from other developers. So please feel free to provide some feedback for me!
        If you have any questions you'd like to ask about the site, any of my projects or anything else, please do get in touch her or reach out to me on <a href="https://www.linkedin.com/in/harry-jacobs-8546b7198/">LinkedIn</a>.
        You can also follow me and keep up-to-date with ongoing projects via my <a href="https://github.com/mambojam">GitHub</a> account.
      </p>
      </Grid.Column>
      <Grid.Column  width='10'>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input name='contactName' placeholder='Please enter your name here..' onChange={handleInputChange} />
        <Form.Input name='contactDetails' placeholder='Please enter contact details here..' onChange={handleInputChange} />
        <Form.TextArea name='messageDetails' placeholder='Please write me a message or ask me a question here..' onChange={handleInputChange} />
        
        <Button floated='right' positive type='submit' content='Submit' />
        <Button to='/activities' negative floated='right' type='button' content='Clear' />
    </Form>
      </Grid.Column>
    </Grid>
   
  )
}
