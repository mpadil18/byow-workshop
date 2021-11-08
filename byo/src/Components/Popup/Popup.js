import { useState } from 'react';
import './Popup.css'

//props.children: used to access content passed from parent (Home) to child (Popup)
//props.trigger: True or False. If the popup is triggered from the parent, display content.
//                              Else, don't display the popup.

//Popup consists of a close button that allows user to close the popup, and the content that we pass into it.
export default function Popup(props) {
    //pass in boolean (true or false popup) to trigger code. If true, will show. Else, it doesn't
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=> props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}