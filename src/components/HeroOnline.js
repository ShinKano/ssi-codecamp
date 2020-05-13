import React from 'react'
import styled from 'styled-components'
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
//
import bgImage from '../img/bg-2.svg'
import Button from '../elements/Button'
import DotsAndLines from '../components/DotsAndLines'


const BackgroundImage = styled.section`
    /* background-color: #e49356; */
    background-image: url(${bgImage});
    background-position: right;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
`

const HeroOnline = () => {
    const intl = useIntl()
    return (
        <BackgroundImage className="section">
            {/* <DotsAndLines /> */}

            
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="hero-text column has-text-centered margin-bottom-7">
                        <h1 className="title is-size-1">
                            <span className="inline-block">超本気 IT留学</span>
                            <span className="inline-block">×オンライン</span>
                        </h1>
                        <h2 className="subtitle is-6 has-text-weight-bold">
                            <span className="inline-block">
                                <FormattedMessage id="hero-subtitle04" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="hero-subtitle05" />
                            </span>
                        </h2>
                        <h2 className="subtitle">
                            
                            <span className="inline-block">
                                コロナに負けるな！&nbsp;
                            </span>
                            <span className="inline-block">
                                特別価格キャンペーン中
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