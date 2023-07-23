import Colors from '@Assets/styles/colors/colors'

import { Typography, TypographyVariants } from '@Components/Typography'

import './IndexPage.scss'

function IndexPage() {
  return (
    <div className="index-page">
      <Typography className="index-page__typography">
        Это проект на React js
      </Typography>
      <Typography
        variant={TypographyVariants['heading-1']}
        color={Colors['primary-color']}
      >
        Настроенный!
      </Typography>
    </div>
  )
}

export default IndexPage
