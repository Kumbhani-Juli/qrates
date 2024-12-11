import React, { useEffect, useState } from "react";
import "../../assets/styles/home/homeTryItNowSection.css";
import sliderImg1 from "../../assets/images/homePageImgs/tryItNowSectionImgs/sectionImg1.png";
import sliderImg2 from "../../assets/images/homePageImgs/tryItNowSectionImgs/sectionImg2.png";
import sliderImg3 from "../../assets/images/homePageImgs/tryItNowSectionImgs/sectionImg3.png";
import sliderImg4 from "../../assets/images/homePageImgs/tryItNowSectionImgs/sectionImg4.png";
import sliderImg5 from "../../assets/images/homePageImgs/tryItNowSectionImgs/sectionImg5.png";
import sliderImg6 from "../../assets/images/homePageImgs/tryItNowSectionImgs/sectionImg6.png";
import absoluteImg1 from "../../assets/images/homePageImgs/tryItNowSectionImgs/absoluteImg1.png";
import absoluteImg2 from "../../assets/images/homePageImgs/tryItNowSectionImgs/absoluteImg2.png";

const HomePageTryItNowSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [showAbsoluteImg1, setShowAbsoluteImg1] = useState(true); // State for controlling absolute images

	const sliderData = [
		{ sliderImg: sliderImg1 },
		{ sliderImg: sliderImg2 },
		{ sliderImg: sliderImg3 },
		{ sliderImg: sliderImg4 },
		{ sliderImg: sliderImg5 },
		{ sliderImg: sliderImg6 },
	];

	// Auto-slide effect
	useEffect(() => {
		const slideInterval = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
		}, 1000); // Change slide every 3 seconds

		return () => clearInterval(slideInterval); // Cleanup on unmount
	}, [sliderData.length]);

	// Toggle absolute images every 5 seconds
	useEffect(() => {
		const toggleAbsoluteImg = setInterval(() => {
			setShowAbsoluteImg1((prev) => !prev); // Toggle between true and false every 5 seconds
		}, 5000);

		return () => clearInterval(toggleAbsoluteImg); // Cleanup on unmount
	}, []);

	// Function to handle manual slide change (via dots)
	const handleSlideChange = (index) => {
		setCurrentSlide(index);
	};

	return (
		<div className="home-page-try-it-now-section-container">
			<div className="home-page-try-it-now-section-title">
				<div className="home-page-try-it-now-section-inner-title">
					<p>try it now</p>
				</div>
				<h2>Make it real with Qrates Studio</h2>
				<p className="home-page-try-it-now-section-title-content">
					Design the look and feel of your vinyl and cassette and use the profit
					calculator to immediately see how much your project will cost, and how
					much you'll earn.
				</p>
			</div>
			<div className="home-page-try-it-now-slider-section">
				{sliderData.map((data, index) => (
					<div
						key={index}
						className={`home-page-try-it-now-section-slide ${
							currentSlide === index ? "active" : ""
						}`}
					>
						<img
							src={data.sliderImg}
							className="img-fluid"
							alt={`home-page-try-it-now-section-slider-img-${index}`}
						/>
					</div>
				))}
			</div>

			{/* Conditionally render the absolute images */}
			{showAbsoluteImg1 ? (
				<img
					src={absoluteImg1}
					className="home-page-try-it-now-section-absolute-img1"
					alt="absolute-img"
				/>
			) : (
				<img
					src={absoluteImg2}
					className="home-page-try-it-now-section-absolute-img2"
					alt="absolute-img"
				/>
			)}

			<button className="try-it-now-btn">try it now</button>
		</div>
	);
};

export default HomePageTryItNowSection;
