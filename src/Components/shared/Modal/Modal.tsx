import React, { FC } from 'react';
import './Modal.scss';

interface IModalProps {
  children: React.ReactNode | any;
  onClose: () => void | any;
  style?: any;
  dropStyle?: any;
}

const Modal: FC<IModalProps> = ({
  children,
  onClose,
  style = {},
  dropStyle = {},
}) => {
  const backdropRef: React.RefObject<HTMLInputElement> = React.useRef(null);

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) =>
      e.code !== 'Escape' ? undefined : onClose();

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) =>
    backdropRef.current && e.target !== backdropRef.current
      ? undefined
      : onClose();

  return (
    <div
      className="modal__backrop"
      onClick={handleBackdropClick}
      ref={backdropRef}
      style={dropStyle}
    >
      <div className="modal" style={style}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
