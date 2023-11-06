import { useState } from 'react'


// eslint-disable-next-line react/prop-types
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>)
  
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const pituus = anecdotes.length
  console.log(pituus)
  const number=Math.floor(Math.random()*pituus)
  console.log(number)
  const points= new Array(pituus).fill(0)
  console.log(points)

  const SelectAnecdote=()=>{
    setSelected(number)
  }

  const PlaceVote=()=>{
    console.log(points)
    console.log(number)
    const copy =[...points]
    console.log(copy)
    copy[number]+=1
    console.log(copy)
   /*  Jatka tästä. copy muuttujassa on nyt yksi ääni, se pitää kopioida points taulukkoon, 
   eli varmaan tyyliin points = ...copy (ei toimi!)
    tai sitten joku setPointsToArray funktio joka vie tiedon.  */

  }

  return (
    <div>
      {anecdotes[selected]}
      <p>
      <Button handleClick={PlaceVote} text='vote' />
      <Button handleClick={SelectAnecdote} text='Pick a random anecdote' />
      </p>
    </div>
  )
}

export default App