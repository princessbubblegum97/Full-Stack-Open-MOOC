//1.7: unicafe step 2
//Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.



import { useState } from 'react'
import './eloquentstyles.css';




const App = () => {
  
  //Declaring three different counters, plus initialising their initial value to 0
  const [ goodcounter, setgoodCounter ] = useState(0)
  const [ neutralcounter, setneutralCounter ] = useState(0)
  const [ badcounter, setbadCounter ] = useState(0)

  const grandtotal = goodcounter + neutralcounter + badcounter

  return (
    <div>
      <h1>Full Stack Part 1, Exercise 1.7: unicafe step 2</h1>
      <p style={{fontFamily: "Avenir"}}> To ensure a buttery smooth cafe experience, UniCafe seeks your feedback. Complete the 1 question questionnaire, summing your cafe experience. </p>
      <h2>Rate your cafe experience🥤🍔</h2>

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

      <br/>
      <br/>

      {/* Below is grand total alternative. */}
      {/* <div>Grand Total: {goodcounter + neutralcounter + badcounter}</div> */}
      <div>Grand Total: {grandtotal} </div>


      {/* Average uses strange formula: According to @heartsmagic from Discord, every feedback has their own value. so, good makes 6 points, bad makes -1 , neutral 0 points here, so you will have a sum, and then you divide this by the total */}
     {/* Weird method to compute average, not even certain whether it is an average, judging the method their using. */}
      {/* <div>Average: </div>
      <div>{((goodcounter * 1) + (neutralcounter * 0) + (badcounter * -1)) / grandtotal } </div> */}
      <div>Average: {((goodcounter * 1) + (neutralcounter * 0) + (badcounter * -1)) / grandtotal }  </div>

      <div>Percentage of positive feedback: {(goodcounter / grandtotal) * 100 + " %"}  </div>


    </div>
  )
}

export default App