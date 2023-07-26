import classNames from 'classnames'

import Colors from '@Assets/styles/colors/colors'

import { Typography, TypographyVariants } from '@Components/Typography'

import './Button.scss'

function Button({ className, onClick, children }) {
  const ButtonClassName = classNames('button', className)

  return (
    <button
      type="button"
      className={ButtonClassName}
      onClick={onClick}
    >
      <Typography
        color={Colors['primary-color']}
        variant={TypographyVariants['text-1']}
      >
        {children}
      </Typography>
    </button>
  )
}

export default Button
