import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
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
`;


