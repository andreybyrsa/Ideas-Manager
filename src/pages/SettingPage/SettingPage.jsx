import PageLayout from '@Layouts/PageLayout'
import LeftSideBar from '@Components/LeftSideBar'
import Typography from '@Components/Typography'
import Button from '@Components/Button'
import Input from '@Components/Input'

import { useState } from 'react'

function SettingPage() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <PageLayout
      contentClassName="setting-page__content"
      leftSidebar={<LeftSideBar />}
    >
      <div>
        <div>
          <Typography className="fs-4 text-primary">Вручную</Typography>
          <Typography className="fs-4 text-primary">Файлом</Typography>
        </div>
        <div>
          <Input
            value={searchValue}
            setValue={setSearchValue}
            placeholder="Почта"
          />
          <Input
            value={searchValue}
            setValue={setSearchValue}
            placeholder="Роль"
          />
        </div>
        <Button className="btn-primary w-100">Отправить</Button>
      </div>
    </PageLayout>
  )
}

export default SettingPage
