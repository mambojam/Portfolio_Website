import { Container, Icon, Menu } from "semantic-ui-react";

interface Props {
    scrollToHome: () => void;
    scrollToAbout: () => void;
    scrollToProjects: () => void;
    scrollToContact: () => void;
}
export default function NavBar({scrollToHome, scrollToAbout, scrollToContact, scrollToProjects} : Props) {
  return (
    <Menu inverted>
        <Container>
            <Menu.Item header onClick={scrollToHome}>
                {/* <img src="/assets/logo.png" alt="ProjectsLogo" /> */}
                <Icon name='user' size='large'/>
                Harry Jacobs
            </Menu.Item>
            <Menu.Item name='About' onClick={scrollToAbout} />
            <Menu.Item name='Projects' onClick={scrollToProjects}/>
            <Menu.Item name='Contact' onClick={scrollToContact} /> 
          
            <Menu.Item position="right">
                <Icon name='github' size='large'/>
                <Icon name='linkedin' size='large'/>
            </Menu.Item>
        </Container>   
    </Menu>
  )
}
