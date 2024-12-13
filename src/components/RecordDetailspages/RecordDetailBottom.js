import React from "react";
import "../../assets/styles/recorddetailspages/recorddetailbotton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MiddleSectionAboutSection from "./projectDetailsMiddleSectionPages/MiddleSectionAboutSection";
import MiddleSectionTracklistSection from "./projectDetailsMiddleSectionPages/MiddleSectionTracklistSection";
import MiddleSectionProductImgsSection from "./projectDetailsMiddleSectionPages/MiddleSectionProductImgsSection";
import MiddleSectionProfileSection from "./projectDetailsMiddleSectionPages/MiddleSectionProfileSection";
import {
	faCodepen,
	faFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const RecordDetailBottom = ({ sectionData }) => {
	const Title = [
		{
			title: "about",
		},
		{
			title: "tracks",
		},
		{
			title: "product images",
		},
		{
			title: "comments",
		},
		{
			title: "profile",
		},
	];
	return (
		<>
			<div className="record-detail-bottom-container">
				<div className="record-detail-header">
					<div className="record-detail-left-content">
						{Title.map((item, index) => (
							<li key={index}>{item.title}</li>
						))}{" "}
					</div>
					<div className="record-detail-right-content">
						<p>share</p>
						<FontAwesomeIcon icon={faFacebook} className="font-icon" />
						<FontAwesomeIcon icon={faTwitter} className="font-icon" />
						<FontAwesomeIcon icon={faCodepen} className="font-icon" />
					</div>
				</div>
				<div className="row mx-0 record-bottom-body-content">
					<div className="col-md-8 record-bottom-body-content-left">
						<div
							className="records-project-details-page-middle-section-left-content-about-section"
							id="about-section"
						>
							<MiddleSectionAboutSection
								sectionData={
									sectionData?.projectDetailsData?.middleSectionData?.aboutData
								}
							/>
						</div>
						<div
							className="records-project-details-page-middle-section-left-content-tracks-section"
							id="tracks-section"
						>
							<MiddleSectionTracklistSection
								sectionData={
									sectionData?.projectDetailsData?.middleSectionData
										?.tracklistData
								}
							/>
						</div>
						<div
							className="records-project-details-page-middle-section-left-content-product-imgs-section"
							id="product-imgs-section"
						>
							<MiddleSectionProductImgsSection
								sectionData={
									sectionData?.projectDetailsData?.middleSectionData
										?.productImgs
								}
							/>
						</div>
						<div
							className="records-project-details-page-middle-section-left-content-comments-section"
							id="comments-section"
						>
							<h1>Comments</h1>
							<div className="records-project-details-page-middle-section-left-content-comments-section-content">
								<p>Loading...</p>
							</div>
						</div>
						<div
							className="records-project-details-page-middle-section-left-content-profile-section"
							id="profile-section"
						>
							<MiddleSectionProfileSection
								sectionData={
									sectionData?.projectDetailsData?.middleSectionData
										?.profileSectionData
								}
							/>
						</div>
					</div>
					<div className="col-md-4 record-bottom-body-content-right">
						<h1>Rescue (5.30 A.M. on the Deck of the MPS Noorderzon)</h1>
						<h3>Chemical Modulation</h3>
						<div className="record-bottom-body-content-right-box">
							<button>Electronic</button> <button>Techno</button>
						</div>
						<div className="record-bottom-body-content-right-box-inner-content">
							<div>
								<p>Remaining time</p>
								<p>Achievement</p>
								<p>Price</p>
							</div>
							<div>
								<h3>61 days left</h3>
								<h3>10/200</h3>
								<h3>€ 15.25</h3>
							</div>
						</div>
						<div className="record-bottom-body-content-right-box-inner-content-button">
							<button>back now </button> <button> add to wishlist</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecordDetailBottom;
