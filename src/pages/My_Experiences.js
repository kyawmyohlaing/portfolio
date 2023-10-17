import React, { Component } from "react";

class Experiences extends Component {
  render() {
    return (
      <section id="experience">
        <div className="row column">
          <div className="small-12">
            <h2 className="text-center">CORE COMPETENCIES</h2>
          </div>
        </div>

        <div className="row">
          <div className="small-2 large-4 columns text-center experience-topics-front">
            <ul>
              <li>Network Design and Architecture</li>
              <li>Server Infrastructure Management</li>
              <li>Network Security Implementation</li>
              <li>Virtualization Management</li>
              <li>Disaster Recovery Planning</li>
              <li>Documentation and Reporting</li>
            </ul>
          </div>
          <div className="small-2 large-4 columns text-center experience-topics-back">
            <ul>
              
              <li>Proactive Maintenance and Troubleshooting</li>
              <li>Collaboration and Vendor Management</li>
              <li>Team Management</li>
              <li>Problem Solving</li>
              <li>Communication</li>
            </ul>
          </div>
          <div className="small-2 large-4 columns text-center experience-topics-tool"></div>
        </div>
      </section>
    );
  }
}
export default Experiences;
