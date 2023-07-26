import { useDispatch } from 'react-redux'

import { NavLink, useLoaderData } from 'react-router-dom'

import Colors from '@Assets/styles/colors/colors'

import { Typography } from '@Components/Typography'

import PageLayout from '@Layouts/PageLayout'

import { setIdeas } from '@Store/reducers/ideas/IdeasReducer'

import './IndexPage.scss'

function IndexPage() {
  const ideas = useLoaderData()
  const dispatch = useDispatch()

  dispatch(setIdeas(ideas))

  return (
    <PageLayout className="index-page">
      <NavLink to="/profile">
        <Typography color={Colors['primary-color']}>
          Перейти на профиль
        </Typography>
      </NavLink>

      <div className="index-page__content">
        {ideas.map((elem) => (
          <div
            key={elem.id}
            className="index-page__ideas"
          >
            <b>{elem.name}</b>
            <span>Дата cоздания: {elem.time_create}</span>
            <span>
              Редактирование:{' '}
              {elem.time_create !== elem.time_update
                ? elem.time_update
                : 'Не редактировалось'}
            </span>
            <span>Статус: {elem.status}</span>
            <span>Рейтинг: {elem.rating}</span>
            <span>Риск: {elem.risk}</span>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export default IndexPage
