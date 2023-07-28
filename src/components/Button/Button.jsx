import classNames from 'classnames'

import './Button.scss'

function Button({ className, onClick, iconName, children }) {
  const ButtonClassName = classNames('btn btn-lg d-flex', className)

  return (
    <button
      type="button"
      className={ButtonClassName}
      onClick={onClick}
    >
      {iconName && <i className={iconName} />}
      {children}
    </button>
  )
}

export default Button
