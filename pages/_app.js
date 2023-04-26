
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'tailwindcss/tailwind.css'
import user from 'public/user.jpg'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return(
    <Sidebar><Layout>
  <Component {...pageProps} />
 </Layout> </Sidebar>
  )

}
