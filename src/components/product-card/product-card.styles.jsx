import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 410px;
  align-items: center;
  position: relative;
  border: solid 1px black;
  padding: 10px;
  img {
    padding: 5px;
    width: 100%;
    height: 80%;
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
    border: solid red 2px;

    img {
      opacity: 0.8; 
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
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
  font-weight: bolder;
  font-size: 25px;
`;
