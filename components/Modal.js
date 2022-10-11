import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from '../styles/Modal.module.css';

function Modal({ show, onClose, children, title }) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    }

    const modalContent = show ? (
        <div className={styles.modalOverlay}>
            <div className={styles.modal} >
                <div className={styles.modalHeader} >
                    <a href="#" onClick={handleClose} >X</a>
                </div>
                <div className={styles.modalBody} > {children}</div>
            </div>
        </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }

}

export default Modal;