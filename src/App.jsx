import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { FaqContactPage } from './pages/FaqContactPage'
import { SupportPage } from './pages/SupportPage'
import { V2Page } from './pages/V2Page'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqContactPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/v2" element={<V2Page />} />
      </Route>
    </Routes>
  )
}

export default App
