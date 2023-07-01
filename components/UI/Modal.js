import { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  useEffect(() => {
    if (portalElement) {
      ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      );
    }
  }, [portalElement, props.children]);

  return <Fragment>{portalElement && ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}</Fragment>;
};

export default Modal;
