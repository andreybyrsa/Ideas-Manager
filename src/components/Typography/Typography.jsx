import classNames from 'classnames'

import './Typography.scss'

function Typography({ className, variant = 'regular-18', color, children }) {
  const TypographyClassName = classNames(
    'typography',
    `typography--${variant}`,
    className,
  )
  const typographyStyles = {}

  if (color) {
    typographyStyles.color = color
  }

  return (
    <p
      className={TypographyClassName}
      style={typographyStyles}
    >
      {children}
    </p>
  )
}

export default Typography
