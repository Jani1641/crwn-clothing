import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 2px #ccc;
  padding: 35px;
  margin: 20px;
  z-index: 3;
`
export const Details = styled.div`
  width: 30%;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: black;
  background-color: #e4e9f2;
  border-radius: 5px;
  padding: 25px;
  margin: 10px;
`

export const Value = styled.span`
  font-weight: normal;
`;