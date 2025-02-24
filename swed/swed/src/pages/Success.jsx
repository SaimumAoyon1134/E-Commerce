
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Button = styled.button`
  width: 400px;
  border: none;
  padding: 15px;
  background-color: teal;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: darkslategray;
  }
`;

const OrderForm = () => {
  const total = useSelector((state) => state.cart.total);
  const cartProducts = useSelector((state) => state.cart.products);
  const navigate = useNavigate();
  // Extract Product IDs and Titles
  const productIds = cartProducts.map((product) => product._id);
  const productTitles = cartProducts.map((product) => product.title);

  console.log("Product IDs:", productIds);
  console.log("Product Titles:", productTitles);

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({
    userId: "",
    products: cartProducts.map((product) => ({ productId: product._id, quantity: 1 })), // ✅ Set products properly
    amount: total,
    address: { room: "", hall: "", studentId: "" },
    status: "pending",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchUsers();
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      address: { ...prevOrder.address, [e.target.name]: e.target.value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:2000/api/orders", order);
      alert("Order submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit order");
    }
  };
  const handleBackButton =()=>{
  

  
        navigate("/"); 
  
  }

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text("Receipt", 90, 10);

    doc.setFont("helvetica", "normal");
    doc.text(`Your Product Id: ${productIds.join(", ")}`, 50, 30);  // ✅ Fix accessing Product IDs
    doc.text(`Student Id: ${order.address.studentId}`, 50, 40);
    doc.text(`Hall Name: ${order.address.hall}`, 50, 50);
    doc.text(`Room Number: ${order.address.room}`, 50, 60);

    doc.setFont("helvetica");
    doc.text("Thanks for your interests", 30, 150);
    doc.save("Receipt.pdf");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Verifying The Order Summary</h2>

      {/* User Selection */}
      <label>Received By:</label>
      <select style={{ 
    width: "400px", 
    padding: "10px", 
    border: "1px solid #ccc", 
    borderRadius: "5px", 
    marginTop: "10px" 
  }} name="userId" value={order.userId} onChange={handleChange} required>
        <option value="">Select</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.username}
          </option>
        ))}
      </select>

      <h4>Products</h4>
      <ul>
        {cartProducts.map((product, index) => (
          <li key={index}>{product.title}</li> // ✅ Display selected product titles
        ))}
      </ul>

      <h4>Address</h4>
      <input style={{ 
    width: "380px", 
    padding: "10px", 
    border: "1px solid #ccc", 
    borderRadius: "5px", 
    marginTop: "10px" 
  }} type="text" name="room" placeholder="Room No" value={order.address.room} onChange={handleAddressChange} required />
      <select style={{ 
    width: "400px", 
    padding: "10px", 
    border: "1px solid #ccc", 
    borderRadius: "5px", 
    marginTop: "10px" 
  }} name="hall" value={order.address.hall} onChange={handleAddressChange} required>
        <option value="">Select Hall</option>
        <option value="Bangabondhu hall">Bangabondhu Hall</option>
        <option value="Tareq Huda hall">Tareq Huda Hall</option>
        <option value="Shah hall">Shah Hall</option>
        <option value="Kudrat E khuda hall">Kudrat E khuda Hall</option>
        <option value="Abu Sayed hall">Abu Sayed Hall</option>
        <option value="Samsunnar hall">Samsunnar Hall</option>
        <option value="Sufia hall">Sufia Hall</option>
      </select>
      <input style={{ 
    width: "380px", 
    padding: "10px", 
    border: "1px solid #ccc", 
    borderRadius: "5px", 
    marginTop: "10px" 
  }}  type="text" name="studentId" placeholder="StudentID" value={order.address.studentId} onChange={handleAddressChange} required />

      <Button type="submit">Submit Order</Button>
      <Button type="button" onClick={handleDownloadPDF}>Download Copy</Button>

      <Button type="button" onClick={handleBackButton} style={{ color:"black",background:"white",border:"1px solid black"}}>Back to home</Button>
      
    </form>
  );
};

// Inline styles
const styles = {
  form: { display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "auto" },
};

export default OrderForm;