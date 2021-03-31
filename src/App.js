import React from "react"
import Joke from "./components/Joke"
function App() {
  return (
    <div>
      <Joke setup={{
        question: '',
        punchline: '“Nowadays, comedians tell the news and the media tells the jokes.”'
      }} />
      <Joke setup={{
        question: '',
        punchline: 'A bear walks into a bar and says to the bartender, “I/’ll have a………… pint of beer please.”/nThe bartender asks, “Why the big pause?”/nThe bear replies, “Well, I’ve always had em!”'
      }} />
      <Joke setup={{
        question: 'What does your house wear?',
        punchline: 'A dress.'
      }} />
      <Joke setup={{
        question: 'What kind of pants do Mario and Luigi wear?',
        punchline: 'Denim, denim, denim!'
      }} />
    </div>
  )
}

export default App