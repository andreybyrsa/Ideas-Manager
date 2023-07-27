import classNames from 'classnames'

import { Typography } from '@Components/Typography'

import './Button.scss'

function Button({ className, type = 'primary', onClick, icon, children }) {
  const ButtonClassName = classNames('button', `button--${type}`, className)

  return (
    <button
      type="button"
      className={ButtonClassName}
      onClick={onClick}
    >
      {icon}
      <Typography>{children}</Typography>
    </button>
  )
}

export default Button
