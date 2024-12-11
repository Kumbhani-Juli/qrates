import React from "react";
import sectionImg1 from "../assets/images/homePageImgs/bottomSectionImgs/sectionImg2.avif";
import "../assets/styles/record.css";
const Record = () => {
	return (
		<div>
			<div className="record-top-container">
				<div className="record-top-title">
					<h1>All projects</h1>
					<h1>Crowdfunding</h1>
					<h1>Purchase</h1>
				</div>
				<div className="row mx-0 record-body-section">
					<div className="col-md-3 record-top-content">
						<div className="record-top-content-img">
							<img src={sectionImg1} className="img-fluid" alt="section-img" />
						</div>
						<h1>Anglesea 10 inch EP </h1>
						<h1>King Gizzard & the Lizard Wizard</h1>
						<div className="record-top-content-button">
							<button>rock</button>
							<button>punk</button>
						</div>
						<div className="record-top-content-footer">
							<span>$25.00</span>
							<span>pre-order</span>
						</div>
					</div>
					<div className="col-md-3 record-top-content">
						<div className="record-top-content-img">
							<img src={sectionImg1} className="img-fluid" alt="section-img" />
						</div>
						<h1>Anglesea 10 inch EP </h1>
						<h1>King Gizzard & the Lizard Wizard</h1>
						<div className="record-top-content-button">
							<button>rock</button>
							<button>punk</button>
						</div>
						<div className="record-top-content-footer">
							<span>$25.00</span>
							<span>pre-order</span>
						</div>
					</div>
					<div className="col-md-3 record-top-content">
						<div className="record-top-content-img">
							<img src={sectionImg1} className="img-fluid" alt="section-img" />
						</div>
						<h1>Anglesea 10 inch EP</h1>
						<h1>King Gizzard & the Lizard Wizard</h1>
						<div className="record-top-content-button">
							<button>rock</button>
							<button>punk</button>
						</div>
						<div className="record-top-content-footer">
							<span>$25.00</span>
							<span>pre-order</span>
						</div>
					</div>
					<div className="col-md-3 record-top-content">
						<div className="record-top-content-img">
							<img src={sectionImg1} className="img-fluid" alt="section-img" />
						</div>
						<h1>Anglesea 10 inch EP </h1>
						<h1>King Gizzard & the Lizard Wizard</h1>
						<div className="record-top-content-button">
							<button>rock</button>
							<button>punk</button>
						</div>
						<div className="record-top-content-footer">
							<span>$25.00</span>
							<span>pre-order</span>
						</div>
					</div>{" "}
					<div className="col-md-3 record-top-content">
						<div className="record-top-content-img">
							<img src={sectionImg1} className="img-fluid" alt="section-img" />
						</div>
						<h1>Anglesea 10 inch EP </h1>
						<h1>King Gizzard & the Lizard Wizard</h1>
						<div className="record-top-content-button">
							<button>rock</button>
							<button>punk</button>
						</div>
						<div className="record-top-content-footer">
							<span>$25.00</span>
							<span>pre-order</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Record;
