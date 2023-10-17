import React, { Component } from "react";
import "../css/style.css";

class My_Experiences extends Component {
  render() {
    return (
      <section class="experience">
        <div className="row column">
          <div className="small-12">
            <h2 className="text-center">My Experience</h2>
            <p className="text-center tag-line">
              Specialist in need. Generalist at heart.
            </p>
          </div>
        </div>

        
          <div class="experience-item">
            <h2>Storage Solutions Specialist</h2>
            <p>
              Knowledgeable in support of various storage solutions, including
              NAS & SANs, EMC, etc.
            </p>
          </div>
          <div class="experience-item">
            <h2>Server Virtualization Expert</h2>
            <p>
              Experienced in supporting various server virtualization solutions
              like VMware and KVM.
            </p>
          </div>
          <div class="experience-item">
            <h2>Network Solutions Enthusiast</h2>
            <p>
              Proficient in supporting various network solutions, including
              SDWAN and SDN (e.g., Velocloud, NSX, ACI).
            </p>
          </div>
          <div class="experience-item">
            <h2>Orchestration Maestro</h2>
            <p>
              Knowledgeable in supporting orchestration solutions such as
              vCenter, NSX Manager, Openshift, vROP, Kubernetes, etc.
            </p>
          </div>
          <div class="experience-item">
            <h2>Blockchain Aficionado</h2>
            <p>
              Familiar with blockchain solutions, including Geth and DApp
              development.
            </p>
          </div>
          <div class="experience-item">
            <h2>Cable Infrastructure Designer</h2>
            <p>
              Designs and manages cable infrastructure while ensuring compliance
              with regulations.
            </p>
          </div>
       

        <script src="script.js"></script>
      </section>
    );
  }
}
export default My_Experiences;
