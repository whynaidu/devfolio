
import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import Projects from '@/components/Projects'
import React from 'react'
import Head from "next/head";


export default function projects() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="developer" />
        <meta name="author" content="Vedant Naidu" />
        <meta name="description" content="Portfilio of Vedant Naidu" />
        <title>Projects - Vedant Naidu</title>
      </Head>
      <Projects />
      <Footer />
      <NavigationBar />
    </div>
  );
}
