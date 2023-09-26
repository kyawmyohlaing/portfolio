import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import Background from '../assets/images/profile.JPG';
import '../css/style1.css'; // Import your custom CSS file for styling

function App() {
    return (
        <div className="wrapper">
            <div className="row">
                <div className="small-12 large-8 large-offset-2 columns text-center">
                    <div className="profile-photo" style={{ backgroundImage: "url(" + Background + ")" }} />
                </div>
                <div className="details">
                    <h1>Hi, I'm Kyaw Myo Hlaing.</h1>
                    <h5>
                        <span id="writing-text">
                            <ReactRotatingText items={['A Bachelor of Engineering (Information Technology) with 14 years of ICT experience.', 'Specializing in IT infrastructure and full-stack blockchain development.', 'Another point of strength']} />
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
    );
}

export default App;
