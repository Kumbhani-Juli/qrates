import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import sectionImg1 from "../../assets/images/Artist/artistresource1.avif";
import sectionImg2 from "../../assets/images/Artist//artistresource2.avif";
import "../../assets/styles/artist/artistnewproject.css";
const ArtistNewProject = () => {
	return (
		<div>
			<div className="for-artists-page-start-new-project-section-container">
				<div className="for-artists-page-start-new-project-section-title">
					<h1>
						Start a new project{" "}
						<FontAwesomeIcon
							icon={faArrowRight}
							className="for-artists-page-start-new-project-section-title-icon"
						/>
					</h1>
					<button>make your own</button>
				</div>
				<div className="row mx-0 for-artists-page-start-new-project-section-content">
					<div className="col-md-6 for-artists-page-start-new-project-section-left-content">
						<img src={sectionImg1} className="img-fluid" alt="section-img" />
						<div className="for-artists-page-start-new-project-section-left-content-title">
							<p>artist toolkit</p>
						</div>
						<h1>Take you and your works to next level.</h1>
						<p className="for-artists-page-start-new-project-section-left-inner-content">
							We have a lot of informations and tips about music production,
							physical format and music business for you.
						</p>

						<button>learn more</button>
					</div>
					<div className="col-md-6 for-artists-page-start-new-project-section-right-content">
						<img src={sectionImg2} className="img-fluid" alt="section-img" />
						<div className="for-artists-page-start-new-project-section-right-content-title">
							<p>customer support</p>
						</div>
						<h1>Here to help, whenever you need it.</h1>
						<p className="for-artists-page-start-new-project-section-right-inner-content">
							Whether you’re an artist in the middle of product, or a fan with
							questions about your order; our team is here to help.
						</p>

						<button>contact us</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArtistNewProject;
