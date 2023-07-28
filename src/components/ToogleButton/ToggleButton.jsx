import classNames from 'classnames'
import { useCallback, useRef } from 'react'

import './ToggleButton.scss'

function ToggleButton({ className, value, setValue }) {
  const switcherRef = useRef(null)
  const isActive = switcherRef.current?.classList.contains(
    'toggle-button__switcher--active',
  )

  const ToggleButtonClassName = classNames(
    'toggle-button rounded-pill shadow',
    className,
  )

  const SwitcherCalssName = classNames(
    'toggle-button__switcher rounded-circle',
    {
      'toggle-button__switcher--active': value,
      'toggle-button__switcher--disabled': isActive && !value,
    },
  )

  const handleToggle = useCallback(() => {
    setValue((prevState) => !prevState)
  }, [setValue])

  return (
    <button
      type="button"
      className={ToggleButtonClassName}
      onClick={handleToggle}
    >
      <div
        className={SwitcherCalssName}
        ref={switcherRef}
      />
    </button>
  )
}

export default ToggleButton
