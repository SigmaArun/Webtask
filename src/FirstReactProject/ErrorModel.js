import React from "react";
import  ReactDOM  from "react-dom";
import Card from "./Card";

import "./ErrorModel.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};
const ModalOverlay = (props) => {
  return (
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
  );
};
const ErrorModel = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};
export default ErrorModel;
