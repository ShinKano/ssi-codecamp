import React from 'react'
import styled from 'styled-components'
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
//
import bgImage from '../img/bg-online02.jpg'
import Button from '../elements/Button'
import DotsAndLines from '../components/DotsAndLines'


const BackgroundImage = styled.section`
    /* background-color: #e49356; */
    background-image: url(${bgImage});
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
            {/* <DotsAndLines /> */}

            
            <div className="container">
                <div className="columns is-vcentered is-hcentered">
                    <div className="hero-text column has-text-centered is-10">
                        <h1 className="title hero-title">
                            <span className="inline-block">ブートキャンプだから</span>
                            <span className="inline-block has-text-warning">"実装力"</span>
                            <span className="inline-block">が身に付く</span>
                            <span className="inline-block">オンラインIT留学</span>
                        </h1>
                        <h2 className="subtitle is-6 has-text-weight-bold has-text-white">
                            <span className="inline-block">
                                <FormattedMessage id="hero-subtitle04" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="hero-subtitle05" />
                            </span>
                        </h2>
                        <h2 className="subtitle has-text-white">
                            
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