import { ThemeProvider} from '@mui/material'
import './App.css'
import { theme } from './routes/theme'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'

function App() {

  return (
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
