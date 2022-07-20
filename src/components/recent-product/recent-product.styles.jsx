import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 420px;
  align-items: center;
  position: relative;
  border: solid 1px black;
  padding: 10px;
  img {
    padding: 5px;
    width: 100%;
    height: 75%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 100%;
  color: #0066CC;
  font-weight: bold;
  text-align: center;
`;

export const Price = styled.span`
  width: 100%;
  color: orange;
  text-align: center;
  font-weight: bold;
`;

export const Quantity = styled.span`
  width: 100%;
  color: orange;
  text-align: center;
  font-weight: bold;
`;

