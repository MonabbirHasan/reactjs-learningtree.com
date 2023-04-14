import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className="container-fluid nav menu_hide bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" exact to="/">
                  Education
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="active_menu"
                        className="nav-link active"
                        aria-current="page"
                        exact
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="active_menu"
                        className="nav-link"
                        exact
                        to="/about"
                      >
                        about
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="active_menu"
                        className="nav-link"
                        exact
                        to="/course"
                      >
                        courses
                      </NavLink>
                    </li>

                    <li className="nav-item hoverd_menu">
                      <NavLink
                        activeClassName="active_menu"
                        className="nav-link"
                        exact
                        to="/course"
                      >
                        category
                      </NavLink>

                      <div className="category">
                        <li className="parent-category front">
                          <NavLink className="fron_menu" exact to="/course">
                            frontend webdevelopmnet
                          </NavLink>
                          <div className="f-category">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JAVASCRIPT</li>
                            <li>BOOTSTARP4-5</li>
                            <li>TELWIND</li>
                            <li>ANGULER.JS</li>
                            <li>REACT.JS</li>
                          </div>
                        </li>
                        <li className="parent-category web_design front">
                          <NavLink className="fron_menu" exact to="/course">
                            web design
                          </NavLink>
                          <div className="web-d f-category">
                            <li>ilastator</li>
                            <li>photoshop cc</li>
                            <li>adobe xd</li>
                            <li>html5</li>
                            <li>css3</li>
                            <li>figma</li>
                            <li>scatch</li>
                          </div>
                        </li>
                        <li className="parent-category web_design front">
                          <NavLink className="fron_menu" exact to="/course">
                            web development
                          </NavLink>
                          <div className="web-d f-category">
                            <li>php</li>
                            <li>node.js</li>
                            <li>django</li>
                            <li>spring</li>
                            <li>.net mvc</li>
                            <li>MYSQLI</li>
                            <li>firebase</li>
                            <li>mongoDB</li>
                            <li>postgree</li>
                            <li>sqlite3</li>
                          </div>
                        </li>
                        <li className="parent-category web_design front">
                          <NavLink className="fron_menu" exact to="/course">
                            full-stack web development
                          </NavLink>
                          <div className="web-d f-category full">
                            <li>front end</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JAVASCRIPT</li>
                            <li>BOOTSTARP4-5</li>
                            <li>TELWIND</li>
                            <li>ANGULER.JS</li>
                            <li>REACT.JS</li>
                            <li>back end</li>
                            <li>php</li>
                            <li>node.js</li>
                            <li>django</li>
                            <li>spring</li>
                            <li>.net mvc</li>
                            <li>MYSQLI</li>
                            <li>firebase</li>
                            <li>mongoDB</li>
                            <li>postgree</li>
                            <li>sqlite3</li>
                          </div>
                        </li>
                        <li className="parent-category web_design front">
                          <NavLink className="fron_menu" exact to="/course">
                            data scince js
                          </NavLink>
                          <div className="web-d f-category">
                            <li>javascript</li>
                            <li>python</li>
                            <li>sql</li>
                            <li>exel</li>
                          </div>
                        </li>
                        <li className="parent-category web_design front">
                          <NavLink className="fron_menu" exact to="/course">
                            mobile app development
                          </NavLink>
                          <div className="web-d f-category">
                            <li>react native</li>
                            <li>flutter dart</li>
                            <li>xamarin</li>
                            <li>android java</li>
                            <li>kotline</li>
                          </div>
                        </li>
                        <li className="parent-category web_design front">
                          <NavLink className="fron_menu" exact to="/course">
                            ios development
                          </NavLink>
                          <div className="web-d f-category">
                            <li>swift</li>
                            <li>maui</li>
                            <li>core mvc</li>
                          </div>
                        </li>
                        <li className="parent-category web_design front">
                          <NavLink className="fron_menu" exact to="/course">
                            native app development
                          </NavLink>
                          <div className="web-d f-category">
                            <li>java</li>
                            <li>kotline</li>
                            <li>android studio</li>
                          </div>
                        </li>
                        <li className="parent-category web_design front">
                          <NavLink className="fron_menu" exact to="/course">
                            ms office
                          </NavLink>
                          <div className="web-d f-category">
                            <li>ms exel</li>
                            <li>ms word</li>
                            <li>ms powrpoint</li>
                            <li>ms team</li>
                            <li>ms not</li>
                          </div>
                        </li>
                        <li className="parent-category web_design front">
                          <NavLink className="fron_menu" exact to="/course">
                            desktop app development
                          </NavLink>
                          <div className="web-d f-category">
                            <li>electron.js</li>
                            <li>.net core mvc</li>
                            <li>c#</li>
                          </div>
                        </li>
                        <li className="parent-category web_design front">
                          <NavLink className="fron_menu" exact to="/course">
                            ui/ux
                          </NavLink>
                          <div className="web-d f-category">
                            <li>ilastator</li>
                            <li>photoshop</li>
                            <li>adobe xd</li>
                            <li>figma</li>
                            <li>scatch</li>
                          </div>
                        </li>
                      </div>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="active_menu"
                        className="nav-link"
                        exact
                        to="/contact"
                      >
                        contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
