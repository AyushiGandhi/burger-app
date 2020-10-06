import React from "react";
import backdropCSS from './css/Backdrop.module.css'

const Backdrop = (props) =>{
        const {setBackdrop}=  props
    return(
        <div>
             <div className={backdropCSS.Backdrop} onClick={setBackdrop} />
        </div>
    )

}

export default Backdrop