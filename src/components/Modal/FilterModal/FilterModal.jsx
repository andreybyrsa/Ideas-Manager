import { useCallback } from 'react'
import classNames from 'classnames'
import { X } from 'react-feather'

import { Typography } from '@Components/Typography'
import ModalLayout from '../ModalLayout'

import './FilterModal.scss'

const filters = [
  { id: 0, text: 'Фильтровать по дате' },
  { id: 1, text: 'Фильтровать по рейтингу' },
  { id: 2, text: 'Фильтровать по риску' },
]

function FilterModal({ className, isOpen, setIsOpen }) {
  const FilterModalClassName = classNames(
    'filter-modal',
    { 'filter-modal--opened': isOpen },
    className,
  )

  const closeFilterModal = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  return (
    <ModalLayout
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className={FilterModalClassName}>
        <X
          className="filter-modal__close-button"
          size={32}
          onClick={closeFilterModal}
        />
        {filters.map((currentFilter) => (
          <div
            key={currentFilter.id}
            className="filter-modal__option"
          >
            <input type="checkbox" />
            <Typography>{currentFilter.text}</Typography>
          </div>
        ))}
      </div>
    </ModalLayout>
  )
}

export default FilterModal
