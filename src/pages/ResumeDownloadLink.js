import React from 'react';
import resumePDF from '../assets/images/kyaw_myo_hlaing_resume-v1.pdf'; // Update the import path

const ResumeDownloadLink = () => {
  return (
    <div>
      <h2>Download My Resume</h2>
      <a
        href={resumePDF} // Use the imported variable
        download="kyaw_myo_hlaing_resume-v1.pdf" // Set the desired download filename
        className="resume-download-link"
      >
        Click here to download
      </a>
    </div>
  );
};

export default ResumeDownloadLink;
