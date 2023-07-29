import { memo, useCallback, useMemo } from 'react'

import classNames from 'classnames'

const Input = memo(function Input({
  className,
  type = 'text',
  value,
  setValue,
  onChange,
  label,
  isFloatLabel,
  placeholder,
}) {
  const InputGroupClassName = classNames(
    !isFloatLabel ? 'input-group' : 'form-floating w-100',
  )
  const InputClassName = classNames('form-control form-control-lg', className)
  const LabelClassName = classNames({ 'input-group-text fs-5': !isFloatLabel })

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
    <div className={InputGroupClassName}>
      <input
        id="input"
        type={type}
        {...InputProps}
      />
      {label && (
        <label
          className={LabelClassName}
          htmlFor="input"
        >
          {label}
        </label>
      )}
    </div>
  )
})

export default Input
