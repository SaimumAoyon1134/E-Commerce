import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { logout } from '../redux/userRedux';
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px"})};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px"})};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none"})};
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px"})};
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 5px;
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    localStorage.removeItem("user");  
    dispatch(logout());
    navigate("/login");
    window.location.reload();
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>         
        </Left>
        <Center>
          <Logo>CUET SMART MARKET</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register">
              <Tooltip title="Register">
                <PersonAddIcon />
              </Tooltip>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/new">
              <Tooltip title="Add New Product">
                <AddCircleOutlineIcon />
              </Tooltip>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/cart">
              <Tooltip title="Cart">
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Tooltip>
            </Link>
          </MenuItem>

          <MenuItem onClick={handleLogout} style={{ cursor: "pointer" }}>
            <Tooltip title="Logout">
              <LogoutIcon style={{ fontSize: "24px", color: "red" }} />
            </Tooltip>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;