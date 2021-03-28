import '../styles/main.scss'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => <Layout children={page} />)

  return getLayout(<Component {...pageProps} />)
}