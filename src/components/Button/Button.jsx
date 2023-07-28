import classNames from 'classnames'

function Button({ className, onClick, iconName, children }) {
  const ButtonClassName = classNames('btn btn-lg d-flex gap-1', className)

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
