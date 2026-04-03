import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { FaqContactPage } from './pages/FaqContactPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
