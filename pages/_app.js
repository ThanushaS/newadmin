
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'tailwindcss/tailwind.css'
import user from 'public/user.jpg'
import Layout from '@/components/Layout'
import Head from 'next/head'
import '@/styles/overView.css'
import styles  from  '@/styles/gamingservices.css'

export default function App({ Component, pageProps }) {
  return(
     <>
    
     <Head>
        {/* // Responsive meta tag */}

        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        {/* // bootstrap CDN */}

        
      </Head>
   <Layout> <Sidebar>
  <Component {...pageProps} />
  </Sidebar></Layout> 

 </>
  )

}
