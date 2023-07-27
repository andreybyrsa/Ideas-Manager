import { memo, useCallback } from 'react'

import classNames from 'classnames'

import './Input.scss'

const Input = memo(function Input({
  className,
  type = 'text',
  value,
  setValue,
  onChange,
  placeholder,
}) {
  const InputClassName = classNames('input', className)

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value)

      onChange(event)
    },
    [setValue, onChange],
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
