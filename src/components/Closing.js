import React from 'react'
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
//
import Button from '../elements/Button'

const Closing = () => {
    const intl = useIntl()
    return (
        <section className="section has-background-lightblue">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-8">
                        <h2 className="title has-text-centered is-spaced">
                            <span className="inline-block">
                                <FormattedMessage id="closing-heading01" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="closing-heading02" />
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="columns is-centered margin-top-2">
                    <div className="column is-5">
                        <p className="is-spaced">
                            <span className="inline-block">
                                <FormattedMessage id="closing-desc01" />
                            </span>
                        </p>
                        <p className="title is-6 margin-top">
                            <FormattedMessage id="closing-list01" />
                        </p>
                        <p className="title is-6 margin-top">
                            <FormattedMessage id="closing-list02" />
                        </p>
                        <p className="title is-6 margin-top">
                            <FormattedMessage id="closing-list03" />
                        </p>
                        <p className="title is-6 margin-top">
                            <FormattedMessage id="closing-list04" />
                        </p>
                    </div>
                    <div className="column is-5">
                        <p className="subtitle is-6 max-width-1 is-spaced">
                            <FormattedMessage id="closing-desc02" />
                        </p>
                        <p className="subtitle is-6 max-width-1 margin-top">
                            <FormattedMessage id="closing-desc03" />
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

export default Closing
