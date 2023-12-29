import './App.css'
import Employees from './components/employees'
import Footer from './components/footer'
import Header from './components/header'

function App() {

  return (
    <>
      <Header />
      <div className='container'>
        <Employees />
      </div>
      <Footer />
    </>
  )
}

export default App
