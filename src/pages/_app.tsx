// import '@/styles/styles.scss'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Link from 'next/link'
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="main">
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}
