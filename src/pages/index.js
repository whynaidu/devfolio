import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from '@/components/Home'
import NavigationBar from '@/components/NavigationBar';
import Head from "next/head";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="block h-full">
        <Head>
          <meta charset="UTF-8" />
          <meta name="keywords" content="developer" />
          <meta name="author" content="Vedant Naidu" />
          <meta name="description" content="Portfilio of Vedant Naidu" />
          <title>Home - Vedant Naidu</title>
        </Head>
        <HomePage />
        <NavigationBar />
      </main>
    </>
  );
}
