import React from 'react';
import { Wrapper } from "./HomePage styles";
import { Link } from "react-router-dom";


const HomePage: React.FC = () => (
  <Wrapper>
    <h1>Welcome To my Salad Shop</h1>
      <Link to="/shop">Order Salad</Link>
</Wrapper>
);

export default HomePage;
