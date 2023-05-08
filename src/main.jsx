import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, Snackbar, IconButton, Button } from '@mui/material'
import { Close } from '@mui/icons-material'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <App />

  </React.StrictMode>,
)



// anchorOrigin={{ vertical: bottom, horizontal: left }}
// open={ }
// onClose={ }
// message=""
// action={
//   <IconButton size="small" aria-label="close" color="inherit">
//     <Close fontSize="small" />
//   </IconButton>
// }