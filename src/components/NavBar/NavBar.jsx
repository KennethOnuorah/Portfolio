import { useSelector, useDispatch } from 'react-redux'
import { toggleMenuOpen } from '../../../redux/slices/sideMenu'
import useViewportDimensions from '../../hooks/useViewportDimensions'

import { AiOutlineHome as Home } from 'react-icons/ai'
import { FiUser as AboutMe, FiMenu as OpenMenu, FiX as CloseMenu } from 'react-icons/fi'
import { VscFolderLibrary as Projects } from 'react-icons/vsc'
import { CgFileDocument as Resume } from 'react-icons/cg'

import "./NavBar.css"

const NavBar = () => {
  const isMenuOpen = useSelector(state => state.sideMenu.isOpen)
  const dispatch = useDispatch()
  const dimensions = useViewportDimensions()

  const defaultLinks = (
    <>
      <a href='#introduction'>
        <Home/>
        Home
      </a> |
      <a href='#aboutMe'>
        <AboutMe/>
        About Me
      </a> |
      <a href='#projects'>
        <Projects/>
        Projects
      </a> |
      <a href='#resume'>
        <Resume/>
        Resume
      </a>
    </>
  )
  const sideMenuButton = (
    <button
      className='sideMenuButton'
      onClick={() => dispatch(toggleMenuOpen())}
    >
      {isMenuOpen ? <CloseMenu size={25}/> : <OpenMenu size={25}/>}
    </button>
  )

  return (
    <nav className="navBar">
      <div className="name">
        Kenneth Onuorah
      </div>
      <div className="links">
        {dimensions.width >= 1180 ? defaultLinks : sideMenuButton}
      </div>
    </nav>
  )
}

export default NavBar
