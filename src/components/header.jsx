import React, { Component } from 'react'
import WaterWave from 'react-water-wave';
import $ from 'jquery'
import Typer from './Typer';


export default class Header extends Component {
    render() {
        return (
            <div>
                   <div id="header" className="shadow">
        <nav>
            <div className="nav nav-wrapper navbar-fixed-top">
              <div className="container-fluid">
                {/* Menu Option */}
                <ul className="nav-justified hide-on-med-and-down">
                  <li><a href="#header">About</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#portfolios">Portfolios</a></li>
                  <li><a href="#achievement">Achievement</a></li>
                  <li><a href="#interest">Interest</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
                <a href="#0" data-activates="nav-mobile" id="nav-btn" className="button-collapse nav-icon">
                  <i className="ion-navicon" /></a>
                <div id="side-nav">
                  <div id="nav-header">
                    
                    <div id="nav-profile"  className="center-block zoomOut">
                      <img   src="images/profile-pic.png" />
                    </div>
                    <h6 className="text-center text-capitalize">K Sriharsha</h6>
                  </div>
                  <div id="nav-link-wrapper">
                    <ul>
                      <li><a className="nav-link" href="#header">About</a></li>
                      <li><a className="nav-link" href="#experience">Experience</a></li>
                      <li><a className="nav-link" href="#skills">Skills</a></li>
                      <li><a className="nav-link" href="#education">Education</a></li>
                      <li><a className="nav-link" href="#services">Services</a></li>
                      <li><a className="nav-link" href="#portfolios">Portfolios</a></li>
                      <li><a className="nav-link" href="#achievement">Achievement</a></li>
                      <li><a className="nav-link" href="#publications">Publications</a></li>
                      <li><a className="nav-link" href="#blog">Blog</a></li>
                      <li><a className="nav-link" href="#clients">Clients</a></li>
                      <li><a className="nav-link" href="#pricing">Pricing</a></li>
                      <li><a className="nav-link" href="#interest">Interest</a></li>
                      <li><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div id="side-nav-mask" />
              </div>
            </div>
          </nav>
          </div>
        <WaterWave
    strength={500}  imageUrl={""}
  >
      {() => (
         <div id="header" className="shadow">
          {/* Navigation */}
        
          <div id="intro" className="container">
            <h1 className="text-center text-capitalize abthfs" >K Sriharsha</h1>
            <Typer heading={"Im a "} dataText = {
                ["Web Developer", "Logo Designer", "UI/UX Designer"]
            }/>
          </div>
        </div>
                       
                     )}
    
  </WaterWave>
      
            </div>
        )
    }
}
