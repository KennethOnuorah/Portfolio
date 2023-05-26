import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import "./Introduction.css"

const Introduction = () => {
  const [alreadyInteresected, setAlreadyIntersected] = useState(false)
  const { ref: introImageRef, inView: isElementVisible } = useInView({
    threshold: 0.8,
  })

  useEffect(() => {
    if(!isElementVisible) return
    setAlreadyIntersected(true)
  }, [isElementVisible])

  return (
    <section className='introduction'>
      <div className="innerContainer">
        <div className="greeting">
          Hello There!
          <br/>
          I'm Kenneth Onuorah
        </div>
        <div className="description">
          Front-end web developer & programmer
        </div>
        <div className="buttons">
          <button className="viewWork">
            View Work
          </button>
          <button className="contactMe">
            Contact Me
          </button>
        </div>
      </div>
      <img 
        className={`${isElementVisible ? "introImage" : !alreadyInteresected ? '' : 'introImage'}`} 
        ref={introImageRef} 
        src="/images/me.png" 
        width={540} height={420}
      />
    </section>
  )
}

export default Introduction
