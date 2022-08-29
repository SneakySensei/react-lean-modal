import { TRANSITIONS } from './config';

export type TransitionType = typeof TRANSITIONS[number];

export type ModalProps = {
  titleElement?: React.ReactNode;
  closeIcon?: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  enterTransition?: TransitionType;
  exitTransition?: TransitionType;
  onClose: () => void;
};
