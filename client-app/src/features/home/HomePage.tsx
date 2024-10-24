import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";

interface Props {
  scrollToAbout: () => void;
}
export default function HomePage({scrollToAbout}:Props) {
  return (
    <Segment inverted textAlign='center' vertical className="masthead home">
        <Container text>
        <Header as='h1' inverted >
          {/* <Icon name='user' size='massive' style={{marginBottom: 12, marginRight: 10}} /> */}
            Hey there! I'm <span className="boldHeader">Harry</span>         
        </Header>
        <Header as='h2' inverted content="I'm a Full-Stack Web Developer, based in Cardiff" />
        
        </Container>
        <Container className="btnDiv">
          <Button className='nextPageBtn' size='huge' inverted onClick={scrollToAbout} >
          See my work!
          <Icon style={{marginLeft:'10vw !important'}} name="arrow down"/>
          </Button>

        </Container>
    </Segment>
  )
}
