import { memo, useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'

import logo from '@Assets/images'

import Button from '@Components/Button'
import Typography from '@Components/Typography'
import NavTab from '@Components/NavTab'

import useAuth from '@Hooks/useAuth'

import { removeUser } from '@Store/reducers/user/UserReducer'

import './LeftSideBar.scss'

const navTabs = [
  { id: 0, text: 'Список идей', to: '/ideas', iconName: 'bi bi-list' },
  { id: 1, text: 'Добавить идею', to: '/add-idea', iconName: 'bi bi-plus-lg' },
  { id: 2, text: 'Настройки', to: '/settings', iconName: 'bi bi-gear' },
  { id: 3, text: 'Отчеты', to: '/notes', iconName: 'bi bi-file-earmark' },
]

const LeftSideBar = memo(function LeftSideBar({ className }) {
  const [currentUser] = useAuth()
  const dispatch = useDispatch()

  const LeftSidebarClassName = classNames(
    'left-side-bar w-100 h-100 p-3 bg-white',
    className,
  )

  const currentTabs = useMemo(
    () =>
      navTabs.filter((tab) => {
        if (currentUser?.role === 'admin') {
          return tab
        }
        if (currentUser?.role !== 'initiator') {
          return tab.text !== 'Добавить идею'
        }
        if (currentUser?.role !== 'expert') {
          return tab.text !== 'Отчеты'
        }
        return tab
      }),
    [currentUser?.role],
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
          {currentTabs.map((tab) => (
            <NavTab
              key={tab.id}
              iconName={tab.iconName}
              to={tab.to}
            >
              {tab.text}
            </NavTab>
          ))}

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
})

export default LeftSideBar
