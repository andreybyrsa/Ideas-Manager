import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as Icon from 'react-feather'
import classNames from 'classnames'

import { Typography, TypographyVariants } from '@Components/Typography'
import Colors from '@Assets/styles/colors/colors'
import NavLink from '@Components/NavLink'

import useAuth from '@Hooks/useAuth'

import { removeUser } from '@Store/reducers/user/UserReducer'

import './LeftSideBar.scss'

function LeftSideBar({ className }) {
  const [currentUser] = useAuth()
  const dispatch = useDispatch()

  const LeftSidebarClassName = classNames('left-side-bar', className)

  const handleLogout = useCallback(() => {
    dispatch(removeUser())

    localStorage.removeItem('user')
  }, [dispatch])

  return (
    <div className={LeftSidebarClassName}>
      <div className="left-side-bar__content">
        <Typography
          variant={TypographyVariants['heading-1']}
          color={Colors['primary-color']}
        >
          HITS Ideas
        </Typography>

        <div className="left-side-bar__content-link">
          <NavLink
            to="/ideas"
            icon={<Icon.Menu />}
          >
            Список идей
          </NavLink>

          {currentUser?.role === 'initializer' && (
            <NavLink
              to="/add-idea"
              icon={<Icon.Plus />}
            >
              Добавить идею
            </NavLink>
          )}

          {(currentUser?.role === 'projectOffice' ||
            currentUser?.role === 'expert') && (
            <NavLink
              to="/settings"
              icon={<Icon.Settings />}
            >
              Настройки
            </NavLink>
          )}

          {currentUser?.role === 'admin' && (
              <NavLink
                to="/admin"
                icon={<Icon.User />}
              >
                Админ-панель
              </NavLink>
            ) && (
              <NavLink
                to="/notes"
                icon={<Icon.Table />}
              >
                Отчеты
              </NavLink>
            )}

          <NavLink
            icon={<Icon.LogOut />}
            onClick={handleLogout}
          >
            Выйти
          </NavLink>
        </div>
      </div>

      <Typography color={Colors['lighted-color']}>
        Высшая школа цифровых технологий 2023 <br />
        Все права защищены
      </Typography>
    </div>
  )
}

export default LeftSideBar
