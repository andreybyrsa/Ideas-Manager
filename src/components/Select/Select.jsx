import classNames from 'classnames'
import { memo, useCallback } from 'react'

import './Select.scss'

const Select = memo(function Select({ className, options, setValue }) {
  const SelectClassName = classNames('select', className)

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
