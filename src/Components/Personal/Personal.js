import React from 'react'
import './Personal.css'
import img from '../../images/personal.png'
const Personal = () => {
    return (
        <div className="personal_main">
            <div className="personal_main_content">
                <div className="personal_main1">
                Few smiles and comment
                </div>
                <div className="personal_main2">
                    Turpis facilisis tempor pulvinar in lobortis ornare magna
                </div>
            </div>
            <div className="Personal_content_2">
                <div className="personal_img">
                    <img src={img} alt="personal"/>
                </div>
                <div className="personalContent">
                    <div className="content1">
                        Dream house isn't dream anymore
                    </div>
                    <div className="content2">
                          Semper arcu mauris aliquam lacus. Massa erat vitae ultrices phareta scelerisque. Ipsum, turpis facilisis tempor pulvinar.
                    </div>
                    <div className="content3">
                        <div className="personal_name">Brooklyn Simmons</div>
                        <div className="personal_designation">Artist</div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Personal;