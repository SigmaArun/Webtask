import React from "react";
import Card from "./Card";

import './ErrorModel.css';
const ErrorModel=(props)=>{
    return(
        <div className="backdrop" onClick={props.onConfirm}>
        <Card className="modal">
             <header className="header">
                <h2 className="header h2">{props.title}</h2>
             </header>
             <div className="content">
                <p>{props.message}</p>
             </div>
             <footer className="actions"> 
                <button onClick={props.onConfirm}> Okay</button>
             </footer>

        </Card>
        </div>
    )

}
export default ErrorModel;