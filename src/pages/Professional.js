import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
        <h2>Education</h2>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
              <h4>Bachelor of Engineering (BE)</h4>
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Typography>
            <ul>  
                <a  target="_blank" href="https://ipfs.io/ipfs/QmcQXZAJ8Q992fTrfQZRLMSk1BvXqLCesfU1ftJi8LNAUd">
                    <li>Bachelor of Engineering (BE)</li>
                </a>     
                    <li>Mandalay Technological University</li>
                    <li>Information Technology</li>
                    <li>2000 – 2006</li>

            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <h2>Licenses & Certifications</h2>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>
                <h4>VMware Certified Professional 6.5- Data Center Virtualization</h4>
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ul>  
          <a  target="_blank" href="https://ipfs.io/ipfs/QmUH3jnH89cJzD5zy3Reo2JpcgB3iNUCoTNa7CgT6Nx7cK">
                    <li><h4>VMware Certified Professional 6.5- Data Center Virtualization</h4></li>
                </a>     
                    <li>VMware</li>
                    <li>Issued May 2018 - No Expiration Date</li>
                    <li>Credential ID : VMW-01790151Z-00547519</li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>
                <h4>VMware Certified Professional 5- Data Center Virtualization</h4>
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ul>  
                <a  target="_blank" href="https://ipfs.io/ipfs/QmavbSPEJ5TiEshHcBPUpLtBZknEMgoZvmkasxS4P3REYE">
                    <li><h4>VMware Certified Professional 6.5- Data Center Virtualization</h4></li>
                </a>     
                    <li>VMware</li>
                    <li>Issued May 2016 - No Expiration Date</li>
                    <li>Credential ID VMW-01790151Z-00547519</li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>
                <h4>VMware Certified Professional 5- Data Center Virtualization</h4>
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ul>  
          <a  target="_blank" href="https://ipfs.io/ipfs/Qmc8zxecRMmGSvAtmoctaeaLzwG2J5QzuYv642uPx1tFuS">
                    <li><h4>Master Cloud-Native Infrastructure with Kubernetes</h4></li>
                </a>     
                    <li>VMware</li>
                    <li>Issued May 2016 - No Expiration Date</li>
                    <li>Credential ID VMW-01790151Z-00547519</li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>


    </div>
  );
}
