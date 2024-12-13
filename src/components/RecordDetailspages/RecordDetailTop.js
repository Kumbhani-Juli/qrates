import React, { useRef, useState } from "react";
import img from "../../assets/images/recordsProjectImgs/sectionImg1.png";
import "../../assets/styles/recorddetailspages/recorddetailtop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import audio1 from "../../assets/images/projectDetailsImgs/recordsProject1Imgs/sample.mp3";
import {
	faBackwardFast,
	faForwardFast,
	faPause,
	faPlay,
} from "@fortawesome/free-solid-svg-icons";
const RecordDetailTop = ({ sectionData }) => {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	const handlePlayPause = () => {
		if (audioRef.current.paused) {
			audioRef.current.play();
			setIsPlaying(true);
		} else {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	};

	const handleNext = () => {
		audioRef.current.currentTime += 10; // Skip 10 seconds forward
	};

	const handlePrev = () => {
		audioRef.current.currentTime -= 10; // Skip 10 seconds backward
	};

	const handleProgress = () => {
		const current = audioRef.current.currentTime;
		const total = audioRef.current.duration;
		const progressPercentage = (current / total) * 100;
		setProgress(progressPercentage);
		setCurrentTime(current); // Update current time
	};

	const handleLoadedMetadata = () => {
		setDuration(audioRef.current.duration); // Set the total duration
	};

	// Helper function to format time (e.g., 1:30)
	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};
	return (
		<>
			<div
				className="record-detail-top-container"
				style={{
					backgroundColor: sectionData?.backgroundColor
						? sectionData.backgroundColor
						: "none",
					backgroundImg: sectionData?.backgroundImg
						? `url(${sectionData.backgroundImg})`
						: "none",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<img src={sectionData?.sectionImg} alt="record" className="img-fluid" />
			</div>
			{sectionData?.sectionAudio && (
				<div className="records-project-details-page-top-section-audio-container">
					<p>{sectionData?.audioTrackName}</p>
					<div className="records-project-details-page-top-section-audio-content">
						<audio
							ref={audioRef}
							onTimeUpdate={handleProgress}
							onLoadedMetadata={handleLoadedMetadata}
						>
							<source src={sectionData?.sectionAudio} type="audio/mpeg" />
						</audio>
						<div className="records-project-details-page-top-section-audio-controls">
							<FontAwesomeIcon
								icon={faBackwardFast}
								onClick={handlePrev}
								className="records-project-details-page-top-section-audio-controls-icons"
							/>
							<FontAwesomeIcon
								icon={isPlaying ? faPause : faPlay}
								className="records-project-details-page-top-section-audio-controls-icons"
								onClick={handlePlayPause}
							/>
							<FontAwesomeIcon
								icon={faForwardFast}
								className="records-project-details-page-top-section-audio-controls-icons"
								onClick={handleNext}
							/>
						</div>

						{/* Progress Bar */}
						<div className="records-project-details-page-top-section-progress-bar">
							<div
								className="records-project-details-page-top-section-progress"
								style={{ width: `${progress}%` }}
							></div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default RecordDetailTop;
