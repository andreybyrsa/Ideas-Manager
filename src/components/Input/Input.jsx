import { memo, useCallback, useMemo } from 'react'

import classNames from 'classnames'

const Input = memo(function Input({
  className,
  type = 'text',
  value,
  setValue,
  onChange,
  placeholder,
}) {
  const InputClassName = classNames('form-control form-control-lg', className)

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value)

      if (onChange) {
        onChange(event)
      }
    },
    [setValue, onChange],
  )

  const InputProps = useMemo(
    () => ({
      className: InputClassName,
      value,
      onChange: handleChange,
      placeholder,
    }),
    [InputClassName, handleChange, placeholder, value],
  )

  return type === 'textarea' ? (
    <textarea {...InputProps} />
  ) : (
    <input
      type={type}
      {...InputProps}
    />
  )
})

export default Input
