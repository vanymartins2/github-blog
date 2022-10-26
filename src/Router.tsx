import { Route, Routes } from 'react-router-dom'
import { Post } from './components/Post'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:issueNumber" element={<Post />} />
      </Route>
    </Routes>
  )
}
