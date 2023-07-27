import classNames from 'classnames'
import './NavLink.scss'

import { Typography, TypographyVariants } from '@Components/Typography'

function NavLink({ className, children, to, icon }) {
  const NavLinkClassName = classNames('navLink', className)

  return (
    <a
      href={to}
      className={NavLinkClassName}
    >
      {icon}
      <Typography variant={TypographyVariants['text-1']}>{children}</Typography>
    </a>
  )
}

export default NavLink
