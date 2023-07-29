import classNames from 'classnames'
import Button from '@Components/Button'
import './SelectRole.scss'
import Typography from '@Components/Typography'
import { useState } from 'react'

const roles = [
  { id: 0, roleName: 'initializer', role: 'Инициатор' },
  { id: 1, roleName: 'projectOffice', role: 'Проектный офис' },
  { id: 2, roleName: 'expert', role: 'Эксперт' },
  { id: 3, roleName: 'admin', role: 'Админ' },
]

function SelectRole({ className }) {
  const SelectRoleClassName = classNames('select-role w-100', className)

  const [selectRole, setSelectrole] = useState(false)

  const handleSelect = () => {
    setSelectrole((prevState) => !prevState)
  }

  return (
    <div className={SelectRoleClassName}>
      <Button
        className="btn-light w-100"
        onClick={handleSelect}
      >
        Выбрать роли
      </Button>
      {selectRole && (
        <div className="select-role__select form-control bg-white">
          {roles.map((elem) => (
            <div
              className="select-role__option"
              key={elem.id}
            >
              <input type="checkbox" />
              <Typography className="fs-5">{elem.role}</Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectRole
