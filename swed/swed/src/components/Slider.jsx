import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState,useEffect } from 'react';
import { sliderItems } from '../data';
const Container = styled.div`
        height:100vh;
        width:100%;
        display:flex;
        // background-color:coral;
        position:relative;
        overflow:hidden;
        // padding:20px;
    
`
const Arrow = styled.div`
        width:50px;
        height:50px;
        background-color:#fff7f7;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        position:absolute;
        top:0;
        bottom:0;
        left:${props=>props.direction==="left"&&"10px"};
        right:${props=>props.direction==="right"&&"10px"};
        margin:auto;
        cursor:pointer;
        opacity:0.5;
        z-index:2;

`
const Wrapper = styled.div`
        height:100%;
        display:flex;
        transform:translateX(${props=>props.slideIndex * -100}vw);
        transition: all 1.5s ease;
`
const Slide = styled.div`
        display:flex;
        align-items: center;
        height:100vh;
        width:100vw;
        background-color:#${props=>props.bg}
       


`
const ImgContainer = styled.div`
        flex:2;
        height:100%
`
const Image = styled.img`
        width:100%;
        height:80%%;

`
const InfoContainer = styled.div`
        flex:1;
        padding:50px ;
`
const Title = styled.h1`
        font-size:70px;
        
`
const Desc = styled.p`
        margin:50px 0px;
        font-size:20px;
        font-weight:500;
        letter-spacing:3px;
`
const Button = styled.button`
        padding:10px;
        font-size:20px;
        background-color:transparent;
        cursor:pointer;
        margin-left:170px;
`
const Slider = () => {
        const [slideIndex,setSlideIndex]=useState(0);
        const handleClick = (direction)  =>{
                if(direction==="left"){
                        setSlideIndex(slideIndex>0? slideIndex-1 : 2)
                }else{
                        setSlideIndex(slideIndex<2? slideIndex+1 : 0)
                }
        };
        useEffect(() => {
                const interval = setInterval(() => {
                  setSlideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
                }, 4000); 
                return () => clearInterval(interval);
              }, []);
  return (
    <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftIcon/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item=>(
                          <Slide bg={item.bg} key={item.id}>
                          <ImgContainer>
                               <Image src={item.img} />
                           </ImgContainer>
                           <InfoContainer>
                                   <Title>
                                          {item.title}
                                   </Title>
                                   <Desc>
                                           {item.desc}
                                   </Desc>
                                   <Button>
                                           SHOP NOW
                                   </Button>
                           </InfoContainer>
                       </Slide>
                ))}
          
            
            </Wrapper>
            <Arrow direction="right"onClick={()=>handleClick("right")}>
                <ArrowRightIcon/>
            </Arrow>
    </Container>
  )
}

export default Slider