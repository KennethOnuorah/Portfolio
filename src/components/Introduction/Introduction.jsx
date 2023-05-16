import "./Introduction.css"

const Introduction = () => {
  return (
    <section className='introduction'>
      <div className="innerContainer">
        <div className="greeting">
          Hello There! 👋
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
      <img src="/images/me.png" width={540} height={420}/>
    </section>
  )
}

export default Introduction
