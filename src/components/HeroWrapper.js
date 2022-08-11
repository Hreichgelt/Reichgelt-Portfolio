import React from "react";
import "./styles/herowrapper.css";
import forest from './assets/forest.jpg'

export default function HeroWrapper(props) {

  return (
    <div className="hero" style={{backgroundImage: `url(${forest})`}}>
      {props.children}
    </div>
  );
}
