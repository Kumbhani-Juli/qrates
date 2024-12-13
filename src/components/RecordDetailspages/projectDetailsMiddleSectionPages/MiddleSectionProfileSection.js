import React from "react";
import sectionImg from "../../../assets/images/projectDetailsImgs/recordsProject1Imgs/sectionImg5.jpg";
import "../../../assets/styles/recorddetailspages/middleSectionPagescss/middleSectionProfileSection.css";

const MiddleSectionProfileSection = ({ sectionData }) => {
	return (
		<>
			<div className="row mx-0 records-project-details-page-middle-section-left-content-profile-section-content">
				<div className="col-md-4 records-project-details-page-middle-section-left-content-profile-section-left-content">
					<img
						src={sectionData?.sectionImg}
						className="img-fluid"
						alt="section-img"
					/>
				</div>
				<div className="col-md-8 records-project-details-page-middle-section-left-content-profile-section-right-content">
					<h1>{sectionData?.title}</h1>
					<a href="#">1 projects</a>
					{sectionData?.contentData?.map((data, index) => (
						<div key={index}>
							<p>{data?.content}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default MiddleSectionProfileSection;
