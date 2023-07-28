import { useCallback, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import Typography from '@Components/Typography'
import Input from '@Components/Input'
import Select from '@Components/Select'
import Button from '@Components/Button'

import { setLoginUser, setRegisterUser } from '@Store/reducers/user/UserReducer'

import './CreateUserForm.scss'

const userRoles = [
  { id: 0, value: 'initializer', text: 'Инициатор' },
  { id: 1, value: 'projectOffice', text: 'Проектный офис' },
  { id: 2, value: 'expert', text: 'Эксперт' },
  { id: 3, value: 'admin', text: 'Админ' },
]

function CreateUserForm({ className, isLogin }) {
  const dispatch = useDispatch()

  const success = useSelector((state) => state.MessagesReducer.success)
  const error = useSelector((state) => state.MessagesReducer.error)

  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('initializer')

  const handleSubmit = useCallback(() => {
    const user = {
      username,
      password,
      firstName,
      lastName,
      role,
    }

    if (isLogin) {
      return dispatch(setLoginUser(user))
    }
    return dispatch(setRegisterUser(user))
  }, [isLogin, username, firstName, lastName, password, dispatch, role])

  const currentInputs = useMemo(() => {
    const inputs = [
      {
        key: 'username',
        value: username,
        setValue: setUsername,
        placeholder: 'Введите логин',
      },
      {
        key: 'firstname',
        value: firstName,
        setValue: setFirstName,
        placeholder: 'Введите имя',
      },
      {
        key: 'lastname',
        value: lastName,
        setValue: setLastName,
        placeholder: 'Введите фамилию',
      },
      {
        key: 'password',
        type: 'password',
        value: password,
        setValue: setPassword,
        placeholder: 'Введите пароль',
      },
    ]

    if (isLogin) {
      return inputs.filter(
        (currentInput) =>
          currentInput.key !== 'firstname' && currentInput.key !== 'lastname',
      )
    }
    return inputs
  }, [isLogin, username, firstName, lastName, password])

  const CreateUserFormClassName = classNames(
    'create-user-form p-3 bg-white rounded shadow',
    className,
  )

  return (
    <div className={CreateUserFormClassName}>
      <Typography className="fs-4 text-primary">
        {isLogin ? 'Авторизация' : 'Регистрация пользователя'}
      </Typography>

      <div className="create-user-form__inputs w-100">
        {currentInputs.map((input) => (
          <Input
            key={input.key}
            type={input.type}
            value={input.value}
            setValue={input.setValue}
            placeholder={input.placeholder}
          />
        ))}

        <Select
          options={userRoles}
          setValue={setRole}
        />
      </div>

      <Button
        className="btn-primary w-100"
        onClick={handleSubmit}
      >
        {isLogin ? 'Войти' : 'Зарегистрировать'}
      </Button>

      {success && <Typography className="text-success">{success}</Typography>}
      {error && <Typography className="text-error">{error}</Typography>}
    </div>
  )
}

export default CreateUserForm
