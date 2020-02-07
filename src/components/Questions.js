import React from 'react'
import { FormattedMessage } from "gatsby-plugin-intl"
//
import countries from '../img/countries.png'

const Questions = () => {
    return (
        <section className="section has-background-lightblue">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h2 className="title has-text-centered is-size-3">
                            <span className="inline-block">
                                <FormattedMessage id="questions-heading01" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="questions-heading02" />
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="columns margin-top">
                    <div className="column">
                        <p className="title has-text-centered is-size-5">
                            <span className="inline-block">
                                <FormattedMessage id="questions-subheading01" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="questions-subheading02" />
                            </span>
                        </p>
                        <p className="title has-text-centered is-size-5">
                            <span className="inline-block">
                                <FormattedMessage id="questions-subheading03" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="questions-subheading04" />
                            </span>
                        </p>
                    </div>
                </div>

                <div className="columns is-centered margin-top">
                    <div className="column is-10 has-text-centered">
                        <p>
                            <FormattedMessage id="questions-disc01" />
                        </p>
                        <p>
                            <FormattedMessage id="questions-disc02" />
                        </p>
                        <p>
                            <FormattedMessage id="questions-disc03" />
                        </p>
                    </div>
                </div>
                
                <div className="columns">
                    <div className="column has-text-centered align-self-center">
                        <img className="border-radius" src={countries} alt="countries" />
                    </div>
                </div>

                <div className="columns margin-top is-centered">
                    <div className="column is-10">
                        <p className="title is-size-6">
                            <span className="inline-block">
                                <FormattedMessage id="questions-disc04" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="questions-disc05" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Questions