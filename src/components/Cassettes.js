import React, { useState } from "react";
import "../assets/styles/record.css";
import recordsPageProjectsData from "../Data/CassatesPageProjectsData";
import { Link } from "react-router-dom";

const Cassette = () => {
	const [filter, setFilter] = useState("All Projects");

	const truncateTitle = (title, maxLength) => {
		if (!title) return "";
		return title.length > maxLength
			? title.substring(0, maxLength) + "..."
			: title;
	};
	const filteredData = recordsPageProjectsData.filter((_, index) => {
		if (filter === "All Projects") return true;
		if (filter === "Crowdfunding") return index === 2 || index === 3;
		if (filter === "Purchase") return index >= 6 && index <= 12;
		return false;
	});

	return (
		<div>
			<div className="record-top-container">
				<div className="record-top-title">
					<h1
						onClick={() => setFilter("All Projects")}
						style={{ color: filter === "All Projects" ? "white" : "" }}
					>
						All Projects
					</h1>
					<h1
						onClick={() => setFilter("Crowdfunding")}
						style={{ color: filter === "Crowdfunding" ? "white" : "" }}
					>
						Crowdfunding
					</h1>
					<h1
						onClick={() => setFilter("Purchase")}
						style={{ color: filter === "Purchase" ? "white" : "" }}
					>
						Purchase
					</h1>
				</div>

				<div className="row mx-0 record-body-section">
					{filteredData.map((record, index) => (
						<div className="col-md-3 record-top-content" key={index}>
							<Link to={`/records-project-details/${record?.slugs}`}>
								<div className="record-top-content-img">
									<img
										src={record?.sectionImg}
										className="img-fluid"
										alt="section-img"
									/>
								</div>
							</Link>{" "}
							<h1>{truncateTitle(record?.projectTitle, 32)}</h1>
							<h1>{record?.artistTitle}</h1>
							<div className="record-top-content-button">
								{record?.genreData?.map((buttonData, index) => (
									<button key={index}>{buttonData?.genreList}</button>
								))}
							</div>
							<div className="record-top-content-footer">
								<span>
									{record?.moneyType}
									{record?.projectPrice}
								</span>
								<span>{record?.footerContent}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Cassette;
