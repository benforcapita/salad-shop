import styled from "styled-components";

export const Wrapper = styled.div`
   position: relative; 
    height: 100vh;
    width: 100%;
    justify-content:center;
    display: flex;
    background-image: url('https://media.istockphoto.com/photos/spices-and-herbs-on-rustic-wood-kitchen-table-picture-id852068056');
    background-size: cover;
    &::before
    {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.25);
    }
`;
