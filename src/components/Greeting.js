import React from 'react'
import Button from '../elements/Button'
import medical from '../img/svg/medical.svg'

const Greeting = () => {
    return (
        <section className="section has-background-lightblue">
            <div className="container margin-top-2">
                <div className="columns">
                    <div className="column">
                        <h2 className="title has-text-centered is-size-4">
                            <span className="inline-block">
                                新型コロナウイルス対策&nbsp;
                            </span>
                            <span className="inline-block">
                                特別キャンペーン実施中。
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="columns is-centered margin-top">
                    <div className="column is-5">
                        <figure className="image is-5by3">
                            <img className="border-radius" src={medical} alt="コロナウイルス対策" />
                        </figure>
                    </div>
                    <div className="column is-7 is-centered">
                        <h3 className="title has-text-centered is-size-5">
                            <span className="inline-block">
                                日本が、世界が、働き方の見直しを
                            </span>
                            <span className="inline-block">
                                迫られています。
                            </span>
                        </h3>
                        <div className="margin-top" />
                        <p className="subtitle is-size-6">
                            世界的な外出自粛により、テレワーク・リモートワークが
                            あらゆるビジネスに浸透しつつあります。
                            在宅勤務が基本となったアフターコロナの社会では
                            ITがこれまでより不可欠な存在となり、それを扱うことができる
                            人材の需要がますます高まっています。
                        </p>
                        
                        <div className="margin-top-2" />
                        <h3 className="title has-text-centered is-size-5">
                            <span className="inline-block">
                                留学でのみ受講可能だった授業を
                            </span>
                            <span className="inline-block">
                                オンラインで解放します。
                            </span>
                        </h3>
                        <div className="margin-top" />
                        <p className="subtitle is-size-6">
                            これまでフィリピンでのみ開講していた「英語 x プログラミンング」のカリキュラムを、
                            日本からでも受講できるよう解放します。外出自粛期間に、ご自宅からでもプログラミング学習を英語で行っていただくことで、
                            今後さらに加速するIT化、グローバル化に対応できるスキルを身につけていただけます。
                        </p>
                    </div>
                </div>
                
                <div className="columns is-centered margin-top">
                    <div className="column is-8 is-centered">
                        <h3 className="title has-text-centered is-size-5">
                            <span className="inline-block">
                                IT留学のカリキュラムや内容は
                            </span>
                            <span className="inline-block">
                                トップページからもご確認いただけます。
                            </span>
                        </h3>
                        <p className="has-text-centered margin-bottom">
                            <Button to="/" text="カリキュラムを確認" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Greeting