import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Card from "./Card/Card"
import projectCards from "../../helpers/projectCards"

import "./Projects.css"

const Projects = () => {
  const [alreadyIntersected, setAlreadyIntersected] = useState(false)
  const {ref: containerRef, inView} = useInView()

  useEffect(() => {
    if(!inView) return
    setAlreadyIntersected(true)
  }, [inView])

  return (
    <section className="projects" ref={containerRef}>
      <div className="projectsContainer">
        <div className="title">
          Projects
          <div className="subtitle">
            Some projects I've worked on in the past
          </div>
        </div>
        <div className="projectCards">
          {alreadyIntersected &&
            projectCards.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                description={card.description}
                image={card.image}
                tags={card.tags}
                view={card.view}
                github={card.github}
                animation={`${index % 2 == 0 ? "rightward" : "leftward"}Shift 1s forwards ${0.5 * index}s`}
              />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
