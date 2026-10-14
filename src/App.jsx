import './App.css'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app">
        <Banner />
      </main>
    </div>
  )
}

export default App
