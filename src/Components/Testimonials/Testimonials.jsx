import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './Testimonials.css'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react';

const Testimonials = () => {
  const slider = useRef();
  let tx=0;
  const slideForward = ()=>{
    if(tx > -50) {
        tx -= 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = ()=>{
    if(tx < 0) {
        tx += 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className='testimonials'>
        <IoIosArrowBack className='back-btn' onClick={slideBackward}/>
        <IoIosArrowForward className='next-btn' onClick={slideForward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="user-1" />
                            <div>
                                <h3>Riya Kapoor</h3>
                                <span>EduVision, India</span>
                            </div>
                        </div>
                        <p>My time at EduVision has been truly transformative. The faculty are knowledgeable and always approachable, and the hands-on projects have prepared me for real-world challenges.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="user-2" />
                            <div>
                                <h3>Aryan Sharma</h3>
                                <span>EduVision, India</span>
                            </div>
                        </div>
                        <p>From day one, I felt supported and encouraged to pursue my passion. The learning environment at EduVision is dynamic, and the practical skills I’ve gained have set me up for success.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="user-3" />
                            <div>
                                <h3>Nisha Patel</h3>
                                <span>EduVision, India</span>
                            </div>
                        </div>
                        <p>EduVision has provided me with the tools and confidence to excel in my field. The combination of academic rigor and extracurricular opportunities made my experience unforgettable.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="user-4" />
                            <div>
                                <h3>Kunal Mehta</h3>
                                <span>EduVision, India</span>
                            </div>
                        </div>
                        <p>Being a part of EduVision has been an enriching experience. The personalized attention from faculty and real-world applications of lessons have truly made a difference in my learning.😃 </p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Testimonials;