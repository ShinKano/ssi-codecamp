import React from 'react'
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
//
import Button from '../elements/Button'

const Scholarship = () => {
    const intl = useIntl()

    return (
        <section className="section has-background-lightblue">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-8">
                        <h2 className="title is-spaced">
                            <span className="inline-block">
                                <FormattedMessage id="scolarship-heading01" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="scolarship-heading02" />
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="columns is-centered margin-top">
                    <div className="column is-8">
                        <p>
                            <FormattedMessage id="scolarship-desc01" />
                        </p>
                        <p>
                            <FormattedMessage id="scolarship-desc02" />
                        </p>
                    </div>
                </div>
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

export default Scholarship