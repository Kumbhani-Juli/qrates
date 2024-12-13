import React from "react";
import "../../assets/styles/qratescuratessection/qratesCuratedReleasOfTheWeek.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import recordsPageProjectsData from "../../Data/RecordsPageProjectsData";

const QratesCuratedReleasOfTheWeek = () => {
	const selectedRecordsData = recordsPageProjectsData[19];
	return (
		<>
			<div className="qrates-curated-page-releas-of-the-week-section-container">
				<div className="qrates-curated-page-releas-of-the-week-section-title">
					<h2>Release Of The Week</h2>
					<button>past weeks</button>
				</div>
				<div className="row mx-0 qrates-curated-page-releas-of-the-week-section-content">
					<div className="col-md-6 qrates-curated-page-releas-of-the-week-section-left-content">
						<img
							src={selectedRecordsData?.sectionImg}
							className="img-fluid"
							alt="section-img"
						/>
					</div>
					<div className="col-md-6 qrates-curated-page-releas-of-the-week-section-right-content">
						<div className="qrates-curated-page-releas-of-the-week-section-right-content-title">
							<span>Release of the week</span>
						</div>
						<h3>{selectedRecordsData?.projectTitle}</h3>
						<h5>{selectedRecordsData?.artistTitle}</h5>
						<small>[Jazz | Indie | Pop]</small>
						<p>{selectedRecordsData?.projectContent}</p>
						<Link
							to={`/records-project-details/${selectedRecordsData?.slugs}`}
							target="_top"
						>
							project detail <FontAwesomeIcon icon={faArrowRight} />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default QratesCuratedReleasOfTheWeek;
