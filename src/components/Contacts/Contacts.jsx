import { MdPhoneAndroid as Phone } from 'react-icons/md'
import { 
  SiGmail as Gmail,
  SiLinkedin as LinkedIn,
  SiGithub as Github
} from 'react-icons/si'

import "./Contacts.css"

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contactsContainer">
        <div className="title">
          Contact Me
        </div>  
        <div className="links">
          <a className="phone">
            <Phone size={50}/>
            +1 512-669-6716
          </a>
          <a className="gmail" role='button' href={'mailto:kenneth4832@gmail.com'} target='_blank'>
            <Gmail size={50}/>
            kenneth4832@gmail.com
          </a>
          <a className="linkedIn" role='button' href={'https://www.linkedin.com/in/kenneth-onuorah-64640419b/'} target='_blank'>
            <LinkedIn size={50}/>
            Profile
          </a>
          <a className="github" role='button' href={'https://github.com/KennethOnuorah'} target='_blank'>
            <Github size={50}/>
            Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacts
