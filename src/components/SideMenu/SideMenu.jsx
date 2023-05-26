import { useSelector } from 'react-redux'
import useViewportDimensions from '../../hooks/useViewportDimensions'

import { AiOutlineHome as Home } from 'react-icons/ai'
import { FiUser as AboutMe }  from 'react-icons/fi'
import { VscFolderLibrary as Projects } from 'react-icons/vsc'
import { CgFileDocument as Resume } from 'react-icons/cg'

import "./SideMenu.css"

const SideMenu = () => {
  const isMenuOpen = useSelector(state => state.sideMenu.isOpen)
  const dimensions = useViewportDimensions()

  return (
    <aside 
      className="sideMenu"
      style={{
        boxShadow: (isMenuOpen && dimensions.width < 1180) ? "-5px 0px 20px 4px rgba(0, 0, 0, 0.35)" : "0px 0px 0px 0px transparent",
        padding: (isMenuOpen && dimensions.width < 1180) ? "20px" : "20px 0px",
        width: (isMenuOpen && dimensions.width < 1180) ? "200px" : "0px",
      }}
    >
      <div className="links">
        <button>
          <Home size={25}/> Home
        </button>
        <hr/>
        <button>
          <AboutMe size={25}/> About Me
        </button>
        <hr/>
        <button>
          <Projects size={25}/> Projects
        </button>
        <hr/>
        <button>
          <Resume size={25}/> Resume
        </button>
      </div>
    </aside>
  )
}

export default SideMenu
