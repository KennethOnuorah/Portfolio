import Card from "./Card/Card"
import cards from "../../helpers/projectCards"

import "./Projects.css"

const Projects = () => {

  return (
    <section className="projects">
      <div className="projectsContainer">
        <div className="title">
          Projects
          <div className="subtitle">
            Some projects I've worked on in the past
          </div>
        </div>
        <div className="projectCards">
          {cards.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              description={card.description}
              image={card.image}
              tags={card.tags}
              view={card.view}
              github={card.github}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
