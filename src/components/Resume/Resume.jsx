import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import resume from "../../assets/Resume.pdf"

import { AiOutlineFilePdf as PDF } from 'react-icons/ai'
import "./Resume.css"

const Resume = () => {
  const [alreadyIntersected, setAlreadyIntersected] = useState(false)
  const { ref: resumeRef, inView } = useInView({
    threshold: 0.4
  })

  useEffect(() => {
    if(!inView) return
    setAlreadyIntersected(true)
  }, [inView])

  return (
    <section id="resume" ref={resumeRef}>
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
      <img 
        src='/images/resume.png' 
        width={323}
        style={{
          animation: alreadyIntersected && "leftwardShift 1s forwards"
        }}
      />
    </section>
  )
}

export default Resume
