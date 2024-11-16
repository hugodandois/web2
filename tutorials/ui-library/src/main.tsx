import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/index.tsx'
import './index.css'
import "@fontsource/roboto/700.css";
import  CssBaseline  from '@mui/material/CssBaseline';
import theme from './themes.ts';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
