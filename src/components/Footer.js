import React from "react";
import "../assets/styles/footer.css";
import footerLogo from "../assets/images/footer-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
	const footerData = [
		{
			title: "for artists",
			contentData: [
				{
					content: "For Artists",
					slugs: "for-artists",
				},
				{
					content: "How it Works",
					slugs: "how-it-works",
				},
				{
					content: "Artist Toolkit",
					slugs: "articles",
				},
				{
					content: "Referral Program",
					slugs: "",
				},
			],
		},
		{
			title: "for fans",
			contentData: [
				{
					content: "For Fans",
					slugs: "for-fans",
				},
				{
					content: "Records",
					slugs: "records",
				},
				{
					content: "Cassettes",
					slugs: "cassates",
				},
				{
					content: "Stories",
					slugs: "stories",
				},
				{
					content: "Qrates Curated",
					slugs: "qrates-curated",
				},
			],
		},
		{
			title: "OUR COMPANY",
			contentData: [
				{
					content: "About Qrates",
					slugs: "about-us",
				},
				{
					content: "Careers",
					slugs: "careers",
				},
				{
					content: "Partners",
					slugs: "partners",
				},
			],
		},
		{
			title: "HELP",
			contentData: [
				{
					content: "Support Center",
				},
				{
					content: "Contact Us",
					slugs: "contact",
				},
				{
					content: "Returns",
				},
				{
					content: "Shipping",
				},
			],
		},
	];
	return (
		<>
			<div className="footer-section-container">
				<div className="footer-section-content">
					{footerData?.map((data, index) => (
						<div className="footer-section-inner-content" key={index}>
							<h4>{data?.title}</h4>
							{data?.contentData?.map((data, index) => (
								<div key={index}>
									<Link to={`/${data?.slugs}`} target="_top">
										{data?.content}
									</Link>
								</div>
							))}
						</div>
					))}
				</div>
				<div className="footer-bottom-section-container">
					<div className="footer-bottom-section-img">
						<Link to="/" target="_top">
							<img src={footerLogo} className="img-fluid" alt="footer-logo" />
						</Link>
					</div>
					<div className="footer-bottom-section-right-content">
						<button>English</button>
						<div className="footer-bottom-section-social-media-section">
							<FontAwesomeIcon
								icon={faFacebook}
								className="footer-bottom-social-icon"
							/>
							<FontAwesomeIcon
								icon={faInstagram}
								className="footer-bottom-social-icon"
							/>
							<FontAwesomeIcon
								icon={faTwitter}
								className="footer-bottom-social-icon"
							/>
						</div>
						<div className="footer-bottom-section-terms-section">
							<a href="#">Terms of Service</a>
							<a href="#">Privacy Policy</a>
							<a href="#">Legal Information</a>
							<a href="#">&copy;TDMS Inc.</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
