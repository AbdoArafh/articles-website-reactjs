import './App.scss'
import Home from './components/home'
import SideBar from './components/sidebar'

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="content">
        <Home />
      </div>
    </div>
  )
}

export default App
