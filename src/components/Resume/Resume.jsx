import { AiOutlineFilePdf as PDF } from 'react-icons/ai'
import "./Resume.css"

const Resume = () => {
  return (
    <section className="resume">
      <div className="resumeContainer">
        <div className="title">
          Resume
          <div className="subtitle">
            A resume of all of my work and coding experience
          </div>
        </div>
        <button>
          <PDF size={23}/>
          View PDF
        </button>
      </div>
    </section>
  )
}

export default Resume
