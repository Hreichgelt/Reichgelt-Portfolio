// react banner for portfolio when migrating for heroku to GHP

import React from "react";
import { ReactDOM } from "react";
import "./styles/banner.css"


const Banner = () => {
    return (
        <div className='bannercontainer'>
            <h1>Notice: Some of the live sites in my project section are down for migration from Heroku to GH Pages. Thanks for your patience! </h1>
        </div>
    )
}

export default Banner;