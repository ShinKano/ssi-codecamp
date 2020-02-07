import React from 'react'
//
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Questions from '../components/Questions'
import News from '../components/News'
import Features from '../components/Features'
import Feature from '../components/Feature'
import Curriculums from '../components/Curriculums'

import("../../src/index.sass")

const Tetete = (props) => {

    // Display blog posts only for Japanese.
    const isEnglish = (props.path === "/en/") ? true : false

    return (
    <Layout>
        <Hero />
        {isEnglish ? "" : <News /> }
        <div className="margin-top-2" />
        <About />
        <Questions />
        <Feature />
        <Curriculums />
        <Features />
    </Layout>
    )
}

export default Tetete;