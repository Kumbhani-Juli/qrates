import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../assets/styles/qratescuratessection/qratescuratetopsection.css";
const QratescurateTopsection = () => {
	return (
		<div>
			<div className="qrates-container">
				<div className="row mx-0 qrates-top-section">
					<div className="col-md-6 qrates-top-section-left-content"></div>
					<div className="col-md-6 qrates-top-section-right-content">
						<div className="qrates-top-section-right-content-body">
							<button>Scene Check</button>
							<h3>Qrates Recommends</h3>
							<h1>Qrates Recommends: Resistors & Transistors</h1>
							<p>
								Righteous techno, ethereal electro, and more exciting dancefloor
								bangers. Image: Omega Sparx
							</p>
						</div>
						<div className="qrates-top-section-right-content-body-bottom">
							<a href="#">
								READ FULL STORY <FontAwesomeIcon icon={faArrowRight} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QratescurateTopsection;
