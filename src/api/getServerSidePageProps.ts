import axios from 'axios'
import { THeaderFooter } from '@types'
import { FOOTER_PATH, HEADER_PATH } from '@constants'

export const getServerSidePageProps = async () => {
  const headerData = await axios.get<Pick<THeaderFooter, 'header'>>(HEADER_PATH)
  const footerData = await axios.get<Pick<THeaderFooter, 'footer'>>(FOOTER_PATH)

  return {
    props: {
      headerFooterData: {
        header: headerData?.data,
        footer: footerData?.data,
      },
    },
  }
}
