import React, { useRef } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import ReactPortal from './components/ReactPortal';

import DisableScroll from './hooks/useDisableScroll';

import { CloseIcon } from './assets/icons';

import styles from './styles.scss';

import { ModalProps, TransitionType } from './types';

const Modal = ({
  children,
  titleElement,
  closeIcon,
  isOpen,
  onClose,
  enterTransition: enterAnimation = 'zoom-in',
  exitTransition: exitAnimation = 'zoom-in',
}: ModalProps) => {
  const modalRef = useRef<HTMLElement>(null);

  const keyDownHandler: React.KeyboardEventHandler<HTMLElement> = (e) => {
    if (e.key === 'Escape') onClose();
  };

  return (
    <ReactPortal>
      <CSSTransition
        in={isOpen}
        nodeRef={modalRef}
        timeout={250}
        classNames={{
          enter: [styles.enter, styles[enterAnimation]].join(' '),
          enterActive: styles.enterActive,
          exit: [styles.exit, styles[exitAnimation]].join(' '),
          exitActive: styles.exitActive,
        }}
        unmountOnExit
        onEnter={() => modalRef.current?.focus()}
      >
        <>
          <DisableScroll />
          <section
            onKeyDown={keyDownHandler}
            ref={modalRef}
            tabIndex={0}
            className={styles.modal}
          >
            <div tabIndex={-1} className={styles.backdrop} onClick={onClose} />

            <section className={styles.content}>
              <header className={styles.header}>
                {titleElement}
                <button className={styles.closeButton} onClick={onClose}>
                  {closeIcon ? closeIcon : <CloseIcon />}
                </button>
              </header>

              <div className={styles.body}>{children}</div>
            </section>
          </section>
        </>
      </CSSTransition>
    </ReactPortal>
  );
};

export default Modal;
export { TransitionType, DisableScroll as useDisableScroll };
export { TRANSITIONS } from './config';
