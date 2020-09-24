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
                  <img  src="images/profile-pic.jpg" />
                </div>
                {/* Social Links */}
                <div id="intro-div" className="card content-wrapper abtcard">
                  <ul className="text-center list-inline">
                    <li><a href="https://www.facebook.com/marksri123/" target="_blank"><i className="ion-social-facebook" /> </a></li>
                 
                    <li><a href="https://www.linkedin.com/in/sriharsha-katragadda-0273b0184" target="_blank"><i className="ion-social-linkedin" /></a></li>
    
                  </ul>
                  {/* Some Intro About You */}
                  <p className="text-center">
                  Full Stack Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, React JS, Node JS, JavaScript, CSS, MySQL, MongoDB and Hosting services.
                  </p>
                  <div className="row">
                    {/* Download & Contact Button */}
                    <div className="col col-xs-12 col-sm-12 col-md-12 text-center">
                      {/* Your CV File */}
                      <a href="cv/sriharsha-CV.pdf" download="sriharsha-CV.pdf" className="btn waves-effect waves-light btn-primary custom-btn">Download CV</a>
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
                  <li className="card" >
                      <i className="title-icon fa fa-circle" />
                      <div className="timeline-content">
                        {/* Heading */}
                        <div className="timeline-header">
                          <h3 className="text-capitalize">Mern Stack Developer (1 Year)</h3>
                        </div>
                        {/* Organization and Period */}
                        <p className="sub-heading">DevRabbit IT Solutions Pvt ltd - Hyderabad, Telangana.</p>
                        <p className="sub-heading">Oct 2019 - Present</p>
                        {/* Job Summary */}
                        <p className="content-p">
                        Consulted regularly with clients on project status, proposals and technical issues.

Responsible for the development and implementation of web applications based on client's requirement.

Worked as an Application Developer on large scale projects.

Involve in systems design, development, testing, implementation, documentation and support.                        </p>
                      </div>
                    </li>
                   
                    <li className="card" >
                      <i className="title-icon fa fa-circle" />
                      <div className="timeline-content">
                        {/* Heading */}
                        <div className="timeline-header">
                          <h3 className="text-capitalize">Web Developer-Intern</h3>
                        </div>
                        {/* Organization and Period */}
                        <p className="sub-heading">Fission Infotech Pvt ltd - Hyderabad, Telanagana

</p>
                        <p className="sub-heading">February 2019 - April 2019</p>
                        {/* Job Summary */}
                        <p className="content-p">
                      As an Intern worked on various modern web technologies and learnt native mobile application development.                        </p>
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
            <div className="col col-md-6 col-sm-6 col-xs-12">
              <div className="card content-wrapper skill-wrapper">
                <h5 className="text-center skill-title">
                  Front-End Technologies
                </h5>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    React.js<span></span>
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" >
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                  
                </div>

                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    Redux
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" >
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    Material UI,Semantic UI
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" >
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>

                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    Socket-IO<span></span>
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" >
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    React Native<span></span>
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" >
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Personal Skills */}
            <div className="col col-md-6 col-sm-6 col-xs-12">
              <div className="card content-wrapper skill-wrapper">
                <h5 className="text-center skill-title">
                  Back-End Technologies
                </h5>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    Node.js<span></span>
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" >
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    Express(REST API's)<span></span>
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" >
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    MySQL<span></span>
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" >
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    MongoDB<span></span>
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" >
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>

                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                  GRAPHQL<span></span>
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" >
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-md-6 col-sm-6 col-xs-12">
              <div className="card content-wrapper skill-wrapper">
                <h5 className="text-center skill-title">Personal</h5>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    Committed<span></span>
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" data-percent="100%">
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    Punctual<span></span>
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" data-percent="90%">
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    Leadership
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" data-percent="80%">
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    Communicative
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" data-percent="70%">
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    Analytical Skill
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" data-percent="80%">
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Language Skills */}
            <div className="col col-md-6 col-sm-6 col-xs-12">
              <div className="card content-wrapper skill-wrapper">
                <h5 className="text-center skill-title">Other Skills</h5>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23"> 
                   Adobe Photoshop cc<span></span>
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" data-percent="80%">
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                  Adobe Premier pro
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" data-percent="70%">
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    Linux OS / Windows 10
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress" >
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    VMWare / Oracle Box
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress">
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
                    </div>
                  </div>
                </div>

                <div className="skill-progress-div">
                  {/* Add Skill */}
                  <p className="fz23">
                    Android SDK<span></span>
                  </p>
                  {/* Edit Value Here */}
                  <div className="progress skill-progress">
                    <div className="determinate skill-determinate">
                      <i
                        className="skill-determinate-circle fa fa-circle"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-offset={0}
                      />
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
                    <li className="card">
                      <i className="title-icon fa fa-circle" />
                      <div className="timeline-content">
                        {/* Heading */}
                        <div className="timeline-header">
                          <h3 className="text-capitalize">Bachelor Of Technology In Computer Science & Engineering</h3>
                        </div>
                        {/* Institution, Period & result */}
                        <p className="sub-heading">St.Mary's Group Of Institutions (2015-2019), Hyderabad</p>
                        <p className="sub-heading">July 2015 - May 2019</p>
                        {/* <p className="sub-heading">Result: 4.0 out of 4.0</p> */}
                        {/* Education Summary */}
                        {/* <p className="content-p">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                        </p> */}
                      </div>
                    </li>
                    <li className="card">
                      <i className="title-icon fa fa-circle" />
                      <div className="timeline-content">
                        {/* Heading */}
                        <div className="timeline-header">
                          <h3 className="text-capitalize">Intermediate</h3>
                        </div>
                        {/* Institution, Period & result */}
                        <p className="sub-heading">Sri Chaitanya Jr. College, kukatpally, Hyderabad.</p>
                        <p className="sub-heading">July 2013 - May 2015</p>
                        {/* <p className="sub-heading">Result: 4.0 out of 4.0</p> */}
                        {/* Education Summary */}
                        {/* <p className="content-p">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                        </p> */}
                      </div>
                    </li>
                  
                  
                  </ul>
                </div>
                {/* End of Timeline */}
              </div>
            </div>
          </div>
        </section>
   
     
        <section id="portfolios" className="section">
          <h4 className="text-uppercase text-center">Portfolios</h4>
          <div className="container">
            <div className="row">
              {/* A basic setup of simple mode filter controls, all you have to do is use data-filter="all"
            for an unfiltered gallery and then the values of your categories to filter between them */}
              <ul className="text-center simple-filter" >
                {/* <li className="active-cat" data-filter="all"><a>Projects</a></li> */}
       
              </ul>
              <div className="filtr-container center-block">
  
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
                    <h6 className="text-capitalize text-center">Ayurway</h6>
                  </div>
                </div>
                <div id="modal3" className="modal" tabIndex={-1} role="dialog">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content animated zoomIn">
                      <h3 className="text-capitalize text-left">Ayurway EMR</h3>
                      <div className="row">
                        {/* Modal Image */}
                        <img className="img-responsive col-md-8 col-sm-12 col-xs-12" src="images/portfolios/p3.jpg" alt="" />
                        {/* Modal Content */}
                        <div className="content col-md-4 col-sm-12 col-xs-12">
                          <p><span>Status:&nbsp;</span> Ongoing</p>
                          <p><span>Duration:&nbsp;</span> Oct 2019 - present</p>
                          <p><span>Team Size:&nbsp;</span> 4</p>
                          <p><span>Role Played::&nbsp;</span> Node js, React js Developer</p>
                          {/* <a href="#0" target="_blank" className="btn modal-btn waves-effect waves-light btn-primary custom-btn">Live Demo</a> */}
                          {/* Some Information Abut the Project */}
                     
                          <p class="text-left"><strong>Skills Used:</strong> React Js, Node Js, MySQL, Semantic UI, Bootstrap 4, Material UI. .</p>
                          <p class="text-left"><strong>Description:</strong> Ayurway is a Health Care platform for Doctors and Patients in USA, Which includes Doctors 
can prescribe various medicines based on patient symptoms and tracking patient details. </p>
                        
                          <button data-dismiss="modal" className="btn right modal-btn close-btn waves-effect waves-light btn-primary custom-btn">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
       
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
                    <h6 className="text-capitalize text-center">Todo's System</h6>
                  </div>
                </div>

                <div id="modal8" className="modal" tabIndex={-1} role="dialog">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content animated zoomIn">
                      <h3 className="text-capitalize text-left">Todo List System</h3>
                      <div className="row">
                        {/* Modal Image */}
                        <img className="img-responsive col-md-8 col-sm-12 col-xs-12" src="images/portfolios/p8.jpg" alt="" />
                        {/* Modal Content */}
                        <div className="content col-md-4 col-sm-12 col-xs-12">
                        <p><span>Status:&nbsp;</span> Completed</p>
                          <p><span>Duration:&nbsp;</span>Aug-1-2020 to Aug-15-2020</p>
                          <p><span>Team Size:&nbsp;</span> 2</p>
                          <p><span>Role Played::&nbsp;</span>Full Stack</p>
                          <a href="https://todo-app-mern-fi.herokuapp.com/" target="_blank" className="btn modal-btn waves-effect waves-light btn-primary custom-btn">Live Demo</a>
                          {/* Some Information Abut the Project */}
                     
                          <p class="text-left"><strong>Highlights:</strong>
                          
                           
                           </p> <br/>
                           <p class="text-left">(Admin) User live monitoring, and tracking user activities, User Management (Grant or Deny Access).</p>
                           <p class="text-left">(User) Todo's CRUD Operations, Search, Sort, Paginating, Todo success alerts etc.</p> <br/> <br/>
                          <p class="text-left"><strong>Skills Used:</strong> React Js, Redux, Node Js, Socket-IO, MongoDB, Bootstrap 4 and Material UI.</p>
                          <p class="text-left"><strong>Description:</strong> Todo List System is a Todo list managent for user and Admin, Admin can control users and Gets Real time  User Activity tracking information.</p>
                          <p class="text-left"><strong>Test Credentials:   </strong> <br/> 1.admin/admin <br/>2.harsha/harsha</p>
                        
                           <button data-dismiss="modal" className="btn right modal-btn close-btn waves-effect waves-light btn-primary custom-btn">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section id="achievement" className="section">
          <h4 className="text-uppercase text-center">Achievement</h4>
          <div className="container">
            <div className="row">
     
              <div className="col col-md-12 col-sm-6 col-xs-12">
                <div className="achievement">
                  <div className="achievement-top-bar">
                    {/* Achievement Title Here */}
                    <h5 className="text-center text-capitalize"> Android App development  Certification from IIT Hyderabad.</h5>
                  </div>
                  <div className="achievement-inner">
                    <div className="achievement-header">
                      <div className="achievement-heading">
                        {/* Icon and Date */}
                        <i className="text-center ion-ribbon-a" />
                        <h6 className="text-center">June 2018</h6>
                      </div>
                      {/* Button ID For Content ID */}
                      <a id="btn-1" className="btn-floating waves-effect waves-light btn-large achievement-more-btn custom-btn" data-aos="zoom-in" data-aos-delay={300}>
                        <i className="ion-ios-arrow-down" />
                      </a>
                    </div>
                   
                  </div>
                </div>
              </div>
        
            </div>
          </div>
        </section>
      
        <section id="interest" className="section">
          <h4 className="text-uppercase text-center">Interest</h4>
          <div className="container">
            <div className="row">
              <div className="col col-md-12 col-sm-12 col-xs-12">
                <div className="card interest">
                  <div className="row">
                    <div className="col col-md-12 col-sm-12 col-xs-12">
                      {/* Some brief about your interest */}
                      
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

        <section id="contact" className="section">
          <h4 className="text-uppercase text-center">Contact</h4>
          <div className="container">
            <div className="row">
              {/* Contact Info */}
              <div className="col col-md-12 col-sm-6 col-xs-12">
                <div className="info card">
                  {/* Apply your own info here */}
                  <ul className="text-center center-block">
                    <li>
                      <i className="ion-android-call center-block" />
                      <span>9652031185</span>
                    </li>
                    
                    <li>
                      <i className="ion-email center-block" />
                      <span>ksriharsha36@gmail.com</span>
                    </li>
                    <li>
                      <i className="ion-earth center-block" />
                      <span>https://ksriharsha.herokuapp.com</span>
                    </li>
                    <li>
                      <i className="ion-ios-location center-block" />
                      <span>Miyapur, Hyderabad, India.</span>
                    </li>
                  </ul>
                </div>
              </div>
            
            </div>
     
          
          </div>
        </section>
   
       
         </div>
    
       </div>
      
      
        )
    }
}
