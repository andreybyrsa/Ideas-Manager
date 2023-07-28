import classNames from 'classnames'
import useAuth from '@Hooks/useAuth'
import { useDispatch } from 'react-redux'

import { setRole } from '@Store/reducers/user/UserReducer'
import './RoleModal.scss'
import Button from '@Components/Button'
import Typography from '@Components/Typography'

import ModalLayout from '../ModalLayout'

function RoleModal({ className, isOpen, setIsOpen }) {
  const [currentUser] = useAuth()
  const dispatch = useDispatch()

  const FilterModalClassName = classNames(
    'filter-modal p-3 bg-white rounded',
    { 'filter-modal--opened': isOpen },
    className,
  )

  const setCurrentRole = (role) => {
    dispatch(setRole(role))
  }

  const Translate = (elem) => {
    let role = elem
    if (role === 'initializer') {
      role = 'Инициатор'
    }
    if (role === 'projectOffice') {
      role = 'Проектный офис'
    }
    if (role === 'expert') {
      role = 'Эксперт'
    }
    if (role === 'admin') {
      role = 'Админ'
    }
    return role
  }

  return (
    <ModalLayout
      isOpen={isOpen}
      setIsOpen={setIsOpen}
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
