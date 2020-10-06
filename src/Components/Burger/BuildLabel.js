import React from "react";
import labelCSS from './css/BuildLabel.module.css'

const BuildLabel = (props) => {
    const {moreBtn, lessBtn} = props

    return (

        <div className={labelCSS.BuildLabel}>
            <div className={labelCSS.label}>{props.label}</div>
            <button className={labelCSS.More} onClick={moreBtn}>More +</button>
            <button className={labelCSS.Less} onClick={lessBtn}>Less -</button>
        </div>
    )
}

export default BuildLabel;