import { Container, Item } from "semantic-ui-react";

interface Props {
    image: string;
}
export default function TeckStackLogo({image} :Props) {
    
    // const image_text = image.replace("_", " ").replace(" Sharp", "#").toUpperCase();

  
    return (


    <Container textAlign="center">
        <Item>
            <Item.Image className="logo" src={`/stackLogos/${image}.svg`} />
            {/* <Item.Content>
                <Header inverted as='h4'>{image_text}</Header>
            </Item.Content> */}
        </Item>
    </Container>
    
  )
}
