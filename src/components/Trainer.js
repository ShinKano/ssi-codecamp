import React from 'react'
import { FormattedMessage } from "gatsby-plugin-intl"
//
import jason from '../img/jason.png'


const Trainer = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h2 className="title has-text-centered is-spaced">
                            <span className="inline-block">
                                <FormattedMessage id="support-heading01" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="support-heading02" />
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="columns is-centered margin-top-2">
                    <div className="column is-10 columns">
                        <div className="column is-5">
                            <figure className="image">
                                <img className="border-radius" src={jason} alt="jason bruno" />
                            </figure>
                        </div>
                        <div className="column is-7">
                            <h3 className="subtitle is-3 has-text-centered">Jason Bruno</h3>
                            <p>
                                <FormattedMessage id="jason-desc" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trainer