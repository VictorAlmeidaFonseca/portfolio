import React from 'react'
import { FiInstagram, FiTwitter, FiLinkedin, FiBold } from 'react-icons/fi'
import { GoMarkGithub } from 'react-icons/go'
import Avatar from  '../../../assets/foto-perfil.jpg'
import './styles.css'

const socialMediasLinks = {
  instagram: "https://www.instagram.com/victor_a_fonseca/",
  twitter: "https://twitter.com/fonsecaalmeida1",
  linkedin: "https://www.linkedin.com/in/victor-a-fonseca/",
  github:"https://github.com/VictorAlmeidaFonseca?tab=repositories"

}
 
const Item = (props) => {
  return <li className="item">{props.item}</li>
}

const Description = (props) => {
  return (
    <div className="header__description">
      <div className="header__description__avatar">
        <img className="avatar" src={Avatar} alt=""/>
      </div>
      <div className="header__description__content">
      <div className="header__description__name">{props.name}</div>
      <div className="header__description__job">{props.job}</div>
        <nav className="header__description__social_medias">
          <ul className="social_medias_list">
            <a href={socialMediasLinks.instagram}
               target="_blank"
               rel="noopener noreferrer">
              <Item item={<FiInstagram size={26}/>} />
            </a>
            <a href={socialMediasLinks.twitter}
               target="_blank"
               rel="noopener noreferrer">
              <Item item={<FiTwitter size={26} />} />
            </a>
            <a href={socialMediasLinks.linkedin}
               target="_blank"
               rel="noopener noreferrer"> 
              <Item item={<FiLinkedin size={26} />} />
            </a>
            <a href={socialMediasLinks.github}
               target="_blank"
               rel="noopener noreferrer">
              <Item item={<GoMarkGithub size={26} />} />
            </a>
          </ul>
        </nav>
      </div>
    </div>
    )
}

export default Description