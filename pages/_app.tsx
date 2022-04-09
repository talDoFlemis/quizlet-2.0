import "../styles/globals.css"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import React from "react"
import NextNProgress from "nextjs-progressbar"
import axios from "axios"
import { SWRConfig } from "swr"

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType
  }
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: ComponentWithPageLayout) {
  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          fetcher: (url: string) => axios.get(url).then((resp) => resp.data()),
        }}
      >
        {Component.PageLayout ? (
          <Component.PageLayout>
            <NextNProgress color="#4255ff" />
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <>
            <NextNProgress color="#4255ff" />
            <Component {...pageProps} />
          </>
        )}
      </SWRConfig>
    </SessionProvider>
  )
}

export default MyApp
