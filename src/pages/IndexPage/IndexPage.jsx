import { useOutletContext } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LeftSideBar from '@Components/LeftSideBar'
import Button from '@Components/Button'
import Idea from '@Components/Idea'
import NavTab from '@Components/NavTab'
import Input from '@Components/Input'
import Typography from '@Components/Typography'

import PageLayout from '@Layouts/PageLayout'

import { fetchIdeas } from '@Store/reducers/ideas/IdeasReducer'

import getMockIdeas from '@Utils/getMockIdeas'

import './IndexPage.scss'

const mockIdeas = getMockIdeas()

function IndexPage() {
  const dispatch = useDispatch()

  const contextUser = useOutletContext()

  const { items: ideas, status } = useSelector(
    (state) => state.IdeasReducer.ideas,
  )
  const isIdeasLoading = status === 'loading'

  const [currentIdeas, setCurrentIdeas] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (contextUser) {
      dispatch(fetchIdeas(contextUser.token))
    }
  }, [dispatch, contextUser])

  useEffect(() => {
    setCurrentIdeas(ideas)
  }, [ideas])

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

  return (
    <PageLayout
      contentClassName="index-page__content"
      leftSidebar={<LeftSideBar />}
    >
      <div className="index-page__header nav nav-pills w-100">
        <Typography className="fs-2 text-primary">Идеи</Typography>
        <NavTab
          iconName="bi bi-plus-lg"
          to="/add-idea"
          isActiveTab
        >
          Добавить идею
        </NavTab>
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
        >
          Фильтры
        </Button>
      </div>

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
          <Typography>Действия</Typography>
        </div>

        <div className="index-page__ideas w-100">
          {(isIdeasLoading ? mockIdeas : currentIdeas).map((idea) => (
            <Idea
              key={idea.id}
              idea={idea}
              ideaUrl={idea.id}
              isLoading={isIdeasLoading}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

export default IndexPage
