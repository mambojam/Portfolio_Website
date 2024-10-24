import { Container, Grid,  Header,  Icon } from "semantic-ui-react";


export default function About() {
  return (
   
    
        
        <Grid   className="masthead">
          <Grid.Row >
          <Header as='h1'  className="pageHeader">About</Header>
          </Grid.Row>
          <Grid.Column width='6'>
          
              <Icon inverted name='user' size='massive'/>
              <p style={{color:'white'}} >
              Hey, I'm Harry! Welcome and thank you for visiting my site!
              I'm a full stack web developer from Cardiff, currently working in Application Support on a placement year
              as part of my MSc Computing at Cardiff University. 
              I'm passionate about problem-solving and continuous personal development with the mindset that,
              there's always moe to learn and ways to improve. I like to apply that philosophy in both my personal and 
              professional life, mentally and physically
              </p>
            
            
          </Grid.Column>
          <Grid.Column width='10'>           
            <Container className='logo-container'>
              <div className="logo-wrapper">
                <img className="logo html" src="/stackLogos/HTML5.svg"/>
              </div>
              <div className="logo-wrapper">
                <img className="logo net" src="/stackLogos/.NET.svg"/>
              </div>
              <div className="logo-wrapper">
                <img className="logo cs" src="/stackLogos/C_Sharp.svg"/>
              </div>
              <div className="logo-wrapper">
                <img className="logo react" src="/stackLogos/React.svg"/>
              </div>
              <div className="logo-wrapper">
                <img className="logo css" src="/stackLogos/CSS3.svg"/>
              </div>
              <div className="logo-wrapper">
                <img className="logo ts" src="/stackLogos/Typescript.svg"/>
              </div>
            </Container>      
          </Grid.Column> 
        </Grid>
        
            

  
    
  )
}
