import { memo, useCallback, useMemo, useState } from 'react'

import classNames from 'classnames'

const Input = memo(function Input({
  className,

  id,
  type = 'text',
  value,
  setValue,
  onChange,

  label,
  isFloatLabel,
  placeholder,

  required,
  reqiredText,
}) {
  const [isRequired, setIsRequired] = useState(false)

  const InputGroupClassName = classNames(
    !isFloatLabel ? 'input-group' : 'form-floating w-100',
    { 'was-validated': isRequired },
  )
  const InputClassName = classNames('form-control form-control-lg', className)
  const LabelClassName = classNames({ 'input-group-text fs-5': !isFloatLabel })

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value)

      if (!event.target.value && required) {
        setIsRequired(true)
      }

      if (onChange) {
        onChange(event)
      }
    },
    [setValue, onChange, required],
  )

  const InputProps = useMemo(
    () => ({
      id,
      className: InputClassName,
      value,
      onChange: handleChange,
      placeholder,
      required,
    }),
    [InputClassName, handleChange, id, value, placeholder, required],
  )

  return (
    <div className={InputGroupClassName}>
      {type === 'textarea' ? (
        <textarea {...InputProps} />
      ) : (
        <input
          type={type}
          {...InputProps}
        />
      )}
      {label && (
        <label
          className={LabelClassName}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      {isRequired && <div className="invalid-feedback">{reqiredText}</div>}
    </div>
  )
})

export default Input
