import styled from 'styled-components';


export const SummaryCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #f1f1f1;
  margin: 30px;
  h2{
    margin: 20px;
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
