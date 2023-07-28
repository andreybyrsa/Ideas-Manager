import { useCallback, useState } from 'react'
import classNames from 'classnames'

import Button from '@Components/Button'
import Typography from '@Components/Typography'
import ModalLayout from '../ModalLayout'

import './FilterModal.scss'

const modalFilters = [
  {
    id: 0,
    text: 'Только утвержденные идеи',
    filter: 'status',
    isAcitve: false,
  },
  { id: 1, text: 'Фильтровать по рейтингу', filter: 'rating', isAcitve: false },
  { id: 2, text: 'Фильтровать по риску', filter: 'risk', isAcitve: false },
]

function FilterModal({ className, isOpen, setIsOpen, setFilter }) {
  const [filters, setFilters] = useState(modalFilters)

  const closeFilterModal = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const handleClickOption = useCallback(
    (optionId, filter) => {
      const copiedFilters = [...filters].map((option) => {
        if (option.isAcitve) {
          option.isAcitve = false
        }
        if (optionId === option.id) {
          option.isAcitve = true
        }
        return option
      })

      setFilter(filter)
      setFilters(copiedFilters)
    },
    [filters, setFilter],
  )

  const handleResetFilter = useCallback(() => {
    const copiedFilters = [...filters].map((option) => {
      if (option.isAcitve) {
        option.isAcitve = false
      }

      return option
    })

    setFilter(false)
    setFilters(copiedFilters)
  }, [filters, setFilter])

  const FilterModalClassName = classNames(
    'filter-modal p-3 bg-white rounded',
    { 'filter-modal--opened': isOpen },
    className,
  )

  const OptionClassName = classNames(
    'filter-modal__option',
    'list-group-item list-group-item-action d-flex',
  )

  return (
    <ModalLayout
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className={FilterModalClassName}>
        <div className="filter-modal__header w-100">
          <Typography className="fs-3">Фильтры</Typography>
          <Button
            className="btn-close"
            onClick={closeFilterModal}
          />
        </div>

        <ul className="list-group w-100">
          {filters.map((option) => (
            <li
              key={option.id}
              className={
                option.isAcitve ? `${OptionClassName} active` : OptionClassName
              }
              onClick={() => handleClickOption(option.id, option.filter)}
            >
              <input
                type="checkbox"
                checked={option.isAcitve}
                readOnly
              />
              <Typography>{option.text}</Typography>
            </li>
          ))}
        </ul>

        <Button
          className="btn-primary w-100"
          onClick={handleResetFilter}
        >
          Отменить фильтры
        </Button>
      </div>
    </ModalLayout>
  )
}

export default FilterModal
