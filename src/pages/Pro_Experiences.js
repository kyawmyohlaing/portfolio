import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  panel: {
    boxShadow: "none",
    marginBottom: "20px",
    backgroundColor: "transparent",
    "&:before": {
      display: "none",
    },
  },
  panelSummary: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  panelContent: {
    margin: "12px 0",
  },
  heading: {
    fontSize: "24px",
  },
  details: {
    padding: "16px",
  },
});

const ProExperience = ({ classes }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <h2>Professional Experiences</h2>
      <MuiExpansionPanel
        square
        expanded={expanded}
        onChange={handleChange}
        className={classes.panel}
      >
        <MuiExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className={classes.panelSummary}
        >
          <Typography className={classes.heading}>
            <b>Infrastructure Manager</b>, First Private Bank Co., Ltd (May 2017
            – Current)
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.details}>
          <Typography>
            <ul>
              <p>
                Position: <b>Infrastructure Manager</b>
              </p>
              <p>
                In my role as an Infrastructure Manager at First Private Bank
                Co., Ltd, I assumed a pivotal position responsible for
                orchestrating the organization's IT infrastructure. My primary
                focus was on ensuring the seamless functioning of critical
                banking systems through strategic planning, meticulous design,
                and proficient management of various technologies.{" "}
              </p>
              <ul>
                <li>
                  Virtualization Management: Oversaw the configuration,
                  deployment, and ongoing management of VMware vSphere and Tanzu
                  Kubernetes clusters, ensuring optimal performance, resource
                  allocation, and virtual machine operations.
                </li>
                <li>
                  Strategic Infrastructure Planning: Led the strategic planning
                  efforts for the bank's IT infrastructure, including Core
                  banking, Digital Banking, FI-Gateway, Swift, and Credit Bureau
                  systems. Ensured alignment with the bank's objectives and
                  future scalability.
                </li>
                <li>
                  NSX Implementation: Designed and implemented VMware NSX,
                  creating a secure and dynamic network infrastructure.
                  Implemented micro-segmentation for enhanced security and
                  network isolation.
                </li>
                <li>
                  Cloud Integration: Implemented cloud solutions, including
                  VMware Cloud Availability (DR), ensuring the organization's
                  critical workloads were protected and could be rapidly
                  recovered in the event of a disaster. Facilitated seamless
                  integration of on-premises and cloud-based services.
                </li>
                <li>
                  Network Architecture & Security: Designed and maintained
                  secure network architectures. Implemented Role-Based Access
                  Control (RBAC), encryption protocols, and real-time monitoring
                  tools like Prometheus and Grafana to ensure a secure and
                  high-performance network environment.
                </li>
                <li>
                  AWS VPC Setup: Spearheaded the design and implementation of a
                  secure Virtual Private Cloud (VPC) architecture, leveraging
                  multiple Availability Zones and VPC endpoints. Implemented
                  advanced monitoring techniques to ensure fault tolerance and
                  data integrity.
                </li>
                <li>
                  SD-WAN Deployment: Led the deployment and configuration of
                  SD-WAN solutions, optimizing WAN traffic, enhancing network
                  reliability, and ensuring secure communication between
                  branches and data centers.
                </li>
                <li>
                  Server Administration: Installed, configured, and administered
                  Windows and Linux operating systems. Managed web application
                  servers, ensuring they were up-to-date, secure, and optimized
                  for performance.
                </li>
                <li>
                  Switch and Router Configuration: Deployed, configured, and
                  optimized network switches and routers, ensuring
                  high-performance data routing, fault tolerance, and efficient
                  traffic flow across the network.
                </li>
                <li>
                  Collaboration and Vendor Management: Collaborated with
                  vendors, ensuring the latest updates, patches, and best
                  practices were applied. Managed vendor relationships, resolved
                  technical issues promptly, and ensured the organization
                  benefited from cutting-edge solutions.
                </li>
                <li>
                  Performance Monitoring and Optimization: Regularly monitored
                  the performance of the virtualized infrastructure, identifying
                  bottlenecks and areas for improvement. Implemented
                  optimizations to enhance overall system efficiency and
                  responsiveness.
                </li>
                <li>
                  Capacity Planning: Conducted capacity planning exercises,
                  forecasting future resource requirements, and ensuring the
                  infrastructure was scalable to accommodate the organization's
                  growth and evolving IT needs.
                </li>
                <li>
                  Documentation and Training: Maintained detailed documentation
                  of configurations, procedures, and best practices. Provided
                  training and knowledge sharing sessions to team members and
                  stakeholders, ensuring a well-informed IT team.
                </li>

                {/* Add more responsibilities here */}
              </ul>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      {/* Add more experience panels here */}
      <MuiExpansionPanel
        square
        expanded={expanded}
        onChange={handleChange}
        className={classes.panel}
      >
        <MuiExpansionPanelSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          className={classes.panelSummary}
        >
          <Typography className={classes.heading}>
            <b>Senior System and Network Manager</b>,Frontier Technology
            Partners Co., Ltd (March 2014 – May 2017)
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.details}>
          <Typography>
            <ul>
              <p>
                Position: <b>Senior System Manager</b>
              </p>
              <p>
                As a Senior System Engineer at Frontier Technology Partners Co.,
                Ltd, I was entrusted with critical responsibilities in managing
                complex IT infrastructures. My role involved overseeing various
                aspects of system and network administration to ensure seamless
                operations of the organization's IT environment.{" "}
              </p>
              <ul>
                <li>
                  System Infrastructure Management: Planned, designed,
                  implemented, and maintained the system infrastructure,
                  ensuring seamless operations of the "myKyat" system. Managed
                  complex systems including Cisco networking and VMware
                  virtualization technologies.
                </li>
                <li>
                  Virtualization Expertise: Installed, configured, and
                  administered ESXi hosts and vCenter Server. Managed
                  virtualized environments, ensuring optimal performance,
                  resource allocation, and efficient virtual machine operations.
                </li>
                <li>
                  Network Design and Administration: Designed and implemented
                  enterprise-level networks for both Head Office and Branch
                  Network. Configured switches, routers, firewalls, and access
                  points to establish secure and high-performance network
                  connections.
                </li>
                <li>
                  Active Directory Management: Managed user accounts,
                  Organizational Units, Group Policy Objects (GPOs), and shared
                  resources within Active Directory. Implemented security
                  permissions and optimized the Active Directory service for
                  performance.
                </li>
                <li>
                  Server Administration: Installed, configured, and administered
                  Windows and Linux operating systems. Managed web application
                  servers, ensuring they were up-to-date, secure, and optimized
                  for performance.
                </li>
                <li>
                  Monitoring and Optimization: Implemented monitoring tools like
                  Cacti and vOperation Manager to ensure real-time monitoring of
                  system performance. Conducted regular performance
                  optimizations to enhance system efficiency.
                </li>
                <li>
                  Team Management: Managed and led a team of IT professionals
                  and vendors, ensuring effective collaboration, task
                  delegation, and successful project outcomes. Facilitated
                  training sessions to enhance team skills and knowledge.
                </li>
                <li>
                  Documentation: Maintained detailed documentation of
                  configurations, procedures, and best practices. Documented
                  network architectures, server configurations, and
                  troubleshooting steps for future reference and knowledge
                  sharing.
                </li>
              </ul>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded}
        onChange={handleChange}
        className={classes.panel}
      >
        <MuiExpansionPanelSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          className={classes.panelSummary}
        >
          <Typography className={classes.heading}>
            <b>Senior Network Engineer</b>,OKA Management Technology Pte Ltd
            (Nov 2008 – Nov 2012)
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.details}>
          <Typography>
            <ul>
              <p>
                Position: <b>Senior Network Engineer</b>
              </p>
              <p>
                As a Senior Network Engineer at OKA Management Technology Co.,
                Ltd, I played a pivotal role in shaping and maintaining the
                organization's network infrastructure. My responsibilities
                encompassed a wide array of tasks, focusing on network design,
                implementation, and continuous optimization to ensure seamless
                and secure data communication.
              </p>
              <ul>
                <li>
                  Network Planning and Implementation: Led the planning and
                  implementation of switches, routers, access points, and
                  firewalls. Designed network architectures that catered to the
                  organization's evolving requirements, emphasizing scalability
                  and robustness.
                </li>
                <li>
                  Network Maintenance and Repair: Implemented proactive
                  maintenance routines, diagnosing and swiftly resolving network
                  issues. Conducted regular repair and troubleshooting of
                  computer hardware, ensuring continuous network uptime.
                </li>
                <li>
                  Server Infrastructure: Installed, configured, and administered
                  Active Directory, DHCP, DNS, and web application servers.
                  Ensured server security, optimal performance, and streamlined
                  user access within the Windows Server environment.
                </li>
                <li>
                  Security Configurations: Configured and maintained firewall
                  policies, VPNs, and intrusion detection systems. Implemented
                  stringent security measures to safeguard sensitive data,
                  ensuring compliance with industry standards.
                </li>
                <li>
                  Collaboration and Integration: Collaborated with vendors for
                  the latest hardware and software solutions. Ensured seamless
                  integration of various network components, facilitating
                  efficient communication between different devices and
                  services.
                </li>
                <li>
                  Documentation and Reporting: Maintained detailed documentation
                  of network configurations, troubleshooting procedures, and
                  security protocols. Generated regular reports to track network
                  performance, identifying areas for improvement.
                </li>
                <li>
                  WAN Connectivity: Designed and configured WAN connections,
                  including MPLS, leased lines, and broadband. Ensured high
                  availability and fault tolerance, implementing redundancy
                  protocols and load balancing techniques.
                </li>
              </ul>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded}
        onChange={handleChange}
        className={classes.panel}
      >
        <MuiExpansionPanelSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          className={classes.panelSummary}
        >
          <Typography className={classes.heading}>
            <b>Network and System Engineer</b>,Columbus Travels & Tours Co.,Ltd
            (Mar 2007 – Sep 2008)
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.details}>
          <Typography>
            <ul>
              <li>
                Position: <b>Network and System Engineer</b>
              </li>
              <li>Responsibilities:</li>
              <ul>
                <li>
                  Nation wide IPStar satellite station installation at client
                  site
                </li>
                <li>
                  User Technical Support and Solving System Error in Windows XP,
                  Vista , Window 7
                </li>
                <li>
                  Installation and administration AD,DHCP,DNS and printerserver
                </li>
                <li>
                  Accept and solve complaints from the customer, and provide
                  required technical support o
                  Installation,configuration,monitoring and troubleshooting
                  switch,router and firewall
                </li>
              </ul>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>
    </div>
  );
};

export default withStyles(styles)(ProExperience);
