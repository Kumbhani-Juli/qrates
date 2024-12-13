import React from "react";
import RecordDetailTop from "./RecordDetailspages/RecordDetailTop";
import { useParams } from "react-router-dom";
import recordsPageProjectsData from "../Data/RecordsPageProjectsData";
import RecordDetailBottom from "./RecordDetailspages/RecordDetailBottom";
import cassatesPageProjectsData from "../Data/CassatesPageProjectsData";

const RecordDetailsPage = () => {
	const { slugs } = useParams();
	const Recorddata = recordsPageProjectsData.find(
		(record) => record.slugs === slugs
	);
	const cassetesData = cassatesPageProjectsData.find(
		(cassate) => cassate.slugs === slugs
	);
	return (
		<div>
			<RecordDetailTop
				sectionData={
					Recorddata
						? Recorddata?.projectDetailsData?.topSectionData
						: cassetesData?.projectDetailsData?.topSectionData
				}
			/>
			<RecordDetailBottom
				sectionData={Recorddata ? Recorddata : cassetesData}
			/>
		</div>
	);
};

export default RecordDetailsPage;
