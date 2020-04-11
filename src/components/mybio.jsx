import React, { Component } from 'react'
import Header from './header'


let image=require('./hbg.jpg') 



export default class MyBio extends Component {
  state={
    transPWidth:false,
  }
  
  componentDidMount(){
    console.log("xlsxmaslxmsalxmasxmsax",image)
    
    // $('.shadow').ripples({
    //   resolution: 512,
    //   dropRadius: 20,
    //   perturbance: 0.04,
    // });
    // $(window.document).ready(function() {
    //   $('.image').ripples('show');
    //   });
//       window.onscroll = ()=>{
//         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

//           this.setState({transPWidth:true})
//         }else{
//           this.setState({transPWidth:false})

//         }
//         if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//           $(window).on("scroll", function() {
//             $(".w30").hide();

//         });
//   } else {
//     $(window).on("scroll", function() {
//       var s = 180 - Math.min(180, $(document).scrollTop());
//       $(".w30").show().animate(1000);
//       $(".w30").width(s).height(s);
    
//   });
//   }
//  }
}
  render() {
      console.log("state",this.state)
        return (
     
       <div id="">
         <div>
            <div id="page-loader">
          <div className="animated bounceInDown">
            <div className="spinner" />
          </div>
          <div className="text-div text-center animated zoomIn">
            <p className="text-uppercase">Welcome</p>
          </div>
        </div>
      {/* header */}

            <Header/>

      {/* section */}
        <section id="about" className="section">
          <div className="container">
            <div className="row">
              <div className="col col-md-12">
           
                <div id="profile" className="  center-block">
                  <img  src="images/profile-pic.png" />
                </div>
                {/* Social Links */}
                <div id="intro-div" className="card content-wrapper abtcard">
                  <ul className="text-center list-inline">
                    <li><a href="#0" target="_blank"><i className="ion-social-facebook" /></a></li>
                    <li><a href="#0" target="_blank"><i className="ion-social-twitter" /></a></li>
                    <li><a href="#0" target="_blank"><i className="ion-social-linkedin" /></a></li>
                    <li><a href="#0" target="_blank"><i className="ion-social-googleplus" /></a></li>
                    <li><a href="#0" target="_blank"><i className="ion-social-instagram" /></a></li>
                  </ul>
                  {/* Some Intro About You */}
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies a. Vestibulum
                    at mollis ex, ac consectetur massa. Donec nunc dui, laoreet a nibh et, semper tincidunt nunc. Donec ac posuere tellus. Pellentesque tempus suscipit velit sit amet bibendum.
                  </p>
                  <div className="row">
                    {/* Download & Contact Button */}
                    <div className="col col-xs-12 col-sm-12 col-md-12 text-center">
                      {/* Your CV File */}
                      <a href="cv/cv-file.docx" download="cv-file.docx" className="btn waves-effect waves-light btn-primary custom-btn">Download CV</a>
                      <a href="#contact" className="btn waves-effect waves-light btn-primary custom-btn">Contact Me</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="section">
          <h4 className="text-uppercase text-center">Experience</h4>
          <div className="container">
            <div className="row">
              <div className="col col-md-12 col-sm-12 col-xs-12">
                {/* Timeline */}
                <div className="timeline center-block">
                  <ul>
                    <li className="card" data-aos="fade-up">
                      <i className="title-icon fa fa-circle" />
                      <div className="timeline-content">
                        {/* Heading */}
                        <div className="timeline-header">
                          <h3 className="text-capitalize">Chief Project Manager</h3>
                        </div>
                        {/* Organization and Period */}
                        <p className="sub-heading">Lorem Ipsum Technology - South Africa</p>
                        <p className="sub-heading">January 2012 - December 2015</p>
                        {/* Job Summary */}
                        <p className="content-p">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                        </p>
                      </div>
                    </li>
                    <li className="card" data-aos="fade-up">
                      <i className="title-icon fa fa-circle" />
                      <div className="timeline-content">
                        {/* Heading */}
                        <div className="timeline-header">
                          <h3 className="text-capitalize">Senior UX/UI Designer</h3>
                        </div>
                        {/* Organization and Period */}
                        <p className="sub-heading">Lorem Ipsum Technology - South Africa</p>
                        <p className="sub-heading">January 2012 - December 2015</p>
                        {/* Job Summary */}
                        <p className="content-p">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                        </p>
                      </div>
                    </li>
                    <li className="card" data-aos="fade-up">
                      <i className="title-icon fa fa-circle" />
                      <div className="timeline-content">
                        {/* Heading */}
                        <div className="timeline-header">
                          <h3 className="text-capitalize">Chief Project Manager</h3>
                        </div>
                        {/* Organization and Period */}
                        <p className="sub-heading">Lorem Ipsum Technology - South Africa</p>
                        <p className="sub-heading">January 2012 - December 2015</p>
                        {/* Job Summary */}
                        <p className="content-p">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                        </p>
                      </div>
                    </li>
                    <li className="card" data-aos="fade-up">
                      <i className="title-icon fa fa-circle" />
                      <div className="timeline-content">
                        {/* Heading */}
                        <div className="timeline-header">
                          <h3 className="text-capitalize">Senior UX/UI Designer</h3>
                        </div>
                        {/* Organization and Period */}
                        <p className="sub-heading">Lorem Ipsum Technology - South Africa</p>
                        <p className="sub-heading">January 2012 - December 2015</p>
                        {/* Job Summary */}
                        <p className="content-p">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* End of Timeline */}
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="section">
          <h4 className="text-uppercase text-center">Skills</h4>
          <div className="container">
            <div className="row">
              {/* Professional Skills */}
              <div className="col col-md-4 col-sm-4 col-xs-12">
                <div className="card content-wrapper skill-wrapper">
                  <h5 className="text-center skill-title">Professional</h5>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>UI/UX Design<span>90%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="90%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>PHP Web Application<span>80%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="80%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>Android Development<span>70%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="70%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>Adobe Design Tools<span>70%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="70%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>Microsoft Office<span>80%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="80%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-md-4 col-sm-4 col-xs-12">
                <div className="card content-wrapper skill-wrapper">
                  <h5 className="text-center skill-title">Personal</h5>
                  <div className="skill-progress-div">
                    <p>Committed<span>100%</span></p>
                    <div className="progress skill-progress" data-percent="100%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>Punctual<span>90%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="90%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>Leadership<span>80%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="80%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>Communicative<span>70%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="70%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>Analytical Skill<span>80%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="80%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Language Skills */}
              <div className="col col-md-4 col-sm-4 col-xs-12">
                <div className="card content-wrapper skill-wrapper">
                  <h5 className="text-center skill-title">Language</h5>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>English (Native)<span>100%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="100%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>Spanish<span>90%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="90%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>French<span>80%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="80%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>Arabic<span>70%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="70%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                  <div className="skill-progress-div">
                    {/* Add Skill */}
                    <p>Hindi<span>60%</span></p>
                    {/* Edit Value Here */}
                    <div className="progress skill-progress" data-percent="60%">
                      <div className="determinate skill-determinate">
                        <i className="skill-determinate-circle fa fa-circle" data-aos="zoom-in" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="education" className="section">
          <h4 className="text-uppercase text-center">Education</h4>
          <div className="container">
            <div className="row">
              <div className="col col-md-12 col-sm-12 col-xs-12">
                {/* Timeline */}
                <div className="timeline center-block">
                  <ul>
                    <li className="card" data-aos="fade-up">
                      <i className="title-icon fa fa-circle" />
                      <div className="timeline-content">
                        {/* Heading */}
                        <div className="timeline-header">
                          <h3 className="text-capitalize">Master of Computer Science &amp; engineering</h3>
                        </div>
                        {/* Institution, Period & result */}
                        <p className="sub-heading">Harvard University - United States</p>
                        <p className="sub-heading">January 2012 - December 2015</p>
                        <p className="sub-heading">Result: 4.0 out of 4.0</p>
                        {/* Education Summary */}
                        <p className="content-p">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                        </p>
                      </div>
                    </li>
                    <li className="card" data-aos="fade-up">
                      <i className="title-icon fa fa-circle" />
                      <div className="timeline-content">
                        {/* Heading */}
                        <div className="timeline-header">
                          <h3 className="text-capitalize">Bachelor Of Computer Science &amp; Engineering</h3>
                        </div>
                        {/* Institution, Period & result */}
                        <p className="sub-heading">Harvard University - United States</p>
                        <p className="sub-heading">January 2012 - December 2015</p>
                        <p className="sub-heading">Result: 4.0 out of 4.0</p>
                        {/* Education Summary */}
                        <p className="content-p">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                        </p>
                      </div>
                    </li>
                    <li className="card" data-aos="fade-up">
                      <i className="title-icon fa fa-circle" />
                      <div className="timeline-content">
                        {/* Heading */}
                        <div className="timeline-header">
                          <h3 className="text-capitalize">Master of Computer Science &amp; engineering</h3>
                        </div>
                        {/* Institution, Period & result */}
                        <p className="sub-heading">Harvard University - United States</p>
                        <p className="sub-heading">January 2012 - December 2015</p>
                        <p className="sub-heading">Result: 4.0 out of 4.0</p>
                        {/* Education Summary */}
                        <p className="content-p">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                        </p>
                      </div>
                    </li>
                    <li className="card" data-aos="fade-up">
                      <i className="title-icon fa fa-circle" />
                      <div className="timeline-content">
                        {/* Heading */}
                        <div className="timeline-header">
                          <h3 className="text-capitalize">Bachelor Of Computer Science &amp; Engineering</h3>
                        </div>
                        {/* Institution, Period & result */}
                        <p className="sub-heading">Harvard University - United States</p>
                        <p className="sub-heading">January 2012 - December 2015</p>
                        <p className="sub-heading">Result: 4.0 out of 4.0</p>
                        {/* Education Summary */}
                        <p className="content-p">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* End of Timeline */}
              </div>
            </div>
          </div>
        </section>
   
        <section id="services" className="section">
          <h4 className="text-uppercase text-center">Services</h4>
          <div className="container">
            <ul className="row">
              {/* 1st service */}
              <li className="col col-md-4 col-sm-6 col-xs-12">
                <div className="card service-item text-center">
                  {/* Edit icon and title here */}
                  <i className="ion-social-android" data-aos="fade" data-aos-delay={300} data-aos-offset={0} />
                  <h6 className="text-capitalize">Android Application</h6>
                  {/* service info here */}
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies.
                  </p>
                </div>
              </li>
              {/* ./1st service */}
              {/* 2nd service */}
              <li className="col col-md-4 col-sm-6 col-xs-12">
                <div className="card service-item text-center">
                  {/* Edit icon and title here */}
                  <i className="ion-code" data-aos="fade" data-aos-delay={300} data-aos-offset={0} />
                  <h6 className="text-capitalize">Web Development</h6>
                  {/* service info here */}
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies.
                  </p>
                </div>
              </li>
              {/* ./2nd service */}
              {/* 3rd service */}
              <li className="col col-md-4 col-sm-6 col-xs-12">
                <div className="card service-item text-center">
                  {/* Edit icon and title here */}
                  <i className="ion-social-apple" data-aos="fade" data-aos-delay={300} data-aos-offset={0} />
                  <h6 className="text-capitalize">IOS Application</h6>
                  {/* service info here */}
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies.
                  </p>
                </div>
              </li>
              {/* ./3rd service */}
              {/* 4th service */}
              <li className="col col-md-4 col-sm-6 col-xs-12">
                <div className="card service-item text-center">
                  {/* Edit icon and title here */}
                  <i className="ion-cloud" data-aos="fade" data-aos-delay={300} data-aos-offset={0} />
                  <h6 className="text-capitalize">Cloud Computing</h6>
                  {/* service info here */}
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies.
                  </p>
                </div>
              </li>
              {/* ./5th service */}
              {/* 5th service */}
              <li className="col col-md-4 col-sm-6 col-xs-12">
                <div className="card service-item text-center">
                  {/* Edit icon and title here */}
                  <i className="ion-paintbrush" data-aos="fade" data-aos-delay={300} data-aos-offset={0} />
                  <h6 className="text-capitalize">UI/UX Design</h6>
                  {/* service info here */}
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies.
                  </p>
                </div>
              </li>
              {/* ./5th service */}
              {/* 6th service */}
              <li className="col col-md-4 col-sm-6 col-xs-12">
                <div className="card service-item text-center">
                  {/* Edit icon and title here */}
                  <i className="ion-settings" data-aos="fade" data-aos-delay={300} data-aos-offset={0} />
                  <h6 className="text-capitalize">Troubleshooting</h6>
                  {/* service info here */}
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies.
                  </p>
                </div>
              </li>
              {/* ./6th service */}
            </ul>
          </div>
        </section>

        <section id="portfolios" className="section">
          <h4 className="text-uppercase text-center">Portfolios</h4>
          <div className="container">
            <div className="row">
              {/* A basic setup of simple mode filter controls, all you have to do is use data-filter="all"
            for an unfiltered gallery and then the values of your categories to filter between them */}
              <ul className="text-center simple-filter" data-aos="zoom-in" data-aos-duration={500} data-aos-delay={300}>
                <li className="active-cat" data-filter="all"><a>All</a></li>
                <li data-filter={1}><a>Creative</a></li>
                <li data-filter={2}><a>Photography</a></li>
                <li data-filter={3}><a>Food</a></li>
                <li data-filter={4}><a>Colorful</a></li>
                <li data-filter={5}><a>Personal</a></li>
              </ul>
              <div className="filtr-container center-block">
                {/* 1st Portfolio, Filter Option */}
                <div className="col col-md-3 col-sm-6 col-xs-12 filtr-item" data-category="1, 5">
                  <div className="portfolio card pc">
                    <figure className="hover-effect pfg">
                      {/* Portfolio Image */}
                      <img className="img-responsive" src="images/portfolios/p1.jpg" alt="" />
                      {/* open-modal ID */}
                      <a data-toggle="modal" data-target="#modal1" href="#0">
                        <figcaption><span>View Details</span></figcaption>
                      </a>
                    </figure>
                    {/* Portfolio Title */}
                    <h6 className="text-capitalize text-center pt">Portfolio Title Here</h6>
                  </div>
                </div>
                {/* ./Portfolio */}
                {/* 1st MODAL */}
                <div id="modal1" className="modal" tabIndex={-1} role="dialog">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content animated zoomIn">
                      <h3 className="text-capitalize text-left">Project title will be placed here</h3>
                      <div className="row">
                        {/* Modal Image */}
                        <img className="img-responsive col-md-8 col-sm-12 col-xs-12" src="images/portfolios/p1.jpg" alt="" />
                        {/* Modal Content */}
                        <div className="content col-md-4 col-sm-12 col-xs-12">
                          {/* Date, Category & Client Name of the Project */}
                          <p><span>Date:&nbsp;</span> 5, July 2015</p>
                          <p><span>Category:&nbsp;</span> System Development</p>
                          <p><span>Client:&nbsp;</span> Mr. John Doe</p>
                          {/* Live Demo Link */}
                          <a href="#0" target="_blank" className="btn modal-btn waves-effect waves-light btn-primary custom-btn">Live Demo</a>
                          {/* Some Information Abut the Project */}
                          <p className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum
                            elit ultricies. Lorem ipsum dolor sit amet.
                          </p>
                          <button data-dismiss="modal" className="btn right modal-btn close-btn waves-effect waves-light btn-primary custom-btn">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ./modal */}
                {/* 2nd Portfolio, Filter Option */}
                <div className="col col-md-3 col-sm-6 col-xs-12 filtr-item" data-category="2, 3, 4">
                  <div className="portfolio card">
                    <figure className="hover-effect">
                      {/* Portfolio Image */}
                      <img className="img-responsive" src="images/portfolios/p2.jpg" alt="" />
                      {/* open-modal ID */}
                      <a data-toggle="modal" data-target="#modal2" href="#0">
                        <figcaption><span>View Details</span></figcaption>
                      </a>
                    </figure>
                    {/* Portfolio Title */}
                    <h6 className="text-capitalize text-center">Portfolio Title Here</h6>
                  </div>
                </div>
                {/* ./Portfolio */}
                {/* 2nd MODAL */}
                <div id="modal2" className="modal" tabIndex={-1} role="dialog">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content animated zoomIn">
                      <h3 className="text-capitalize text-left">Project title will be placed here</h3>
                      <div className="row">
                        {/* Modal Image */}
                        <img className="img-responsive col-md-8 col-sm-12 col-xs-12" src="images/portfolios/p2.jpg" alt="" />
                        {/* Modal Content */}
                        <div className="content col-md-4 col-sm-12 col-xs-12">
                          {/* Date, Category & Client Name of the Project */}
                          <p><span>Date:&nbsp;</span> 5, July 2015</p>
                          <p><span>Category:&nbsp;</span> System Development</p>
                          <p><span>Client:&nbsp;</span> Mr. John Doe</p>
                          {/* Live Demo Link */}
                          <a href="#0" target="_blank" className="btn modal-btn waves-effect waves-light btn-primary custom-btn">Live Demo</a>
                          {/* Some Information Abut the Project */}
                          <p className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum
                            elit ultricies. Lorem ipsum dolor sit amet.
                          </p>
                          <button data-dismiss="modal" className="btn right modal-btn close-btn waves-effect waves-light btn-primary custom-btn">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ./modal */}
                {/* 3rd Portfolio, Filter Option */}
                <div className="col col-md-3 col-sm-6 col-xs-12 filtr-item" data-category="1, 4">
                  <div className="portfolio card">
                    <figure className="hover-effect">
                      {/* Portfolio Imag e*/}
                      <img className="img-responsive" src="images/portfolios/p3.jpg" alt="" />
                      {/* open-modal ID */}
                      <a data-toggle="modal" data-target="#modal3" href="#0">
                        <figcaption><span>View Details</span></figcaption>
                      </a>
                    </figure>
                    {/* Portfolio Title */}
                    <h6 className="text-capitalize text-center">Portfolio Title Here</h6>
                  </div>
                </div>
                {/* ./Portfolio */}
                {/* 3rd MODAL */}
                <div id="modal3" className="modal" tabIndex={-1} role="dialog">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content animated zoomIn">
                      <h3 className="text-capitalize text-left">Project title will be placed here</h3>
                      <div className="row">
                        {/* Modal Image */}
                        <img className="img-responsive col-md-8 col-sm-12 col-xs-12" src="images/portfolios/p3.jpg" alt="" />
                        {/* Modal Content */}
                        <div className="content col-md-4 col-sm-12 col-xs-12">
                          {/* Date, Category & Client Name of the Project */}
                          <p><span>Date:&nbsp;</span> 5, July 2015</p>
                          <p><span>Category:&nbsp;</span> System Development</p>
                          <p><span>Client:&nbsp;</span> Mr. John Doe</p>
                          {/* Live Demo Link */}
                          <a href="#0" target="_blank" className="btn modal-btn waves-effect waves-light btn-primary custom-btn">Live Demo</a>
                          {/* Some Information Abut the Project */}
                          <p className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum
                            elit ultricies. Lorem ipsum dolor sit amet.
                          </p>
                          <button data-dismiss="modal" className="btn right modal-btn close-btn waves-effect waves-light btn-primary custom-btn">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ./modal */}
                {/* 4th Portfolio, Filter Option */}
                <div className="col col-md-3 col-sm-6 col-xs-12 filtr-item" data-category="1, 5">
                  <div className="portfolio card">
                    <figure className="hover-effect">
                      {/* Portfolio Image */}
                      <img className="img-responsive" src="images/portfolios/p4.jpg" alt="" />
                      {/* open-modal ID */}
                      <a data-toggle="modal" data-target="#modal4" href="#0">
                        <figcaption><span>View Details</span></figcaption>
                      </a>
                    </figure>
                    {/* Portfolio Title */}
                    <h6 className="text-capitalize text-center">Portfolio Title Here</h6>
                  </div>
                </div>
                {/* ./Portfolio */}
                {/* 4th MODAL */}
                <div id="modal4" className="modal" tabIndex={-1} role="dialog">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content animated zoomIn">
                      <h3 className="text-capitalize text-left">Project title will be placed here</h3>
                      <div className="row">
                        {/* Modal Image */}
                        <img className="img-responsive col-md-8 col-sm-12 col-xs-12" src="images/portfolios/p4.jpg" alt="" />
                        {/* Modal Content */}
                        <div className="content col-md-4 col-sm-12 col-xs-12">
                          {/* Date, Category & Client Name of the Project */}
                          <p><span>Date:&nbsp;</span> 5, July 2015</p>
                          <p><span>Category:&nbsp;</span> System Development</p>
                          <p><span>Client:&nbsp;</span> Mr. John Doe</p>
                          {/* Live Demo Link */}
                          <a href="#0" target="_blank" className="btn modal-btn waves-effect waves-light btn-primary custom-btn">Live Demo</a>
                          {/* Some Information Abut the Project */}
                          <p className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum
                            elit ultricies. Lorem ipsum dolor sit amet.
                          </p>
                          <button data-dismiss="modal" className="btn right modal-btn close-btn waves-effect waves-light btn-primary custom-btn">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ./modal */}
                {/* 5th Portfolio, Filter Option */}
                <div className="col col-md-3 col-sm-6 col-xs-12 filtr-item" data-category="2, 3, 4">
                  <div className="portfolio card">
                    <figure className="hover-effect">
                      {/* Portfolio Image */}
                      <img className="img-responsive" src="images/portfolios/p5.jpg" alt="" />
                      {/* open-modal ID */}
                      <a data-toggle="modal" data-target="#modal5" href="#0">
                        <figcaption><span>View Details</span></figcaption>
                      </a>
                    </figure>
                    {/* Portfolio Title */}
                    <h6 className="text-capitalize text-center">Portfolio Title Here</h6>
                  </div>
                </div>
                {/* ./Portfolio */}
                {/* 5th MODAL */}
                <div id="modal5" className="modal" tabIndex={-1} role="dialog">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content animated zoomIn">
                      <h3 className="text-capitalize text-left">Project title will be placed here</h3>
                      <div className="row">
                        {/* Modal Image */}
                        <img className="img-responsive col-md-8 col-sm-12 col-xs-12" src="images/portfolios/p5.jpg" alt="" />
                        {/* Modal Content */}
                        <div className="content col-md-4 col-sm-12 col-xs-12">
                          {/* Date, Category & Client Name of the Project */}
                          <p><span>Date:&nbsp;</span> 5, July 2015</p>
                          <p><span>Category:&nbsp;</span> System Development</p>
                          <p><span>Client:&nbsp;</span> Mr. John Doe</p>
                          {/* Live Demo Link */}
                          <a href="#0" target="_blank" className="btn modal-btn waves-effect waves-light btn-primary custom-btn">Live Demo</a>
                          {/* Some Information Abut the Project */}
                          <p className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum
                            elit ultricies. Lorem ipsum dolor sit amet.
                          </p>
                          <button data-dismiss="modal" className="btn right modal-btn close-btn waves-effect waves-light btn-primary custom-btn">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ./modal */}
                {/* 6th Portfolio, Filter Option */}
                <div className="col col-md-3 col-sm-6 col-xs-12 filtr-item" data-category={2}>
                  <div className="portfolio card">
                    <figure className="hover-effect">
                      {/* Portfolio Image */}
                      <img className="img-responsive" src="images/portfolios/p6.jpg" alt="" />
                      {/* open-modal ID */}
                      <a data-toggle="modal" data-target="#modal6" href="#0">
                        <figcaption><span>View Details</span></figcaption>
                      </a>
                    </figure>
                    {/* Portfolio Title */}
                    <h6 className="text-capitalize text-center">Portfolio Title Here</h6>
                  </div>
                </div>
                {/* ./Portfolio */}
                {/* 6th MODAL */}
                <div id="modal6" className="modal" tabIndex={-1} role="dialog">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content animated zoomIn">
                      <h3 className="text-capitalize text-left">Project title will be placed here</h3>
                      <div className="row">
                        {/* Modal Image */}
                        <img className="img-responsive col-md-8 col-sm-12 col-xs-12" src="images/portfolios/p6.jpg" alt="" />
                        {/* Modal Content */}
                        <div className="content col-md-4 col-sm-12 col-xs-12">
                          {/* Date, Category & Client Name of the Project */}
                          <p><span>Date:&nbsp;</span> 5, July 2015</p>
                          <p><span>Category:&nbsp;</span> System Development</p>
                          <p><span>Client:&nbsp;</span> Mr. John Doe</p>
                          {/* Live Demo Link */}
                          <a href="#0" target="_blank" className="btn modal-btn waves-effect waves-light btn-primary custom-btn">Live Demo</a>
                          {/* Some Information Abut the Project */}
                          <p className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum
                            elit ultricies. Lorem ipsum dolor sit amet.
                          </p>
                          <button data-dismiss="modal" className="btn right modal-btn close-btn waves-effect waves-light btn-primary custom-btn">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ./modal */}
                {/* 7th Portfolio, Filter Option */}
                <div className="col col-md-3 col-sm-6 col-xs-12 filtr-item" data-category={5}>
                  <div className="portfolio card">
                    <figure className="hover-effect">
                      {/* Portfolio Image */}
                      <img className="img-responsive" src="images/portfolios/p7.jpg" alt="" />
                      {/* open-modal ID */}
                      <a data-toggle="modal" data-target="#modal7" href="#0">
                        <figcaption><span>View Details</span></figcaption>
                      </a>
                    </figure>
                    {/* Portfolio Title */}
                    <h6 className="text-capitalize text-center">Portfolio Title Here</h6>
                  </div>
                </div>
                {/* ./Portfolio */}
                {/* 7th MODAL */}
                <div id="modal7" className="modal" tabIndex={-1} role="dialog">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content animated zoomIn">
                      <h3 className="text-capitalize text-left">Project title will be placed here</h3>
                      <div className="row">
                        {/* Modal Image */}
                        <img className="img-responsive col-md-8 col-sm-12 col-xs-12" src="images/portfolios/p7.jpg" alt="" />
                        {/* Modal Content */}
                        <div className="content col-md-4 col-sm-12 col-xs-12">
                          {/* Date, Category & Client Name of the Project */}
                          <p><span>Date:&nbsp;</span> 5, July 2015</p>
                          <p><span>Category:&nbsp;</span> System Development</p>
                          <p><span>Client:&nbsp;</span> Mr. John Doe</p>
                          {/* Live Demo Link */}
                          <a href="#0" target="_blank" className="btn modal-btn waves-effect waves-light btn-primary custom-btn">Live Demo</a>
                          {/* Some Information Abut the Project */}
                          <p className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum
                            elit ultricies. Lorem ipsum dolor sit amet.
                          </p>
                          <button data-dismiss="modal" className="btn right modal-btn close-btn waves-effect waves-light btn-primary custom-btn">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ./modal */}
                {/* 8th Portfolio, Filter Option */}
                <div className="col col-md-3 col-sm-6 col-xs-12 filtr-item" data-category="2, 3">
                  <div className="portfolio card">
                    <figure className="hover-effect">
                      {/* Portfolio Image */}
                      <img className="img-responsive" src="images/portfolios/p8.jpg" alt="" />
                      {/* open-modal ID */}
                      <a data-toggle="modal" data-target="#modal8" href="#0">
                        <figcaption><span>View Details</span></figcaption>
                      </a>
                    </figure>
                    {/* Portfolio Title */}
                    <h6 className="text-capitalize text-center">Portfolio Title Here</h6>
                  </div>
                </div>
                {/* ./Portfolio */}
                {/* 8th MODAL */}
                <div id="modal8" className="modal" tabIndex={-1} role="dialog">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content animated zoomIn">
                      <h3 className="text-capitalize text-left">Project title will be placed here</h3>
                      <div className="row">
                        {/* Modal Image */}
                        <img className="img-responsive col-md-8 col-sm-12 col-xs-12" src="images/portfolios/p8.jpg" alt="" />
                        {/* Modal Content */}
                        <div className="content col-md-4 col-sm-12 col-xs-12">
                          {/* Date, Category & Client Name of the Project */}
                          <p><span>Date:&nbsp;</span> 5, July 2015</p>
                          <p><span>Category:&nbsp;</span> System Development</p>
                          <p><span>Client:&nbsp;</span> Mr. John Doe</p>
                          {/* Live Demo Link */}
                          <a href="#0" target="_blank" className="btn modal-btn waves-effect waves-light btn-primary custom-btn">Live Demo</a>
                          {/* Some Information Abut the Project */}
                          <p className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum
                            elit ultricies. Lorem ipsum dolor sit amet.
                          </p>
                          <button data-dismiss="modal" className="btn right modal-btn close-btn waves-effect waves-light btn-primary custom-btn">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ./modal */}
              </div>
            </div>
          </div>
        </section>
        {/*==========================================
               ACHIEVEMENT
===========================================*/}
        <section id="achievement" className="section">
          <h4 className="text-uppercase text-center">Achievement</h4>
          <div className="container">
            <div className="row">
              {/* 1st Achievement */}
              <div className="col col-md-4 col-sm-6 col-xs-12">
                <div className="achievement">
                  <div className="achievement-top-bar">
                    {/* Achievement Title Here */}
                    <h5 className="text-center text-capitalize">ACM Software System Award</h5>
                  </div>
                  <div className="achievement-inner">
                    <div className="achievement-header">
                      <div className="achievement-heading">
                        {/* Icon and Date */}
                        <i className="text-center ion-ribbon-a" />
                        <h6 className="text-center">June 2016</h6>
                      </div>
                      {/* Button ID For Content ID */}
                      <a id="btn-1" className="btn-floating waves-effect waves-light btn-large achievement-more-btn custom-btn" data-aos="zoom-in" data-aos-delay={300}>
                        <i className="ion-ios-arrow-down" />
                      </a>
                    </div>
                    {/* Content ID */}
                    <div id="content-1" className="achievement-content">
                      {/* Description */}
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./1st Achievement */}
              {/* 2nd Achievement */}
              <div className="col col-md-4 col-sm-6 col-xs-12">
                <div className="achievement">
                  <div className="achievement-top-bar">
                    {/* Achievement Title Here */}
                    <h5 className="text-center text-capitalize">National Badminton Champion</h5>
                  </div>
                  <div className="achievement-inner">
                    <div className="achievement-header">
                      <div className="achievement-heading">
                        {/* Icon and Date */}
                        <i className="text-center ion-trophy" />
                        <h6 className="text-center">April 2016</h6>
                      </div>
                      {/* Button ID For Content ID */}
                      <a id="btn-2" className="btn-floating waves-effect waves-light btn-large achievement-more-btn custom-btn" data-aos="zoom-in" data-aos-delay={300}>
                        <i className="ion-ios-arrow-down" />
                      </a>
                    </div>
                    {/* Content ID */}
                    <div id="content-2" className="achievement-content">
                      {/* Description */}
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./2nd Achievement */}
              {/* 3rd Achievement */}
              <div className="col col-md-4 col-sm-6 col-xs-12">
                <div className="achievement">
                  <div className="achievement-top-bar">
                    {/* Achievement Title Here */}
                    <h5 className="text-center text-capitalize">Microsoft Award</h5>
                  </div>
                  <div className="achievement-inner">
                    <div className="achievement-header">
                      <div className="achievement-heading">
                        {/* Icon and Date */}
                        <i className="text-center ion-ribbon-b" />
                        <h6 className="text-center">June 2015</h6>
                      </div>
                      {/* Button ID For Content ID */}
                      <a id="btn-3" className="btn-floating waves-effect waves-light btn-large achievement-more-btn custom-btn" data-aos="zoom-in" data-aos-delay={300}>
                        <i className="ion-ios-arrow-down" />
                      </a>
                    </div>
                    {/* Content ID */}
                    <div id="content-3" className="achievement-content">
                      {/* Description */}
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./3rd Achievement */}
              {/* 4th Achievement */}
              <div className="col col-md-4 col-sm-6 col-xs-12">
                <div className="achievement">
                  <div className="achievement-top-bar">
                    {/* Achievement Title Here */}
                    <h5 className="text-center text-capitalize">Fire Bal Pro Membership</h5>
                  </div>
                  <div className="achievement-inner">
                    <div className="achievement-header">
                      <div className="achievement-heading">
                        {/* Icon and Date */}
                        <i className="text-center ion-fireball" />
                        <h6 className="text-center">May 2015</h6>
                      </div>
                      {/* Button ID For Content ID */}
                      <a id="btn-4" className="btn-floating waves-effect waves-light btn-large achievement-more-btn custom-btn" data-aos="zoom-in" data-aos-delay={300}>
                        <i className="ion-ios-arrow-down" />
                      </a>
                    </div>
                    {/* Content ID */}
                    <div id="content-4" className="achievement-content">
                      {/* Description */}
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies.
                      </p>
                    </div>
                  </div>
                </div> 
              </div>
              {/* ./4th Achievement */}
              {/* 5th Achievement */}
              <div className="col col-md-4 col-sm-6 col-xs-12">
                <div className="achievement">
                  <div className="achievement-top-bar">
                    {/* Achievement Title Here */}
                    <h5 className="text-center text-capitalize">National Biking Champion</h5>
                  </div>
                  <div className="achievement-inner">
                    <div className="achievement-header">
                      <div className="achievement-heading">
                        {/* Icon and Date */}
                        <i className="text-center ion-android-bicycle" />
                        <h6 className="text-center">April 2014</h6>
                      </div>
                      {/* Button ID For Content ID */}
                      <a id="btn-5" className="btn-floating waves-effect waves-light btn-large achievement-more-btn custom-btn" data-aos="zoom-in" data-aos-delay={300}>
                        <i className="ion-ios-arrow-down" />
                      </a>
                    </div>
                    {/* Content ID */}
                    <div id="content-5" className="achievement-content">
                      {/* Description */}
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./5th Achievement */}
              {/* 6th Achievement */}
              <div className="col col-md-4 col-sm-6 col-xs-12">
                <div className="achievement">
                  <div className="achievement-top-bar">
                    {/* Achievement Title Here */}
                    <h5 className="text-center text-capitalize">ECO Club Pro Membership</h5>
                  </div>
                  <div className="achievement-inner">
                    <div className="achievement-header">
                      <div className="achievement-heading">
                        {/* Icon and Date */}
                        <i className="text-center ion-leaf" />
                        <h6 className="text-center">June 2014</h6>
                      </div>
                      {/* Button ID For Content ID */}
                      <a id="btn-6" className="btn-floating waves-effect waves-light btn-large achievement-more-btn custom-btn" data-aos="zoom-in" data-aos-delay={300}>
                        <i className="ion-ios-arrow-down" />
                      </a>
                    </div>
                    {/* Content ID */}
                    <div id="content-6" className="achievement-content">
                      {/* Description */}
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./6th Achievement */}
            </div>
          </div>
        </section>
        {/*==========================================
               PUBLICATIONS
===========================================*/}
        <section id="publications" className="section">
          <h4 className="text-uppercase text-center">Publications</h4>
          <div className="container">
            <div className="row">
              {/* 1st publication */}
              <div className="col col-md-6 col-sm-12 col-xs-12">
                <div className="publication card text-center">
                  {/* place Icon Here */}
                  <div className="icon-div text-center" data-aos="zoom-in" data-aos-delay={300}><i className="ion-ios-book" /></div>
                  <h6 className="text-center text-capitalize">Name of the book will be placed here</h6>
                  {/* Type and Published date here */}
                  <ul className="text-center list-inline">
                    <li><i className="ion-ios-pricetag" />Type: Novel</li>
                    <li><i className="ion-calendar" />Published On: 12 Jun 2015</li>
                  </ul>
                  {/* Some Info About Item */}
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum venenatis vestibulum elit ultricies.
                  </p>
                  <div className="row">
                    {/* Item link here */}
                    <a href="#0" className="btn waves-effect waves-light btn-primary custom-btn">Read Now</a>
                  </div>
                </div>
              </div>
              {/* ./1st publication */}
              {/* 2nd publication */}
              <div className="col col-md-6 col-sm-12 col-xs-12">
                <div className="publication card text-center">
                  {/* place Icon Here */}
                  <div className="icon-div text-center" data-aos="zoom-in" data-aos-delay={300}><i className="ion-ios-paper" /></div>
                  <h6 className="text-center text-capitalize">Subject of research will be placed here</h6>
                  {/* Type and Published date here */}
                  <ul className="text-center list-inline">
                    <li><i className="ion-ios-pricetag" />Type: Research</li>
                    <li><i className="ion-calendar" />Published On: 12 Jun 2015</li>
                  </ul>
                  {/* Some Info About Item */}
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum venenatis vestibulum elit ultricies.
                  </p>
                  <div className="row">
                    {/* Item link here */}
                    <a href="#0" className="btn waves-effect waves-light btn-primary custom-btn">Read Now</a>
                  </div>
                </div>
              </div>
              {/* ./2nd publication */}
              {/* 3rd publication */}
              <div className="col col-md-6 col-sm-12 col-xs-12">
                <div className="publication card text-center">
                  {/* place Icon Here */}
                  <div className="icon-div text-center" data-aos="zoom-in" data-aos-delay={300}><i className="ion-ios-book" /></div>
                  <h6 className="text-center text-capitalize">Name of the book will be placed here</h6>
                  {/* Type and Published date here */}
                  <ul className="text-center list-inline">
                    <li><i className="ion-ios-pricetag" />Type: Novel</li>
                    <li><i className="ion-calendar" />Published On: 12 Jun 2015</li>
                  </ul>
                  {/* Some Info About Item */}
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum venenatis vestibulum elit ultricies.
                  </p>
                  <div className="row">
                    {/* Item link here */}
                    <a href="#0" className="btn waves-effect waves-light btn-primary custom-btn">Read Now</a>
                  </div>
                </div>
              </div>
              {/* ./3rd publication */}
              {/* 4th publication */}
              <div className="col col-md-6 col-sm-12 col-xs-12">
                <div className="publication card text-center">
                  {/* place Icon Here */}
                  <div className="icon-div text-center" data-aos="zoom-in" data-aos-delay={300}><i className="ion-ios-paper" /></div>
                  <h6 className="text-center text-capitalize">Subject of research will be placed here</h6>
                  {/* Type and Published date here */}
                  <ul className="text-center list-inline">
                    <li><i className="ion-ios-pricetag" />Type: Research</li>
                    <li><i className="ion-calendar" />Published On: 12 Jun 2015</li>
                  </ul>
                  {/* Some Info About Item */}
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum venenatis vestibulum elit ultricies.
                  </p>
                  <div className="row">
                    {/* Item link here */}
                    <a href="#0" className="btn waves-effect waves-light btn-primary custom-btn">Read Now</a>
                  </div>
                </div>
              </div>
              {/* ./4th publication */}
            </div>
          </div>
        </section>
        {/*==========================================
                   BLOG
===========================================*/}
        <section id="blog" className="section">
          <h4 className="text-uppercase text-center">From Blog</h4>
          <div className="container">
            <div className="row">
              {/* 1st blog post */}
              <div className="col col-md-4 col-sm-12 col-xs-12">
                <div className="card blog rainbow">
                  {/* Blog image here */}
                  <img className="img-responsive" src="images/blog/blog1.jpg" />
                  <div className="blog-content">
                    {/* Edit title and info here */}
                    <div className="blog-title">
                      <h6 className="text-capitalize">Blog title will be placed here</h6>
                      <ul>
                        <li><i className="ion-calendar" />28 July</li>
                        <li><i className="ion-heart" />87</li>
                        <li><i className="ion-android-share-alt" />26</li>
                      </ul>
                      {/* Add link of full post */}
                      <a href="post.html" target="_blank" className="btn-floating waves-effect waves-light btn-large more-btn custom-btn" data-aos="zoom-in" data-aos-delay={200}>
                        <i className="ion-android-more-horizontal" /></a>
                    </div>
                    {/* some line of post */}
                    <p className="text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra vestibulum elit ultricies.......
                    </p>
                  </div>
                </div>
              </div>
              {/* ./1st blog post */}
              {/* 2nd blog post */}
              <div className="col col-md-4 col-sm-12 col-xs-12">
                <div className="card blog">
                  {/* Blog image here */}
                  <img className="img-responsive" src="images/blog/blog2.jpg" />
                  <div className="blog-content">
                    {/* Edit title and info here */}
                    <div className="blog-title">
                      <h6 className="text-capitalize">Blog title will be placed here</h6>
                      <ul>
                        <li><i className="ion-calendar" />12 July</li>
                        <li><i className="ion-heart" />53</li>
                        <li><i className="ion-android-share-alt" />73</li>
                      </ul>
                      {/* Add link of full post */}
                      <a href="post.html" target="_blank" className="btn-floating waves-effect waves-light btn-large more-btn custom-btn" data-aos="zoom-in" data-aos-delay={200}>
                        <i className="ion-android-more-horizontal" /></a>
                    </div>
                    {/* some line of post */}
                    <p className="text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra vestibulum elit ultricies.......
                    </p>
                  </div>
                </div>
              </div>
              {/* ./2nd blog post */}
              {/* 3rd blog post */}
              <div className="col col-md-4 col-sm-12 col-xs-12">
                <div className="card blog">
                  {/* Blog image here */}
                  <img className="img-responsive" src="images/blog/blog3.jpg" />
                  <div className="blog-content">
                    {/* Edit title and info here */}
                    <div className="blog-title">
                      <h6 className="text-capitalize">Blog title will be placed here</h6>
                      <ul>
                        <li><i className="ion-calendar" />20 Jun</li>
                        <li><i className="ion-heart" />36</li>
                        <li><i className="ion-android-share-alt" />37</li>
                      </ul>
                      {/* Add link of full post */}
                      <a href="post.html" target="_blank" className="btn-floating waves-effect waves-light btn-large more-btn custom-btn" data-aos="zoom-in" data-aos-delay={200}>
                        <i className="ion-android-more-horizontal" /></a>
                    </div>
                    {/* some line of post */}
                    <p className="text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra vestibulum elit ultricies.......
                    </p>
                  </div>
                </div>
              </div>
              {/* ./3rd blog post */}
            </div>
            <div className="row text-center">
              <div className="col col-xs-12 col-sm-12 col-md-12 text-center">
                <a href="blog.html" target="_blank" className="text-uppercase visit-blog btn btn-large custom-btn waves-effect waves-light" data-aos="zoom-in" data-aos-delay={100}>Visit MY BLOG</a>
              </div>
            </div>
          </div>
        </section>
        {/*==========================================
                   CLIENTS
===========================================*/}
        <section id="clients" className="section">
          <h4 className="text-uppercase text-center">Happy Clients</h4>
          <div className="container">
            <div className="row">
              <div id="client-slider" className="swiper-container">
                <div className="swiper-wrapper">
                  {/* 1st Reference from Client */}
                  <div className="col col-md-12 col-sm-12 col-xs-12 swiper-slide">
                    <div className="card clients-ref">
                      {/* Client Photo */}
                      <div className="client-photo center-block">
                        <img className="center-block" src="images/client/face-1.png" />
                      </div>
                      {/* Client Testimonial */}
                      <blockquote className="text-center">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies a. Vestibulum
                        at mollis ex, ac consectetur massa. Donec nunc, laoreet a nibh et, semper tincidunt nunc. Donec ac posuere tellus."
                        <cite>— Mr. John Mark, CEO </cite>
                      </blockquote>
                    </div>
                  </div>
                  {/* ./1st Reference from Client */}
                  {/* 2nd Reference from Client */}
                  <div className="col col-md-12 col-sm-12 col-xs-12 swiper-slide">
                    <div className="card clients-ref">
                      {/* Client Photo */}
                      <div className="client-photo center-block">
                        <img className="center-block" src="images/client/face-2.png" />
                      </div>
                      {/* Client Testimonial */}
                      <blockquote className="text-center">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies a. Vestibulum
                        at mollis ex, ac consectetur massa. Donec nunc, laoreet a nibh et, semper tincidunt nunc. Donec ac posuere tellus."
                        <cite>— Mrs. July Sara, CEO </cite>
                      </blockquote>
                    </div>
                  </div>
                  {/* ./2nd Reference from Client */}
                  {/* 3rd Reference from Client */}
                  <div className="col col-md-12 col-sm-12 col-xs-12 swiper-slide">
                    <div className="card clients-ref">
                      {/* Client Photo */}
                      <div className="client-photo center-block">
                        <img className="center-block" src="images/client/face-3.png" />
                      </div>
                      {/* Client Testimonial */}
                      <blockquote className="text-center">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies a. Vestibulum
                        at mollis ex, ac consectetur massa. Donec nunc, laoreet a nibh et, semper tincidunt nunc. Donec ac posuere tellus."
                        <cite>— Mr. Robart Hug, CEO </cite>
                      </blockquote>
                    </div>
                  </div>
                  {/* ./3rd Reference from Client */}
                  {/* 4th Reference from Client */}
                  <div className="col col-md-12 col-sm-12 col-xs-12 swiper-slide">
                    <div className="card clients-ref">
                      {/* Client Photo */}
                      <div className="client-photo center-block">
                        <img className="center-block" src="images/client/face-4.png" />
                      </div>
                      {/* Client Testimonial */}
                      <blockquote className="text-center">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit ultricies a. Vestibulum
                        at mollis ex, ac consectetur massa. Donec nunc, laoreet a nibh et, semper tincidunt nunc. Donec ac posuere tellus."
                        <cite>— Mrs. Angela D-Suza, CEO </cite>
                      </blockquote>
                    </div>
                  </div>
                  {/* ./4th Reference from Client */}
                </div>
                {/* If we need pagination */}
                <div className="swiper-pagination" />
              </div>
            </div>
            <div className="row">
              <h5 className="text-uppercase text-center">Also Worked for</h5>
              {/* Company Logo with Website LInk */}
              <ul className="text-center">
                <li data-aos="fade-up" data-aos-delay={300}><a href="#0">
                    <img className="img-responsive media-middle" src="images/client/logo1.png" alt="" />
                  </a></li>
                <li data-aos="fade-up" data-aos-delay={450}><a href="#0">
                    <img className="img-responsive media-middle" src="images/client/logo2.png" alt="" />
                  </a></li>
                <li data-aos="fade-up" data-aos-delay={600}><a href="#0">
                    <img className="img-responsive media-middle" src="images/client/logo3.png" alt="" />
                  </a></li>
                <li data-aos="fade-up" data-aos-delay={750}><a href="#0">
                    <img className="img-responsive media-middle" src="images/client/logo4.png" alt="" />
                  </a></li>
                <li data-aos="fade-up" data-aos-delay={750}><a href="#0">
                    <img className="img-responsive media-middle" src="images/client/logo5.png" alt="" />
                  </a></li>
              </ul>
              {/* ./Company Logo with Website LInk */}
            </div>
          </div>
        </section>
        {/*==========================================
               PRICING TABLE
===========================================*/}
        <section id="pricing" className="section">
          <h4 className="text-uppercase text-center">Pricing</h4>
          <div className="container">
            <div className="row">
              <ul className="text-center period-btn">
                <li id="month-btn" className="active-cat"><a>Monthly</a></li>
                <li id="year-btn"><a>Yearly</a></li>
              </ul>
              {/* Monthly Pricing */}
              <div id="month" className="col col-md-12 col-sm-12 col-xs-12 period-type">
                <div className="row">
                  {/* Basic */}
                  <div className="col col-md-3 col-sm-6 col-xs-12">
                    <div className="card pricing-table" data-aos="fade-up" data-aos-delay={300}>
                      {/* Table Name */}
                      <h3 className="text-center">Basic</h3>
                      <h4 className="text-center">
                        <span className="dollar">$</span>
                        {/* Enter Your Amount Here */}
                        <span className="amount">25</span>
                        <span className="period">/mo</span>
                      </h4>
                      {/* Features */}
                      <ul className="feature-list text-center">
                        <li>500 Items</li>
                        <li>25 Free Demo /week</li>
                        <li>Unlimited Storage</li>
                        <li>24/7 Support</li>
                      </ul>
                      {/* ./Features */}
                      <div className="row">
                        <div className="col col-xs-12 col-sm-12 col-md-12 text-center">
                          <a href="#0" className="btn waves-effect waves-light custom-btn">Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ./Basic */}
                  {/* Silver */}
                  <div className="col col-md-3 col-sm-6 col-xs-12">
                    <div className="card pricing-table" data-aos="fade-up" data-aos-delay={450}>
                      {/* Table Name */}
                      <h3 className="text-center">Silver</h3>
                      <h4 className="text-center">
                        <span className="dollar">$</span>
                        {/* Enter Your Amount Here */}
                        <span className="amount">50</span>
                        <span className="period">/mo</span>
                      </h4>
                      {/* Features */}
                      <ul className="feature-list text-center">
                        <li>500 Items</li>
                        <li>25 Free Demo /week</li>
                        <li>Unlimited Storage</li>
                        <li>24/7 Support</li>
                      </ul>
                      {/* ./Features */}
                      <div className="row">
                        <div className="col col-xs-12 col-sm-12 col-md-12 text-center">
                          <a href="#0" className="btn waves-effect waves-light custom-btn">Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ./Silver */}
                  {/* Gold */}
                  <div className="col col-md-3 col-sm-6 col-xs-12">
                    <div className="card pricing-table" data-aos="fade-up" data-aos-delay={600}>
                      {/* Table Name */}
                      <h3 className="text-center">Gold</h3>
                      <h4 className="text-center">
                        <span className="dollar">$</span>
                        {/* Enter Your Amount Here */}
                        <span className="amount">75</span>
                        <span className="period">/mo</span>
                      </h4>
                      {/* Features */}
                      <ul className="feature-list text-center">
                        <li>500 Items</li>
                        <li>25 Free Demo /week</li>
                        <li>Unlimited Storage</li>
                        <li>24/7 Support</li>
                      </ul>
                      {/* ./Features */}
                      <div className="row">
                        <div className="col col-xs-12 col-sm-12 col-md-12 text-center">
                          <a href="#0" className="btn waves-effect waves-light custom-btn">Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ./Gold */}
                  {/* Platinum */}
                  <div className="col col-md-3 col-sm-6 col-xs-12">
                    <div className="card pricing-table" data-aos="fade-up" data-aos-delay={750}>
                      {/* Table Name */}
                      <h3 className="text-center">Platinum</h3>
                      <h4 className="text-center">
                        <span className="dollar">$</span>
                        {/* Enter Your Amount Here */}
                        <span className="amount">100</span>
                        <span className="period">/mo</span>
                      </h4>
                      {/* Features */}
                      <ul className="feature-list text-center">
                        <li>500 Items</li>
                        <li>25 Free Demo /week</li>
                        <li>Unlimited Storage</li>
                        <li>24/7 Support</li>
                      </ul>
                      {/* ./Features */}
                      <div className="row">
                        <div className="col col-xs-12 col-sm-12 col-md-12 text-center">
                          <a href="#0" className="btn waves-effect waves-light custom-btn">Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ./Platinum */}
                </div>
              </div>
              {/* ./Monthly Pricing */}
              {/* Yearly Pricing */}
              <div id="year" className="col col-md-12 col-sm-12 col-xs-12 period-type">
                <div className="row">
                  {/* Basic */}
                  <div className="col col-md-3 col-sm-6 col-xs-12">
                    <div className="card pricing-table">
                      {/* Table Name */}
                      <h3 className="text-center">Basic</h3>
                      <h4 className="text-center">
                        <span className="dollar">$</span>
                        {/* Enter Your Amount Here */}
                        <span className="amount">240</span>
                        <span className="period">/yr</span>
                      </h4>
                      {/* Features */}
                      <ul className="feature-list text-center">
                        <li>500 Items</li>
                        <li>25 Free Demo /week</li>
                        <li>Unlimited Storage</li>
                        <li>24/7 Support</li>
                      </ul>
                      {/* ./Features */}
                      <div className="row">
                        <div className="col col-xs-12 col-sm-12 col-md-12 text-center">
                          <a href="#0" className="btn waves-effect waves-light custom-btn">Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ./Basic */}
                  {/* Silver */}
                  <div className="col col-md-3 col-sm-6 col-xs-12">
                    <div className="card pricing-table">
                      {/* Table Name */}
                      <h3 className="text-center">Silver</h3>
                      <h4 className="text-center">
                        <span className="dollar">$</span>
                        {/* Enter Your Amount Here */}
                        <span className="amount">480</span>
                        <span className="period">/yr</span>
                      </h4>
                      {/* Features */}
                      <ul className="feature-list text-center">
                        <li>500 Items</li>
                        <li>25 Free Demo /week</li>
                        <li>Unlimited Storage</li>
                        <li>24/7 Support</li>
                      </ul>
                      {/* ./Features */}
                      <div className="row">
                        <div className="col col-xs-12 col-sm-12 col-md-12 text-center">
                          <a href="#0" className="btn waves-effect waves-light custom-btn">Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ./Silver */}
                  {/* Gold */}
                  <div className="col col-md-3 col-sm-6 col-xs-12">
                    <div className="card pricing-table">
                      {/* Table Name */}
                      <h3 className="text-center">Gold</h3>
                      <h4 className="text-center">
                        <span className="dollar">$</span>
                        {/* Enter Your Amount Here */}
                        <span className="amount">720</span>
                        <span className="period">/yr</span>
                      </h4>
                      {/* Features */}
                      <ul className="feature-list text-center">
                        <li>500 Items</li>
                        <li>25 Free Demo /week</li>
                        <li>Unlimited Storage</li>
                        <li>24/7 Support</li>
                      </ul>
                      {/* ./Features */}
                      <div className="row">
                        <div className="col col-xs-12 col-sm-12 col-md-12 text-center">
                          <a href="#0" className="btn waves-effect waves-light custom-btn">Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ./Gold */}
                  {/* Platinum */}
                  <div className="col col-md-3 col-sm-6 col-xs-12">
                    <div className="card pricing-table">
                      {/* Table Name */}
                      <h3 className="text-center">Platinum</h3>
                      <h4 className="text-center">
                        <span className="dollar">$</span>
                        {/* Enter Your Amount Here */}
                        <span className="amount">960</span>
                        <span className="period">/yr</span>
                      </h4>
                      {/* Features */}
                      <ul className="feature-list text-center">
                        <li>500 Items</li>
                        <li>25 Free Demo /week</li>
                        <li>Unlimited Storage</li>
                        <li>24/7 Support</li>
                      </ul>
                      {/* ./Features */}
                      <div className="row">
                        <div className="col col-xs-12 col-sm-12 col-md-12 text-center">
                          <a href="#0" className="btn waves-effect waves-light custom-btn">Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ./Platinum */}
                </div>
              </div>
              {/* Yearly Pricing */}
            </div>
          </div>
        </section>
        {/*==========================================
                   INTEREST
===========================================*/}
        <section id="interest" className="section">
          <h4 className="text-uppercase text-center">Interest</h4>
          <div className="container">
            <div className="row">
              <div className="col col-md-12 col-sm-12 col-xs-12">
                <div className="card interest">
                  <div className="row">
                    <div className="col col-md-12 col-sm-12 col-xs-12">
                      {/* Some brief about your interest */}
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetrami. Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    {/* Interest Topic Icon and Name */}
                    <ul className="col-md-12 col-sm-12 col-xs-12 text-center list-inline">
                      <li className="interest-topic">
                        <i className="ion-ios-film" />
                        <span>Documentary</span>
                      </li>
                      <li className="interest-topic">
                        <i className="ion-compose" />
                        <span>Blogging</span>
                      </li>
                      <li className="interest-topic">
                        <i className="ion-headphone" />
                        <span>Music</span>
                      </li>
                      <li className="interest-topic">
                        <i className="ion-ios-football" />
                        <span>Football</span>
                      </li>
                      <li className="interest-topic">
                        <i className="ion-plane" />
                        <span>Traveling</span>
                      </li>
                      <li className="interest-topic">
                        <i className="ion-ios-game-controller-b" />
                        <span>Gaming</span>
                      </li>
                      <li className="interest-topic">
                        <i className="ion-ios-camera" />
                        <span>Photography</span>
                      </li>
                    </ul>
                    {/* ./Interest Topic Icon and Name */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==========================================
                    CONTACT
===========================================*/}
        <section id="contact" className="section">
          <h4 className="text-uppercase text-center">Contact</h4>
          <div className="container">
            <div className="row">
              {/* Contact Info */}
              <div className="col col-md-5 col-sm-6 col-xs-12">
                <div className="info card">
                  {/* Apply your own info here */}
                  <ul className="text-center center-block" data-aos="fade" data-aos-delay={200} data-aos-offset={0}>
                    <li>
                      <i className="ion-android-call center-block" />
                      <span>+880 - 12345 - 67890</span>
                    </li>
                    <li>
                      <i className="ion-ios-printer center-block" />
                      <span>+880 - 12345 - 67890</span>
                    </li>
                    <li>
                      <i className="ion-email center-block" />
                      <span>emailid@domain.com</span>
                    </li>
                    <li>
                      <i className="ion-earth center-block" />
                      <span>websiteaddresslink.com</span>
                    </li>
                    <li>
                      <i className="ion-ios-location center-block" />
                      <span>25/A New Eskaton Road, Maghbazar</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* ./Contact Info */}
              {/* Contact Form */}
              <div className="col col-md-7 col-sm-6 col-xs-12">
                <div className="contact card">
                  <form id="contact-form" name="contact-form" role="form">
                    <div className="input-field">
                      <input id="name" name="name" type="text" className="validate" required />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                      <input id="subject" name="subject" type="text" className="validate" required />
                      <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="input-field">
                      <input id="email" name="email" type="email" className="validate" required />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                      <textarea id="textarea" name="message" className="materialize-textarea" required defaultValue={""} />
                      <label htmlFor="textarea">Massage</label>
                    </div>
                    <div className="row">
                      <div className="col col-md-12 col-sm-12 col-xs-12 text-center">
                        <button type="submit" id="submit" name="submit-data" value="Submit" className="btn waves-effect waves-light btn-primary custom-btn">
                          {/* Button value here */}
                          <i className="ion-ios-paperplane" />Send</button>
                      </div>
                      {/* Message Sent and Error info */}
                      <div id="snackbar">Your Message is sent</div>
                      <div id="fail-snackbar">Something is going wrong, Please try again</div>
                    </div>
                  </form>
                </div>
              </div>
              {/* ./Contact Form */}
            </div>
            {/* Location MAP */}
            <div className="row">
              <div className="col col-md-12 col-sm-12 col-xs-12">
                <div id="google-map" data-aos="zoom-in" data-aos-delay={0} data-aos-offset={0}>
                  <div id="map-container" />
                  <div id="cd-zoom-in" className="custom-btn"><i className="material-icons text-center">add</i></div>
                  <div id="cd-zoom-out" className="custom-btn"><i className="material-icons text-center">remove</i></div>
                  {/* Your address here */}
                  <address className="text-center">25/A New Eskaton Road, Maghbazar, Dhaka 1000, Bangladesh</address>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==========================================
                    FOOTER
===========================================*/}
        <footer>
          <div className="container">
            <p className="text-center">
              © DECENT Material CV | Resume 2016. Designed by
              <a href="https://themeforest.net/user/ravelweb" target="_blank">
                <strong>Mohammad Asif | Ravelweb</strong>
              </a>
            </p>
          </div>
        </footer>
        {/* Back To Top Button */}
        <a href="#header" id="btp" className="back-to-top btn-floating waves-effect waves-light btn-large custom-btn">
          <i className="ion-ios-arrow-up" />
        </a>
        {/*==========================================
                COLOR SWITCHER
===========================================*/}
        <div className="switcher">
          <div className="switcher-btn custom-btn waves-effect waves-light text-center">
            <i className="ion-android-color-palette text-center" />
          </div>
          <div className="back custom-btn waves-effect waves-light text-center">
            <i className="ion-ios-arrow-right text-center" />
          </div>
          {/* <div className="colors">
            <p className="text-center text-capitalize">Choose Your Favourite Color</p>
            <ul>
              <li id="color-red" className="color-btn" />
              <li id="color-pink" className="color-btn" />
              <li id="color-purple" className="color-btn" />
              <li id="color-deep-purple" className="color-btn" />
              <li id="color-indigo" className="color-btn" />
              <li id="color-blue" className="color-btn" />
              <li id="color-teal" className="color-btn" />
              <li id="color-green" className="color-btn" />
              <li id="color-light-green" className="color-btn" />
              <li id="color-amber" className="color-btn" />
              <li id="color-orange" className="color-btn" />
              <li id="color-deep-orange" className="color-btn" />
              <li id="color-brown" className="color-btn" />
              <li id="color-blue-gray" className="color-btn" />
              <li id="color-gray" className="color-btn" />
            </ul>
          </div> */}
        </div>
        
         </div>
    
       </div>
      
      
        )
    }
}
