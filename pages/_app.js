import App from 'next/app';
import '../styles/globals.css'
import { React, createWrapper, Provider } from 'libraries';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { store } from 'modules';

const theme = extendTheme({})

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }

  render() {
    const {Component, pageProps} = this.props;
    return(
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    )
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp)
