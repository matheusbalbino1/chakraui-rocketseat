
import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { SiderBarDrawerContextProvider } from "../context/SideBarDrawerContext"
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme} >
      <SiderBarDrawerContextProvider>
        <Component {...pageProps} />
      </SiderBarDrawerContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
