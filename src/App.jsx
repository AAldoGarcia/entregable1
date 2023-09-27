import './App.css'
import { useState } from 'react'
import quotes from "./dbs/quotes.json"
import {getRandomQuote} from "./utils/random"
import QuoteCard from "./components/QuoteCard"

const backgrounds = ["fondo1" , "fondo2", "fondo3", "fondo4"]
function App() {
  const [quote, setQuote] = useState(getRandomQuote(quotes))
  const [currentBg, setCurrentBg] = useState(getRandomQuote(backgrounds))
 
    const handleChangeQuote = () => {
        setQuote(getRandomQuote(quotes))
       setCurrentBg(getRandomQuote(backgrounds))
    }
 

  return (
    <main className={`app ${currentBg}`}>
      < QuoteCard quote ={quote} handleChangeQuote= {handleChangeQuote}/>
    </main>
  )
  }


export default App
