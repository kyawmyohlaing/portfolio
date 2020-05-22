import React, {Component} from 'react';

class Teaching extends Component{
    render(){
        return(
            <div>
                <section id="teaching">
                    <h2 className="text-center">Teaching</h2>
                    <div className="row">
                        <div className="small-12 medium-8 medium-offset-2">
                            <p className="text-center tag-line">In the last couple of years, I've taught programming to hundreds of students both privately in person and remotely. Here are some of the domains I've helped students with...</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-12 medium-8 medium-offset-2 columns">
                            <div className="teaching-domains">
                            </div>
                        </div>
                    </div>
		        </section>
            </div>
        )
    }
}
export default Teaching;