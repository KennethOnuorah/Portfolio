import "./AboutMe.css"

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="aboutMeContainer">
        <div className="images">
          <img src="/images/austin.png" width={564} height={317}/>
          <img src="/images/books.png" width={568} height={289}/>
        </div>
        <div className="description">
          <div className="title">
            About Me
          </div>
          <div className="paragraphs">
            <div>
              I was born and raised in Austin, Texas. I pursued my higher education at Austin Community College, majoring in computer science for two years and eventually obtaining an associate's degree upon graduation.
            </div>
            <div>
              I am mainly fluent in HTML, CSS/SCSS, and JavaScript. My areas of interests are designing and building websites and web applications. React.js is my preferred front-end framework. 
            </div>
            <div>
              Aside from coding, some other hobbies that I enjoy during my free time include...
              <ul className="hobbies">
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
