import React, {Component} from 'react';
import "../css/style.css";
import "../css/animations.css";
import project1 from '../assets/images/project1.png';

class Work extends Component{
    render(){
        return(
     
      
                    <section id="work">  
                        <div className="row">
                            <h2 className="text-center">Work</h2>
                            <p className="text-center tag-line">Here are few of my former clients.</p>
                        </div>


                        <div className="row work-row"> 
                            <div className="small-12 medium-6 medium-push-6 columns">
                                <img src={project1} alt="" />
                           </div>
                            <div className="small-12 medium-5 medium-pull-7 columns">
                                <div className="details details-ftm">
                                    <h3>Curabitur Tech</h3>
                                    <p className="platform">Web</p>
                                    <p className="icons"><i className="fi-monitor"></i><i className="fi-tablet-portrait"></i><i className="fi-mobile"></i></p>
                                    <p>Decentrilization Application Marketplace</p>
                                    <a className="my-button" target="_blank" href="https://kyawmyohlaing.github.io/Marketplace/">Visit Website</a>
                                </div>
                            </div>
                        </div>

                        <div className="row work-row"> 
                            <div className="small-12 medium-6 columns">
                                <img src="assets/images/project2.png" alt="" />
                            </div>
                            <div className="small-12 medium-5 medium-offset-1 columns">
                                <div className="details details-ftm">
                                    <h3>AwesomeTechSmth</h3>
                                    <p className="platform">Web</p>
                                    <p className="icons"><i className="fi-monitor"></i><i className="fi-tablet-portrait"></i><i className="fi-mobile"></i></p>
                                    <p>DApp social-network</p>
                                    <a className="my-button" target="_blank" href="https://kyawmyohlaing.github.io/social-network/">Visit Website</a>
                                </div>
                            </div>
                        </div>

                        <div className="row work-row"> 
                            <div className="small-12 medium-6 medium-push-6 columns">
                                <img src="assets/images/project3.png" alt=""/>
                            </div>
                            <div className="small-12 medium-5 medium-pull-7 columns">
                                <div className="details details-ftm">
                                    <h3>Suspendisse Cars</h3>
                                    <p className="platform">Web</p>
                                    <p className="icons"><i className="fi-monitor"></i><i className="fi-tablet-portrait"></i><i className="fi-mobile"></i></p>
                                    <p>Suspendisse Cars pulvinar magna a mattis maximus.</p>
                                    <a className="my-button" target="_blank" href="http://google.com">Visit Website</a>
                                </div>
                            </div>
                        </div>

                        </section> 
                    
        
          
        )
    }
}
export default Work;