import React from "react";
import "../../assets/styles/qratescuratessection/qrateslateststories.css";
import storiesData from "../../Data/StoriesData";
import { Link } from "react-router-dom";
const QratesLatestStories = () => {
	const truncateTitle = (title, maxLength) => {
		if (!title) return "";
		return title.length > maxLength
			? title.substring(0, maxLength) + "..."
			: title;
	};
	const selectedStoriesData = storiesData.slice(0, 12);
	return (
		<div>
			<div className="qrates-latest-stories-top-container">
				<div className="qrates-latest-stories-top-header">
					<h1>latest stories</h1>
					<Link to="/stories" target="_top">
						<button>browse all</button>
					</Link>
				</div>
				<div className="qrates-latest-stories-top-content">
					{selectedStoriesData?.map((data, index) => (
						<div
							className="qrates-latest-stories-top-content-img"
							key={index}
							style={{ backgroundImage: `url(${data?.bgImg})` }}
						>
							<button>{data?.storyType}</button>
							<div className="">
								<h3>{truncateTitle(data?.title, 30)}</h3>
								<h1>{truncateTitle(data?.content, 50)}</h1>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default QratesLatestStories;
