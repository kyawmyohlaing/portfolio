import React, {Component} from 'react';
import "../css/style.css";
import "../css/animations.css";


class Wrapper extends Component{
    render(){
        return(
     
			<div className="wrapper">
                
		{this.props.children}
            </div>
      
        );
    }
}
export default Wrapper;