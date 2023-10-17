import React from "react";
import resumePDF from "../assets/images/kyaw_myo_hlaing_resume-v1.pdf"; // Update the import path

const ResumeDownloadLink = () => {
  return (
    <div id="experience">
      <a
        href={resumePDF} // Use the imported variable
        download="kyaw_myo_hlaing_resume-v2.pdf" // Set the desired download filename
        className="resume-download-link"
      >
        Click here to download My Resume
      </a>

      <h3>Professional Summary</h3>
      <p className="text-center tag-line small-2 large-4">
        <br></br>
        Dynamic and results-oriented Infrastructure Manager with 14 years of
        extensive experience in ICT, including 4 years overseas. Proven
        expertise in enterprise networking IT infrastructure implementation
        system administrator and customer support. Adept at planning, designing,
        and maintaining complex data center and disaster recovery
        infrastructures. Committed to achieving organizational goals through
        strategic IT Support.
      </p>
    </div>
  );
};

export default ResumeDownloadLink;
