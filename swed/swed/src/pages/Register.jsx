import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg")
      center;
  display: flex;
  align-items: center;
  background-size: cover;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 25%;
  border: 1px solid teal;
  padding: 15px 20px;
  margin: auto;
  &:hover {
    background-color: teal;
    cursor: pointer;
    transition: all 1.5s ease;
    transform: scale(1.1);
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: false, // Default
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:2000/api/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        isAdmin: formData.isAdmin,
      });

      console.log("User Registered:", response.data);
      alert("Registration successful! Redirecting to login page.");
      navigate("/login"); 
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
      console.error("Registration Error:", err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Input name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <Input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <Input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          <Agreement>
            I agree with the <b>Terms & Conditions</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;