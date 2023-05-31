import axios from 'axios'
import { HEADER_FOOTER_API } from '@constants'
import { THeaderFooter } from '@types'

export const getStaticPageProps = async () => {
  const headerFooterData = await axios.get<THeaderFooter>(`${process.env.NEXT_PUBLIC_API_HOST}${HEADER_FOOTER_API}`)

  return {
    props: { headerFooterData: headerFooterData?.data },
  }
}
