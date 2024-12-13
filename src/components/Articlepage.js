import React, { useState } from "react";
import articlesPageData from "../Data/ArticlesPageData";
import "../assets/styles/articlepage.css";
const Articlepage = () => {
	const ArticleTitle = [
		{ title: "Most Recent" },
		{ title: "Vinyl Knowledge" },
		{ title: "Inspiration" },
		{ title: "Mixing & Mastering" },
		{ title: "Distribution & Promotion" },
		{ title: "Qrates Tips" },
	];
	const [Title, setTitle] = useState(ArticleTitle[0]);
	const truncateTitle = (title, maxLength) => {
		if (!title) return "";
		return title.length > maxLength
			? title.substring(0, maxLength) + "..."
			: title;
	};
	const selectedArticleData =
		Title.title === "Most Recent"
			? articlesPageData
			: articlesPageData.filter(
					(item) => item.articleType.toLowerCase() === Title.title.toLowerCase()
			  );
	return (
		<div className="articles-container">
			<div className="articles-header">
				<h1>ARTIST TOOLKIT</h1>
				<p>
					The Qrates team is here to make your project a success. Here are some
					tips & tricks you might find useful based on the status of your
					project.
				</p>
				<div className="articles-title">
					{ArticleTitle?.map((title, index) => (
						<p
							key={index}
							onClick={() => {
								setTitle(title);
							}}
						>
							{title?.title}
						</p>
					))}{" "}
				</div>{" "}
			</div>
			<div className="row mx-0 articles-body">
				{selectedArticleData.length > 0 ? (
					<>
						{" "}
						{selectedArticleData?.map((articlesData, index) => (
							<div className="col-md-4 articles-body-content" key={index}>
								<div className="articles-body-content-box">
									<div className="articles-body-box-img">
										<img src={articlesData?.sectionImg} className="img-fluid" />
										<button>{articlesData?.articleType}</button>
									</div>
									<div className="articles-inner-content">
										<p>{truncateTitle(articlesData?.articleTitle, 30)}</p>
										<h1>{truncateTitle(articlesData?.articleContent, 50)}</h1>
									</div>
								</div>
							</div>
						))}
					</>
				) : (
					<>
						<h1 style={{ textAlign: "center" }}>No Data Available.</h1>
					</>
				)}
			</div>
		</div>
	);
};

export default Articlepage;
