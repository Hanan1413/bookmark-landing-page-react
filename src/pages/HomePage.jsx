import React from 'react'
import Nav from '../components/Nav/Nav'
import MobileNav from '../components/Nav/MobileNav'
import Features from '../components/features/Features'
import {tabs} from '../data'


function HomePage() {
  return (
    <div>
        <MobileNav />
        <Nav />
        <Features tabs={tabs}/>
      
    </div>
  )
}

export default HomePage
