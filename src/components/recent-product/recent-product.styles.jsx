import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //height: 420px;
  align-items: center;
  position: relative;
  //border: solid 1px #ccc;
  box-shadow: 0 0 2px #ccc;
  border-radius: 5px;
  padding: 20px 10px;
  background-color: white;
  img {
    padding: 30px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.5;
    color: #fff;
    position: absolute;
    top: 255px;
    display: none;
    background-color: navy;
    border-radius: 30px;
  }

  &:hover {
   // border: solid blue 2px;
   box-shadow: 0 0 10px #999;
   transition: all 1s ease-in-out;

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
  color: #333;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  min-height: 55px;
  padding: 0 15px 0 15px;

  &:hover{
    color: navy;
  }
`;

export const Price = styled.span`
  width: 100%;
  color: orangered;
  text-align: center;
  font-weight: bolder;
  font-size: 20px;
`;


export const Quantity = styled.span`
width: 100%;
  color: #333;
  text-align: center;
  font-weight: bolder;
  font-size: 16px;
  &:hover{
    color: navy;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`
