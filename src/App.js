import React, {Component} from 'react';
import Wrapper from './components/Wrapper';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Work from './pages/Work';
import Teaching from './pages/Teaching';
import Footer from './components/Footer';
import Education from './pages/Education';
import Professional from './pages/Professional';
import "./css/style.css";
import "./css/animations.css";

class App extends Component{
    render(){
        return(
      <div>    
          <div className="Wrapper">
          
              <Wrapper>
              <About />
              <Experiences />
              <Work />
              <Teaching/>
            
              <Professional/>
              <Footer/>
            </Wrapper>

         
          </div>
      </div>     
        );
    }
}

export default App;
