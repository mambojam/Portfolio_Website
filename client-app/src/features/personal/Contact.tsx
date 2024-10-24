import { Segment, Container, Header, Button } from "semantic-ui-react";

interface Props {
  scrollToHome : () => void;
}
export default function Contact({scrollToHome} : Props) {
  return (
    <Segment inverted vertical textAlign="center" className='masthead'>
        <Container style={{marginTop:'7em'}}>
            <Header inverted as='h1' content="Contact me page" />
        </Container>
        <Container className="btnDiv">
          <Button className='nextPageBtn' size='huge' inverted content='Take me home!' onClick={scrollToHome} />

        </Container>
    </Segment>
  )
}
