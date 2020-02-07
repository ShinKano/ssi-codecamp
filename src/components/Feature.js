import React from 'react'
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
//
import Button from '../elements/Button'
import Gallery_1_2 from '../elements/Gallery_1_2'
//
import input from '../img/input.jpg'
import teachers from '../img/teachers.jpg'
import ace from '../img/ace.jpg'
import calle01 from '../img/calle01.jpg'
import calle02 from '../img/calle02.jpg'
import calle03 from '../img/calle03.jpeg'
import calle04 from '../img/calle04.jpg'
import calle05 from '../img/calle05.jpg'
import ittools from '../img/it-tools.png'
import gloval from '../img/gloval.png'
import baguio01 from '../img/baguio01.jpg'


const Feature = () => {
    const intl = useIntl()
    return(
        <section className="section">
            <div className="container">
                <h2 className="title has-text-centered is-spaced">
                    <span className="inline-block">
                        <FormattedMessage id="feature-heading01" />
                    </span>
                    <span className="inline-block">
                        <FormattedMessage id="feature-heading02" />
                    </span>
                </h2>

                <div className="columns margin-top-2">
                    <div className="column max-width-1">
                        <h3 className="title is-4">
                            <FormattedMessage id="feature01-title" />
                        </h3>
                        <p className="title is-6">
                            <FormattedMessage id="feature01-subtitle01" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="feature01-disc01" />
                        </p>
                        <p className="title is-6 margin-top">
                            <FormattedMessage id="feature01-subtitle02" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="feature01-disc02" />
                        </p>
                    </div>
                    <div className="column is-6">
                        <Gallery_1_2
                            img1={input}
                            img2={teachers}
                            img3={ace}
                        />
                    </div>
                </div>

                <div className="margin-top-2" />

                <div className="columns reverse margin-top-2">
                    <div className="column is-6">
                        <Gallery_1_2
                            img1={calle01}
                            img2={calle02}
                            img3={calle03}
                        />
                    </div>
                    <div className="column max-width-1">
                        <h3 className="title is-4">
                            <FormattedMessage id="feature02-title" />
                        </h3>
                        <p className="title is-6">
                            <FormattedMessage id="feature02-subtitle01" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="feature02-disc01" />
                        </p>
                        <p className="title is-6 margin-top">
                            <FormattedMessage id="feature02-subtitle02" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="feature02-disc02" />
                        </p>
                    </div>
                </div>

                <div className="margin-top-2" />

                <div className="columns margin-top-2">
                    <div className="column max-width-1">
                        <h3 className="title is-4">
                            <FormattedMessage id="feature03-title" />
                        </h3>
                        <p className="title is-6">
                            <FormattedMessage id="feature03-subtitle01" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="feature03-disc01" />
                        </p>
                        <p className="title is-6 margin-top">
                            <FormattedMessage id="feature03-subtitle02" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="feature03-disc02" />
                        </p>
                    </div>
                    <div className="column is-6">
                        <img className="border-radius" src={calle04} alt="event in bootcamp" />
                    </div>
                </div>

                <div className="margin-top-2" />

                <div className="columns reverse margin-top-2">
                    <div className="column is-6 has-text-centered">
                        <img className="border-radius" src={ittools} alt="event in bootcamp" />
                    </div>

                    <div className="column max-width-1">
                        <h3 className="title is-4">
                            <FormattedMessage id="feature04-title" />
                        </h3>
                        <p className="title is-6">
                            <FormattedMessage id="feature04-subtitle01" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="feature04-disc01" />
                        </p>
                        <p className="title is-6 margin-top">
                            <FormattedMessage id="feature04-subtitle02" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="feature04-disc02" />
                        </p>
                    </div>
                </div>

                <div className="margin-top-2" />

                <div className="columns margin-top-2">
                    <div className="column max-width-1">
                        <h3 className="title is-4">
                            <FormattedMessage id="feature05-title" />
                        </h3>
                        <p className="title is-6">
                            <FormattedMessage id="feature05-subtitle01" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="feature05-disc01" />
                        </p>
                        <p className="title is-6 margin-top">
                            <FormattedMessage id="feature05-subtitle02" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="feature05-disc02" />
                        </p>
                    </div>
                    <div className="column is-6">
                        <img className="border-radius" src={gloval} alt="event in bootcamp" />
                    </div>
                </div>

                <div className="margin-top-2" />

                <div className="columns reverse margin-top-2">
                    <div className="column is-6">
                        <Gallery_1_2
                            img1={baguio01}
                            img2={calle05}
                            img3={ace}
                        />
                    </div>

                    <div className="column max-width-1">
                        <h3 className="title is-4">
                            <FormattedMessage id="feature06-title" />
                        </h3>
                        <p className="title is-6">
                            <FormattedMessage id="feature06-subtitle01" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="feature06-disc01" />
                        </p>
                        <p className="title is-6 margin-top">
                            <FormattedMessage id="feature06-subtitle02" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="feature06-disc02" />
                        </p>
                    </div>
                </div>

                <div className="margin-top-2" />

                <div className="columns margin-top-2">
                    <div className="column has-text-centered">
                        <Button 
                            to="/contact"
                            text={intl.formatMessage({ id: "button-book" })}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Feature