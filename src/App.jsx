import NavBar from './components/NavBar/NavBar'
import Introduction from './components/Introduction/Introduction'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'

import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Introduction/>
      <AboutMe/>
      <Projects/>
      <Resume/>
    </div>
  )
}

export default App
