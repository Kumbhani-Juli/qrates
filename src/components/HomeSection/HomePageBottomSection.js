import React from "react";
import "../../assets/styles/home/homeBottomSection.css";
import sectionImg1 from "../../assets/images/homePageImgs/bottomSectionImgs/sectionImg1.avif";
import sectionImg2 from "../../assets/images/homePageImgs/bottomSectionImgs/sectionImg2.avif";
import sectionImg3 from "../../assets/images/homePageImgs/bottomSectionImgs/sectionImg3.avif";
import sectionImg4 from "../../assets/images/homePageImgs/bottomSectionImgs/sectionImg4.avif";
import sectionImg5 from "../../assets/images/homePageImgs/bottomSectionImgs/sectionImg5.avif";
import sectionImg6 from "../../assets/images/homePageImgs/bottomSectionImgs/sectionImg6.avif";
import sectionImg7 from "../../assets/images/homePageImgs/bottomSectionImgs/sectionImg7.avif";
import sectionImg8 from "../../assets/images/homePageImgs/bottomSectionImgs/sectionImg8.avif";

const HomePageBottomSection = () => {
	const sectionData = [
		{
			sectionImg: sectionImg1,
		},
		{
			sectionImg: sectionImg2,
		},
		{
			sectionImg: sectionImg3,
		},
		{
			sectionImg: sectionImg4,
		},
		{
			sectionImg: sectionImg5,
		},
		{
			sectionImg: sectionImg6,
		},
		{
			sectionImg: sectionImg7,
		},
		{
			sectionImg: sectionImg8,
		},
	];
	return (
		<>
			<div className="home-page-bottom-section-container">
				<div className="home-page-bottom-section-content">
					{sectionData?.map((data, index) => (
						<div key={index}>
							<img
								src={data?.sectionImg}
								className="img-fluid"
								alt="section-img"
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default HomePageBottomSection;
