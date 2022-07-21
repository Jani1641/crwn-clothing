import styled from "styled-components";

export const ThankyouContainer = styled.div`
    margin: 270px 300px;
    display: flex;
    flex-direction: column;

    h2{
        text-align: center;
    }

    Button{
      margin-top: 10px;
    background-color: navy;
    border-radius: 10px;

    &:hover{
      opacity: 0.85;
      display: flex;
      color: white;
      background-color: black;
    }
    }
`