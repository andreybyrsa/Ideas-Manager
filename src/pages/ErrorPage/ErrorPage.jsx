import Typography from '@Components/Typography'

import PageLayout from '@Layouts/PageLayout'

import './ErrorPage.scss'

function ErrorPage() {
  return (
    <PageLayout
      className="error-page"
      contentClassName="text-center"
    >
      <Typography className="fs-2 text-primary">
        Произошла ошибка, мы стараемся ее починить!
      </Typography>
    </PageLayout>
  )
}

export default ErrorPage
