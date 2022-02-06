import '../styles/globals.css'
import { AppProps } from 'next/app'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

const progress = new ProgressBar({
  size: 4,
  color: '#FF5A5F',
  delay: 50,
  className: 'z-50',
})

Router.events.on('routeChangeStart', progress.start)
Router.events.off('routeChangeComplete', progress.finish)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
