import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="about_img" className='about-img' />
            <img src={play_icon} alt="play_icon" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorrow's Leaders Today</h2>
            <p>Welcome to EduVision, a leading educational institution dedicated to fostering excellence, innovation, and lifelong learning. Since our inception, we have been committed to creating a vibrant, supportive environment where students can thrive academically and personally. Our institute offers a wide range of programs designed to meet the evolving demands of today’s competitive world. From cutting-edge technology to holistic personal development, our curriculum is carefully crafted to equip students with the knowledge, skills, and confidence to succeed in their chosen fields.</p>
            <p>At EduVision, we pride ourselves on our expert faculty who bring a wealth of experience from diverse industries. They are passionate educators and mentors, guiding students through both their academic and professional journeys.</p>
            <p>Beyond academics, we emphasize leadership, creativity, and problem-solving skills through extracurricular activities, internships, and hands-on projects. Our goal is to cultivate not just scholars, but well-rounded individuals who are ready to make meaningful contributions to society. Join us at EduVision and be part of a dynamic community where learning is an adventure and success is nurtured every step of the way.</p>
        </div>
    </div>
  )
}

export default About;