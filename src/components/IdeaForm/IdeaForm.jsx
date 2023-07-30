import { useState, useMemo, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@Components/Button'
import Input from '@Components/Input'

import useAuth from '@Hooks/useAuth'

import './IdeaForm.scss'

function IdeaForm({ currentIdea, onSubmit }) {
  const dispatch = useDispatch()

  const [currentUser] = useAuth()

  const [name, setName] = useState('')
  const [problem, setProblem] = useState('')
  const [solution, setSolution] = useState('')
  const [result, setResult] = useState('')

  useEffect(() => {
    if (currentIdea) {
      setName(currentIdea.name)
      setProblem(currentIdea.problem)
      setSolution(currentIdea.solution)
      setResult(currentIdea.proposed_result)
    }
  }, [currentIdea])

  const curretnInputs = useMemo(
    () => [
      {
        id: 0,
        value: name,
        setValue: setName,
        placeholder: 'Название идеи',
      },
      {
        id: 1,
        type: 'textarea',
        value: problem,
        setValue: setProblem,
        placeholder: 'Проблема, которую решает Ваша идея',
      },
      {
        id: 2,
        type: 'textarea',
        value: solution,
        setValue: setSolution,
        placeholder: 'Предлагаемое решение',
      },
      {
        id: 3,
        type: 'textarea',
        value: result,
        setValue: setResult,
        placeholder: 'Ожидаемый результат',
      },
    ],
    [name, problem, solution, result],
  )

  const handleSubmit = useCallback(() => {
    const idea = {
      initiator: currentUser.token,
      name,
      problem,
      solution,
      proposed_result: result,
    }

    return dispatch(onSubmit(idea))
  }, [currentUser.token, name, problem, solution, result, dispatch, onSubmit])

  return (
    <>
      <div className="idea-form w-50">
        {curretnInputs.map((input) => (
          <Input
            key={input.id}
            id={input.id}
            type={input.type}
            label={input.placeholder}
            value={input.value}
            setValue={input.setValue}
            placeholder={input.placeholder}
            isFloatLabel
            required
          />
        ))}
      </div>
      <Button
        className="btn-primary"
        onClick={handleSubmit}
      >
        Отправить на рассмотрение
      </Button>
    </>
  )
}

export default IdeaForm
