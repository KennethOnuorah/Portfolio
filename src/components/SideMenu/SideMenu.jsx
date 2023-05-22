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
        opacity: (isMenuOpen && dimensions.width < 1180) ? 1 : 0,
        width: (isMenuOpen && dimensions.width < 1180) ? "200px" : "0px"
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
