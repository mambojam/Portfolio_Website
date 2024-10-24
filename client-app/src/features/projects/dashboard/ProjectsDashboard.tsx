import { Button, Container, Header, List, Segment } from 'semantic-ui-react'
import Project from '../../../app/domain/Project'

interface Props {
    projects : Project[];
    scrollToContact : () => void;
}
export default function ProjectsDashboard({projects, scrollToContact} : Props) {
  return (
    <Segment inverted vertical textAlign="center" className='masthead'>
        <Container style={{marginTop:'7em'}}>
            <Header inverted as='h1' content="My Projects" />
            <List>
            {projects.map((project : Project) => (
                <List.Item key={project.id}>
                    {project.title}
                </List.Item>
                ))}
            </List>
        </Container>
        <Container className="btnDiv">
          <Button className='nextPageBtn' size='huge' inverted content='Get in touch!' onClick={scrollToContact} />

        </Container>
    </Segment>
  )
}
