import React from 'react'
//
import Layout from '../components/Layout'
import HeroOnline from '../components/HeroOnline'
import Greeting from '../components/Greeting'
import FeaturesOnline from '../components/FeaturesOnline'
import PlaceOnline from '../components/PlaceOnline'
import FeeOnline from '../components/FeeOnline'

import Closing from '../components/Closing'

import("../../src/index.sass")

const Online = () => {
    return (
        <Layout>
            <HeroOnline />
            <Greeting />
            <FeaturesOnline />
            <PlaceOnline />
            <FeeOnline />
            {/* <Questions />
            <Curriculums />
            <Trainer />
            <Fee />
            <Scholarship />
            <Worry /> */}
            <Closing />
        </Layout>
    )
}

export default Online