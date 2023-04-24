import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import ProfileCard from '@/components/ProfileCard'
import Head from 'next/head'
import React from 'react'

export default function about() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="developer" />
        <meta name="author" content="Vedant Naidu" />
        <meta name="description" content="Portfilio of Vedant Naidu" />
        <title>About - Vedant Naidu</title>
      </Head>
      <ProfileCard />
      <NavigationBar />
      <Footer />
    </div>
  );
}
