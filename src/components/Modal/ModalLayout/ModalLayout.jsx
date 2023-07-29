import { useCallback } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'

import './ModalLayout.scss'

function ModalLayout({
  className,
  isOpen,
  setIsOpen,
  isLayoutClose = true,
  children,
}) {
  const ModalLayoutClassName = classNames(
    'modal-layout',
    { 'modal-layout--opened': isOpen },
    className,
  )

  const handleCloseModal = useCallback(
    (event) => {
      if (isLayoutClose && event.target.classList.contains('modal-layout')) {
        setIsOpen(false)
      }
    },
    [isLayoutClose, setIsOpen],
  )

  return createPortal(
    <div
      className={ModalLayoutClassName}
      onClick={handleCloseModal}
    >
      {isOpen && children}
    </div>,
    document.getElementById('modal-portal'),
  )
}

export default ModalLayout
