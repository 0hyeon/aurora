import Inner from '@/components/Layout/Inner'
import Stair from '@/components/Layout/Stair'
import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Stair>
        <h1>About</h1>
        <div className="body">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, nam.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            inventore distinctio quia. Quam necessitatibus delectus, incidunt
            officiis nisi tempore quos velit eligendi voluptate ipsam
            accusantium illo vero vitae asperiores veniam.
          </p>
        </div>
      </Stair>
    </>
  )
}

export default About
