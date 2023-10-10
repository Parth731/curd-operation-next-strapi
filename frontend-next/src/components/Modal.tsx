import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from '@/styles/Modal.module.css';

export default function Modal({ show, onClose, children, title }: any) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href='#' onClick={handleClose}>
            <button className='btn'>Close</button>
          </a>
        </div>
        {title && <div>{title}</div>}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    const modalRoot: any = document.getElementById('modal-root');
    return ReactDOM.createPortal(modalContent, modalRoot);
  } else {
    return null;
  }
}
