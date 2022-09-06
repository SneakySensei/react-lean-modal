import React, { useRef } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import ReactPortal from './components/ReactPortal';

import DisableScroll from './hooks/useDisableScroll';

import { CloseIcon } from './assets/icons';

import styles from './styles.scss';

import { ModalProps, AnimationType } from './types';

const Modal = ({
  children,
  titleElement,
  closeIcon,
  isOpen,
  onClose,
  enterAnimation = 'zoom-in',
  exitAnimation = 'zoom-in',
  classNames = {},
}: ModalProps) => {
  const modalRef = useRef<HTMLElement>(null);

  const keyDownHandler: React.KeyboardEventHandler<HTMLElement> = (e) => {
    if (e.key === 'Escape') onClose();
  };

  const {
    root = '',
    backdrop = '',
    content = '',
    header = '',
    body = '',
    closeButton = '',
  } = classNames;

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
            className={`${styles.root}${root ? ` ${root}` : ''}`}
          >
            <div
              tabIndex={-1}
              className={`${styles.backdrop}${backdrop ? ` ${backdrop}` : ''}`}
              onClick={onClose}
            />

            <section
              className={`${styles.content}${content ? ` ${content}` : ''}`}
            >
              <header
                className={`${styles.header}${header ? ` ${header}` : ''}`}
              >
                {titleElement}
                <button
                  className={`${styles.closeButton}${
                    closeButton ? ` ${closeButton}` : ''
                  }`}
                  onClick={onClose}
                >
                  {closeIcon ? closeIcon : <CloseIcon />}
                </button>
              </header>

              <div className={`${styles.body}${body ? ` ${body}` : ''}`}>
                {children}
              </div>
            </section>
          </section>
        </>
      </CSSTransition>
    </ReactPortal>
  );
};

export default Modal;
export { AnimationType, DisableScroll as useDisableScroll };
export { ANIMATIONS } from './config';
