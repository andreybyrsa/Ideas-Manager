import { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import Button from '@Components/Button'
import Typography from '@Components/Typography'

import getCurrentDate from '@Utils/getCurrentDate'

import { deleteIdea, removeIdea } from '@Store/reducers/ideas/IdeasReducer'

import './Idea.scss'

const Idea = memo(function Idea({ className, idea, ideaUrl, isLoading }) {
  const dispatch = useDispatch()

  const IdeaClassName = classNames(
    'idea w-100 px-3 py-4 text-center border rounded-4',
    className,
  )

  const getRatingColor = useCallback((rating) => {
    if (rating >= 4.0) {
      return 'text-success'
    }
    if (rating < 4.0 && rating >= 3.0) {
      return 'text-warning'
    }
    return 'text-danger'
  }, [])

  const getRiskColor = useCallback((risk) => {
    if (risk <= 0.2) {
      return 'text-success'
    }
    if (risk > 0.2 && risk <= 0.4) {
      return 'text-warning'
    }
    if (risk > 0.4 && risk <= 0.6) {
      return 'text-secondary'
    }
    return 'text-danger'
  }, [])

  const handleDeleteIdea = useCallback(() => {
    dispatch(deleteIdea(idea.id))
    dispatch(removeIdea(idea.id))
  }, [dispatch, idea])

  return isLoading ? (
    <div className="placeholder-glow w-100">
      <span className="placeholder col-12 bg-secondary p-5 rounded-4" />
    </div>
  ) : (
    <NavLink
      className={IdeaClassName}
      to={`/edit-idea/${ideaUrl}`}
    >
      <Typography className="idea__name text-primary text-start">
        {idea.name}
      </Typography>

      <div className="idea__dates">
        <Typography>{getCurrentDate(idea.time_create)}</Typography>
        {getCurrentDate(idea.time_create) !==
          getCurrentDate(idea.time_update) && (
          <Typography>{getCurrentDate(idea.time_update)}</Typography>
        )}
      </div>

      <Typography className="text-primary">{idea.status}</Typography>
      <Typography className={getRatingColor(idea.rating)}>
        {idea.rating}
      </Typography>
      <Typography className={getRiskColor(idea.risk)}>{idea.risk}</Typography>

      <Button
        className="text-danger"
        iconName="bi bi-trash3"
        onClick={handleDeleteIdea}
      />
    </NavLink>
  )
})

export default Idea
