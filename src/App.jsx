import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
  <div className="content-block" id="header">
    <div id="overlay-1">
      <header id="site-header" className="clearfix">
        <div className="pull-left">
          <h1>
            <a href="#">Sem Pintado</a>
          </h1>
        </div>
        <div className="pull-right">
          <nav className="navbar site-nav" role="navigation">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <i className="fa fa-bars fa-2x" />
              </button>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="#header">
                    <i className="fa fa-home" /> <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio">
                    <i className="fa fa-bookmark" /> Portfolio
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <i className="fa fa-bullhorn" /> Me
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <i className="fa fa-phone-square" /> Contact
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* /.navbar-collapse */}
          </nav>
        </div>
      </header>{" "}
      {/* site-header */}
      <div className="middle text-center clearfix">
        <div className="container">
          <h1 className="pro-name">
           Sem{/* <span style="color: #71b644;" > */}Pintado{/* </span> */}
          </h1>
          <p className="tagline">I am a college student who wants to learn a lot and do my best even if its not perfect</p>
          <div className="skills"></div> {/* skills */}
      
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* middle */}
      <div className="bottom text-center">
        <a href="#portfolio">
          <i className="fa fa-angle-down fa-3x pulse" />
        </a>
      </div>
    </div>{" "}
    {/* overlay-1 */}
  </div>{" "}
  {/* content-block */}
  <div className="content-block text-center" id="portfolio">
    <header className="block-heading cleafix">
      <h1>About Me</h1>
      {/* <p>Take a look at some of my recent products</p> */}
    </header>
    <div className="isotope portfolio-items">
      <div className="element-item grid">
        <div className="effect-zoe">
          <img className="img-responsive" alt="Portfolio" src="img/1.jfif" />
          <figcaption>
            <h2 className="hidden-xs">
              Sem <span>Pintado</span>
            </h2>
          </figcaption>
        </div>
      </div>
      <div className="element-item grid">
        <div className="portfolio-item effect-zoe">
          <img className="img-responsive" alt="Portfolio" src="img/2.jpg" />
          <figcaption>
            <h2 className="hidden-xs">
              ACT <span>Friends</span>
            </h2>
        
          </figcaption>
        </div>
      </div>
      <div className="element-item grid">
        <div className="portfolio-item effect-zoe">
          <img className="img-responsive" alt="Portfolio" src="img/7.png" />
          <figcaption>
            <h2 className="hidden-xs">
              My <span>Interest</span>
            </h2>
           
          </figcaption>
        </div>
      </div>
      <div className="element-item grid">
        <div className="portfolio-item effect-zoe">
          <img className="img-responsive" alt="Portfolio" src="img/4.jpg" />
          <figcaption>
            <h2 className="hidden-xs">
              Creative <span>Joe</span>
            </h2>
            <p className="icon-links">
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-dribbble" />
              </a>
              <a href="#">
                <i className="fa fa-pinterest" />
              </a>
            </p>
          </figcaption>
        </div>
      </div>
      
    
    </div>{" "}
    {/* isotope portfolio-items */}
    <a href="#" className="btn btn-lg btn-view">
      <i className="fa fa-eye" />
      <span>View All</span>
    </a>
  </div>{" "}
  {/* content-block */}
  {/*  <div class="content-block text-center" id="services">
      <div class="overlay-2">
                  <header class="block-heading cleafix">
                      <h1>More About Me</h1>
                      <p>Lorem Ipsum Text</p>
                  </header>
                  <div class="block-content">
                      <div class="container">
                          <div class="row">
                              <div class="col-md-12">
                          <div class="row ">
                              <div class="col-sm-4">
                                  <h4 class="pro-stat">Completed Project</h4>
                                  <h2 class="proj-name count1 count-timer" >020</h2>
                              </div>
                              <div class="col-sm-4">
                                  <h4 class="pro-stat">Working Project</h4>
                                  <h2 class="proj-name count2">9</h2>
                              </div>
                              <div class="col-sm-4">
                                  <h4 class="pro-stat">Top Rated Project</h4>
                                  <h2 class="proj-name count3">015</h2>
                              </div>
                          </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>    overlay-2
  </div>  */}{" "}
  {/* content-block */}
  <div id="services" className="content-block">
    <div id="numbers" className="parallax">
      <div className="overlay">
        {/* title */}
        <div className="container-fluid numbers-title">
          <div className="container">
            <div className="row block-heading">
              <h1>Some Cool Facts About Me</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          {/* number list */}
          <ul className="numbersList">
            <li className="col-md-2 col-sm-4 col-xs-6">
              <h4> Anime Series and movies I watched </h4>
              <span id="number1" className="count1 count-timer">
                50+
              </span>
            </li>
            <li className="col-md-2 col-sm-4 col-xs-6">
              <h4>Swimming</h4>
              <span id="number2" className="count2">
                50+km
              </span>
            </li>
            <li className="col-md-2 col-sm-4 col-xs-6">
              <h4> Hours of Work</h4>
              <span id="number3" className="count3">
                10 
              </span>
            </li>
            <li className="col-md-2 col-sm-4 col-xs-6">
              <h4> Repositories in Git</h4>
              <span id="number4" className="count4">
                8
              </span>
            </li>
            <li className="col-md-2 col-sm-4 col-xs-6">
              <h4> Softdrinks that I drank</h4>
              <span id="number5" className="count5">
                20+
              </span>
            </li>
            <li className="col-md-2 col-sm-4 col-xs-6">
              <h4> Chicken that I ate </h4>
              <span id="number6" className="count6">
                20+
              </span>
            </li>
          </ul>
          {/* numbersList end */}
        </div>
        {/* container-fluid end */}
      </div>
      {/* overlay end */}
    </div>
  </div>
  
  {/* content-block */}
  <div className="content-block" id="contact">
    <div className="overlay-3">
      <header className="block-heading cleafix text-center">
        <h1>Contact</h1>
        {/* <p>Feel Free to Contact</p> */}
      </header>
      <div className="block-content text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 wow animated fadeInLeft">
              <form className="contact-form" action="form.php">
                <input type="text" name="name" placeholder="Name" required="" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                />
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Say Something..."
                  required=""
                  defaultValue={""}
                />
                <input type="submit" defaultValue="Submit" />
              </form>
            </div>
            <div className="col-md-6 wow animated fadeInRight">
              <div className="row">
                <div className="col-md-12">
                  <div className="contact-info">
                    <div className="clearfix">
                      <div className="rotated-icon">
                        <div className="sqaure-nebir" />
                        <i className="fa fa-map-marker" />
                      </div>
                      <p>
                        <strong> Address:</strong> Apalit, Pampanga
                      </p>
                    </div>
                    <div className="clearfix">
                      <div className="rotated-icon">
                        <div className="sqaure-nebir" />
                        <i className="fa fa-mobile" />
                      </div>
                      <p>
                        <strong> Cell No:</strong> +63 9765504764{" "}
                      </p>
                    </div>
                    <div className="clearfix">
                      <div className="rotated-icon">
                        <div className="sqaure-nebir" />
                        <i className="fa fa-envelope-o" />
                      </div>
                      <p>
                        <strong> Email:</strong> samuelpintado104@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <ul className="social-box">
                  <li>
                    <a className="facebook-icon" href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  
                  <li>
                    <a className="g-plus-icon" href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin-icon" href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* block-content */}
    </div>{" "}
    {/* overlay-3 */}
  </div>{" "}
  {/* content-block */}
 
</>

    </>
  )
}

export default App
