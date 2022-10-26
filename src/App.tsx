import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BlogContextProvider } from './contexts/BlogContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BlogContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
