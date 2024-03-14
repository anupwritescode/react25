import React, { useState } from "react";
import { Children } from "react";
import './Accordion.css';
import uparrow from '../images/arrow_up_icon.png';
import downarrow from '../images/arrow_down_icon.png';

function Accordion({ children }) {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className="accordion">
            <div className="header">
                <h3 className="text">A new way to show accordion</h3>
                { !expanded && 
                    <img className="arrow" alt="down arrow" src={ downarrow } onClick={() => setExpanded(!expanded)} /> 
                } 
                {
                    expanded && 
                    <img className="arrow" alt="up arrow" src={ uparrow } onClick={() => setExpanded(!expanded)} /> 
                }
            </div>
            <div className={!expanded ? 'content content-hidden' : 'content content-shown'}>
            {
                expanded && children && Children.map(children, (child, idx) => (<div key={idx}> {child} </div>))
            }
            </div>
        </div>);
}

export default Accordion;