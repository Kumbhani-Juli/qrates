import React from "react";
import "../assets/styles/stories.css";
import storiesData from "../Data/StoriesData";
const Stories = () => {
	const storiesTitle = [
		{
			title: "All Stories",
		},
		{
			title: "Qrates Recommends",
		},
		{
			title: "Interview",
		},
		{
			title: "Scene Check",
		},
		{
			title: "Wax Heart",
		},
		{
			title: "Qrates Biz",
		},
	];
	const truncateTitle = (title, maxLength) => {
		if (!title) return "";
		return title.length > maxLength
			? title.substring(0, maxLength) + "..."
			: title;
	};
	return (
		<>
			<div className="stories-container">
				<div className="stories-title">
					{storiesTitle?.map((title, index) => (
						<p key={index}>{title?.title}</p>
					))}
				</div>
				<div className="row mx-0 stories-body">
					{storiesData?.map((storiesData, index) => (
						<div className="col-md-4 stories-body-content" key={index}>
							<div className="stories-body-content-box">
								<div className="stories-body-box-img">
									<img src={storiesData?.bgImg} className="img-fluid" />
									<button>{storiesData?.storyType}</button>
								</div>
								<div className="stories-inner-content">
									<p>{truncateTitle(storiesData?.title, 30)}</p>
									<h1>{truncateTitle(storiesData?.content, 50)}</h1>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Stories;
