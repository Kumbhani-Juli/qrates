import React from 'react'

const MiddleSectionAboutSection = ({ sectionData }) => {
    return (
        <>
            <h1 className='mb-5'>{sectionData?.title}</h1>
            {
                sectionData?.contentData?.map((data, index) => (
                    <div key={index}>
                        <p>{data?.content}</p>
                    </div>
                ))
            }
        </>
    )
}

export default MiddleSectionAboutSection
