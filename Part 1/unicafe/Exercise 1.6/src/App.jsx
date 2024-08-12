//1.6: unicafe step 1
//Like most companies, the student restaurant of the University of Helsinki Unicafe collects feedback from its customers. 
//Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.
//The application must display the total number of collected feedback for each category. Your final application could look like this:



import { useState } from 'react'
import './eloquentstyles.css';




const App = () => {
  
  //Declaring three different counters, plus initialising their initial value to 0
  const [ goodcounter, setgoodCounter ] = useState(0)
  const [ neutralcounter, setneutralCounter ] = useState(0)
  const [ badcounter, setbadCounter ] = useState(0)


  return (
    <div>
      <h1>Full Stack Part 1, Exercise 1.6: unicafe step 1</h1>
      <p style={{fontFamily: "Avenir"}}> To ensure a buttery smooth cafe experience, UniCafe seeks your feedback. Complete the 1 question questionnaire, summing your cafe experience. </p>
      {/* <h1 style={{color: "deeppink"}} >Full Stack Part 1, Exercise 1.1: Course Information, step 1</h1> */}

      
      <h2>Rate your cafe experience☕️🥪</h2>

{/* If good button is selected, increase goodcounter by 1 */}
      <button onClick={() => setgoodCounter(goodcounter + 1)}>
      good
      </button>


{/* If neutral button is selected, increase neutralcounter by 1 */}

      <button onClick={() => setneutralCounter(neutralcounter + 1)}>
      neutral
      </button>

{/* If bad button is selected, increase badcounter by 1 */}

      <button onClick={() => setbadCounter(badcounter + 1)}>
      bad
      </button>



      <br/>
      <br/>

      <h2>Statistics</h2>

{/* Displaying the totals of each counter. */}
      <div>Good total: {goodcounter}</div>
      <div>Neutral total: {neutralcounter}</div>
      <div>Bad total: {badcounter}</div>



    </div>
  )
}

export default App