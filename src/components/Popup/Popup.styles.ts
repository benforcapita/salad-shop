import styled from "styled-components";

export const NoneVisibleDiv = styled.div`
    display:none;
`;

export const PopupBox = styled.div`
    z-index:100;
    position: fixed;
    background: rgb(0,0,0,0.6);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;

    .content{
        position: relative;
    width: 70%;
    margin: 0 auto;
    height: 70vh;
    max-height: 70vh;
    margin-top: calc(100vh - 85vh - 20px);
    background: white;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #999;
    overflow: auto;
    }
    .order
    {
        display:grid;
        grid-template-columns:max-content 1fr,;
        grid-template-rows:min-content;
        
    }
`;