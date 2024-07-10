import React from 'react'
import Header from '../components/Header'
import { Banner } from '../components/Banner'
import { Collection } from '../components/Collection'
import {LatestC} from '../components/LatestC'
import { SignUp } from '../components/SignUp'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Collection/>
        <LatestC/>
        <SignUp/>
        <Footer/>
    </div>
  )
}
