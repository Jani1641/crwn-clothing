import styled from 'styled-components';


export const SummaryCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: white;
  margin: 15px;
  h2{
    text-align: center;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;
