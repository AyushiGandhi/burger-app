import React from "react";
import Aux from "../../Hoc/Aux";

const Input = (props) => {

    return (
        <Aux>
            <label><b>{props.name}</b></label>
            <input type="text" required
                   placeholder={`Enter ${props.name} ... `}
                   name={props.label}
                   value={props.value}
                   onChange={props.onChangeHandler}
            />
        </Aux>
    )
}


export default Input;