import React from 'react'
import price from '../img/price-online.jpg'
import priceComparison from '../img/price-compare.png'


const FeeOnline = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h2 className="title has-text-centered is-spaced">
                            <span className="inline-block">
                                受講
                            </span>
                            <span className="inline-block">
                                費用
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="columns is-centered margin-top">
                    <div className="column is-6">
                        <p>
                            20週間（5ヶ月間）のブートキャンプの前に語学留学期間を追加できます。ご自身の英語レベルによって留学期間、受講授業数をお選びいただけます。
                        </p>
                        <div className="margin-top-2" />
                        <p>
                            通常価格（5ヶ月間）約100万円のIT留学コースを、現在コロナ対策特別価格にてご用意しております。
                            5ヶ月という期間は、他社と比べても少し長い期間に思われるかもしれませんが、
                            短期では本当に基本的な知識だけで終わってしまいます。
                        </p>
                        <div className="margin-top" />
                        <p>
                            卒業後のキャリアを見据え、本当に役立つスキルを基礎からしっかりと身につけていただくための6ヶ月となっています。
                        </p>
                    </div>
                    
                </div>
                <figure className="image">
                    <img className="border-radius" src={price} alt="料金" />
                </figure>
            </div>
            <div className="container margin-top-2">
                <div className="columns">
                    <div className="column">
                        <h2 className="title has-text-centered is-spaced">
                            <span className="inline-block">
                                他校のITコース
                            </span>
                            <span className="inline-block">
                                と比べてみると？
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="columns is-centered margin-top">
                    <div className="column is-6">
                        <p>
                            IT留学をオンラインで解放している学校はまだまだフィリピンでは少ないのが現状です。
                        </p>
                        <div className="margin-top-2" />
                        <p>
                            その中でも、当校は他の日本人向けスクールよりも低価格で実践的なカリキュラムを実現できています。
                            なぜかというと、現地のフィリピン人がアメリカ企業で活躍するためのブートキャンプと連携しサービスを提供しているからです。
                        </p>
                        <div className="margin-top" />
                        <p>
                            日本人だけでなく、世界中からプートキャンプに参加できるプラットフォームを用意することで、コストパフォーマンスの
                            高いサービスを提供しています。
                        </p>
                    </div>
                    
                </div>
                <figure className="image">
                    <img className="border-radius" src={priceComparison} alt="料金比較" />
                </figure>
            </div>
        </section>
    )
}

export default FeeOnline