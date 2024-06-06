import React from 'react'
import Profile from '../components/Profile/Profile'
import Qoute from '../components/Qoute/Qoute'
import Project from '../components/Projects/Project'
import Skills from '../components/Skills/Skills'
import AboutMe from '../components/About/AboutMe'
import Contacts from '../components/Contacts/Contacts'

const Home = () => {
  return (
    <div>
      <Profile/>
      <Qoute/>
      <Project/>
      <Skills/>
      <AboutMe/>
      <Contacts/>
    </div>
  )
}

export default Home
