import './styles.css';

import cx from 'classnames';
import { FC, useEffect, useState } from 'react';

import { Icon } from '../Icon';
import { IModal } from './types';

export const Modal: FC<IModal> = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-end md:items-center justify-center z-50"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="fixed inset-0 bg-black/70"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cx(
          'relative bg-white rounded-t-2xl md:rounded-2xl shadow-lg px-6 pb-8 pt-8 md:px-12 w-full md:max-w-[700px]',
          {
            'open-effect': isOpen,
            'open-effect-active': isOpen,
            'close-effect': !isOpen,
            'close-effect-active': !isOpen,
          }
        )}
      >
        <button
          className="absolute top-0 left-0 right-0 flex justify-center items-center w-full h-6 md:hidden cursor-pointer"
          onClick={onClose}
        >
          <span className="block w-[32px] h-[5px] rounded-sm bg-[#C0BFBF]"></span>
        </button>

        <button
          onClick={onClose}
          className="hidden md:block absolute top-6 right-5 text-2xl text-[#1A1A19] cursor-pointer"
          aria-label="Close modal"
        >
          <Icon name="x-mark" size={28} color="dark" />
        </button>
        {children}
      </div>
    </div>
  );
};
