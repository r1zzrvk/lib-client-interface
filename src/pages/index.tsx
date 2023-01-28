import { FC } from 'react'
import { CategoriesBanner, CategoriesSlider, MainBanner, MobileBanner, Input, TipsBanner, Button } from '@components'
import { MobileTemplate } from '@templates'
import { CATEGORIES_BANNER } from '@constants'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const MainPage: FC = () => {
  const login = useGoogleLogin({
    onSuccess: async codeResponse => {
      const data = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          "Authorization": `Bearer ${codeResponse.access_token}`
        }
      })
    return console.log(data)
    }
  })

  return (
    <>
      <MainBanner />
      <Button onClick={() => login()}>Sign in with Google 🚀 </Button>
      <TipsBanner />
      <CategoriesBanner
        header={CATEGORIES_BANNER.header}
        subheader={CATEGORIES_BANNER.subheader}
        text={CATEGORIES_BANNER.text}
      />
      <MobileTemplate>
        <Input placeholder="Search" type="text" fluid />
        <MobileBanner content="Discounts up to 15% to all" />
        <CategoriesSlider />
      </MobileTemplate>
    </>
  )
}
export default MainPage
