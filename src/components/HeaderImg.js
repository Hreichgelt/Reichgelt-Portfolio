import React from "react";

const HeaderImg = (props) => {
    return (
        <div className="header-img">
            <div className="heading">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default HeaderImg