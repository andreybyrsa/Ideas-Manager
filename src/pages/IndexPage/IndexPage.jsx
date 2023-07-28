import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLoaderData } from 'react-router-dom'

import LeftSideBar from '@Components/LeftSideBar'
import FilterModal from '@Components/Modal/FilterModal'
import Button from '@Components/Button'
import Idea from '@Components/Idea'
import Input from '@Components/Input'
import Typography from '@Components/Typography'

import PageLayout from '@Layouts/PageLayout'

import { setIdeas } from '@Store/reducers/ideas/IdeasReducer'

import './IndexPage.scss'
import ToggleButton from '@Components/ToogleButton'

function IndexPage() {
  const ideas = useLoaderData()
  const dispatch = useDispatch()

  const [currentIdeas, setCurrentIdeas] = useState(ideas)
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [value, setValue] = useState(false)

  useEffect(() => {
    dispatch(setIdeas(ideas))
  }, [dispatch, ideas])

  useEffect(() => {
    let copiedIdeas = [...ideas]
    if (filter === 'status') {
      copiedIdeas = copiedIdeas.filter((idea) => idea.status === 'Утверждено')
    }
    if (filter === 'rating' || filter === 'risk') {
      copiedIdeas.sort((a, b) => {
        if (filter === 'rating') {
          return b.rating - a.rating
        }
        return a.risk - b.risk
      })
    }
    setCurrentIdeas(copiedIdeas)
  }, [filter, ideas])

  const handleSearch = useCallback(
    (event) => {
      const copiedSearchValue = event.target.value.toLowerCase().trim()
      const copiedIdeas = [...ideas]

      setCurrentIdeas(
        copiedIdeas.filter((idea) => {
          const ideaName = idea.name.toLowerCase()

          return ideaName.includes(copiedSearchValue)
        }),
      )
    },
    [ideas, setCurrentIdeas],
  )

  const handelOpenModal = useCallback(() => {
    setIsOpenModal(true)
  }, [])

  return (
    <PageLayout
      contentClassName="index-page__content"
      leftSidebar={<LeftSideBar />}
    >
      <div className="index-page__header w-100">
        <Typography className="fs-2 text-primary">Идеи</Typography>
        <Button
          className="btn-primary"
          iconName="bi bi-plus-lg"
        >
          Добавить идею
        </Button>
      </div>

      <div className="index-page__search p-3 w-100 bg-primary rounded">
        <Input
          value={searchValue}
          setValue={setSearchValue}
          onChange={handleSearch}
          placeholder="Поиск идей по названию"
        />
        <Button
          className="btn-light"
          iconName="bi bi-funnel"
          onClick={handelOpenModal}
        >
          Фильтры
        </Button>
      </div>

      <FilterModal
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        setFilter={setFilter}
      />

      <div className="index-page__ideas-wrapper w-100">
        <div className="index-page__ideas-bar px-3 w-100 text-center">
          <Typography>Название идеи</Typography>
          <div className="index-page__ideas-bar-dates">
            <Typography className="text-primary">Дата создания/</Typography>
            <Typography>редактирования</Typography>
          </div>
          <Typography>Статус</Typography>
          <Typography>Рейтинг</Typography>
          <Typography>Риск</Typography>
        </div>
        <ToggleButton
          value={value}
          setValue={setValue}
        />

        <div className="index-page__ideas w-100">
          {currentIdeas.map((currentIdea) => (
            <Idea
              key={currentIdea.id}
              idea={currentIdea}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

export default IndexPage
