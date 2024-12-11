import React, { useState } from "react";
import "../assets/styles/header.css";
import headerLogo from "../assets/images/header-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCartShopping,
	faSearch,
	faBars,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const [showDiscoverMusicSubmenu, setShowDiscoverMusicSubmenu] =
		useState(false);

	const headerDiscoverMusicDropDownData = [
		{
			listTitle: "Records",
			slugs: "records",
		},
		{
			listTitle: "Cassettes",
			slugs: "cassates",
		},
		{
			listTitle: "Stories",
			slugs: "stories",
		},
		{
			listTitle: "Qrates Curated",
			slugs: "qrates-curated",
		},
	];
	return (
		<>
			<div className="header-section-container">
				<div className="header-section-container-left-content">
					<Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
						<img src={headerLogo} className="img-fluid" alt="header-logo" />
					</Link>
					<nav
						className={`header-nav-links ${isMobileMenuOpen ? "active" : ""}`}
					>
						<a
							href="#"
							className="header-discover-music-link"
							onClick={() =>
								setShowDiscoverMusicSubmenu(!showDiscoverMusicSubmenu)
							}
						>
							discover music
							<span
								style={{
									transform: showDiscoverMusicSubmenu ? "rotate(-180deg)" : "",
								}}
							>
								&#9662;
							</span>
						</a>
						{showDiscoverMusicSubmenu && (
							<div className="header-discover-music-submenu">
								{headerDiscoverMusicDropDownData?.map((data, index) => (
									<Link
										to={`/${data?.slugs}`}
										key={index}
										onClick={() => {
											setShowDiscoverMusicSubmenu(false);
											setIsMobileMenuOpen(false);
										}}
										style={{ color: "#fff", textTransform: "capitalize" }}
									>
										<li>{data?.listTitle}</li>
									</Link>
								))}
							</div>
						)}
						<Link
							to="/for-artists"
							onClick={() => {
								setIsMobileMenuOpen(false);
								setShowDiscoverMusicSubmenu(false);
							}}
						>
							for artists
						</Link>
						<Link
							to="/for-fans"
							onClick={() => {
								setIsMobileMenuOpen(false);
								setShowDiscoverMusicSubmenu(false);
							}}
						>
							for fans
						</Link>
						<div
							className={`${
								isMobileMenuOpen ? "header-mobile-social-icons" : "d-none"
							}`}
						>
							<FontAwesomeIcon
								icon={faFacebook}
								className="header-social-icon"
							/>
							<FontAwesomeIcon
								icon={faInstagram}
								className="header-social-icon"
							/>
							<FontAwesomeIcon
								icon={faTwitter}
								className="header-social-icon"
							/>
						</div>
						<div
							className={`${
								isMobileMenuOpen
									? "header-section-container-mobile-right-content"
									: "d-none"
							}`}
						>
							<button
								onClick={() => {
									setIsMobileMenuOpen(false);
									setShowDiscoverMusicSubmenu(false);
								}}
							>
								make your own
							</button>
							<Link
								to="/sign-in"
								onClick={() => {
									setShowDiscoverMusicSubmenu(false);
									setIsMobileMenuOpen(false);
								}}
							>
								login
							</Link>
						</div>
					</nav>
					<FontAwesomeIcon
						icon={faSearch}
						className="header-search-icon"
						onClick={() => setShowDiscoverMusicSubmenu(false)}
					/>
					<FontAwesomeIcon
						icon={faCartShopping}
						className="header-cart-icon"
						onClick={() => setShowDiscoverMusicSubmenu(false)}
					/>
					<button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
						<FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
					</button>
				</div>
				<div className="header-section-container-right-content">
					<Link
						to="/sign-in"
						onClick={() => setShowDiscoverMusicSubmenu(false)}
					>
						login
					</Link>
					<button onClick={() => setShowDiscoverMusicSubmenu(false)}>
						make your own
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
