// import '@/styles/styles.scss'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Link from 'next/link'
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="main">
      <AnimatePresence mode="wait">
        <div className="header">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}
