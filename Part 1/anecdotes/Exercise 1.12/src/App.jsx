// 1.12*: anecdotes step 1
// The world of software engineering is filled with anecdotes that distill timeless truths from our field into short one-liners.

// Expand the following application by adding a button that can be clicked to display a random anecdote from the field of software engineering:





import { useState } from 'react'
import './eloquentstyles.css';




const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const randomIndexGenerator =  (Math.floor(Math.random() * (anecdotes.length - 1) )); 

   
  const [selected, setSelected] = useState(randomIndexGenerator)
  
  
   {/* 1. loop array index, plus values, 2. use Math.floor to generate Random index. Print the value at the Random index. */}
   
   
   
   

    



  console.log("** Random index: **")


  //variable to store random array index from anecdotes array
  //Math.floor and Math.random generate a random index from the range 0-size of array - 1
  //(anecdotes.size - 1) is for the upper range of the index. The highest index is the array size - 1.


  
  console.log(randomIndexGenerator)
  console.log("")
  //View random index


  console.log("** Value at random index: ***")
  const valueatRandomIndex = anecdotes.at(randomIndexGenerator)
  console.log(valueatRandomIndex)
  console.log("")
//View random index value



  




//Looping anecdotes array (Unnecessary for final solution)
console.log("** Looping anecdotes array: **")
anecdotes.forEach(anecdote => {
  console.log(anecdote)
})







  return (
    <div>




      <h1>Full Stack Part 1, Exercise 1.12*: anecdotes step 1    </h1>
      <h2>Software Engineering Anecdote Dispenser </h2>
      <h3>Oh wise button of the day, what is your anecdote?    </h3>
      
      {/* {text }  */}

      
      {/* {anecdotes[selected]} */}

         {/* { (anecdotes.at((Math.floor(Math.random() * (anecdotes.length - 1) )))) } */}

         <p id="berry"></p>
         {/* p tag is to set the tag type */}

      <br/>
      {/* <button onClick={() => setSelected((Math.random()))}> */}
      <button onClick={() =>   document.getElementById("berry").innerHTML =  ((anecdotes.at(Math.floor(Math.random() * (anecdotes.length - 1) ))))  }>
        {/* Using innerHTML method to render content to browser */}
      {/* <button onClick={() =>   console.log((Math.floor(Math.random() * (anecdotes.length - 1) )) + anecdotes.at(randomIndexGenerator))}> */}

      thank you, next anecdote
      </button>

{/* Did not state whether anecdote should already be present on homepage, or only triggered by button. */}


    </div>
  )


  
}

export default App

