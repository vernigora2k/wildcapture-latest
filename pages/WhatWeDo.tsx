import React, { Fragment } from 'react'
import { Contact } from '../components/Contact'
import { Expertise } from '../components/Expertise'
import { Header } from '../components/Header'
import { Partners } from '../components/Partners'
import { Pipeline } from '../components/Pipeline'

export default () => {
    return (
        <Fragment>
            <div className="container">
            <Header />
            <section className="whatwedo__banner" >
                <div className="whatwedo__layer">
                    <img className="banner-image" src={"../img/banner-homepage.jpg"} />
                    <img className="whatwedo-banner-small" src={"../img/banner-homepage-small.jpg"} />
                    <div className="banner-left-layer">
                        <div className="whatwedo__title"><span>Evolving</span> the Digital Worlds</div>
                        <div className="whatwedo__text">
                            <span>
                                Populating Virtual Production with the Most Realistic Digital Humans
                            </span>
                            <span>
                                Machine Learning Solutions for Character Functionality & Quality
                            </span>
                            <span>
                                Customized Capture Stage Design & System Architecture
                            </span>
                            <span>
                                Expertise & Forecast in the Emerging Technologies Industry 
                            </span>
                        </div>
                        <a className="whatwedo__getintouch-container" href="/#contact">
                            <button className="button whatwedo__getintouch">Get in touch</button>
                        </a>
                    </div>
                    <img className="banner-upper-layer" src={"../img/banner-whatwedo-page.png"} />
                </div>
            </section>
            <Expertise />
            <Pipeline />
            <Partners />
            <Contact />
            </div>
        </Fragment>
    )
}
