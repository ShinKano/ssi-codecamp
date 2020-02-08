import React from 'react'
import { navigate } from 'gatsby-link'
import { FormattedMessage } from "gatsby-plugin-intl"
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

                <div className="field">
                  <div className="control">
                    <input
                      type={'checkbox'}
                      name={'checkbox01'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={false}
                    />
                    <label className="checkbox" htmlFor={'checkbox01'}>
                        &nbsp;<FormattedMessage id="contact-checkbox01" />
                  </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      type={'checkbox'}
                      name={'checkbox02'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={false}
                    />
                    <label className="checkbox" htmlFor={'checkbox02'}>
                        &nbsp;<FormattedMessage id="contact-checkbox02" />
                  </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      type={'checkbox'}
                      name={'checkbox03'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={false}
                    />
                    <label className="checkbox" htmlFor={'checkbox03'}>
                        &nbsp;<FormattedMessage id="contact-checkbox03" />
                  </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      type={'checkbox'}
                      name={'checkbox04'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={false}
                    />
                    <label className="checkbox" htmlFor={'checkbox04'}>
                        &nbsp;<FormattedMessage id="contact-checkbox04" />
                  </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      type={'checkbox'}
                      name={'checkbox05'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={false}
                    />
                    <label className="checkbox" htmlFor={'checkbox05'}>
                        &nbsp;<FormattedMessage id="contact-checkbox05" />
                  </label>
                  </div>
                </div>

                <div className="field">
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
