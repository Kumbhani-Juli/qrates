import React from "react";
import "../../assets/styles/home/homePageForArtistsSection.css";
import sectionImg1 from "../../assets/images/homePageImgs/topSectionImgs/sectionImg1.avif";
import sectionImg3 from "../../assets/images/homePageImgs/topSectionImgs/sectionImg3.png";
import { Link } from "react-router-dom";

const HomePageForArtistsSection = () => {
	return (
		<>
			<div className="home-page-for-artists-section-container">
				<div className="row mx-0 home-page-for-artists-section-content">
					<div className="col-md-6 home-page-for-artists-section-left-content">
						<div className="home-page-for-artists-section-left-content-img">
							<img
								src={sectionImg1}
								className="home-for-artists-section-img"
								alt="section-img"
							/>
							<img
								src={sectionImg3}
								className="home-for-artists-section-absolute-img"
								alt="section-img"
							/>
						</div>
					</div>
					<div className="col-md-6 home-page-for-artists-section-right-content">
						<div className="home-page-for-artists-section-right-content-title">
							<p>for artists</p>
						</div>
						<h2>Your music on vinyl and cassette, direct to your fans.</h2>
						<p className="home-page-for-artists-section-right-body-content">
							Qrates is a one-stop platform for your vinyl record and cassette
							production, logistics, sales, and distribution. We take away the
							burden of hassle, cost, and risk, and return more time and revenue
							to artists and labels.
						</p>
						<Link to="/for-artists" target="_top">
							<button>for artists</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePageForArtistsSection;
