import Colors from '@Assets/styles/colors/colors'

import { Typography, TypographyVariants } from '@Components/Typography'

import PageLayout from '@Layouts/PageLayout'

import './ErrorPage.scss'

function ErrorPage() {
  return (
    <PageLayout className="error-page">
      <Typography
        color={Colors['primary-color']}
        variant={TypographyVariants['heading-1']}
      >
        Произошла ошибка, мы стараемся ее починить!
      </Typography>
    </PageLayout>
  )
}

export default ErrorPage
