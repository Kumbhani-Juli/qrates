import React, { useState } from "react";
import "../../assets/styles/home/homeArtistToolkitSection.css";
import defaultBgImg from "../../assets/images/homePageImgs/artistToolkitSectionImgs/defaultBgImg.avif";
import bgImg1 from "../../assets/images/homePageImgs/artistToolkitSectionImgs/sectionBgImg1.avif";
import bgImg2 from "../../assets/images/homePageImgs/artistToolkitSectionImgs/sectionBgImg2.avif";
import bgImg3 from "../../assets/images/homePageImgs/artistToolkitSectionImgs/sectionBgImg3.avif";
import bgImg4 from "../../assets/images/homePageImgs/artistToolkitSectionImgs/sectionBgImg4.avif";
import bgImg5 from "../../assets/images/homePageImgs/artistToolkitSectionImgs/sectionBgImg5.avif";
import { Link } from "react-router-dom";

const HomePageArtistToolkitSection = () => {
	const sectionData = [
		{
			title: "Vinyl Knowledge",
			bgImg: bgImg1,
			slugs: 1,
		},
		{
			title: "Distribution & Promotion",
			bgImg: bgImg2,
			slugs: 4,
		},
		{
			title: "Mixing & Mastering",
			bgImg: bgImg3,
			slugs: 3,
		},
		{
			title: "Inspiration",
			bgImg: bgImg4,
			slugs: 2,
		},
		{
			title: "Qrates Tips",
			bgImg: bgImg5,
			slugs: 5,
		},
	];

	const [sectionBgImg, setSectionBgImg] = useState(defaultBgImg);
	return (
		<>
			<div
				className="home-page-artist-toolkit-section-container"
				style={{
					backgroundImage: `url(${sectionBgImg})`,
				}}
			>
				<div className="home-page-artist-toolkit-section-title">
					<p>artist toolkit</p>
				</div>
				<div className="home-page-artist-toolkit-section-content">
					{sectionData?.map((data, index) => (
						<div key={index}>
							<Link
								to="/articles"
								style={{ color: "#fff", textDecoration: "none" }}
								target="_top"
							>
								<h1
									onMouseEnter={() => setSectionBgImg(data?.bgImg)}
									onMouseLeave={() => setSectionBgImg(defaultBgImg)}
								>
									{data?.title}
								</h1>
							</Link>
						</div>
					))}
				</div>
				<p className="home-page-artist-toolkit-section-footer-link">
					<Link
						to="/articles"
						style={{ color: "#fff", textDecoration: "none" }}
					>
						The latest from the Artist toolkit →
					</Link>
				</p>
			</div>
		</>
	);
};

export default HomePageArtistToolkitSection;
