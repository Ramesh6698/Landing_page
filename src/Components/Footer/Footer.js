import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer1">
                <div className="brandName">
                   LUGAR 
                </div>
                <div className="address">
                    <i>@</i>
                    <p>2118 Thornridge Cir. Dubai UAE 35634</p>
                </div>
                <div className="address">
                    <i>&</i>
                    <p>+33 415 65356 - 9</p>
                </div>
                <div className="address">
                    <i>#</i>
                    <p>contact@lugar.com</p>
                </div>
                <div className="copyRights">
                   Copyright @ 2022 Lugar Inc. 
                </div>
            </div>
            <div className="footer2">
               <div className="head">
                    QUICK LINKS
               </div>
               <div className="list">
                   <ul >
                       <li>Home</li>
                       <li>About</li>
                       <li>Project</li>
                       <li>Contact</li>
                   </ul>
               </div>
            </div>
            <div className="footer3">
               <div className="head">
                    LEGAL LINKS
               </div>
               <div className="list">
                   <ul>
                       <li>Terms</li>
                       <li>Conditions</li>
                       <li>Policy</li>
                   </ul>
               </div>
            </div>
            <div className="footer4">
               <div className="head">
                    SOCIAL MEDIA
               </div>
               <div className="list">
                   <ul>
                       <li>Facebook</li>
                       <li>Twitter</li>
                       <li>YouTube</li>
                       <li>LinkedIn</li>
                   </ul>
               </div>
            </div>
        </div>
    )
}
export default Footer