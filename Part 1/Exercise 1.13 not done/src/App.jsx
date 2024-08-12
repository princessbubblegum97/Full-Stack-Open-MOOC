// 1.13*: anecdotes step 2
// Expand your application so that you can vote for the displayed anecdote.



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
  
  const storeanecdoteVotes = []
  // Creating array to store anecdotes, plus anecdotes votes


  
   
   
   
   

    



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
  storeanecdoteVotes.push(0, anecdote)
  // Inserting initial vote:0, plus anecdotes into array.

})


console.log()
console.log("Display array containing anecdotes, plus votes")
console.log(storeanecdoteVotes)




  return (
    <div>


{/* {anecdotes[selected]} */}


      <h1>Full Stack Part 1, Exercise 1.13*: anecdotes step 2   </h1>
      <h2>Software Engineering Anecdote Dispenser </h2>
      <h3>Oh wise button of the day, what is your anecdote?    </h3>
      

      

         <p id="berry"></p>
         {/* p tag is to set the tag type */}



      <br/>
      <button onClick={() =>   document.getElementById("berry").innerHTML =  ((anecdotes.at(Math.floor(Math.random() * (anecdotes.length - 1) ))))  }>

        {/* Using innerHTML method to render content to browser */}
      {/* <button onClick={() =>   console.log((Math.floor(Math.random() * (anecdotes.length - 1) )) + anecdotes.at(randomIndexGenerator))}> */}

      thank you, next anecdote
      </button>







      <span> </span>



      <button onClick={() =>  console.log("increase onscreen anecdote by 1")   }>

      vote
      </button>

{/* Figure how to use berry id to extract anecdote text and increase vote(s). */}




    </div>
  )


  
}

export default App

