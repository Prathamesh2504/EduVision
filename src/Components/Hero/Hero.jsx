import './Hero.css'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>"Empowering Future Leaders with Excellence in Education and Innovation"</h1>
            <p>Focused on nurturing talent and critical thinking, EduVision provides a supportive and innovative environment where students can grow both academically and personally. Join us in shaping a brighter future.</p>
            <button className='btn'>Explore More <FaArrowRightLong className='arrow-icon'/></button>        
        </div>
    </div>
  )
}

export default Hero;