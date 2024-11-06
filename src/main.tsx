import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App'
import { i18n }from './i18n';
import { I18nextProvider } from 'react-i18next'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './assets/theme/index';
import store from "./redux/store";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <App />
        </Provider>
      </I18nextProvider>
      </ChakraProvider>
  </StrictMode>,
)
