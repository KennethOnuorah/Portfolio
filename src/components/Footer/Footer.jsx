import { SiGithub as Github } from 'react-icons/si'

import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className="name">
        Kenneth Onuorah
      </div>
      <div className="copyright">
        Copyright © {currentYear}
      </div>
      <div className="link">
        <a className='toRepo' role='button' href='https://github.com/KennethOnuorah/Portfolio' target='_blank'>
          <Github size={25}/>
        </a>
      </div>
    </footer>
  )
}

export default Footer
