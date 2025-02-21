import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Navigation/Navigation.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import ContactHeader from './components/ContactHeader/ContactHeader.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <main className='main_container'>
        <ContactHeader/>
        <ContactForm/>
      </main>
    </>
  )
}

export default App
