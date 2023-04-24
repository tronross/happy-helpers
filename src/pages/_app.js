import '../styles/globals.css'
import Head from 'next/head'
 export default function App({ Component, pageProps }) {
   return ( 
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Happy Helpers</title>
      <link rel="icon" href="/images/favicon.png" />
    </Head>

    <Component {...pageProps} />
  </>
   ) 
 }