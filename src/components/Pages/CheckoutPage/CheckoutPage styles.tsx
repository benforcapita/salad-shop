import styled from "styled-components";


export const Wrapper = styled.div`
  display:grid;
  z-index:10;
  font-family:Arial, Helvetica, sans-serif;
  grid-auto-rows:minmax(100px, min-content);
  width:500px;
  gap: 20px;
  text-align:center;
  h1
  {
    font-family:Arial, Helvetica, sans-serif;
    color:white;
  }
  .checkout-bg
  {
    height:100%;
    background-color:white;
     overflow: scroll;

  }
  .checkout-item
  {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-bottom: 1px solid lightblue;
  background-color:white;

  }
  .checkout-item:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
    
  .order-details
  {
    display:grid;
    grid-template-rows:1fr;
    background-color:white;

  }

  .order-form
  {
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:10px;
    background-color:white;
  }
  .order-form input
  {
    margin:10px;
  }

  textarea
  {
        resize: none;
        height: 100px;
        width: 100%;
  }
  a
  {
  display: block;
  border: none;
  background-color: #04AA6D;
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  }
  a:hover {
  background-color: #ddd;
  color: black;
}
`;