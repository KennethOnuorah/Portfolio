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
        <button>
          <Home/>
          Home
        </button> |
        <button>
          <AboutMe/>
          About Me
        </button> |
        <button>
          <Projects/>
          Projects
        </button> |
        <button>
          <Resume/>
          Resume
        </button>
      </div>
    </nav>
  )
}

export default NavBar
