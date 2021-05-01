import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius:20px;
    height:100%;
    div.grid{
        display:grid;
        grid-auto-flow: row;
        grid-template-rows:repeat(2 1fr);
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
    p{
    text-align: center;
    display:inline-block;

    }
    button
    {
        border-radius: 0,0,20px,20px;
    }
`;