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
                                <li>Api | Ajax</li>
                            </ul>
                        </div>
                        <div className="small-2 large-4 columns text-center experience-topics-back">
                            <i className="fi-database"></i>
                            <h3>Back-end</h3>
                            <ul>
                                <li>NodeJS</li>
                                <li>NPM</li>
                                <li>Express</li>
                                <li>SQL</li>
                                <li>Mongo</li>
                                <li>Restful Web Services</li>
                                <li>Flask | Python</li>
                            </ul>
                        </div>
                        <div className="small-2 large-4 columns text-center experience-topics-tool">
                            <i className="fi-star"></i>
                            <h3>Tools</h3>
                            <ul>
                                <li>Vim</li>
                                <li>Bower</li>
                                <li>Atom || Webstorm</li>
                                <li>Github && Bitbucket</li>
                                <li>SSH</li>
                                <li>Gulp</li>
                            </ul>
                        </div>
                    </div>

                </section>

            
        )
    }
}
export default Experiences;