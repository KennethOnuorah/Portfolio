import { AiOutlineHome as Home } from 'react-icons/ai'
import { FiUser as AboutMe } from 'react-icons/fi'
import { VscFolderLibrary as Projects } from 'react-icons/vsc'
import { CgFileDocument as Resume } from 'react-icons/cg'

import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="name">
        Kenneth Onuorah
      </div>
      <div className="links">
        <button className="home">
          <Home/>
          Home
        </button> |
        <button className="aboutMe">
          <AboutMe/>
          About Me
        </button> |
        <button className="projects">
          <Projects/>
          Projects
        </button> |
        <button className="resume">
          <Resume/>
          Resume
        </button>
      </div>
    </nav>
  )
}

export default NavBar
