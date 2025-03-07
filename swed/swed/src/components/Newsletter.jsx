import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';
const Container = styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`
const Title = styled.div`
    font-size:70px;
    margin-bottom:20px;
`
const Desc = styled.div`
    font_size:20px;
    font-weight:300;
    margin-bottom:20px;
`
const InputContainer = styled.div`
    width: 50%;
    height:40px;
    backgruond-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;
`
const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`
const Button = styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
`

const Newsletter = () => {
  return (
    <div>
      <Container>
        <Title>Updates</Title>
        <Desc>Get Timely Updates From Your Favourite Products</Desc>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
      </Container>
    </div>
  )
}

export default Newsletter
