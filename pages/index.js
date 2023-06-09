import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import GamingServices from '@/pages/GamingServices'
import TrendingTournaments from '@/pages/TrendingTournaments'
import TrendingOrganisers from '@/pages/TrendingOrganisers'
import LocalBusinesses from '@/pages/LocalBusinesses'
import Link from 'next/link'
import teams from './nested/teams'
import proTeams from './proTeams'
import overView from './overView'
import participatingTournaments from './participatingTournaments'
import ManageMyTournaments from './ManageMyTournaments'
import SuggestedBusinesses from './SuggestedBusinesses'

const inter = Inter({ subsets: ['latin'] })
import image from 'next/image'
import LatestNews from '@/pages/LatestNews'
export default function Home() {
  return (
    <>
    <div>
         <image1
    src='./bg.jpg'
    alt='background image'
   />
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
        <link rel='stylesheet' href='css/bootstrap.css'></link>

      </Head>
      <body>
          
      <div className={styles.container}>
   
        <GamingServices/>
        <LocalBusinesses/>
          <TrendingTournaments/>
       <TrendingOrganisers/>
       <overView/>
          <participatingTournaments/>
          <SuggestedBusinesses/>
      </div>
    
     
        </body>
      </div>
      
       </>
  );
}
