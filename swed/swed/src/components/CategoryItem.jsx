
import styled from "styled-components"
import { Link } from "react-router-dom";
const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;
    margin-bottom:35px;
    opacity:0.8;
    &:hover{
    opacity:1;
    }
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
const Info = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
`
const Title= styled.h1`
    color:black;
    font-weight:500;
 
  align-items: center; 
  justify-content: center; 
  margin: auto;
  height: 40px;
  width:250px;
  text-align: center; 
  font-weight:200;
  color:white;
  background-color:teal;
//border: 2px solid #000;
  opacity:0.9;
  border-radius:50px;

`
const Button = styled.button`
    border:none;
    padding:10px;
    background-color:blue;
    color:white;
    cursor:pointer;
    font-weight:600;
      &:hover{
  
`

const CategoryItem = ({item}) => {
  return (
    <Container>
       <Title>{item.title}</Title> 
        <Link to ={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            {/* <Title>
                {item.title}
            </Title> */}
            {/* <Button>
                SHOP NOW
            </Button> */}
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem
