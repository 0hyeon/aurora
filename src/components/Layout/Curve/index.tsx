import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from './Curve.module.scss'
import Link from 'next/link'
interface IAnim {
  [key: string]: {
    [key: string]: any
  }
}
export default function Curve({ children }: { children: ReactNode }) {
  const anim = (variants: IAnim, custom: any) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      variants,
      custom,
    }
  }
  const expand = {
    initial: {
      top: 0,
    },
    enter: (i: number) => ({
      top: '100%',
      transition: {
        duration: 0.4,
      },
    }),
  }
  const nbOfColumns = 5
  return (
    <div className={[styles.page, styles.stairs].join(' ')}>
      <div className="transition-container">
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div {...anim(expand, i)} key={i}></motion.div>
        })}
      </div>
    </div>
  )
}
