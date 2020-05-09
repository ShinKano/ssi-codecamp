import React from 'react'
//
import workspace from '../img/svg/shared_workspace.svg'
import researching from '../img/svg/researching.svg'
import chat from '../img/svg/chat.svg'
import conference from '../img/svg/conference.svg'
import park from '../img/svg/park.svg'

const FeaturesOnline = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="title has-text-centered is-spaced">
                    <span className="inline-block">
                        オンラインIT留学
                    </span>
                    <span className="inline-block">
                        つの特徴
                    </span>
                </h2>

                <div className="columns margin-top-2">
                    <div className="column max-width-1">
                        <h3 className="title is-4">
                        自宅や好きな場所から参加
                        </h3>
                        <p className="title is-6">
                        PCがあればどこからでも。
                        </p>
                        <p className="margin-top">
                        外出自粛期間中でも、安心して受講することができます。
                        </p>
                        <p className="title is-6 margin-top">
                        もちろん授業は英語環境
                        </p>
                        <p className="margin-top">
                        全国的にもオンラインで提供の少ない「英語でプログラミングを学ぶ」スタイルを
                        日本にいながら経験できます。
                        </p>
                    </div>
                    <div className="column is-6">
                        <figure className="image is-5by3">
                            <img className="border-radius" src={researching} alt="自宅でPC" />
                        </figure>
                    </div>
                </div>
                <div className="margin-top-2" />

                <div className="columns reverse margin-top-2">
                    <div className="column is-6">
                        <figure className="image is-5by3">
                            <img className="border-radius" src={workspace} alt="オンライン学習" />
                        </figure>
                    </div>
                    <div className="column max-width-1">
                        <h3 className="title is-4">
                            いつでも、何度でも質問OK
                        </h3>
                        <p className="title is-6">
                            講師にチャットやオンライン通話で好きなだけ質問ができます。
                        </p>
                        <p className="margin-top">
                            講師は質問の答えだけでなく、卒業後に自分で調べて解決できるよう
                            エラーへの対処方法やリサーチの手法もコーチングします。
                        </p>
                        <p className="title is-6 margin-top">
                            自習や復習もしやすい
                        </p>
                        <p className="margin-top">
                            ビデオは全て録画するので、復習しやすい。
                            チャットも同様にもちろんログが残るので、自己学習の手助けにもなります。
                        </p>
                    </div>
                </div>
                <div className="margin-top-2" />

                <div className="columns margin-top-2">
                    <div className="column max-width-1">
                        <h3 className="title is-4">
                            英語環境で学習
                        </h3>
                        <p className="title is-6">
                            21世紀の必須スキルを同時に学ぶ。
                        </p>
                        <p className="margin-top">
                            オンラインでのやりとりは全て英語の練習になります。
                            プログラミングを学習しながら、今後世界中のIT企業で働くために必須な能力が見につきます。
                        </p>
                        <p className="title is-6 margin-top">
                            エンジニアに英語は必須
                        </p>
                        <p className="margin-top">
                            エンジニアとして働く場合、日本企業であっても英語は必要です。
                            エラーの対応や、ドキュメントはほぼ英語になりますので、実務と英語は切っても切れません。
                            逆に、英語が出来ると他の日本時よりも素早い実装が可能になります。
                        </p>
                    </div>
                    <div className="column is-6">
                        <figure className="image is-5by3">
                            <img className="border-radius" src={chat} alt="英語環境" />
                        </figure>
                    </div>
                </div>
                <div className="margin-top-2" />

                <div className="columns reverse margin-top-2">
                    <div className="column is-6">
                        <figure className="image is-5by3">
                            <img className="border-radius" src={conference} alt="転職サポート" />
                        </figure>
                    </div>
                    <div className="column max-width-1">
                        <h3 className="title is-4">
                            就職・転職サポートも
                        </h3>
                        <p className="title is-6">
                            履歴書・面接対策も指導。
                        </p>
                        <p className="margin-top">
                            卒業後の就職・転職のための資料作りや面接対策もサポート。
                            あとは希望の会社に応募するだけ。
                        </p>
                        <p className="title is-6 margin-top">
                            次の将来に繋がる実績を作る。
                        </p>
                        <p className="margin-top">
                            プログラミングの基礎中の基礎から、
                            APIやデータベースのつなぎこみなど実務に近い内容も丁寧に指導します。
                            簡単なWebサイト制作だけでなく、機能をもったアプリケーションの開発を経験できます。
                        </p>
                    </div>
                </div>
                <div className="margin-top-2" />

                <div className="columns margin-top-2">
                    <div className="column max-width-1">
                        <h3 className="title is-4">
                            安心の生涯保証
                        </h3>
                        <p className="title is-6">
                            たとえ卒業後でもお助けします。
                        </p>
                        <p className="margin-top">
                            卒業生はなんどでもITブートキャンプに参加できたり、講師に質問ができます。
                            フリーランスになっても講師はいつでもあなたの相談にのってくれます。
                        </p>
                        
                    </div>
                    <div className="column is-6">
                        <figure className="image is-5by3">
                            <img className="border-radius" src={park} alt="生涯補償" />
                        </figure>
                    </div>
                </div>
                <div className="margin-top-2" />

            </div>
        </section>
    )
}

export default FeaturesOnline