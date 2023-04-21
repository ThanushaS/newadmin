
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'tailwindcss/tailwind.css'
import user from 'public/user.jpg'

export default function App({ Component, pageProps }) {
  return(
    <Sidebar>
  <Component {...pageProps} />
  </Sidebar>
  )

}
