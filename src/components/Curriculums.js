import React from 'react'
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
//
import Button from '../elements/Button'
//
import curriculum01 from '../img/Curriculum01.png'
import curriculum02 from '../img/Curriculum02.png'
import curriculum03 from '../img/Curriculum03.png'
import curriculum04 from '../img/Curriculum04.png'



const Curriculums = () => {

    const intl = useIntl()
    const features = [
        {title: intl.formatMessage({ id: "curriculums01-title" }),
         desc : intl.formatMessage({ id: "curriculums01-desc" }),
         image: curriculum01},
        
        {title: intl.formatMessage({ id: "curriculums02-title" }),
         desc : intl.formatMessage({ id: "curriculums02-desc" }),
         image: curriculum02},
        
        {title: intl.formatMessage({ id: "curriculums03-title" }),
         desc : intl.formatMessage({ id: "curriculums03-desc" }),
         image: curriculum03},
        
        {title: intl.formatMessage({ id: "curriculums04-title" }),
         desc : intl.formatMessage({ id: "curriculums04-desc" }),
         image: curriculum04},
    ];

    const otherCurriculums = [
        {title: intl.formatMessage({ id: "other-curriculum01" })},
        {title: intl.formatMessage({ id: "other-curriculum02" })},
        {title: intl.formatMessage({ id: "other-curriculum03" })},
        {title: intl.formatMessage({ id: "other-curriculum04" })},
        {title: intl.formatMessage({ id: "other-curriculum05" })},
        {title: intl.formatMessage({ id: "other-curriculum06" })},
        {title: intl.formatMessage({ id: "other-curriculum07" })},
        {title: intl.formatMessage({ id: "other-curriculum08" })},
    ];

    return(
        <section className="section has-background-lightblue">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h2 className="title has-text-centered is-spaced">
                            <span className="inline-block">
                                <FormattedMessage id="curriculums-heading01" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="curriculums-heading02" />
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="columns is-centered margin-top">
                    <div className="column is-8">
                        <p>
                            <FormattedMessage id="curriculums-disc01" />
                        </p>
                        <p>
                            <FormattedMessage id="curriculums-disc02" />
                        </p>
                    </div>
                </div>


                <div className="columns is-centered margin-top">
                    <div className="column is-10">
                        {features.map(feature => (
                            <div className="columns margin-top" key={feature.title}>
                                <div className="column is-3">
                                <figure className="image">
                                    <img src={feature.image} alt="Placeholder image" />
                                </figure>
                                </div>
                                <div className="column">
                                <div className="margin-bottom">
                                    <p className="title is-5">{feature.title}</p>
                                </div>
                                <div className="content">
                                    {feature.desc}
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                

                <div className="columns margin-top-2">
                    <div className="column margin-top">
                        <h2 className="title is-4 has-text-centered is-spaced">
                            <span className="inline-block">
                                <FormattedMessage id="other-curriculums-heading01" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="other-curriculums-heading02" />
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="columns margin-top-2 is-centered">
                    <div className="column is-10 columns is-multiline has-background-white border-radius">
                        {otherCurriculums.map(other => (
                            <div className="column is-half">
                                <p className="title is-6 is-spaced">
                                    {other.title}
                                </p>
                            </div>
                        ))}
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

export default Curriculums