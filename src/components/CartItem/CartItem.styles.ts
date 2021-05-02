import styled from 'styled-components';

export const Wrapper = styled.div`

    width:250px;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding:10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-bottom: 1px solid lightblue;
    border-top: 1px solid lightblue;
     &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`
