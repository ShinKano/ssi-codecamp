import React from 'react'
import styled from 'styled-components'
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
//
import bgImage from '../img/bg-1.jpg'
import Button from '../elements/Button'
import DotsAndLines from '../components/DotsAndLines'


const BackgroundImage = styled.section`
    background-color: #400;
    /* background-image: url(${bgImage}); */
    background-position: center;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
`

const HeroOnline = () => {
    const intl = useIntl()
    return (
        <BackgroundImage className="section">
            <DotsAndLines />

            
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="hero-text column has-text-centered">
                        <h1 className="title color-white is-size-1">
                            <span className="inline-block">超本気 IT留学</span>
                            <span className="inline-block">オンライン</span>
                        </h1>
                        <h2 className="subtitle is-6 color-white has-text-weight-bold">
                            <span className="inline-block">
                                <FormattedMessage id="hero-subtitle04" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="hero-subtitle05" />
                            </span>
                        </h2>
                        <h2 className="subtitle color-white">
                            
                            <span className="inline-block">
                                コロナに負けるな！&nbsp;
                            </span>
                            <span className="inline-block">
                                特別価格キャンペーン実施中！
                            </span>
                        </h2>
                        <Button 
                            to="/contact"
                            text={intl.formatMessage({ id: "button-book" })}
                        />
                    </div>
                </div>
            </div>
            
        </BackgroundImage>
    )
}

export default HeroOnline