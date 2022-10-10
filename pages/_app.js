import "../styles/globals.css"
import Header from "../components/Header"
import { MoralisProvider } from "react-moralis"
import Head from 'next/head'

const APP_ID = process.env.NEXT_PUBLIC_APP_ID
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

function MyApp({ Component, pageProps }) {
    return (
        <div>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <MoralisProvider initializeOnMount={false}>
                    <Header />
                    <Component {...pageProps} />
            </MoralisProvider>
        </div>
    )
}

export default MyApp
