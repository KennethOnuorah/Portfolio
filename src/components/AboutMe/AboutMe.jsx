import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import "./AboutMe.css"

const AboutMe = () => {
  const [alreadyIntersected, setAlreadyIntersected] = useState(false)
  const {ref: imagesRef, inView} = useInView({
    threshold: 0.4
  })

  useEffect(() => {
    if(!inView) return
    setAlreadyIntersected(true)
  }, [inView])

  return (
    <section className="aboutMe">
      <div className="aboutMeContainer"> 
        <div className="images" ref={imagesRef}>
          <img 
            src="/images/austin.png"
            style={{
              animation: inView ? "rightwardShift 1s forwards" : !alreadyIntersected ? '' : 'rightwardShift 1s forwards'
            }}
          />
          <img 
            src="/images/books.png"
            style={{
              animation: inView ? "rightwardShift 1s forwards 0.5s" : !alreadyIntersected ? '' : 'rightwardShift 1s forwards 1s'
            }}
          />
        </div>
        <div className="description">
          <div className="title">
            About Me
          </div>
          <div className="paragraphs">
            <div>
              I was born and raised in <span style={{fontWeight: "500"}}>Austin, Texas</span>. I pursued my higher education at <span style={{fontWeight: "500"}}>Austin Community College</span>, majoring in <span style={{fontWeight: "500"}}>computer science</span> for two years and eventually obtaining an associate's degree upon graduation.
            </div>
            <div>
              I am mainly fluent in <span style={{fontWeight: "500"}}>HTML, CSS/Sass, and JavaScript</span>. My areas of interests are designing and building websites and web applications. <span style={{fontWeight: "500"}}>React.js</span> is my preferred front-end framework/library. 
            </div>
            <div>
              Aside from coding, some other hobbies that I enjoy during my free time include...
              <ul className="hobbies" >
                <li>Drawing/creating digital artwork</li>
                <li>Playing video games</li>
                <li>Listening to music (blues, trip hop, alternative rock, and jazz)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
