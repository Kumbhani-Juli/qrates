import React from "react";
import "../../assets/styles/fans/fanscommunityconnection.css";
import sectionimg1 from "../../assets/images/fans/fancategories.avif";
import sectionimg2 from "../../assets/images/fans/fancategories2.avif";
import sectionimg3 from "../../assets/images/fans/fancategories3.avif";
const FansCommunityConnections = () => {
	const fansCommunityConnections = [
		{
			spanTitle: "Community ",
			title: "Up to 85% of revenue is returned to the artist.",
			description:
				"	At Qrates, our priority is to create a vibrant music community where artists and fans can come together. We're committed to offering a high revenue return rate to artists and bridging the gap between them and their fans. Many talented artists have already shared their exclusive works with their fans all around the world through Qrates. We hope that Qrates will help even more artists and fans build relationships through the power of music.",
			img: sectionimg1,
			bgColor: "rgb(220,253,213)",
		},
		{
			spanTitle: "Community ",
			title: "Up to 85% of revenue is returned to the artist.",
			description:
				"	At Qrates, our priority is to create a vibrant music community where artists and fans can come together. We're committed to offering a high revenue return rate to artists and bridging the gap between them and their fans. Many talented artists have already shared their exclusive works with their fans all around the world through Qrates. We hope that Qrates will help even more artists and fans build relationships through the power of music.",
			img: sectionimg2,
			bgColor: "rgb(228,229,222)",
			rowReverse: "row-reverse",
			topBorder: true,
		},
		{
			spanTitle: "Community ",
			title: "Up to 85% of revenue is returned to the artist.",
			description:
				"	At Qrates, our priority is to create a vibrant music community where artists and fans can come together. We're committed to offering a high revenue return rate to artists and bridging the gap between them and their fans. Many talented artists have already shared their exclusive works with their fans all around the world through Qrates. We hope that Qrates will help even more artists and fans build relationships through the power of music.",
			img: sectionimg3,
			bgColor: "rgb(248,216,216)",
			topBorder: true,
		},
	];
	return (
		<div>
			<div className="for-fans-page-community-connection-section-container">
				<div className="for-fans-page-community-connection-section-title">
					<h1>We connect artists and fans directly</h1>
				</div>
				{fansCommunityConnections?.map((data, index) => (
					<div
						className="row mx-0 for-fans-page-community-connection-section-content"
						key={index}
						style={{
							backgroundColor: data.bgColor,
							borderTop: data?.topBorder ? "2px solid #000" : "none",
							flexDirection: data?.rowReverse,
						}}
					>
						<div className="col-md-6 for-fans-page-community-connection-section-left-content">
							<div className="for-fans-page-community-connection-section-left-content-title">
								<span>{data?.spanTitle}</span>
							</div>
							<div className="for-fans-page-community-connection-section-left-content-body">
								<h1>{data?.title}</h1>
								<p>{data?.description}</p>
							</div>
						</div>
						<div className="col-md-6 for-fans-page-community-connection-section-right-content">
							<img src={data?.img} className="img-fluid" alt="section-img" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FansCommunityConnections;
