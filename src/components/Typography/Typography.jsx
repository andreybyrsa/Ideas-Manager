import classNames from 'classnames'

function Typography({ className, children }) {
  const isTextProperty = className?.split('-')[0] === 'fs'

  const TypographyClassName = classNames({ 'fs-5': !isTextProperty }, className)

  return <p className={TypographyClassName}>{children}</p>
}

export default Typography
