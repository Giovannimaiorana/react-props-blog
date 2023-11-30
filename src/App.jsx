import { useState } from 'react'
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import TheCard from './components/TheCard';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TheHeader />
      <main>
        <TheCard />
      </main>
      <TheFooter />
    </>
  )
}

export default App
