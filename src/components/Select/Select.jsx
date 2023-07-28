import { memo, useCallback } from 'react'
import classNames from 'classnames'

const Select = memo(function Select({ className, options, setValue }) {
  const SelectClassName = classNames('form-select text-center', className)

  const handleSelectChange = useCallback(
    (event) => {
      setValue(event.target.value)
    },
    [setValue],
  )

  return (
    <select
      className={SelectClassName}
      onChange={handleSelectChange}
    >
      {options.map((currentOption) => (
        <option
          key={currentOption.id}
          value={currentOption.value}
        >
          {currentOption.text}
        </option>
      ))}
    </select>
  )
})

export default Select
