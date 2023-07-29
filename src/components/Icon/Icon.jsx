import { memo } from 'react'

const Icon = memo(function Icon({ className }) {
  return <i className={className} />
})

export default Icon
