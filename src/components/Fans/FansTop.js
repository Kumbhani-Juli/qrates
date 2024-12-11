import React from "react";
import sectionImg1 from "../../assets/images/fans/fantop.avif";
import "../../assets/styles/fans/fanstop.css";
const FansTop = () => {
	return (
		<div>
			{" "}
			<div className="fans-page-top-section-container">
				<div className="row mx-0 fans-page-top-section-content">
					<div className="col-md-6 fans-page-top-section-left-content">
						<div className="fans-top-button">
							<p>for Fans</p>
						</div>
						<h1>
							Music community and platform for people who love analog media
						</h1>
						<p>
							Qrates has grown by meeting the diverse needs of artists and fans
							of analog media, and in the process has returned greater profits
							to the community. Our goal is to bring artists and fans together
							through Qrates, and help the music community thrive and evolve.
						</p>
					</div>
					<div className="col-md-6 fans-page-top-section-right-content">
						<div className="fans-page-top-section-right-content-img">
							<img
								src={sectionImg1}
								className="fans-top-section-img"
								alt="section-img"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FansTop;
