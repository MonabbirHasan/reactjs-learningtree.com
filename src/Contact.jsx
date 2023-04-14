import React from 'react'
import './index.css'
function Contact() {
  return (
    <>
      <section className="banner" id="header">
        <div className="container-fluid nav bg">
          <div className="row">
            <div className="col-10 text-center justify-content-start d-flex align-item-center mx-auto">
              <div className="col-md-6 mt-5 pt-5">
                <h1 style={style.h1} className="text-left">
                  learn something good
                </h1>
                <p style={style.p}>
                  Develop skills at home on your own time. Professional courses
                  on programming and software development with proper guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
const style = {
  h1: {
    fontSize: '20',
    color: 'blue',
    textTransform: 'capitalize',
    paddingBottom: '20px',
  },
  p: {
    fontSize: '18px',
    textTransform: 'capitalize',
    fontWeight: 'bolder',
    paddingBottom: '10px',
  },
}
export default Contact
