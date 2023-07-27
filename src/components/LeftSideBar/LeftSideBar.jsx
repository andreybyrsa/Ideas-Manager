import classNames from 'classnames'

import './LeftSideBar.scss'

import { Typography, TypographyVariants } from '@Components/Typography'
import Colors from '@Assets/styles/colors/colors'
import NavLink from '@Components/NavLink'
import * as Icon from 'react-feather'
import useAuth from '@Hooks/useAuth'

function LeftSideBar({ className }) {
  const LeftSidebarClassName = classNames('left-side-bar', className)
  const [currentUser] = useAuth()

  return (
    <div className={LeftSidebarClassName}>
      <div className="left-side-bar__content">
        <Typography
          variant={TypographyVariants['heading-2']}
          color={Colors['primary-color']}
        >
          HITS Ideas
        </Typography>

        <div className="left-side-bar__content-link">
          <NavLink
            to="#"
            icon={<Icon.Menu />}
          >
            Список идей
          </NavLink>

          {currentUser?.role === 'initializer' && (
            <NavLink
              to="#"
              icon={<Icon.Plus />}
            >
              Добавить идею
            </NavLink>
          )}

          {(currentUser?.role === 'projectOffice' ||
            currentUser?.role === 'expert') && (
            <NavLink
              to="#"
              icon={<Icon.Settings />}
            >
              Настройки
            </NavLink>
          )}

          {currentUser?.role === 'admin' && (
              <NavLink
                to="#"
                icon={<Icon.User />}
              >
                Админ-панель
              </NavLink>
            ) && (
              <NavLink
                to="#"
                icon={<Icon.Table />}
              >
                Отчеты
              </NavLink>
            )}

          <NavLink
            to="#"
            icon={<Icon.LogOut />}
          >
            Выйти
          </NavLink>
        </div>
      </div>

      <Typography
        variant={TypographyVariants['text-2']}
        color={Colors['lighted-color']}
      >
        Высшая школа цифровых технологий 2023 <br />
        Все права защищены
      </Typography>
    </div>
  )
}

export default LeftSideBar
