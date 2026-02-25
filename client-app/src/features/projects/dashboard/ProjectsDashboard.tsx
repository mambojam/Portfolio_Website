import { Grid, Header, List } from 'semantic-ui-react'
import Project from '../../../app/domain/Project'

interface Props {
    projects : Project[];
}
export default function ProjectsDashboard({projects} : Props) {
  return (
  

        <Grid className="masthead">
        <Grid.Row >
        <Header as='h1' inverted className="pageHeader">Projects</Header>
        </Grid.Row>
        <Grid.Column  width='8'>

        <List>
            {projects.map((project : Project) => (
                <List.Item as='h2' key={project.id}>
                    {project.title}
                </List.Item>
                ))}

                <List.Item as='h2'>...Details Coming Soon!!</List.Item>
        </List>

        
        </Grid.Column>
        <Grid.Column width='10'>           
        
        </Grid.Column> 
        </Grid>
  )
}
