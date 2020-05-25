import React from 'react'
//
import Layout from '../components/Layout'
import HeroOnline from '../components/HeroOnline'
import Greeting from '../components/Greeting'
import About from '../components/About'
import Questions from '../components/Questions'
import FeaturesOnline from '../components/FeaturesOnline'
import Curriculums from '../components/Curriculums'
import JapaneseSupportOnline from '../components/JapaneseSupportOnline'
import PlaceOnline from '../components/PlaceOnline'
import FeeOnline from '../components/FeeOnline'

import Closing from '../components/Closing'

import("../../src/index.sass")

const Online = () => {
    return (
        <Layout>
            <HeroOnline />
            <Greeting />
            <About />
            <Questions />
            <FeaturesOnline />
            <Curriculums />
            <JapaneseSupportOnline />
            <PlaceOnline />
            <FeeOnline />
            {/* <Questions />
            <Trainer />
            <Fee />
            <Scholarship />
            <Worry /> */}
            <Closing />
        </Layout>
    )
}

export default Online