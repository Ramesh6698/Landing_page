import React from 'react'
import './Contact.css'
import img from '../../images/house2.png'
const Contact = () => {
    return (
        <div className="contact_main">
            <div className="contact_content_1">
                <div className="contact_img">
                    <img src={img} alt="contact"/>
                </div>
                <div className="contactContent">
                    <div className="content1">
                       Contact us
                    </div>
                    <div className="content2">
                          Turpis facilisis tempor pulvinar in lobortis ornare magna.
                    </div>
                    <div className="content3">
                        <div className="name">
                            <input type="text" placeholder="First name"/>
                            <input type="text" placeholder="Last name"/>
                        </div>
                        <div className="name">
                            <input type="text" placeholder="Email address"/>
                            <input type="text" placeholder="Phone number"/>
                        </div>
                        <div className="description">
                            <input type="text" placeholder="Description" className="descriptionSep"/>
                        </div>
                        <div className="button">
                            <button>Get a quote</button>
                            <p>We don't sell your email and spam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact;