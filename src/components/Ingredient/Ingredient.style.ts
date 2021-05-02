import styled from "styled-components";

export const Wrapper = styled.div`
    background-color:white;
    display:grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(3,minmax(40px, auto));
    gap: 10px;
    border: 1px solid lightblue;
    border-radius:20px;
    margin:10px;
    p{
    text-align: center;
    display:inline-block;
    }
    button
    {
        border-radius: 0,0,20px,20px;
    }
`;