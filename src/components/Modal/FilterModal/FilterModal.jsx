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
          <Typography className="fs-3 text-primary">Фильтры</Typography>
          <Button
            className="btn-close"
            onClick={closeFilterModal}
          />
        </div>

        <div className="list-group w-100">
          {filters.map((currentFilter) => (
            <div
              key={currentFilter.id}
              className={
                currentFilter.isAcitve
                  ? `${OptionClassName} active`
                  : OptionClassName
              }
              onClick={() =>
                handleClickOption(currentFilter.id, currentFilter.filter)
              }
            >
              <input
                type="checkbox"
                checked={currentFilter.isAcitve}
                readOnly
              />
              <Typography>{currentFilter.text}</Typography>
            </div>
          ))}
        </div>

        <Button
          className="btn-primary w-100 justify-content-center"
          onClick={handleResetFilter}
        >
          Отменить фильтры
        </Button>
      </div>
    </ModalLayout>
  )
}

export default FilterModal
