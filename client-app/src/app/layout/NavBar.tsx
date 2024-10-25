import { Container, Icon, Menu, } from "semantic-ui-react";

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
                <img src="/letter-h.png" />
                
            </Menu.Item>
           
            <Menu.Item name='About' onClick={scrollToAbout} />
            <Menu.Item name='Projects' onClick={scrollToProjects}/>
            <Menu.Item name='Contact' onClick={scrollToContact} /> 
          
            <Menu.Item position="right" >
                <a href="https://github.com/mambojam" className="socialsIconLink">
                    <Icon name='github' size='large'/>
                </a>
            
                <a href="https://www.linkedin.com/in/harry-jacobs-8546b7198/" className="socialsIconLink">
                    <Icon name='linkedin' size='large'/>
                </a>
                
            </Menu.Item>
        </Container>   
    </Menu>
  )
}
