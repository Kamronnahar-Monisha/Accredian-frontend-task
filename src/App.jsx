import { ThemeProvider} from '@mui/material'
import './App.css'
import { theme } from './routes/theme'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <Toaster />
    </ThemeProvider>
  )
}

export default App
