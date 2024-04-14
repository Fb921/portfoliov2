import React, {useEffect, useState} from 'react';
import './BooleanRangeInput.css';

// @params value :  can be either true or false
// @params setValue : method that allow the change of value
export default function BooleanRangeInput({setValue,value,labelTrue,labelFalse,id}){
    return (
        <div className="booleanRangeInput_container" id={id}>
            <span className="booleanRangeInput_label">{labelTrue}</span>
            <div className="booleanRangeInput_range-element"><span className="booleanValue_element" data-value={value} onClick={()=>{setValue(!value)}}></span></div>
            <span className="booleanRangeInput_label">{labelFalse}</span>
        </div>
    )
}