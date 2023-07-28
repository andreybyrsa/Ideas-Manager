import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import Typography from '@Components/Typography'

import './NavTab.scss'

function NavTab({ className, iconName, to, onClick, children }) {
  const NavTabClassName = classNames('nav-link fs-4 d-flex', className)

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
