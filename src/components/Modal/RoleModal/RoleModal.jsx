import { useCallback } from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import Button from '@Components/Button'
import Typography from '@Components/Typography'

import { setRole } from '@Store/reducers/user/UserReducer'

import useAuth from '@Hooks/useAuth'

import ModalLayout from '../ModalLayout'

import './RoleModal.scss'

function RoleModal({ className, isOpen, setIsOpen, isLayoutClose }) {
  const [currentUser] = useAuth()
  const dispatch = useDispatch()

  const FilterModalClassName = classNames(
    'role-modal p-3 bg-white rounded',
    { 'role-modal--opened': isOpen },
    className,
  )

  const setCurrentRole = useCallback(
    (role) => {
      dispatch(setRole(role))
    },
    [dispatch],
  )

  const Translate = (role) => {
    if (role === 'initializer') {
      return 'Инициатор'
    }
    if (role === 'projectOffice') {
      return 'Проектный офис'
    }
    if (role === 'expert') {
      return 'Эксперт'
    }
    return 'Админ'
  }

  return (
    <ModalLayout
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isLayoutClose={isLayoutClose}
    >
      <div className={FilterModalClassName}>
        <Typography className="fs-3">Доступные роли</Typography>

        {currentUser &&
          currentUser.roles.map((elem) => (
            <Button
              key={elem}
              className="w-100 justify-content-center btn-primary"
              onClick={() => setCurrentRole(elem)}
            >
              {Translate(elem)}
            </Button>
          ))}
      </div>
    </ModalLayout>
  )
}

export default RoleModal
