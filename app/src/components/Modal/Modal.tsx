import Icon from 'components/Icon/Icon';
import React, { memo } from 'react';
import styles from './modal.module.css';

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
const Modal = memo<IModalProps>(({ onClose, children }) => {
  return (
    <div className={styles.overlay} onClick={() => onClose()}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={() => onClose()}>
          <Icon name="close" />
        </button>
        {children}
      </div>
    </div>
  );
});

export default Modal;
