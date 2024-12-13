import React, { useState, useRef } from "react";
import "../../../assets/styles/recorddetailspages/middleSectionPagescss/middleSectionTracklistSection.css"; // Make sure to add the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPauseCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const MiddleSectionTracklistSection = ({ sectionData }) => {
	const [activeTrackIndex, setActiveTrackIndex] = useState(null);
	const [progress, setProgress] = useState(0);
	const audioRefs = useRef([]);

	const handlePlayPause = (index) => {
		const currentAudio = audioRefs.current[index];

		if (index === activeTrackIndex && !currentAudio.paused) {
			currentAudio.pause();
			setActiveTrackIndex(null);
		} else {
			// Pause the currently playing track if there is one
			if (activeTrackIndex !== null) {
				audioRefs.current[activeTrackIndex].pause();
			}
			currentAudio.play();
			setActiveTrackIndex(index);
		}
	};

	const handleTimeUpdate = (index) => {
		const currentAudio = audioRefs.current[index];
		const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
		setProgress(progress);
	};

	return (
		<>
			<h1>Tracklist</h1>
			<div className="records-project-details-page-middle-section-left-content-tracks-section-content">
				{/* <div className="records-project-details-page-middle-section-left-content-tracks-section-left-content"> */}
				{sectionData?.map((data, index) => (
					<div
						key={index}
						className="records-project-details-page-middle-section-left-content-tracks-section-left-content-track-item"
					>
						{data?.sectionAudio && (
							<div
								className={`records-project-details-page-middle-section-left-content-tracks-section-left-content-circle-button ${
									activeTrackIndex === index ? "playing" : ""
								}`}
								onClick={() => handlePlayPause(index)}
							>
								<audio
									ref={(el) => (audioRefs.current[index] = el)}
									src={data.sectionAudio}
									onTimeUpdate={() => handleTimeUpdate(index)}
								/>
								<div
									className="records-project-details-page-middle-section-left-content-tracks-section-left-content-progress-circle"
									style={{
										background: `conic-gradient(#00b289 ${progress}%, #ccc 0)`,
									}}
								></div>
								<div className="records-project-details-page-middle-section-left-content-tracks-section-left-content-play-pause-icon">
									<FontAwesomeIcon
										icon={
											activeTrackIndex === index ? faPauseCircle : faPlayCircle
										}
									/>
								</div>
							</div>
						)}
						<div className="records-project-details-page-middle-section-left-content-tracks-section-left-content-track-info">
							<p className="records-project-details-page-middle-section-left-content-tracks-section-left-content-track-title">
								{data?.title}
							</p>
							<p className="records-project-details-page-middle-section-left-content-tracks-section-left-content-track-artist">
								{data?.artistName}
							</p>
						</div>
						<div className="records-project-details-page-middle-section-left-content-tracks-section-left-content-track-time">
							{data?.time}
						</div>
					</div>
				))}
				{/* </div> */}
			</div>
		</>
	);
};

export default MiddleSectionTracklistSection;
