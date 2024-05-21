import React from 'react'
import Profile from '../components/Profile/Profile'
import Qoute from '../components/Qoute/Qoute'
import Project from '../components/Projects/Project'
import Skills from '../components/Skills/Skills'

const Home = () => {
  return (
    <div>
      <Profile/>
      <Qoute/>
      <Project/>
      <Skills/>
    </div>
  )
}

export default Home
