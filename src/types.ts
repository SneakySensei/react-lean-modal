import { ANIMATIONS } from './config';

export type AnimationType = typeof ANIMATIONS[number];

export type ModalProps = {
  titleElement?: React.ReactNode;
  closeIcon?: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  enterAnimation?: AnimationType;
  exitAnimation?: AnimationType;
  onClose: () => void;
  classNames?: {
    root?: string;
    backdrop?: string;
    content?: string;
    header?: string;
    closeButton?: string;
    body?: string;
  };
};
