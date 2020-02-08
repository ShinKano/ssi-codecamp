import React from 'react'
import { FormattedMessage } from "gatsby-plugin-intl"
//
import Button from '../elements/Button'
//
import baguio01 from '../img/baguio01.jpg'
import schedule from '../img/schedule.png'


const Place = () => {
    return (
        <section className="section has-background-lightblue">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h2 className="title has-text-centered is-spaced">
                            <span className="inline-block">
                                <FormattedMessage id="place-heading01" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="place-heading02" />
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="columns is-centered margin-top-2">
                    <div className="column is-10 columns reverse">
                        
                        <div className="column max-width-1">
                            <h3 className="title is-4 has-text-centered">
                                <span className="inline-block">
                                    <FormattedMessage id="place-baguio-heading01" />
                                </span>
                                <span className="inline-block">
                                    <FormattedMessage id="place-baguio-heading02" />
                                </span>
                            </h3>
                            <p>
                                <FormattedMessage id="place-baguio-disc01" />
                            </p>
                            <p>
                                <FormattedMessage id="place-baguio-disc02" />
                            </p>
                        </div>

                        <div className="column is-5">
                            <figure className="image">
                                <img className="border-radius" src={baguio01} alt="jason bruno" />
                            </figure>
                        </div>
                    </div>
                </div>

                <div className="columns is-centered margin-top-2">
                    <div className="column is-10 columns">
                        
                        

                        <div className="column max-width-1">
                            <h3 className="title is-4 has-text-centered">
                                <span className="inline-block">
                                    <FormattedMessage id="place-schedule-heading01" />
                                </span>
                                <span className="inline-block">
                                    <FormattedMessage id="place-schedule-heading02" />
                                </span>
                            </h3>
                            <p>
                                <FormattedMessage id="place-schedule-desc01" />
                            </p>
                            <p className="margin-top">
                                <FormattedMessage id="place-schedule-desc02" />
                            </p>
                            <p className="margin-top">
                                <FormattedMessage id="place-schedule-desc03" />
                            </p>
                            {/* <div className="margin-top-2 has-text-centered">
                                <Button 
                                    to="/contact"
                                    text={intl.formatMessage({ id: "button-book" })}
                                />
                            </div> */}
                    
                        </div>

                        <div className="column is-5">
                            <figure className="image">
                                <img className="border-radius" src={schedule} alt="jason bruno" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Place