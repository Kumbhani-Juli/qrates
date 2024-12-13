import React, { useState } from "react";
import "../../../assets/styles/recorddetailspages/middleSectionPagescss/middleSectionProductImgSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MiddleSectionProductImgsSection = ({ sectionData }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleThumbnailClick = (index) => {
		setCurrentIndex(index);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? sectionData.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === sectionData.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="records-project-details-page-middle-section-left-content-product-imgs-slider-container">
			<img
				src={sectionData[currentIndex].sliderImg}
				alt={`Slide ${currentIndex}`}
				className="records-project-details-page-middle-section-left-content-product-imgs-main-image"
			/>

			<div className="records-project-details-page-middle-section-left-content-product-imgs-thumbnail-container">
				<div>
					{sectionData?.map((item, index) => (
						<img
							key={index}
							src={item?.sliderImg}
							alt={`Thumbnail ${index}`}
							className={`records-project-details-page-middle-section-left-content-product-imgs-thumbnail ${
								currentIndex === index
									? "records-project-details-page-middle-section-left-content-product-imgs-active"
									: ""
							}`}
							onClick={() => handleThumbnailClick(index)}
						/>
					))}
				</div>
				<div className="records-project-details-page-middle-section-left-content-product-imgs-slider-buttons">
					<button
						onClick={handlePrev}
						className="records-project-details-page-middle-section-left-content-product-imgs-arrow"
					>
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<button
						onClick={handleNext}
						className="records-project-details-page-middle-section-left-content-product-imgs-arrow"
					>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default MiddleSectionProductImgsSection;
