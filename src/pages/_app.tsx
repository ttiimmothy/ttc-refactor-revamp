import {Analytics} from "@vercel/analytics/react";
import Head from "next/head";
import {AppProps} from "next/app";
import "@/globals.css";
import {Inter} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function App({Component, pageProps}: AppProps) {
  return <div className={inter.className}>
    <Head>
      <title>TTC Refractor</title>
    </Head>
    <Component {...pageProps} />
    <Analytics/>
  </div>
}
