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
  button: {
    backgroundColor: "#333",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#555",
    },
  },
});

const CustomizedExpansionPanels = ({ classes }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <h2>Education</h2>
      <MuiExpansionPanel
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={classes.panel}
      >
        <MuiExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className={classes.panelSummary}
        >
          <Typography className={classes.heading}>
            Bachelor of Engineering (BE)
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.details}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmcQXZAJ8Q992fTrfQZRLMSk1BvXqLCesfU1ftJi8LNAUd"
              >
                <li>Bachelor of Engineering (BE)</li>
              </a>
              <li>Mandalay Technological University</li>
              <li>Information Technology</li>
              <li>2000 – 2006</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      {/* Add more panels here */}
      <MuiExpansionPanel
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className={classes.panel}
      >
        <MuiExpansionPanelSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          className={classes.panelSummary}
        >
          <Typography className={classes.heading}>
            Bachelor of Tech (B.Tech)
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.details}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmYFYGG3JKaCDEdcf6DvN2TUjkwF2S4Vj5ix3LncrHVAsN"
              >
                <li>Bachelor of Tech (B.Tech)</li>
              </a>
              <li>Mandalay Technological University</li>
              <li>Information Technology</li>
              <li>2000 – 2005</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <h2>Professional Certifications</h2>
      <MuiExpansionPanel
        square
        expanded={expanded === "panel3"} // You can use a different panel identifier
        onChange={handleChange("panel3")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            VMware Certified Professional 6.5 - Data Center Virtualization
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmUH3jnH89cJzD5zy3Reo2JpcgB3iNUCoTNa7CgT6Nx7cK"
              >
                <li>
                  VMware Certified Professional 6.5 - Data Center Virtualization
                </li>
              </a>
              <li>VMware</li>
              <li>Issued May 2018 - No Expiration Date</li>
              <li>Credential ID: VMW-01790151Z-00547519</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel4"} // You can use a different panel identifier
        onChange={handleChange("panel4")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel4d-content"
          id="panel4d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            VMware Certified Professional Data Center Virtualization 5
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmUH3jnH89cJzD5zy3Reo2JpcgB3iNUCoTNa7CgT6Nx7cK"
              >
                VMware Certified Professional Data Center Virtualization 5
              </a>
              <li>VMware</li>
              <li>Issued May 2018 - No Expiration Date</li>
              <li>Credential ID: VMW-01790151Z-00547519</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel5"} // You can use a different panel identifier
        onChange={handleChange("panel5")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel5d-content"
          id="panel5d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            Master Cloud-Native Infrastructure with Kubernetes
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/Qmc8zxecRMmGSvAtmoctaeaLzwG2J5QzuYv642uPx1tFuS"
              >
                Master Cloud-Native Infrastructure with Kubernetes
              </a>
              <li>LinkIn Learning</li>
              <li>May 12, 2020 - No Expiration Date</li>
              <li>Credential ID: VAcdb4_KFFwklKTu3d9afxgMPWj9G</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel6"} // You can use a different panel identifier
        onChange={handleChange("panel6")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel6d-content"
          id="panel6d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            SDN, NFV, Whitebox switching and OpenFlow
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmdigjWgyCEeftdMoSLwnTJ3uK5x7Gj2w966Zpq9ncTWGn"
              >
                SDN-NFN-Whitebox Swtiching and OpenFlow
              </a>
              <li>Udemy</li>
              <li>Issued : May 18, 2020 - No Expiration Date</li>
              <li>Credential ID: UC-8db5af9d-7bb3-4ce2-96c3-b4a7c8ac29aa</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel7"} // You can use a different panel identifier
        onChange={handleChange("panel7")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel7d-content"
          id="panel7d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            ICSI | CNSS Certified Network Security Specialist
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/Qmdso5s11PdFCyo6JDswxf6WHAa94ZtNH1SqjNvMgmYuW7"
              >
                ICSI | CNSS Certified Network Security Specialist
              </a>
              <li>International Cyber Security Institute</li>
              <li>Issued : May 1, 2020 - No Expiration Date</li>
              <li>Credential ID: 17381763</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel8"} // You can use a different panel identifier
        onChange={handleChange("panel8")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel8d-content"
          id="panel8d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            OpenShift Application
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmaBSUpZVf7XbLi1caBGU51r7kFPBwdUKbvDp9F1aEgfjA"
              >
                OpenShift Application
              </a>
              <li>Redhat</li>
              <li>Issued : April, 2020 - No Expiration Date</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel9"} // You can use a different panel identifier
        onChange={handleChange("panel9")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel9d-content"
          id="panel9d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            Application Centric Infrastructure
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmTsRujqvyTHcPVeLCFZFRMUYntghXMDsA7ZDVmyXBu94W"
              >
                Application Centric Infrastructure
              </a>
              <li>Lumos and Cisco</li>
              <li>Issued : April, 2019 - No Expiration Date</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel10"} // You can use a different panel identifier
        onChange={handleChange("panel10")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel10d-content"
          id="panel10d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            Absolute Beginner Cyber Secruity
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmPrUhH5q7m94WtD3wCL3jojo9qT1Ka1cUUh4efbv6tndz"
              >
                Absolute Beginner Cyber Secruity Part-1
              </a>
              <br />
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmUyErqPTLo9PGMnp8bTi46557hiCVH7xzULhJ5pFgpmgo"
              >
                Absolute Beginner Cyber Secruity Part-2
              </a>
              <br />
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmVN6SpiyMqRuzR83VBq18PBexzyixfEnHuGZvwQqzmZwi"
              >
                Absolute Beginner Cyber Secruity Part-3
              </a>
              <br />
              <li>Udemy</li>
              <li>Issued : May , 2020 - No Expiration Date</li>
              <li>Credential : ID UC-9fb49cf8-5900-46a1-8684-09e11c4f3e4a</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel11"} // You can use a different panel identifier
        onChange={handleChange("panel11")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel11d-content"
          id="panel11d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            Red Hat Certified System Administrator
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmYuUd9P8pA19g4oyfMnMSP3uxviESzoDZrDVbS8U1U5be"
              >
                Red Hat Certified System Administrator
              </a>
              <li>LinkIn</li>
              <li>Issued : May , 2020 - No Expiration Date</li>
              <li>Credential ID : ARIp5VIFhvQ7sDdYCeOdX8RW__y0</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel101"} // You can use a different panel identifier
        onChange={handleChange("panel101")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel101d-content"
          id="panel101d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            AWS Fundamentals Specialization
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/XUKS5C27B2TZ"
              >
                AWS Fundamentals Specialization
              </a>
              <li>Coursera</li>
              <li>Issued : October , 2023 - No Expiration Date</li>
              <li>Credential ID : XUKS5C27B2TZ</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel12"} // You can use a different panel identifier
        onChange={handleChange("panel12")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel12d-content"
          id="panel12d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            CCNA Routing and Switching
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmadyvwsETk8uAzuq23HVazUcfTybPqAKHKYFgzeD2v5Ru"
              >
                CCNA Routing and Switching
              </a>
              <li>Cisco</li>
              <li>Issued : January, 2015</li>
              <li>Credential ID : 420318583600JLVK</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel13"} // You can use a different panel identifier
        onChange={handleChange("panel13")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel13d-content"
          id="panel13d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            VMware Site Recovery Manager [V6.1] Fundamentals
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmSGdpq12ovsHCrcy3SiYWGWGN9T4LTTopYPscQ1net4XF"
              >
                VMware Site Recovery Manager [V6.1] Fundamentals
              </a>
              <li>VMware</li>
              <li>Issued : October, 8 2017</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel14"} // You can use a different panel identifier
        onChange={handleChange("panel14")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel14d-content"
          id="panel14d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>MikroTik Lab</Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmUQYs37MdB5tNKurwtVRpWRPL71B4R4xPd6gXHfAcbz4w"
              >
                MikroTik Lab
              </a>
              <li>Udemy</li>
              <li>Issued : 2016</li>
              <li>Credential ID : UC-ACT8V8NT</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel15"} // You can use a different panel identifier
        onChange={handleChange("panel15")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel15d-content"
          id="panel15d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>MikroTik Lab</Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmUQYs37MdB5tNKurwtVRpWRPL71B4R4xPd6gXHfAcbz4w"
              >
                MikroTik Lab
              </a>
              <li>Udemy</li>
              <li>Issued : 2016</li>
              <li>Credential ID : UC-ACT8V8NT</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel16"} // You can use a different panel identifier
        onChange={handleChange("panel16")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel16d-content"
          id="panel16d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            Blockchain Specialization
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmSgyhifSwVoTtBppKu4sZ5TYQWKhAn7LiHRJL4jDxHfUa"
              >
                Blockchain Specialization
              </a>
              <li>Coursera</li>
              <li>Issued : April, 2020 - No Expiration Date</li>
              <li>Credential ID : 8FC8PP52D654</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel17"} // You can use a different panel identifier
        onChange={handleChange("panel17")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel17d-content"
          id="panel17d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            Advance Your Skills in the Blockchain
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmVngNxnwQzU9M7bcrsEZhATmQFjhwQNKiN1gV7Nky6EhU"
              >
                Advance Your Skills in the Blockchain
              </a>
              <li>LinkIn</li>
              <li>Issued :May, 2020 - No Expiration Date</li>
              <li>Credential ID : AYWJCRzqnN6g8yrSmFRlzr4qsX0V</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel18"} // You can use a different panel identifier
        onChange={handleChange("panel18")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel18d-content"
          id="panel18d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            Ethereum: Building Blockchain Decentralized Apps (DApps)
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmfExwuuDRfkyDRmGZ84fcuSbvsBMRKQXdEabaC3NymTyt"
              >
                Ethereum: Building Blockchain Decentralized Apps (DApps)
              </a>
              <li>LinkedIn</li>
              <li>Issued : May 4, 2020 - No Expiration Date</li>
              <li>Credential ID : ASYtmipzUC5bgk-WpmvwFWjwgxge</li>
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>

      <MuiExpansionPanel
        square
        expanded={expanded === "panel19"} // You can use a different panel identifier
        onChange={handleChange("panel19")}
        className={classes.certificationPanel} // Apply certification styles
      >
        <MuiExpansionPanelSummary
          aria-controls="panel19d-content"
          id="panel19d-header"
          className={classes.certificationSummary} // Apply certification styles
        >
          <Typography className={classes.heading}>
            Certificates Of Completion
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.certificationDetails}>
          <Typography>
            <ul>
              <a
                target="_blank"
                href="https://www.coursera.org/account/accomplishments/certificate/JTTAK2F29MWW"
              >
                Foundations of Project Management
              </a>
              <br />
              <a
                target="_blank"
                href="https://www.coursera.org/account/accomplishments/certificate/VE5XPPM6JFUG"
              >
                Project Initiation:Starting a Successful Project
              </a>
              <br />
              <a
                target="_blank"
                href="https://www.coursera.org/account/accomplishments/certificate/L6L6DB3WPZG8"
              >
                Project Planning: Putting It All Together
              </a>
              <br />
              <a
                target="_blank"
                href="https://www.coursera.org/account/accomplishments/certificate/4WMYTTJDEQ2X"
              >
                Agile Project Management
              </a>
              <br />
              <a
                target="_blank"
                href="https://www.coursera.org/account/accomplishments/certificate/S88YJVSATSU9"
              >
                Introduction to Blockchain Technologies
              </a>
              <br />
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/Qmdw117mvwYB2PUXRcjXWw73r1xBGJNsd1pZHMaTqxLnh2"
              >
                Blockchain Service
              </a>
              <br />
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmSXBeDXteGDhnRgzEGDcomqoAQAQCEChHRGyCmYLBceKV"
              >
                Blockchain Beyond
              </a>
              <br />
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmSG7uXwesh47TYYmLLri9HD6ZWvYWkSGLenJLL9C64nXe"
              >
                Cryptocurrency Foundations
              </a>
              <br />
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmW2x2qN9PNUgXEJUJUDRzeVYK8aqk11SthBMLMunbkBqY"
              >
                Kubernetes: Microservices
              </a>
              <br />
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmTjqzgSefXcUDaH7yJCMrDjnqhmXcwv95XRGkE4NPT72Y"
              >
                Kubernetes: Monitoring with Prometheus
              </a>
              <br />
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmbY5bUpJpqPtQres2MeLRfgjdivqaMjQsAETyxCBuvTos"
              >
                Kubernetes: Native Tools
              </a>
              <br />
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmZE68iU9tz59wa7ANv7TJ6bv57hjcyUX64nbtzacdCHX7"
              >
                Learning Docker
              </a>
              <br />
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmZt9Zx9BdrvvuUU8X9m1FAxLfAx4ZpEToEf7GHfYtNm25"
              >
                Learning Kubernetes
              </a>
              <br />
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmSgyhifSwVoTtBppKu4sZ5TYQWKhAn7LiHRJL4jDxHfUa"
              >
                Blockchain Specilization
              </a>
              <br />
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmZ7MDwZtFzuAUueZ6EQZFvArhXiM3jDQmE3g8mq65ejWm"
              >
                Blockchain Basics
              </a>
              <br />
              <a
                target="_blank"
                href="https://ipfs.io/ipfs/QmSMt24WY7MfSe6EgcmyzNKujTkYSQyhDYEZaAsDJbgRRG"
              >
                Blockchain Platforms
              </a>
              <br />
              <a
                target="_blank"
                href="https://www.coursera.org/account/accomplishments/certificate/RL96KQ6HPGNR"
              >
                Web3 and Blockchain Fundamentals
              </a>
              <br />
            </ul>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>
    </div>
  );
};

export default withStyles(styles)(CustomizedExpansionPanels);
