import { useCallback } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PageLayout from '@Layouts/PageLayout'
import LeftSideBar from '@Components/LeftSideBar'
import Typography from '@Components/Typography'
import IdeaForm from '@Components/IdeaForm'

import { updateIdea } from '@Store/reducers/ideas/IdeasReducer'

import './EditIdeaPage.scss'

function EditIdeaPage() {
  const { ideaId } = useParams()
  const { items } = useSelector((state) => state.IdeasReducer.ideas)
  const currentIdea = items.find((item) => item.id.toString() === ideaId)

  const ideaError = useSelector((state) => state.MessagesReducer.error)
  const ideaSuccess = useSelector((state) => state.MessagesReducer.success)

  const handleSubmit = useCallback(
    (idea) => updateIdea({ ideaId, idea }),
    [ideaId],
  )

  if (ideaSuccess) {
    return <Navigate to="/ideas" />
  }

  return (
    <PageLayout
      contentClassName="create-idea-page__content"
      leftSidebar={<LeftSideBar />}
    >
      <Typography className="fs-2 text-primary">Редактирование идеи</Typography>

      <IdeaForm
        currentIdea={currentIdea}
        onSubmit={handleSubmit}
      />

      {ideaError && (
        <Typography className="text-danger">{ideaError}</Typography>
      )}
    </PageLayout>
  )
}

export default EditIdeaPage
