import React, {Component} from 'react';
import Background from '../assets/images/profile.JPG';
import "../css/style.css";
import "../css/animations.css";

var ReactRotatingText = require('react-rotating-text');



class About extends Component{
    render(){
        return(
           
        <div className="wrapper">
            <div className="row">
                    <div className="small-12 large-8 large-offset-2 columns text-center">
                        <div className="profile-photo" style={{backgroundImage: "url(" + Background + ")"}}/>
                        
                        </div>
                        <div className="details">
						<h1>Hi, I'm Kyaw Myo Hlaing.<br/></h1>
                        <h5>
                        <span id="writing-text">
                            <ReactRotatingText items={['A Bachelor f Engineering(Information Technology) who has got total 14 years of ICT experiences.', 'Main strengths are IT infrastructue and DApp full stack blockchain developer', 'third']} />
                        </span>
                        </h5>
                        </div>
                    </div>
				

				    <div className="row">
                        <div className="small-12 column">
                            <div className="cta text-center">
                                <a className="my-button cta-button expand form-button" href="mailto:kyawmyohlaing99@gmail.com">Get In Touch</a>
                            </div>
                        </div>
                        <div className="small-12 column">
                            <div>
                                <br />
                            </div>
                            <div className="my-arrow-div text-center">
                                <span>
                                <a href="https://github.com/kyawmyohlaing"><i className="fa fa-github-alt fa-2x"></i></a>
                                <a href="https://instagram.com/kyawmyohlaing8"><i className="fa fa-instagram fa-2x"></i></a>
                                <a href="http://www.youtube.com/kyawmyohlaing"><i className="fa fa-youtube fa-2x"></i></a>
                                </span>
                            </div>
                        </div>
			        </div>

        </div>
		

        )
    }
}
export default About;
