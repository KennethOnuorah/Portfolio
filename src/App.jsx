import NavBar from './components/NavBar/NavBar'
import SideMenu from './components/SideMenu/SideMenu'
import Introduction from './components/Introduction/Introduction'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <SideMenu/>
      <Introduction/>
      <AboutMe/>
      <Projects/>
      <Resume/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
