import React from "react";
import "../../assets/styles/home/homePageTopSection.css";
import sectionImg1 from "../../assets/images/homePageImgs/topSectionImgs/sectionImg1.avif";
import sectionImg2 from "../../assets/images/homePageImgs/topSectionImgs/sectionImg2.png";
import { Link } from "react-router-dom";

const HomePageTopSection = () => {
	return (
		<>
			<div className="home-page-top-section-container">
				<div className="row mx-0 home-page-top-section-content">
					<div className="col-md-6 home-page-top-section-left-content">
						<h1>
							<span className="bold">QRATES</span>
							<br />
							<span className="outlined">MUSIC IN</span>
							<br />
							<span className="outlined">YOUR HANDS</span>
						</h1>
						<p>
							We make it easy for artists to make vinyl and cassettes, so fans
							can keep pieces of the music they love ↓
						</p>
						<div className="home-page-top-section-left-content-buttons">
							<button className="home-page-top-section-left-content-for-fans-button">
								<Link
									to="/for-fans"
									style={{ color: "#000", textDecoration: "none" }}
								>
									for fans
								</Link>
							</button>
							<button className="home-page-top-section-left-content-for-artists-button">
								<Link to="/for-artists" className="button-router-link">
									for artists
								</Link>
							</button>
						</div>
					</div>
					<div className="col-md-6 home-page-top-section-right-content">
						<div className="home-page-top-section-right-content-img">
							<img
								src={sectionImg1}
								className="home-top-section-img"
								alt="section-img"
							/>
							<img
								src={sectionImg2}
								className="home-top-section-absolute-img"
								alt="section-img"
							/>
						</div>
						<p>MAYAEWKIS ON QRATES</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePageTopSection;
