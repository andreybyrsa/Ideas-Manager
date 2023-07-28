import { memo, useCallback } from 'react'
import classNames from 'classnames'

import Typography from '@Components/Typography'

import getCurrentDate from '@Utils/getCurrentDate'

import './Idea.scss'

const Idea = memo(function Idea({ className, idea }) {
  const IdeaClassName = classNames(
    'idea w-100 px-3 py-4 text-center',
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

  return (
    <div className={IdeaClassName}>
      <Typography className="idea__name text-primary text-start">
        {idea.name}
      </Typography>
      <div className="idea__dates">
        <Typography>{getCurrentDate(idea.time_create)}</Typography>
        {idea.time_create !== idea.time_update && (
          <Typography>{getCurrentDate(idea.time_update)}</Typography>
        )}
      </div>
      <Typography className="text-primary">{idea.status}</Typography>
      <Typography className={getRatingColor(idea.rating)}>
        {idea.rating}
      </Typography>
      <Typography className={getRiskColor(idea.risk)}>{idea.risk}</Typography>
    </div>
  )
})

export default Idea
