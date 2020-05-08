import React from 'react'
//
import Layout from '../components/Layout'
import HeroOnline from '../components/HeroOnline'
import About from '../components/About'
import Questions from '../components/Questions'
import News from '../components/News'
import Feature from '../components/Feature'
import Curriculums from '../components/Curriculums'
import Trainer from '../components/Trainer'
import Place from '../components/Place'
import Fee from '../components/Fee'
import Scholarship from '../components/Scholarship'
import Worry from '../components/Worry'
import Closing from '../components/Closing'

import("../../src/index.sass")

const Online = () => {
    return (
        <Layout>
            <HeroOnline />
            <div className="margin-top-2" />
            <About />
            {/* <Questions />
            <Feature />
            <Curriculums />
            <Trainer />
            <Place />
            <Fee />
            <Scholarship />
            <Worry />
            <Closing /> */}
        </Layout>
    )
}

export default Online