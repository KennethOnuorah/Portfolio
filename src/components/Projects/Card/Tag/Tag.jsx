import PropTypes from 'prop-types'
import "./Tag.css"

const Tag = ({ name }) => {
  return (
    <div className='tag'>
      {name}
    </div>
  )
}

Tag.propTypes = {
  name: PropTypes.string.isRequired
}

export default Tag
