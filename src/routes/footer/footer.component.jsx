import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
Stamp
} from "./footer.styles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Stamp>
				Crwn Store
			</Stamp>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Fax: +21 000 2134</FooterLink>
			<FooterLink href="#">Phone no: 123456789</FooterLink>
			<FooterLink href="#">Email: janisshop@tcs.com</FooterLink>
		</Column>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
