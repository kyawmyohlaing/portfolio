import React, {Component} from 'react';


class Experiences extends Component{
    render(){
        return(
            
                <section id="experience">

                    <div className="row column">
                        <div className="small-12">
                            <h2 className="text-center">My Experience</h2>
                            <p className="text-center tag-line">Specialist in need. Generalist at heart.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="small-2 large-4 columns text-center experience-topics-front">
                            <i className="fi-laptop"></i>
                            <h3>Front-end</h3>
                            <ul>
                                <li>html(5)</li>
                                <li>css(3)</li>
                                <li>Javascript</li>
                                <li>Jquery</li>
                                <li>Bootstrap</li>
                                <li>Semantics-UI</li>
                                <li>React</li>
                                <li>Api</li>
                            </ul>
                        </div>
                        <div className="small-2 large-4 columns text-center experience-topics-back">
                            <i className="fi-database"></i>
                            <h3>Back-end</h3>
                            <ul>
                                <li>NodeJS</li>
                                <li>NPM</li>
                                <li>Web3</li>
                                <li>Solidity</li>
                                <li>Express</li>
                                <li>Geth</li>
                                <li>Mongo</li>
                                
                                
                            </ul>
                        </div>
                        <div className="small-2 large-4 columns text-center experience-topics-tool">
                            <i className="fi-star"></i>
                            <h3>Tools</h3>
                            <ul>
                                <li>Vim</li>
                                <li>Openshift</li>
                                <li>Visual Studio</li>
                                <li>Github</li>
                                <li>SSH</li>
                                <li>WSCP</li>
                            </ul>
                        </div>
                    </div>

                </section>

            
        )
    }
}
export default Experiences;