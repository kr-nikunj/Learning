import React from 'react'
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  return (
    <>
    <Head>
        <title>Home</title>
    </Head>
    <div>Home</div>
    <Image src="https://wallpapercave.com/wp/wp2337027.jpg" alt='Image' width="500" height="300"></Image>
    </>
  )
}

export default Home