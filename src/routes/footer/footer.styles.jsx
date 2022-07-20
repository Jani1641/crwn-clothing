import styled from 'styled-components';

export const Box = styled.div`
padding: 0px 30px;
background-color: darkblue;
position:relative;
width: 100%;
margin: 20px;

`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;

export const Stamp = styled.span`
width: 15%;
color: #fff;
font-weight: bolder;
padding-top: 90px;
font-size: 35px;
`