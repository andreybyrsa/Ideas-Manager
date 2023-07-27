import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLoaderData } from 'react-router-dom'
import { Plus, Filter } from 'react-feather'

import LeftSideBar from '@Components/LeftSideBar'
import FilterModal from '@Components/Modal/FilterModal'
import { Button, ButtonTypes } from '@Components/Button'
import Colors from '@Assets/styles/colors/colors'
import Idea from '@Components/Idea'
import Input from '@Components/Input'
import { Typography, TypographyVariants } from '@Components/Typography'

import PageLayout from '@Layouts/PageLayout'

import { setIdeas } from '@Store/reducers/ideas/IdeasReducer'

import './IndexPage.scss'

function IndexPage() {
  const ideas = useLoaderData()
  const dispatch = useDispatch()

  const [currentIdeas, setCurrentIdeas] = useState(ideas)
  const [searchValue, setSearchValue] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    dispatch(setIdeas(ideas))
  }, [dispatch, ideas])

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
      <div className="index-page__header">
        <Typography
          variant={TypographyVariants['heading-1']}
          color={Colors['primary-color']}
        >
          Идеи
        </Typography>
        <Button
          className="index-page__add-button"
          icon={<Plus />}
        >
          Добавить идею
        </Button>
      </div>

      <div className="index-page__search-wrapper">
        <Input
          value={searchValue}
          setValue={setSearchValue}
          onChange={handleSearch}
          placeholder="Поиск идей по названию"
        />
        <Button
          className="index-page__filter-button"
          type={ButtonTypes.secondary}
          icon={<Filter />}
          onClick={handelOpenModal}
        >
          Фильтры
        </Button>
      </div>

      <FilterModal
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      />

      <div className="index-page__ideas-wrapper">
        <div className="index-page__ideas-bar">
          <Typography>Название идеи</Typography>
          <div className="index-page__ideas-bar-dates">
            <Typography color={Colors['primary-color']}>
              Дата создания/
            </Typography>
            <Typography>редактирования</Typography>
          </div>
          <Typography>Статус</Typography>
          <Typography>Рейтинг</Typography>
          <Typography>Риск</Typography>
        </div>

        <div className="index-page__ideas">
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
