import axios from 'axios'
import { THeaderFooter } from '@types'
import { FOOTER_API, HEADER_API } from '@constants'

export const getStaticPageProps = async () => {
  const headerData = await axios.get<Pick<THeaderFooter, 'header'>>(`${process.env.NEXT_PUBLIC_API_HOST}${HEADER_API}`)
  const footerData = await axios.get<Pick<THeaderFooter, 'footer'>>(`${process.env.NEXT_PUBLIC_API_HOST}${FOOTER_API}`)

  return {
    props: {
      headerFooterData: {
        header: headerData?.data,
        footer: footerData?.data,
      },
    },
  }
}
