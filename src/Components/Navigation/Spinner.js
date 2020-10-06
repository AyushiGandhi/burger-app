import React from "react";
import './css/Spinner.css';
import Aux from "../../Hoc/Aux";

const Spinner = () => (
    <Aux>
        <h1 align={'center'}>Loading...</h1>
        <div className="loader"/>
    </Aux>)
export default Spinner;
