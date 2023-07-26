import { NavLink, useLoaderData } from 'react-router-dom'

import Colors from '@Assets/styles/colors/colors'

import { Typography, TypographyVariants } from '@Components/Typography'

import PageLayout from '@Layouts/PageLayout'

import './IndexPage.scss'

function IndexPage() {
  const { data } = useLoaderData()

  return (
    <PageLayout className="index-page">
      <NavLink to="/profile">
        <Typography color={Colors['primary-color']}>
          Перейти на профиль
        </Typography>
      </NavLink>

      <div className="index-page__content">
        <Typography
          variant={TypographyVariants['heading-1']}
          color={Colors['primary-color']}
        >
          {data}
        </Typography>
      </div>
    </PageLayout>
  )
}

export default IndexPage
