import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Projects extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div>
      <div className="container">
        <div className="content-section-heading text-center">
          <h2 className="mb-5 mt-3" id="projectsSec">PROJECTS</h2>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6">
            <a className="portfolio-item" href="http://octaviusmoore.com/project1/index.html" target="_blank">
              <img className="img-fluid projectImg" src="images/polar.png" height="300px" alt="" />
            </a>
            <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1">The Polar Bay</h2>
                  <p className="mb-0">
                  <i className="devicon-html5-plain-wordmark colored pIcon" />
                  <i className="devicon-css3-plain-wordmark colored pIcon" />
                  <i className="devicon-bootstrap-plain-wordmark colored pIcon" />
                  <i className="devicon-react-original-wordmark colored pIcon" />
                  <i className="devicon-git-plain-wordmark colored pIcon" />
                  <a href="https://github.com/TheBigTuna/restaurant-app" target="_blank"><button className="viewCode btn">View Code</button></a>
                  </p>
                </span>
              </span>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="http://octaviusmoore.com/project2/index.html" target="_blank">
              <img className="img-fluid projectImg" src="images/T7.png" height="300px" alt="" />
            </a>
             <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1">Tekken 7 Frame Data App</h2>
                  <p className="mb-0">
                  <i className="devicon-html5-plain-wordmark colored pIcon" />
                  <i className="devicon-css3-plain-wordmark colored pIcon" />
                  <i className="devicon-bootstrap-plain-wordmark colored pIcon" />
                  <i className="devicon-javascript-plain colored pIcon" />
                  <i className="devicon-jquery-plain-wordmark colored pIcon" />
                  <i className="devicon-git-plain-wordmark colored pIcon" />
                  <a href="https://github.com/TheBigTuna/T7-frame-data" target="_blank"><button className="viewCode btn">View Code</button></a>
                  </p>
                </span>
              </span>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="http://sybeq.com/html/home.html" target="_blank">
              <img className="img-fluid projectImg" src="images/SybeqSite.png" height="300px" alt="" />
            </a>
            <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1">SYBEQ</h2>
                  <p className="mb-0">
                  <i className="devicon-html5-plain-wordmark colored pIcon" />
                  <i className="devicon-css3-plain-wordmark colored pIcon" />
                  <i className="devicon-bootstrap-plain-wordmark colored pIcon" />
                  <i className="devicon-javascript-plain colored pIcon" />
                  <i className="devicon-jquery-plain-wordmark colored pIcon" />
                  </p>
                </span>
              </span>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="http://octaviusmoore.com/project3/index.html" target="_blank">
              <img className="img-fluid projectImg" src="images/Untitled.png" height="300px"  alt="" />
            </a>
            <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1">Dylan Webpage</h2>
                  <p className="mb-0">
                  <i className="devicon-html5-plain-wordmark colored pIcon" />
                  <i className="devicon-css3-plain-wordmark colored pIcon" />
                  <i className="devicon-javascript-plain colored pIcon" />
                  <i className="devicon-jquery-plain-wordmark colored pIcon" />
                  <i className="devicon-git-plain-wordmark colored pIcon" />
                  <a href="https://github.com/TheBigTuna/dylantribute" target="_blank"><button className="viewCode btn">View Code</button></a>
                  </p>
                </span>
              </span>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="http://octaviusmoore.com/project4/index.html" target="_blank">
              <img className="img-fluid projectImg" src="images/youtube.png" height="300px" alt="" />
            </a>
             <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1">Youtube-Web Application</h2>
                  <p className="mb-0">
                  <i className="devicon-html5-plain-wordmark colored pIcon" />
                  <i className="devicon-css3-plain-wordmark colored pIcon" />
                  <i className="devicon-bootstrap-plain-wordmark colored pIcon" />
                  <i className="devicon-react-original-wordmark colored pIcon" />
                  <i className="devicon-git-plain-wordmark colored pIcon" />
                  <a href="https://github.com/TheBigTuna/youtubeplayer" target="_blank"><button className="viewCode btn">View Code</button></a>
                  </p>
                </span>
              </span>
          </div>
            <div className="col-lg-6">
            <a className="portfolio-item" href="#" target="_blank">
              <img className="img-fluid projectImg" src="images/img2.jpg" height="300px" alt="" />
            </a>
            <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1"></h2>
                  <p className="mb-0">
                  </p>
                </span>
              </span>
          </div>
             {/*<div className="col-lg-6">
            <a className="portfolio-item" href="#" target="_blank">
              <img className="img-fluid projectImg" src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg" height="300px" alt="" />
            </a>
          </div>
            <div className="col-lg-6">
            <a className="portfolio-item" href="#" target="_blank">
              <img className="img-fluid projectImg" src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg" height="300px" alt="" />
            </a>
          </div>*/}
        </div>
      </div>
        </div>
      )
    }
}
