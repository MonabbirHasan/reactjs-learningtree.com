import React from 'react'
import { NavLink } from 'react-router-dom'
import banner_vidoe from './assets/banner-video.mp4'
import poster from './assets/student.png'
import './index.css'

var desc = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere 
veniam voluptates cupiditate atque, quibusdam deleniti quos perferendis! 
Iste cum consequuntur
`

const video_details = {
    poster: poster,
    v_title: 'full stack website developement',
    v_desc: desc,
    total_class: '100.class',
    students: '200.pepple',
    fees: '2000.tk',
  }

function Course() {
  return (
    <>
      <section className="course">
        <div className="container">
          <div className="row">
            <div className="col-md-5 item">
              <h1>welcome to our populler courses</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                facere veniam voluptates cupiditate atque, quibusdam deleniti
                quos perferendis! Iste cum consequuntur tenetur nulla iure
                magnam mollitia consequatur voluptate odit voluptas! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Tempora facere
                veniam voluptates cupiditate atque, quibusdam deleniti quos
                perferendis!
              </p>
              <p>
                Iste cum consequuntur tenetur nulla iure magnam mollitia
                consequatur voluptate Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tempora facere veniam voluptates cupiditate
                atque, quibusdam deleniti quos perferendis! Iste cum
                consequuntur tenetur nulla iure magnam mollitia consequatur
                voluptate odit voluptas!
              </p>
            </div>
            <div className="col-md-7">
              <div className="banner-video img-fluid">
                <video src={banner_vidoe} autoPlay aria-atomic muted loop>
                  {' '}
                </video>{' '}
              </div>
            </div>
          </div>
        </div>
        {/* Course video section start */}
        <div className="course_panel" style={style.course_panel}>
          <div className="course_wrapper" style={style.course_wrapper}>
            <div className="course" style={style.course_box}>
              <div className="course_img" style={style.course_img}>
                <img className="img-fluid" src={video_details.poster} alt="" />
              </div>
              <div>
                <h4 style={style.title}>{video_details.v_title}</h4>
              </div>
              <div>
                <p>{video_details.v_desc}</p>
              </div>
              <div>
                <span style={style.student}>{video_details.total_class}</span>
                <span style={style.student}>{video_details.students}</span>
              </div>
              <div>
                <span style={style.fees}>
                  <del>200.tk/</del>
                </span>
                <span style={style.fees}>{video_details.fees}</span>
              </div>
              <div style={style.button}>
              <NavLink exact to="/details"> <button className="btn btn-primary">Enroll Now</button></NavLink>
              </div>
            </div>
            <div className="course" style={style.course_box}>
              <div className="course_img" style={style.course_img}>
                <img className="img-fluid" src={video_details.poster} alt="" />
              </div>
              <div>
                <h4 style={style.title}>{video_details.v_title}</h4>
              </div>
              <div>
                <p>{video_details.v_desc}</p>
              </div>
              <div>
                <span style={style.student}>{video_details.total_class}</span>
                <span style={style.student}>{video_details.students}</span>
              </div>
              <div>
                <span style={style.fees}>
                  <del>200.tk/</del>
                </span>
                <span style={style.fees}>{video_details.fees}</span>
              </div>
              <div style={style.button}>
              <NavLink exact to="/details"> <button className="btn btn-primary">Enroll Now</button></NavLink>
              </div>
            </div>
            <div className="course" style={style.course_box}>
              <div className="course_img" style={style.course_img}>
                <img className="img-fluid" src={video_details.poster} alt="" />
              </div>
              <div>
                <h4 style={style.title}>{video_details.v_title}</h4>
              </div>
              <div>
                <p>{video_details.v_desc}</p>
              </div>
              <div>
                <span style={style.student}>{video_details.total_class}</span>
                <span style={style.student}>{video_details.students}</span>
              </div>
              <div>
                <span style={style.fees}>
                  <del>200.tk/</del>
                </span>
                <span style={style.fees}>{video_details.fees}</span>
              </div>
              <div style={style.button}>
              <NavLink exact to="/details"> <button className="btn btn-primary">Enroll Now</button></NavLink>
              </div>
            </div>
            <div className="course" style={style.course_box}>
              <div className="course_img" style={style.course_img}>
                <img className="img-fluid" src={video_details.poster} alt="" />
              </div>
              <div>
                <h4 style={style.title}>{video_details.v_title}</h4>
              </div>
              <div>
                <p>{video_details.v_desc}</p>
              </div>
              <div>
                <span style={style.student}>{video_details.total_class}</span>
                <span style={style.student}>{video_details.students}</span>
              </div>
              <div>
                <span style={style.fees}>
                  <del>200.tk/</del>
                </span>
                <span style={style.fees}>{video_details.fees}</span>
              </div>
              <div style={style.button}>
               <NavLink exact to="/details"> <button className="btn btn-primary">Enroll Now</button></NavLink>
              </div>
            </div>

          </div>
        </div>
        {/* Course video section start */}
      </section>
    </>
  )
}

const style = {
  course_panel: {
    padding: '10px',
  },
  course_wrapper: {
    padding: '0px',
    display:'grid',
    gridTemplateColumns:'auto auto auto auto'
  },
  course_box: {
    width: '300px',
    boxShadow: '0px 5px 10px #eee,0px 5px 10px #eee',
    background: '#fff',
    margin: '5px',
    padding: '10px',
    cursor: 'pointer',
  },
  course_img: {
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    padding: '10px',
  },
  title: {
    paddingTop: '10px',
    fontSize:'18px',
    textTransform: 'capitalize',
    display:'inline-block',
    width:'100%'
  },
  student: {
    fontSize: '16px',
    textTransform: 'capitalize',
    margin: '5px',
    color: '#000',
    fontWeight: '600',
  },
  fees: {
    padding: '10px 0',
    fontWeight: '900',
    margin: '0 5px',
  },
  button: {
    padding: '10px 0',
  },
}
export default Course
