import React from 'react'
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
//
import Button from '../elements/Button'

import schedule from '../img/schedule.png'


const PlaceOnline = () => {
    const intl = useIntl()

    return (
        <section className="section has-background-lightblue">
            <div className="container">
                

                <div className="columns">
                    <div className="column">
                        <h2 className="title has-text-centered is-spaced">
                            <span className="inline-block">
                                <FormattedMessage id="place-schedule-heading01" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="place-schedule-heading02" />
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="columns is-centered margin-top-2">
                    <div className="column is-10 columns">
                        
                        

                        <div className="column max-width-1">
                            <p>
                                コース全体のカリキュラムについては、通常のIT留学と同じ内容が受けられるよう
                                ブートキャンプ講師陣が誠心誠意オンライン対応をさせていただきます。
                                <br />
                                カリキュラムの詳しい内容は、IT留学トップページからご確認ください。
                            </p>
                            <div className="margin-top margin-bottom has-text-centered">
                                <Button 
                                    to="/"
                                    text="カリキュラムを見る"
                                />
                            </div>
                            <hr className="margin-top-2"/>
                            <p className="margin-top-2">
                                <FormattedMessage id="place-schedule-desc01" />
                            </p>
                            <p className="margin-top">
                                <FormattedMessage id="place-schedule-desc02" />
                            </p>
                            <p className="margin-top">
                                <FormattedMessage id="place-schedule-desc03" />
                            </p>
                            
                    
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

export default PlaceOnline