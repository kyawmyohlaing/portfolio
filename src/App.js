import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import About1 from "./pages/About1";
import Experiences from "./pages/Experiences";
import Work from "./pages/Work";
import Pro_Experiences from "./pages/Pro_Experiences";
import Teaching from "./pages/Teaching";
import Footer from "./components/Footer";
import Education from "./pages/Education";
import Professional1 from "./pages/Professional1";
import "./css/style.css";
import "./css/animations.css";
import My_Experiences from "./pages/My_Experiences";
import ResumeDownloadLink from "./pages/ResumeDownloadLink";

class App extends Component {
  render() {
    return (
      <div>
        <div className="Wrapper">
          <Wrapper>
            <About1 />
            <ResumeDownloadLink />
            <My_Experiences />
            <Pro_Experiences />
            <Professional1 />

            <Footer />
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
