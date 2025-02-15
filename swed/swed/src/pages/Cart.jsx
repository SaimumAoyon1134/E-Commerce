import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Add from "@mui/icons-material/Add"
import Remove from "@mui/icons-material/Remove"
import { popularProducts } from "../data"
import { useSelector } from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { useEffect, useState } from "react"
import { use } from "react"
import { userRequest } from "../requestMethod"
import {useNavigate } from "react-router-dom"
// import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/cartAction"
import {addProduct,removeProduct,increaseQuantity,decreaseQuantity} from "../redux/cartRedux"
import clearCart from "../redux/cartRedux"
import { useDispatch } from "react-redux"
const KEY =  "pk_test_51QSOwkD8lygotTYmp1ID77Mm8JeoxvrZhoLO81hIo8TV3FnqGlF151ngcoBle83FKzB2AtImQf1eFSmpOiv9GIQt00kZfzRz39";
const Container = styled.div`
    padding:20px;
`
const Wrapper = styled.div`
    padding:20px;
`
const Title = styled.h1`
    font-weight:300;
    text-align:center;
`
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`
const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${props=>props.type==="filled"&&"none"};
    background-color:${props=>props.type==="filled" ? "black": "transparent"};
    color:${props=>props.type==="filled"&&"white"};
    border-radius:10px;
`
const TopTexts = styled.div`

`
const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`
const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
`
const Info = styled.div`
    flex:3;
`
const Summery = styled.div`
    flex:1;
    background-color:rgba(0,0,0,0.1);
    padding-left:10px;
    padding-right:10px;
    border:0.5px solid gray;
    height:50vh;
    position:sticky;
    top:0;
    margin-left:10px;
`
const ProductDetail = styled.div`
    flex:2;
    display:flex;
`
const PriceDetail = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

`
const ProductAmountContainer = styled.div`
    display:flex;
    align-content:center;
    margin-bottom:20px;
  
`
const Product = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:10px;
    opacity:1;
    &:hover{
      
        opacity:1;
        cursor:pointer;
        //border:1px solid black;
        border-radius:5px;
        background-color:#FFF8DE;
        //opacity:0.2;
    }
`
const Image = styled.img`
    width:200px;
    z-index:2;
`
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.span`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color}
`
const ProductSize = styled.span`
    
`
const ProductAmount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:250;
`
const Hr = styled.hr`
    background-color:black;
`
const SummeryTitle = styled.h1`
  

`
const SummeryItem= styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type==="total" && "500"};
    font-size:${props=>props.type==="total" && "24px"};
`
const SummeryItemText = styled.span`

`
const SummeryItemPrice= styled.span`

`
const Button = styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;
    border-radius:10px;

`
// const Cart = () => {
//     const cart =useSelector(state=>state.cart);
//     const [stripeToken, setStripeToken]=useState(null);
//     const history= useNavigate();
//     const onToken = (token)=>{
//         setStripeToken(token);
//     }
//     //console.log(stripeToken);
//     useEffect(()=>{
//         const makeRequest =async()=>{
//             try{
//                 const res = await userRequest.post("/checkout/payment",{
//                     tokenId:stripeToken.id,
//                     amount:cart.total*100,
//                 });
               
           
        
//             //    history.push("/success", { data: res.data }); 
//             history("/success", { state: { data: res.data } });
//           console.log("yes");
      
//             }catch{
//                 console.log("Payment error");
//             }
        
//         };
//         stripeToken && cart.total>=1 && makeRequest();
//     },[stripeToken,cart.total,history]);
//   return (
//     <Container>
//         <Navbar/>
//         <Announcement/>
//          <Wrapper>
//             <Title>
//                 YOUR BAG HERE
//             </Title>
//             <Top>
//                 <TopButton>Continue Shopping</TopButton>
//                 <TopTexts>
//                     <TopText>Shopping Bag(2)</TopText>
//                     <TopText>Wishlist(0)</TopText>
//                 </TopTexts>
//                 <TopButton type="filled">Checkout Now</TopButton>
//             </Top>
//             <Bottom>
//                 <Info>
//                 {cart.products.map(item=>(
//                     <Product>
//                         <ProductDetail>
//                             <Image src= {item.img}/>
//                             <Details>
//                                 <ProductName><b>Product: </b>{item.name}</ProductName>
//                                 <ProductId><b>Product Id: </b>{item._id}</ProductId>
//                                 <ProductColor color={item.color}/>
//                                 <ProductSize><b>Size: </b>{item.size}</ProductSize>

//                             </Details>
//                         </ProductDetail>

//                         <PriceDetail>
//                             <ProductAmountContainer>
//                                 <Add/>
//                                 <ProductAmount>{item.quantity}</ProductAmount>
//                                 <Remove/>
//                             </ProductAmountContainer>
//                             <ProductPrice>{item.price*item.quantity}TK</ProductPrice>
//                         </PriceDetail>
                        
//                     </Product>
                    
                    
                    
//                 ))}
               
                    
//                 </Info>
//                 <Summery>
//                     <SummeryTitle>Order Summary</SummeryTitle>
//                     <SummeryItem>
//                         <SummeryItemText>Sub Total</SummeryItemText>
//                         <SummeryItemPrice>{cart.total}TK</SummeryItemPrice>
//                     </SummeryItem>
//                     <SummeryItem>
//                         <SummeryItemText>Estimated Shipping</SummeryItemText>
//                         <SummeryItemPrice>$0</SummeryItemPrice>
//                     </SummeryItem>
//                     <SummeryItem>
//                         <SummeryItemText>Discount</SummeryItemText>
//                         <SummeryItemPrice>-$0</SummeryItemPrice>
//                     </SummeryItem>
//                     <SummeryItem type="total">
//                         <SummeryItemText >Total</SummeryItemText>
//                         <SummeryItemPrice>{cart.total}TK</SummeryItemPrice>
//                     </SummeryItem>
//                     <StripeCheckout 
//                      name='CUET E-Bazar'
//                      //image='https://scontent.fdac146-1.fna.fbcdn.net/v/t39.30808-6/465039348_1114128644049931_7258405524571724906_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFURpEjFzKRIvEqnRBHSpZRy_maUIyI3lrL-ZpQjIjeWkmoI7Rk9Vefa3kkLmiq1ypWjX7IS2b4jhx7OefZmtUk&_nc_ohc=zbKOFTcyFYwQ7kNvgF2ZLr2&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_gid=AEN4GRtsNiSbpn_7t5ynbup&oh=00_AYBFRgeWzVVIBFiGvuiXTh2dmxie5s7c2Jnqr2WxtxpfXA&oe=6757B9BE'
//                     image ='https://cdn.dribbble.com/users/6481365/screenshots/15907287/media/49902be5f09602c3214b9cde2c4f672f.jpg'
//                      billingAddress
//                      shippingAddress
//                      description={`Your total is ${cart.total}Taka`}
//                      amount={cart.total*100} // Amount in cents (2000 cents = 20 dollars)
//                      token={onToken}
//                      stripeKey={KEY}>
                   
//                     </StripeCheckout>
//                 </Summery>
//             </Bottom>
//          </Wrapper>
//         <Footer/>
//     </Container>
//   )
// }

// export default Cart

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
const Cart = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch(); // Hook for dispatching actions
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();
  
    const onToken = (token) => {
      setStripeToken(token);
    };
  
    useEffect(() => {
      const makeRequest = async () => {
        try {
          const res = await userRequest.post("/checkout/payment", {
            tokenId: stripeToken.id,
            amount: cart.total * 100,
          });
         
          history("/success", { state: { data: res.data } });
        } catch {
          console.log("Payment error");
        }
      };
      if (stripeToken && cart.total >= 1) {
        makeRequest();
      }
     
    }, [stripeToken, cart.total, history]);
  
    // Event handlers for adding/removing items
    const handleIncrease = (productId) => {
      dispatch(increaseQuantity(productId)); // Dispatch action to increase quantity
    };
  
    const handleDecrease = (productId) => {
      dispatch(decreaseQuantity(productId)); // Dispatch action to decrease quantity
    };
  
    const handleRemove = (productId) => {
      dispatch(removeProduct(productId)); 
    
      
   // Dispatch action to remove item from cart
    };
    // const handleRemoveAll = () => {
    //     dispatch(clearCart()); 
    // }
   
    return (
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>YOUR BAG HERE</Title>
          <Top>
            <TopButton >Continue Shopping</TopButton>
            <TopTexts>
              <TopText>Shopping Bag({cart.products.length})</TopText>
             
            </TopTexts>
            {/* <TopButton type="filled">Checkout Now</TopButton> */}
          </Top>
          <Bottom>
            <Info>
              {cart.products.map((item) => (
                <Product key={item._id}>
                  <ProductDetail>
                    <Image src={item.img} />
                    <Details>
                      <ProductName>
                        <b>Product: </b>{item.title}
                      </ProductName>
                      <ProductId>
                        <b>Product Id: </b>{item._id}
                      </ProductId>
                      <ProductColor color={item.color} />
                      <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
                    </Details>
                  </ProductDetail>
  
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add onClick={() => handleIncrease(item._id)} />
                      <ProductAmount>{item.quantity}</ProductAmount>
                      <Remove onClick={() => handleDecrease(item._id)} />
                    </ProductAmountContainer>
                    <ProductPrice>{item.price * item.quantity}TK</ProductPrice>
                    {/* <button onClick={() => handleRemove(item._id)}>Remove</button> */}
                    <TopButton type="filled" onClick={() => handleRemove(item._id)}>Remove</TopButton>
                  </PriceDetail>
                </Product>
              ))}
              {/* <button onClick={() => handleRemoveAll()}>Remove</button> */}
            </Info>
  
            <Summery>
              <SummeryTitle>Order Summary</SummeryTitle>
              <SummeryItem>
                <SummeryItemText>Sub Total</SummeryItemText>
                <SummeryItemPrice>{cart.total}TK</SummeryItemPrice>
              </SummeryItem>
              <SummeryItem>
                <SummeryItemText>Estimated Shipping</SummeryItemText>
                <SummeryItemPrice>$0</SummeryItemPrice>
              </SummeryItem>
              <SummeryItem>
                <SummeryItemText>Discount</SummeryItemText>
                <SummeryItemPrice>-$0</SummeryItemPrice>
              </SummeryItem>
              <SummeryItem type="total">
                <SummeryItemText>Total</SummeryItemText>
                <SummeryItemPrice>{cart.total}TK</SummeryItemPrice>
              </SummeryItem>
  
              <StripeCheckout
                name="CUET E-Bazar"
                image="https://cdn.dribbble.com/users/6481365/screenshots/15907287/media/49902be5f09602c3214b9cde2c4f672f.jpg"
                billingAddress
                shippingAddress
                description={`Your total is ${cart.total}Taka`}
                amount={cart.total * 100} // Amount in cents (2000 cents = 20 dollars)
                token={onToken}
                stripeKey={KEY}
              />
            </Summery>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    );
  };
  
  export default Cart;