import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import Typography from '@Components/Typography'

function NavTab({ className, iconName, to, onClick, children }) {
  const NavTabClassName = classNames(
    'nav-link fs-4 d-flex align-items-center gap-1',
    className,
  )

  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${NavTabClassName} active` : `${NavTabClassName} text-dark`
      }
      to={to}
      onClick={onClick}
    >
      {iconName && <i className={iconName} />}
      <Typography>{children}</Typography>
    </NavLink>
  )
}

export default NavTab
