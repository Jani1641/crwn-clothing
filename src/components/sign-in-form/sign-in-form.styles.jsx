import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

export const Head = styled.h2`
  font-weight: bolder;
`
