import React, { useRef } from "react";
import "../../assets/styles/qratescuratessection/qratesCuratedLatestArticles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import articlesPageData from "../../Data/ArticlesPageData";

const QratesCuratedLatestArticles = () => {
	const truncateText = (text, maxLength) => {
		if (!text) return ""; // Handle undefined or null
		return text.length > maxLength
			? `${text.substring(0, maxLength)}...`
			: text;
	};
	// Reference for the stories container
	const articlesContainerRef = useRef(null);

	// Function to scroll the container to the left
	const scrollLeft = () => {
		articlesContainerRef.current.scrollBy({
			left: -400, // Scrolls 300px to the left
			behavior: "smooth", // Smooth scrolling effect
		});
	};

	// Function to scroll the container to the right
	const scrollRight = () => {
		articlesContainerRef.current.scrollBy({
			left: 400, // Scrolls 300px to the right
			behavior: "smooth", // Smooth scrolling effect
		});
	};
	const selectedArticlesData = articlesPageData.filter(
		(item) => item.articleType === "distribution & promotion"
	);
	return (
		<>
			<div className="qrates-curated-page-latest-articles-section-container">
				<div className="qrates-curated-page-latest-articles-section-title">
					<h2>Latest Articles</h2>
					<div className="qrates-curated-page-latest-articles-section-title-button">
						{/* Left and Right Arrow Icons */}
						<FontAwesomeIcon
							icon={faArrowLeft}
							className="fw-bold"
							onClick={scrollLeft}
							style={{ cursor: "pointer" }}
						/>
						<FontAwesomeIcon
							icon={faArrowRight}
							className="fw-bold"
							onClick={scrollRight}
							style={{ cursor: "pointer" }}
						/>
						<Link to="/articles" target="_top">
							<button>browse all</button>
						</Link>
					</div>
				</div>
				<div
					className="qrates-curated-page-latest-articles-section-content"
					ref={articlesContainerRef}
				>
					{selectedArticlesData?.map((data, index) => (
						<div
							className="qrates-curated-page-latest-articles-section-content-boxs"
							key={index}
						>
							<Link
								to={`/articles-details-page/${data?.slugs}`}
								target="_top"
								style={{ textDecoration: "none" }}
							>
								<div
									className="qrates-curated-page-latest-articles-section-content-boxs-img"
									style={{
										backgroundImage: `url(${data.sectionImg})`,
									}}
								>
									<div className="qrates-curated-page-latest-articles-section-content-box-title">
										<span>{data?.articleType}</span>
									</div>
								</div>
							</Link>
							<div className="qrates-curated-page-latest-articles-section-content-boxs-body">
								<h2>{truncateText(data?.articleTitle, 30)}</h2>
								<p>{truncateText(data?.articleContent, 120)}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default QratesCuratedLatestArticles;
