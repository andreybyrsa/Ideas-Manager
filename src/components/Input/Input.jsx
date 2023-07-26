import { memo, useCallback } from 'react'

import classNames from 'classnames'

import './Input.scss'

const Input = memo(function Input({
  className,
  type = 'text',
  value,
  setValue,
  placeholder,
}) {
  const InputClassName = classNames('input', className)

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value)
    },
    [setValue],
  )

  return (
    <input
      type={type}
      className={InputClassName}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
})

export default Input
