import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import { useEffect } from "react";
import { Provider } from "react-redux";
import "../components/molecules/formitem/style.scss";
import "../components/organisms/main/style.scss";
import Template from "../components/template";
import Template1 from "../components/template/template";
import { store } from "../redux/store";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  const [change, setChange] = useState<string | null>();
  useEffect(() => {
    
    // Perform localStorage action
    const isChange = localStorage.getItem("change");
    setChange(isChange);
  }, [change]);
  return (
    <Provider store={store}>
      <ChakraProvider>
        {change === "template2" ? (
          <Template>
            <Component {...pageProps} />
          </Template>
        ) : change === "template1" ? (
          <Template1>
            <Component {...pageProps} />
          </Template1>
        ) : (
          <Template>
            <Component {...pageProps} />
          </Template>
        )}
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
