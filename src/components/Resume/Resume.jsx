import resume from "../../assets/Resume.pdf"

import { AiOutlineFilePdf as PDF } from 'react-icons/ai'
import "./Resume.css"

const Resume = () => {
  return (
    <section className="resume">
      <div className="description">
        <div className="title">
          Resume
          <div className="subtitle">
            A resume of all of my work and experience
          </div>
        </div>
        <a className='viewResume' role='button' href={resume} target='_blank'>
          <PDF size={23}/>
          View PDF
        </a>
      </div>
      <img src='/images/resume.png' width={323}/>
    </section>
  )
}

export default Resume
