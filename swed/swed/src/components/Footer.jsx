import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { MailOutline, Phone, Room } from "@mui/icons-material";
const Container = styled. div`
    display: flex;
`
const Left = styled. div`
    flex:1;
    display: flex;
    flex-direction:column;
    padding:20px;
`
const Center = styled. div`
    flex:1;
    padding:20px;

`
const Right = styled. div`
    flex:1;
    padding:20px;
`
const Logo = styled.h1`

`
const Title = styled.h3`
    margin-bottom:30px;

`
const List = styled.ul`\

    padding:0px;
    margin:0px;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
    cursor:pointer;
`
const Desc = styled.p`
    margin:20px 0px;
`
const SocialContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:15px;

     &:hover{
    
    transform:scale(1.2);
    cursor:pointer;

    }
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
    cursor:pointer;
`
const Payment = styled.img`
    width:100%;

`
const Footer = () => {
  return (
 
      <Container>
        <Left>
            <Logo>
                CUET SMART MARKET
            </Logo>
            <Desc>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aspernatur nesciunt atque voluptatibus. Provident, maxime obcaecati optio possimus vero ipsa fugit fugiat? Vero saepe iusto ipsa ullam optio dolores reiciendis recusandae dicta in obcaecati!
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="25D366">
                    <WhatsAppIcon/>
                </SocialIcon>
            </SocialContainer>

        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms & Conditions</ListItem>
            </List>
        </Center>
        <Right>
                <Title>Contact Me</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>CSE,CUET</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>+0123456789</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>e-bazar@gmail.com</ContactItem>
                <Payment src="https://images.ctfassets.net/214q1nptnllb/78HUcQihPwOQNmOyg64Czk/f1491f5ca8121714e9eae7c65c2cf7f2/SumUp_Tap.svg"/>
        </Right>
      </Container>
    
  )
}

export default Footer
