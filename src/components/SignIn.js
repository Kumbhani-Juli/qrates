import {
	faFacebook,
	faSoundcloud,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../assets/styles/signIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
	return (
		<>
			<div className="sign-in-page-section-container">
				<div className="sign-in-page-section-content">
					<div className="sign-in-page-section-content-title-section">
						<h1>Log in</h1>
						<p>
							New to Qrates? <Link to="/sign-up">Create an account</Link>
						</p>
					</div>
					<div className="sign-in-page-section-content-social-media-section">
						<div className="sign-in-page-section-content-social-media-content">
							<FontAwesomeIcon
								icon={faFacebook}
								className="sign-in-page-section-content-social-media-icon"
							/>
							<p>Use Facebook</p>
						</div>
						<div className="sign-in-page-section-content-social-media-content">
							<FontAwesomeIcon
								icon={faTwitter}
								className="sign-in-page-section-content-social-media-icon"
							/>
							<p>Use Twitter</p>
						</div>
						<div className="sign-in-page-section-content-social-media-content">
							<FontAwesomeIcon
								icon={faSoundcloud}
								className="sign-in-page-section-content-social-media-icon"
							/>
							<p>Use Soundcloud</p>
						</div>
					</div>
					<div className="sign-in-page-section-content-form">
						<div className="sign-in-page-section-content-form-email">
							<p>Email*</p>
							<input type="email" placeholder="Email" />
						</div>
						<div className="sign-in-page-section-content-form-password">
							<p>Password*</p>
							<input type="password" placeholder="Password" />
						</div>
					</div>
					<div className="sign-in-page-section-content-forgot-link">
						<a href="#">i forgot my password</a>
					</div>
					<small className="fw-bold">*Required information</small>
					<div className="sign-in-page-section-content-button">
						<button>log in</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignIn;
