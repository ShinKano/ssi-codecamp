import React from 'react'
import { FormattedMessage } from "gatsby-plugin-intl"
//
import Button from '../elements/Button'
//
import fee01 from '../img/fee01.png'
import fee02 from '../img/fee02.png'
import fee03 from '../img/fee03.png'
import fee04 from '../img/fee04.png'
import fee05 from '../img/fee05.png'
import fee06 from '../img/fee06.png'
import fee07 from '../img/fee07.png'
import fee08 from '../img/fee08.png'
//
import { IntlContextConsumer } from "gatsby-plugin-intl"



const Fee = () => {
    
    const imagesJa = [
        {path: fee01},
        {path: fee02},
        {path: fee03},
        {path: fee04},
        {path: fee05},
    ]

    const imagesEn = [
        {path: fee06},
    ]
    
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h2 className="title has-text-centered is-spaced">
                            <span className="inline-block">
                                <FormattedMessage id="fee-heading01" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="fee-heading02" />
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="columns is-centered margin-top">
                    <div className="column is-8">
                        <p>
                            <FormattedMessage id="fee-desc01" />
                        </p>
                        <p>
                            <FormattedMessage id="fee-desc02" />
                        </p>
                        
                        <IntlContextConsumer>
                            {({language: currentLocale }) => currentLocale == "ja" ?
                                imagesJa.map(image => (
                                    <figure className="image margin-top" key={image.path}>
                                        <img className="" src={image.path} alt="fee table" />
                                    </figure>
                                )) :
                                imagesEn.map(image => (
                                    <figure className="image margin-top" key={image.path}>
                                        <img className="" src={image.path} alt="fee table" />
                                    </figure>
                                ))
                            }
                        </IntlContextConsumer>
                        
                        <p className="margin-top-2">
                            <FormattedMessage id="fee-desc03" />
                        </p>
                        <p className="margin-top-2">
                            <FormattedMessage id="fee-desc04" />
                        </p>
                    </div>
                </div>


                <div className="columns margin-top-2">
                    <div className="column">
                        <h3 className="title is-3 has-text-centered is-spaced">
                            <span className="inline-block">
                                <FormattedMessage id="compare-heading01" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="compare-heading02" />
                            </span>
                        </h3>
                    </div>
                </div>

                <div className="columns is-centered margin-top">
                    <div className="column is-8">
                        <p>
                            <FormattedMessage id="compare-desc01" />
                        </p>

                        <IntlContextConsumer>
                            {({language: currentLocale }) => currentLocale == "ja" ?
                                <figure className="image margin-top-2" key={fee07}>
                                    <img className="" src={fee07} alt="fee table" />
                                </figure>
                                :
                                <figure className="image margin-top-2" key={fee08}>
                                    <img className="" src={fee08} alt="fee table" />
                                </figure>
                            }
                        </IntlContextConsumer>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Fee