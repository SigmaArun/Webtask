
import { Fragment } from 'react';
import classes from './Modal.module.css';
import  ReactDOM  from 'react-dom';
const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>;

}

const ModalOverlay=(props)=>{  
   return(
    <div className={classes.modal} > 
        <div className={classes.content} onClick={props.onClose} >{props.children}</div> 
    </div>
  
   );
};

const portalElement=document.getElementById('overlays');

const Modal =(props)=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay onClick={props.onClose}>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    );
}
export default Modal;