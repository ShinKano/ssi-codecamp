import React from 'react'
import { navigate } from 'gatsby-link'
import { FormattedMessage} from "gatsby-plugin-intl"
//
import Layout from '../../components/Layout'


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container margin-top-2">
            <div className="content">
              <h1><FormattedMessage id="contact-title" /></h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    <FormattedMessage id="contact-name" />
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>

                <fieldset className="fieldset">
                    <legend><FormattedMessage id="contact-checkbox-legend" /></legend>
                    {/* <p>
                        <label htmlFor={'checkbox01'}>
                            <input type="checkbox"
                                onChange={this.handleChange}
                                name={'checkbox01'} value="とりあえず詳しい資料がほしい。" />
                            <FormattedMessage id="contact-checkbox01" />
                        </label>
                    </p> */}
                    <p>
                        <label htmlFor={'checkbox02'}>
                            <input type="checkbox"
                                onChange={this.handleChange}
                                name={'checkbox02'} value="バギオってどんなところか気になる。" />
                            <FormattedMessage id="contact-checkbox02" />
                        </label>
                    </p>
                    <p>
                        <label htmlFor={'checkbox03'}>
                            <input type="checkbox"
                                onChange={this.handleChange}
                                name={'checkbox03'} value="転職へのサポートについて知りたい。" />
                            <FormattedMessage id="contact-checkbox03" />
                        </label>
                    </p>
                    <p>
                        <label htmlFor={'checkbox04'}>
                            <input type="checkbox"
                                onChange={this.handleChange}
                                name={'checkbox04'} value="学生への留学サポートについて知りたい。" />
                            <FormattedMessage id="contact-checkbox04" />
                        </label>
                    </p>
                    <p>
                        <label htmlFor={'checkbox05'}>
                            <input type="checkbox"
                                onChange={this.handleChange}
                                name={'checkbox05'} value="その他" />
                            <FormattedMessage id="contact-checkbox05" />
                        </label>
                    </p>
                </fieldset>

                {/* <div className="field">
                  <label className="label is-hidden" htmlFor={'checkbox01'}>
                        <FormattedMessage id="contact-checkbox01" />
                  </label>
                  <div className="control">
                    <input
                      type={'checkbox'}
                      name={'checkbox01'}
                      onChange={this.handleChange}
                      required={false}
                    />
                    <span>
                        &nbsp;<FormattedMessage id="contact-checkbox01" />
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label is-hidden" htmlFor={'checkbox02'}>
                        <FormattedMessage id="contact-checkbox02" />
                  </label>
                  <div className="control">
                    <input
                      type={'checkbox'}
                      name={'checkbox02'}
                      onChange={this.handleChange}
                      required={false}
                    />
                    <span>
                        &nbsp;<FormattedMessage id="contact-checkbox02" />
                    </span>
                  </div>
                </div>

                <div className="field">
                    <label className="label is-hidden" htmlFor={'checkbox03'}>
                        <FormattedMessage id="contact-checkbox03" />
                    </label>
                  <div className="control">
                    <input
                      type={'checkbox'}
                      name={'checkbox03'}
                      onChange={this.handleChange}
                      required={false}
                    />
                    <span>
                        &nbsp;<FormattedMessage id="contact-checkbox03" />
                    </span>
                  </div>
                </div>

                <div className="field">
                    <label className="label is-hidden" htmlFor={'checkbox04'}>
                        <FormattedMessage id="contact-checkbox04" />
                    </label>
                  <div className="control">
                    <input
                      type={'checkbox'}
                      name={'checkbox04'}
                      onChange={this.handleChange}
                      required={false}
                    />
                    <span>
                        &nbsp;<FormattedMessage id="contact-checkbox04" />
                    </span>
                  </div>
                </div>

                <div className="field">
                    <label className="label is-hidden" htmlFor={'checkbox05'}>
                        <FormattedMessage id="contact-checkbox05" />
                    </label>
                  <div className="control">
                    <input
                      type={'checkbox'}
                      name={'checkbox05'}
                      onChange={this.handleChange}
                      required={false}
                    />
                    <span>
                        &nbsp;<FormattedMessage id="contact-checkbox05" />
                    </span>
                  </div>
                </div> */}

                <div className="field margin-top">
                  <label className="label" htmlFor={'message'}>
                    <FormattedMessage id="contact-message" />
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={false}
                      placeholder={""}
                    />
                  </div>
                </div>

                <div className="field">
                  <button className="button is-link" type="submit">
                    <FormattedMessage id="submit" />
                  </button>
                </div>
              </form>
              
              <p className="margin-top-2">
                <FormattedMessage id="contact-desc01" />
              </p>
              <p className="margin-top-2">
                <FormattedMessage id="contact-desc02" />
              </p>
              <p>
                <FormattedMessage id="contact-desc03" />
              </p>
              <p>
                <FormattedMessage id="contact-desc04" />
              </p>
              <p>
                <FormattedMessage id="contact-desc05" />
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
