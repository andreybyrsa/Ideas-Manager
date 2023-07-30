import { useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import LeftSideBar from '@Components/LeftSideBar'
import IdeaForm from '@Components/IdeaForm'
import Typography from '@Components/Typography'

import PageLayout from '@Layouts/PageLayout'

import { postIdea } from '@Store/reducers/ideas/IdeasReducer'

import './CreateIdeaPage.scss'

function CreateIdeaPage() {
  const ideaError = useSelector((state) => state.MessagesReducer.error)
  const ideaSuccess = useSelector((state) => state.MessagesReducer.success)

  const handleSubmit = useCallback((idea) => postIdea(idea), [])

  if (ideaSuccess) {
    return <Navigate to="/ideas" />
  }

  return (
    <PageLayout
      contentClassName="create-idea-page__content"
      leftSidebar={<LeftSideBar />}
    >
      <Typography className="fs-2 text-primary">Создание идеи</Typography>

      <IdeaForm onSubmit={handleSubmit} />

      {ideaError && (
        <Typography className="text-danger">{ideaError}</Typography>
      )}
    </PageLayout>
  )
}

export default CreateIdeaPage
