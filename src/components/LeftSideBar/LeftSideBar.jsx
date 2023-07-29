import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'

import logo from '@Assets/images'

import Button from '@Components/Button'
import Typography from '@Components/Typography'
import NavTab from '@Components/NavTab'

import useAuth from '@Hooks/useAuth'

import { removeUser } from '@Store/reducers/user/UserReducer'

import './LeftSideBar.scss'

function LeftSideBar({ className }) {
  const [currentUser] = useAuth()
  const dispatch = useDispatch()

  const LeftSidebarClassName = classNames(
    'left-side-bar w-100 h-100 p-3 bg-white',
    className,
  )

  const handleLogout = useCallback(() => {
    dispatch(removeUser())

    localStorage.removeItem('user')
  }, [dispatch])

  return (
    <div className={LeftSidebarClassName}>
      <div className="left-side-bar__content w-100">
        <div className="left-side-bar__header">
          <img
            src={logo}
            alt="logo"
          />
          <Typography className="fs-2 text-primary">HITS Ideas</Typography>
        </div>

        <div className="nav nav-pills w-100 flex-column gap-3">
          <NavTab
            to="/ideas"
            iconName="bi bi-list"
          >
            Список идей
          </NavTab>

          {currentUser?.role === 'initializer' && (
            <NavTab
              to="/add-idea"
              iconName="bi bi-plus-lg"
            >
              Добавить идею
            </NavTab>
          )}

          {(currentUser?.role === 'admin' ||
            currentUser?.role === 'projectOffice') && (
            <NavTab
              to="/setting"
              iconName="bi bi-gear"
            >
              Найстройки
            </NavTab>
          )}

          {(currentUser?.role === 'admin' ||
            currentUser?.role === 'expert') && (
            <NavTab
              to="/notes"
              iconName="bi bi-file-earmark"
            >
              Отчеты
            </NavTab>
          )}

          <Button
            className="btn-light"
            iconName="bi bi-box-arrow-left"
            onClick={handleLogout}
          >
            Выйти
          </Button>
        </div>
      </div>

      <Typography className="text-secondary">
        Высшая школа цифровых технологий 2023 <br />
        Все права защищены
      </Typography>
    </div>
  )
}

export default LeftSideBar
