import React from "react";
import "../assets/styles/signUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faSoundcloud,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<>
			<div className="sign-up-page-section-container">
				<div className="sign-up-page-section-content">
					<div className="sign-up-page-section-content-title-section">
						<h1>Create an account</h1>
						<p>
							Already on Qrates? <Link to="/sign-in">Log in</Link>
						</p>
					</div>
					<div className="sign-up-page-section-content-social-media-section">
						<div className="sign-up-page-section-content-social-media-content">
							<FontAwesomeIcon
								icon={faFacebook}
								className="sign-up-page-section-content-social-media-icon"
							/>
							<p>Use Facebook</p>
						</div>
						<div className="sign-up-page-section-content-social-media-content">
							<FontAwesomeIcon
								icon={faTwitter}
								className="sign-up-page-section-content-social-media-icon"
							/>
							<p>Use Twitter</p>
						</div>
						<div className="sign-up-page-section-content-social-media-content">
							<FontAwesomeIcon
								icon={faSoundcloud}
								className="sign-up-page-section-content-social-media-icon"
							/>
							<p>Use Soundcloud</p>
						</div>
					</div>
					<div className="sign-up-page-section-content-form">
						<div className="sign-up-page-section-content-form-displayname">
							<p>Display name*</p>
							<input type="text" placeholder="Display name" />
						</div>
						<div className="sign-up-page-section-content-form-email">
							<p>Email*</p>
							<input type="email" placeholder="Email" />
						</div>
						<div className="sign-up-page-section-content-form-password">
							<p>Password*</p>
							<input type="password" placeholder="Password" />
						</div>
						<div className="sign-up-page-section-content-form-password">
							<p>Password again*</p>
							<input type="password" placeholder="Password again" />
						</div>
					</div>
					<div className="sign-up-page-section-content-forgot-link">
						<p>
							Passwords should contain a mix of capital and lowercase letters
							and numerals for security, and must be at least 6 characters in
							length. *Required information
						</p>
					</div>
					<div className="sign-up-page-section-content-checkbox-content">
						<input type="checkbox" />
						<p>
							I have read and agreed to the Qrates terms and conditions and
							privacy policy.
						</p>
					</div>
					<div className="sign-up-page-section-content-button">
						<button>create an account</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
