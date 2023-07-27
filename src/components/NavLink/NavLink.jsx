import classNames from 'classnames'
import { useLocation } from 'react-router-dom'

import './NavLink.scss'

import { Typography, TypographyVariants } from '@Components/Typography'

function NavLink({ className, children, to, icon, onClick }) {
  const location = useLocation()

  const NavLinkClassName = classNames(
    'nav-link',
    { 'nav-link--active': to === location.pathname },
    className,
  )

  return (
    <a
      href={to}
      className={NavLinkClassName}
      onClick={onClick}
    >
      {icon}
      <Typography variant={TypographyVariants['text-1']}>{children}</Typography>
    </a>
  )
}

export default NavLink
