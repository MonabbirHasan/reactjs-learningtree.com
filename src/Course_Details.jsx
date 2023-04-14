import React from 'react'
import img from './assets/student.png'
import './index.css'
function Course_Details() {
  return (
    <section className="details">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-md-6">
            <h2>full stack website development with html5 css3js</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              laborum placeat facere dolorum corporis impedit nulla eveniet sed
              laboriosam expedita a, voluptatum quos recusandae accusamus
              blanditiis deserunt molestiae ut non!
            </p>
            <div className="row">
              <div className="col-md-3 d-item">
                <span>total-class=200.class</span>
              </div>
              <div className="col-md-3 d-item">
                <span>total-pepple=200</span>
              </div>
              <div className="col-md-3 d-item">
                <span>total-hour=30.hr</span>
              </div>
              <button className="btn btn-success mt-3">By Now</button>
            </div>
          </div>
          <div className="desc">
            <h3>why this course</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              quidem nisi pariatur autem, provident qui magnam illo beatae
              minima voluptas itaque odit cum, obcaecati error rem eos, sit
              numquam et. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nostrum eveniet, maxime, et deleniti quam adipisci, delectus
              consequatur tempore iusto earum nihil esse porro expedita culpa
              officia unde odit sint reprehenderit! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Laboriosam aspernatur facere aperiam
              eius odit quam sequi suscipit minus possimus, qui, magni itaque
              aliquid fuga libero! Cumque iusto assumenda architecto quos!
            </p>
            <h3>what is this course</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              quidem nisi pariatur autem, provident qui magnam illo beatae
              minima voluptas itaque odit cum, obcaecati error rem eos, sit
              numquam et. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nostrum eveniet, maxime, et deleniti quam adipisci, delectus
              consequatur tempore iusto earum nihil esse porro expedita culpa
              officia unde odit sint reprehenderit! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Laboriosam aspernatur facere aperiam
              eius odit quam sequi suscipit minus possimus, qui, magni itaque
              aliquid fuga libero! Cumque iusto assumenda architecto quos!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course_Details
