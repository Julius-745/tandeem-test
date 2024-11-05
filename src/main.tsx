import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { i18n }from './i18n';
import { I18nextProvider } from 'react-i18next'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './assets/theme/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
      </ChakraProvider>
  </StrictMode>,
)
