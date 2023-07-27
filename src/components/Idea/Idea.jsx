import classNames from 'classnames'

import Colors from '@Assets/styles/colors/colors'

import { Typography } from '@Components/Typography'

import getCurrentDate from '@Utils/getCurrentDate'

import './Idea.scss'

function Idea({ className, idea }) {
  const IdeaClassName = classNames('idea', className)

  const getRatingColor = (rating) => {
    if (rating >= 4.0) {
      return Colors['success-color']
    }
    if (rating < 4.0 && rating >= 3.0) {
      return Colors['warning-color']
    }
    return Colors['danger-color']
  }

  const getRiskColor = (risk) => {
    if (risk <= 0.2) {
      return Colors['success-color']
    }
    if (risk > 0.2 && risk <= 0.4) {
      return Colors['warning-color']
    }
    if (risk > 0.4 && risk <= 0.6) {
      return Colors['medium-color']
    }
    return Colors['danger-color']
  }

  return (
    <div className={IdeaClassName}>
      <Typography
        className="idea__name"
        color={Colors['primary-color']}
      >
        {idea.name}
      </Typography>
      <div className="idea__dates">
        <Typography>{getCurrentDate(idea.time_create)}</Typography>
        {idea.time_create !== idea.time_update && (
          <Typography>{getCurrentDate(idea.time_update)}</Typography>
        )}
      </div>
      <Typography color={Colors['primary-color']}>{idea.status}</Typography>
      <Typography color={getRatingColor(idea.rating)}>{idea.rating}</Typography>
      <Typography color={getRiskColor(idea.risk)}>{idea.risk}</Typography>
    </div>
  )
}

export default Idea
