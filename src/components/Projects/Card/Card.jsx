import PropTypes from 'prop-types'
import Tag from './Tag/Tag'
import { AiOutlineEye as View , AiOutlineGithub as GitHub } from 'react-icons/ai'

import "./Card.css"

const Card = ({name, description, image, tags, view, github, animation}) => {
  return (
    <article 
      className='card'
      style={{
        animation: animation
      }}
    >
      <div className="projectTitle">
        {name}
      </div>
      <div className="description">
        {description}
      </div>
      <img className='image' src={image} alt={name}/>
      <div className="tags">
        {tags.map((tag, index) => <Tag key={index} name={tag}/>)}
      </div>
      <div className="links">
        {view !== '' && 
          <a className="view" role='button' href={`http://${view}`} target='_blank'>
            <View size={23}/>
            View Project
          </a>
        }
        <a className="repo" role='button' href={`http://${github}`} target='_blank'>
          <GitHub size={23}/>
          Visit Repo
        </a>
      </div>
    </article>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
  view: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired
}

export default Card
