import { useCallback, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import Typography from '@Components/Typography'
import Input from '@Components/Input'
import Select from '@Components/Select'
import Button from '@Components/Button'
import Icon from '@Components/Icon'

import PageLayout from '@Layouts/PageLayout'

import useAuth from '@Hooks/useAuth'

import { setLoginUser } from '@Store/reducers/user/UserReducer'

import getRoles from '@Utils/getRoles'

import './AuthPage.scss'

const userRoles = getRoles()

function AuthPage() {
  const [currentUser, localStorageUser] = useAuth()

  const dispatch = useDispatch()
  const authError = useSelector((state) => state.MessagesReducer.error)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('initializer')

  const labelIcon = useMemo(() => <Icon className="bi bi-key" />, [])

  const loginInputs = useMemo(
    () => [
      {
        id: 0,
        value: username,
        setValue: setUsername,
        label: '@',
        placeholder: 'Введите логин',
      },
      {
        id: 1,
        type: 'password',
        value: password,
        setValue: setPassword,
        label: labelIcon,
        placeholder: 'Введите пароль',
      },
    ],
    [username, password, labelIcon],
  )

  const handleSubmit = useCallback(() => {
    const user = {
      username,
      password,
      role,
    }

    return dispatch(setLoginUser(user))
  }, [dispatch, username, password, role])

  if (currentUser || localStorageUser) {
    return <Navigate to="/ideas" />
  }

  return (
    <PageLayout contentClassName="auth-page__content vh-100">
      <div className="auth-page__form p-3 rounded shadow">
        <Typography className="fs-3 text-primary">Авторизация</Typography>

        {loginInputs.map((input) => (
          <Input
            key={input.id}
            id={input.id}
            type={input.type}
            value={input.value}
            setValue={input.setValue}
            label={input.label}
            placeholder={input.placeholder}
          />
        ))}

        <Select
          options={userRoles}
          setValue={setRole}
        />

        <Button
          className="btn-primary w-100"
          onClick={handleSubmit}
        >
          Войти
        </Button>
        {authError && (
          <Typography className="text-danger">{authError}</Typography>
        )}
      </div>
    </PageLayout>
  )
}

export default AuthPage
