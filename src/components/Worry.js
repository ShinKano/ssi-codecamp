import React from 'react'
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { IntlContextConsumer } from "gatsby-plugin-intl"
//
import worry01 from '../img/worry01.png'
import worry02 from '../img/worry02.jpg'
import point01 from '../img/point01.png'
import point02 from '../img/point02.png'
import point03 from '../img/point03.png'
import point04 from '../img/point04.png'


const Worry = () => {
    const intl = useIntl()
    const points = [
        {heading: intl.formatMessage({ id: "worry-point-heading01" }),
         desc: intl.formatMessage({ id: "worry-point-desc01" }),
         image: point01},
        {heading: intl.formatMessage({ id: "worry-point-heading02" }),
         desc: intl.formatMessage({ id: "worry-point-desc02" }),
         image: point02},
        {heading: intl.formatMessage({ id: "worry-point-heading03" }),
         desc: intl.formatMessage({ id: "worry-point-desc03" }),
         image: point03},
        {heading: intl.formatMessage({ id: "worry-point-heading04" }),
         desc: intl.formatMessage({ id: "worry-point-desc04" }),
         image: point04},
    ]

    return (
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-8">
                        <h2 className="title has-text-centered is-spaced">
                            <span className="inline-block">
                                <FormattedMessage id="worry-heading01" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="worry-heading02" />
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="columns is-centered margin-top-2">
                    <div className="column is-10 columns">
                        <div className="column is-5">
                            <figure className="image">
                                <IntlContextConsumer>
                                    {({language: currentLocale }) => currentLocale == "ja" ?
                                        <img className="border-radius" src={worry01} alt="learning steps" />
                                        :
                                        <img className="border-radius" src={worry02} alt="learning steps" />
                                    }
                                </IntlContextConsumer>
                                
                            </figure>
                        </div>
                        <div className="column is-7 max-width-1">
                            <p>
                                <FormattedMessage id="worry-desc01" />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="columns is-centered margin-top-2">
                    {points.map(point => (
                        <div className="column margin-top" key={point.heading}>
                            <figure className="image">
                                <img src={point.image} alt="point" style={{
                                    maxWidth: '60px',
                                    margin: 'auto'
                                }} />
                            </figure>
                            <h3 className="title is-5 margin-top">
                                {point.heading}
                            </h3>
                            <p>
                                {point.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Worry