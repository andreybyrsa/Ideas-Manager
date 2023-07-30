import { useCallback } from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import Button from '@Components/Button'
import Typography from '@Components/Typography'

import { setRole } from '@Store/reducers/user/UserReducer'

import useAuth from '@Hooks/useAuth'

import getRoles from '@Utils/getRoles'

import ModalLayout from '../ModalLayout'

import './RoleModal.scss'

const userRoles = getRoles()

function RoleModal({ className, isOpen, setIsOpen, isLayoutClose }) {
  const [currentUser] = useAuth()
  const dispatch = useDispatch()

  const RoleModalClassName = classNames(
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

  const getTranslatedRole = (currentRole) =>
    userRoles.find((role) => role.value === currentRole).text

  return (
    <ModalLayout
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isLayoutClose={isLayoutClose}
    >
      <div className={RoleModalClassName}>
        <Typography className="fs-3">Доступные роли</Typography>

        {currentUser &&
          currentUser.roles.map((elem) => (
            <Button
              key={elem}
              className="w-100 justify-content-center btn-primary"
              onClick={() => setCurrentRole(elem)}
            >
              {getTranslatedRole(elem)}
            </Button>
          ))}
      </div>
    </ModalLayout>
  )
}

export default RoleModal
