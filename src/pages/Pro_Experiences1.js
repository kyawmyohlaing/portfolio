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
            First Private Bank Co., Ltd (May 2017 – Current)
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.details}>
          <Typography>
            <ul>
              <li>
                Position: <b>Infrastructure Manager</b>
              </li>
              <li>Responsibilities:</li>
              <ul>
                <li>
                  Plan, design, implement and maintain Datacenter and Disaster
                  Recovery infrastructure supporting Corebanking system, Digital
                  Banking, FI-Gateway, Swift, MIS agent, and Credit Bureau
                  system.
                </li>
                <li>
                  Plan, design, implement and maintain enterprise network for
                  Head Office and Branch Network.
                </li>
                <li>
                  Install, configure and administer ESXi, vCenter Server, NSX-T
                  Datacenter, UCS Blade Manager, and vOperation Manager for Datacenter management environment and velocloud SDWAN Edge and
                  orchestrator
                </li>
                <li>
                  Install, configure and administer Supervisor cluster, namespace, vSphere Pod, container and Tanzu K8 Cluster for open soure with vSphere Tanzu
                </li>
                <li>
                  Configure and administer EMC SAN storage and Data Domain for
                  backup and recovery.
                </li>
                <li>
                  Plan, deploy, configure and manage vCloud Director
                  Availability for private cloud DR management.
                </li>
                <li>
                  Install, configure, and administer Window, Linux Operation
                  System. Create and manage User Accounts, Organizational Units,
                  Group Policy Objects, Sharing & Security Permission,
                  Performance optimization for Active Directory Service.
                </li>
                <li>
                  Install and administer AD, DHCP, DNS, Cacti, Web application
                  server, Crystal Report and printer server.
                </li>
                <li>
                  Install, configure, and administer Switch, Router, Firewall,
                  AP, SD-WAN, and ACI.
                </li>
                <li>
                  Regularly maintain security by updating device firmware,
                  Operations system, software, and application, security
                  software.
                </li>
                <li>
                  Regularly check and schedule backup on a daily basis. Conduct
                  Datacenter Failover for testing recovery process. Manage and
                  cooperate with vendors.
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
            Frontier Technology Partners Co., Ltd (March 2014 – May 2017)
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.details}>
          <Typography>
            <ul>
              <li>
                Position: <b>Senior System Manager</b>
              </li>
              <li>Responsibilities:</li>
              <ul>
                <li>
                  Plan, design, implement and maintain “myKyat” system
                  infrastructure including Cisco networking and VMware
                  Virtualization.
                </li>
                <li>
                  Plan, design, implement and maintain enterprise network for
                  Head Office and Branch Network.
                </li>
                <li>
                  Install, configure and administer ESXi, vCenter Server, UCS
                  Manager, and vOperation Manager for Datacenter management
                  environment.
                </li>
                <li>
                  Install, configure, and administer Window, Linux Operation
                  System. Create and manage User Accounts, Organizational Units,
                  Group Policy Objects, Sharing & Security Permission,
                  Performance optimization for Active Directory Service.
                </li>
                <li>
                  Install and administer AD, DHCP, DNS, Cacti, Web application
                  server, Crystal Report and printer server.
                </li>
                <li>
                  Install, configure, and administer Switch, Router, Firewall,
                  AP.
                </li>
                <li>
                  Regularly maintain security by updating device firmware,
                  Operations system, software, and application, security
                  software.
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
            OKA Management Technology Pte Ltd (Nov 2008 – Nov 2012)
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.details}>
          <Typography>
            <ul>
              <li>
                Position: <b>Senior Network and System Engineer</b>
              </li>
              <li>Responsibilities:</li>
              <ul>
                <li>
                  Planning and implementation Switch,Router,AP and Firewall
                </li>
                <li>
                  {" "}
                  Implementing and Maintaining network , repairing of Computer
                  Hardware, Internet & Email Services
                </li>
                <li>
                  {" "}
                  Installation and administration AD,DHCP,DNS,Web application
                  server and printer server
                </li>
                <li>
                  Regularitymaintainingsecuritybyupdatingdevicefirmware,Operationsystem,software
                  and application , security software.
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
            Columbus Travels & Tours Co.,Ltd (Mar 2007 – Sep 2008)
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
