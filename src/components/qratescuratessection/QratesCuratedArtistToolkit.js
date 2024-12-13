import React from "react";
import "../../assets/styles/qratescuratessection/qratesCuratedArtistToolkit.css";
import articlesPageData from "../../Data/ArticlesPageData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const QratesCuratedArtistToolkit = () => {
	const selectedArticleData = articlesPageData[18];
	return (
		<>
			<div className="qrates-curated-page-artist-toolkit-section-container">
				<div className="qrates-curated-page-artist-toolkit-section-title">
					<h3>Artist Toolkit</h3>
				</div>
				<div className="row mx-0 qrates-curated-page-artist-toolkit-section-content">
					<div className="col-md-6 qrates-curated-page-artist-toolkit-section-left-content">
						<img
							src={selectedArticleData?.sectionImg}
							className="img-fluid"
							alt="section-img"
						/>
					</div>
					<div className="col-md-6 qrates-curated-page-artist-toolkit-section-right-content">
						<div className="qrates-curated-page-artist-toolkit-section-right-content-body">
							<div className="qrates-curated-page-artist-toolkit-section-right-content-title">
								<span>{selectedArticleData?.articleType}</span>
							</div>
							<h2>{selectedArticleData?.articleTitle}</h2>
							<p>{selectedArticleData?.articleContent}</p>
						</div>
						<Link
							to={`/articles-details-page/${selectedArticleData?.slugs}`}
							target="_top"
						>
							READ FULL STORY <FontAwesomeIcon icon={faArrowRight} />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default QratesCuratedArtistToolkit;
