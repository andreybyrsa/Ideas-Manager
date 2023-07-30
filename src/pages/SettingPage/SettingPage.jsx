import PageLayout from '@Layouts/PageLayout'
import LeftSideBar from '@Components/LeftSideBar'
import Typography from '@Components/Typography'
import Button from '@Components/Button'
import Input from '@Components/Input'

import './SettingPage.scss'

import { useState } from 'react'
import SelectRole from '@Components/SelectRole'

function SettingPage() {
  const [searchValue, setSearchValue] = useState('')
  const [searchValueFile, setSearchValueFile] = useState('')
  const [emailArray, setEmailArray] = useState(false)
  const [emailFile, setEmailFile] = useState(true)
  const [inputs, setInputs] = useState([])
  const [value, setValue] = useState('')

  const handleFile = () => {
    setEmailArray(false)
    setEmailFile(true)
  }

  const handleArray = () => {
    setEmailArray(true)
    setEmailFile(false)
  }

  let activeClass = ''
  let disabledClass = ''

  if (emailArray) {
    activeClass = 'fs-4 text-primary'
  } else {
    activeClass = 'fs-4'
  }

  if (emailFile) {
    disabledClass = 'fs-4 text-primary'
  } else {
    disabledClass = 'fs-4'
  }

  const AddInput = () => {
    setInputs((prevState) => [
      ...prevState,
      { value, setValue, id: inputs.length },
    ])
  }

  return (
    <PageLayout
      contentClassName="setting-page h-100"
      leftSidebar={<LeftSideBar />}
    >
      <div className="setting-page__card card card-body">
        <div className="setting-page__card-nav">
          <Button onClick={handleArray}>
            <Typography className={activeClass}>Вручную</Typography>
          </Button>
          <Button onClick={handleFile}>
            <Typography className={disabledClass}>Файлом</Typography>
          </Button>
        </div>

        {emailArray && (
          <div className="setting-page__card-data w-100">
            <div className="setting-page__card-emails w-100">
              <Input
                value={searchValue}
                setValue={setSearchValue}
                placeholder="Почта"
              />
              <Button
                onClick={AddInput}
                className="btn-primary"
                iconName="bi bi-plus-lg text-white"
              />
            </div>
            {inputs.map((e) => (
              <Input
                key={e.id}
                value={e.value}
                setValue={e.setValue}
                placeholder="Почта"
              />
            ))}
            <SelectRole />
          </div>
        )}

        {emailFile && (
          <div className="setting-page__card-data w-100">
            <div className="setting-page__card-emails w-100">
              <Input
                type="file"
                value={searchValueFile}
                setValue={setSearchValueFile}
                placeholder="Почта"
              />
            </div>
            <SelectRole />
          </div>
        )}

        <Button className="setting-page__card-button btn-primary w-100">
          Отправить
        </Button>
      </div>
    </PageLayout>
  )
}

export default SettingPage
