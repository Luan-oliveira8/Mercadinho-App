export interface GenericModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  closeModal?: () => void;
  subimitModal?: () => void;
  size?: string;
  titleModal?: string;
  hidenButtonCancel?: boolean;
  hidenButtonSubmit?: boolean;
}
