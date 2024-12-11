import React, { useState } from "react";
import "../../assets/styles/home/fans.css";
import fans1 from "../../assets/images/homePageImgs/forFansSectionImgs/bgImg1.avif";
import fans2 from "../../assets/images/homePageImgs/forFansSectionImgs/bgImg2.avif";
import fans3 from "../../assets/images/homePageImgs/forFansSectionImgs/bgImg3.avif";
import fans4 from "../../assets/images/homePageImgs/forFansSectionImgs/bgImg4.avif";
import defaultimg from "../../assets/images/homePageImgs/forFansSectionImgs/defaultBgImg.avif";
const ForFans = () => {
	const [forFans, setForFans] = useState(defaultimg);
	const fansTitle = [
		{ title: "Records", img: fans1 },
		{ title: "Cassettes", img: fans2 },
		{ title: "Stories", img: fans3 },
		{ title: "Qrates Curated", img: fans4 },
	];
	return (
		<>
			<div
				className="home-fans-container md:text-white "
				style={{
					backgroundImage: `url(${forFans})`,
				}}
			>
				<div className="home-fans-title">
					<p>for fans</p>
				</div>

				<div className="fans-content">
					{fansTitle.map((item, index) => (
						<h1
							key={index}
							onMouseEnter={() => setForFans(item?.img)}
							onMouseLeave={() => setForFans(defaultimg)}
						>
							{item?.title}
						</h1>
					))}
				</div>

				<p className="fans-community">The latest from the Qrates community →</p>
			</div>
		</>
	);
};

export default ForFans;
